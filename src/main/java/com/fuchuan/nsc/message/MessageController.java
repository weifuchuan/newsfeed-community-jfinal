package com.fuchuan.nsc.message;

import java.util.List;

import com.fuchuan.nsc.common.interceptor.LoggedIntercepter;
import com.fuchuan.nsc.common.model.Account;
import com.fuchuan.nsc.common.model.Message;
import com.fuchuan.nsc.common.model.Remind;
import com.fuchuan.nsc.login.LoginService;
import com.fuchuan.nsc.remind.RemindService;
import com.jfinal.aop.Before;
import com.jfinal.aop.Inject;
import com.jfinal.core.Controller;
import com.jfinal.kit.Ret;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.Record;

@Before({ LoggedIntercepter.class })
public class MessageController extends Controller {
	@Inject
	private MessageService srv;

	public void index() {
		int p = getParaToInt("p", 1);
		int fromId = ((Account) getAttr(LoginService.loginAccountCacheName))
				.getId();
		int toId = getParaToInt("toId");
		Page<Message> page = srv.paginate(fromId, toId, p);
		renderJson(
				Ret.ok("messages", page.getList()).set("totalPage", page.getTotalPage())
						.set("pageNumber", page.getPageNumber()));
	}

	public void send() {
		int fromId = ((Account) getAttr(LoginService.loginAccountCacheName))
				.getId();
		String content = getPara("content");
		int toId = getParaToInt("toId");
		long createAt = getParaToLong("createAt");
		Ret ret = srv.send(fromId, toId, content, createAt);
		renderJson(ret);
	}

	public void list() {
		int fromId = ((Account) getAttr(LoginService.loginAccountCacheName))
				.getId();
		List<Record> list = srv.list(fromId);
		renderJson(Ret.ok("list", list));
	}
}
