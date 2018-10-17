package com.fuchuan.nsc.login;

import com.fuchuan.nsc.common.model.Account;
import com.jfinal.aop.Before;
import com.jfinal.aop.Inject;
import com.jfinal.core.Controller;
import com.jfinal.ext.interceptor.POST;
import com.jfinal.kit.Ret;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.SqlPara;


public class LoginController extends Controller {

  private static final LoginService srv = new LoginService();

  @Before(POST.class)
  public void index() {
    String username = getPara("username");
    String password = getPara("password");
    Ret ret = srv.login(username, password);
    if (ret.isOk()) {
      String sessionId = ret.getStr(LoginService.sessionIdName);
      int maxAgeInSeconds = ret.getInt("maxAgeInSeconds");
      setCookie(LoginService.sessionIdName, sessionId, maxAgeInSeconds, true);
    }
    renderJson(ret);
  }

  @Before(POST.class)
  public void isLogged(){

  }

}
