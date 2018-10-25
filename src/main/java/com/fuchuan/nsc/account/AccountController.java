package com.fuchuan.nsc.account;

import java.util.List;

import com.fuchuan.nsc.common.interceptor.LoggedIntercepter;
import com.fuchuan.nsc.common.model.Account;
import com.fuchuan.nsc.login.LoginService;
import com.jfinal.aop.Before;
import com.jfinal.aop.Inject;
import com.jfinal.core.Controller;
import com.jfinal.kit.Ret;
import com.jfinal.plugin.activerecord.Record;

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

	public void changeAvatar() {
		String avatar = getPara("avatar");
		int id = ((Account) getAttr(LoginService.loginAccountCacheName)).getId();
		Ret ret = srv.changeAvatar(id, avatar);
		if (ret.isOk()) {
			((Account) getAttr(LoginService.loginAccountCacheName)).setAvatar(avatar);
		}
		renderJson(ret);
	}

	public void changeUsername() {
		String username = getPara("username").trim();
		int id = ((Account) getAttr(LoginService.loginAccountCacheName)).getId();
		Ret ret = srv.changeUsername(id, username);
		if (ret.isOk()) {
			((Account) getAttr(LoginService.loginAccountCacheName))
					.setUsername(username);
		}
		renderJson(ret);
	}

	public void changePassword() {
		String newPassword = getPara("newPassword").trim();
		String oldPassword = getPara("oldPassword").trim();
		int id = ((Account) getAttr(LoginService.loginAccountCacheName)).getId();
		Ret ret = srv.changePassword(id, newPassword, oldPassword);
		renderJson(ret);
	}

	public void follow() {
		int toId = getParaToInt("toId");
		int fromId = ((Account) getAttr(LoginService.loginAccountCacheName))
				.getId();
		Ret ret = srv.follow(fromId, toId);
		renderJson(ret);
	}

	public void unfollow() {
		int toId = getParaToInt("toId");
		int fromId = ((Account) getAttr(LoginService.loginAccountCacheName))
				.getId();
		Ret ret = srv.unfollow(fromId, toId);
		renderJson(ret);
	}

	public void followList() {
		int id = getParaToInt("id",
				((Account) getAttr(LoginService.loginAccountCacheName)).getId());
		List<Record> list = srv.followList(id);
		renderJson(Ret.ok("list", list));
	}
	
	public void fansList() {
		int id = getParaToInt("id",
				((Account) getAttr(LoginService.loginAccountCacheName)).getId());
		List<Record> list = srv.fansList(id);
		renderJson(Ret.ok("list", list));
	}
}
