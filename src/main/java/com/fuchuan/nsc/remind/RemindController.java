package com.fuchuan.nsc.remind;

import java.util.HashMap;

import com.fuchuan.nsc.common.interceptor.LoggedIntercepter;
import com.fuchuan.nsc.common.model.Account;
import com.fuchuan.nsc.common.model.Remind;
import com.fuchuan.nsc.login.LoginService;
import com.jfinal.aop.Before;
import com.jfinal.aop.Inject;
import com.jfinal.core.Controller;
import com.jfinal.kit.Ret;

@Before({ LoggedIntercepter.class })
public class RemindController extends Controller {
	@Inject
	private RemindService srv;

	public void index() {
		Account me = getAttr(LoginService.loginAccountCacheName);
		Remind remind = srv.getRemind(me.getId());
		renderJson(remind);
	}
	
	public void clear() {
		Account me = getAttr(LoginService.loginAccountCacheName);
		srv.clear(me.getId());
		renderJson(Ret.ok());
	}
	 
	public void delete() {
		Account me = getAttr(LoginService.loginAccountCacheName);
		srv.delete(me.getId(), getPara("type"));
		renderJson(Ret.ok());
	}
}
