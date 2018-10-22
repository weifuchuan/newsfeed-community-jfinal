package com.fuchuan.nsc.account;

import com.fuchuan.nsc.common.interceptor.LoggedIntercepter;
import com.fuchuan.nsc.common.model.Account;
import com.fuchuan.nsc.login.LoginService;
import com.jfinal.aop.Before;
import com.jfinal.aop.Inject;
import com.jfinal.core.Controller;
import com.jfinal.kit.Ret;

@Before({ LoggedIntercepter.class })
public class AccountController extends Controller {
	@Inject
	private AccountService srv;

	public void index() {
		int id = getParaToInt("id",
				((Account) getAttr(LoginService.loginAccountCacheName)).getId());
		Integer otherId = getParaToInt("otherId");
		Ret ret = srv.getById(id, otherId);
		renderJson(ret);
	}
}
