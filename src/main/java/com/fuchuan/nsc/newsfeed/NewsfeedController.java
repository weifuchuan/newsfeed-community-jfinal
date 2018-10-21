package com.fuchuan.nsc.newsfeed;

import com.fuchuan.nsc.common.interceptor.LoggedIntercepter;
import com.fuchuan.nsc.common.model.Account;
import com.fuchuan.nsc.login.LoginService;
import com.jfinal.aop.Before;
import com.jfinal.aop.Inject;
import com.jfinal.core.Controller;
import com.jfinal.kit.Ret;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.Record;

@Before({ LoggedIntercepter.class })
public class NewsfeedController extends Controller {
	@Inject
	private NewsfeedService srv;

	public void index() {
		int p = getParaToInt("p", 1);
		int accountId = getParaToInt("accountId",
				((Account) getAttr(LoginService.loginAccountCacheName)).getId());
		Page<Record> page = srv.paginate(accountId, p);
		renderJson(Ret.ok("newsfeeds", page.getList())
				.set("pageNumber", page.getPageNumber())
				.set("totalPage", page.getTotalPage()));
	}
}
