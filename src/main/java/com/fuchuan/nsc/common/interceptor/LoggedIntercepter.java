package com.fuchuan.nsc.common.interceptor;

import com.fuchuan.nsc.common.model.Account;
import com.fuchuan.nsc.login.LoginService;
import com.jfinal.aop.Interceptor;
import com.jfinal.aop.Invocation;
import com.jfinal.core.Controller;
import com.jfinal.kit.Ret;

public class LoggedIntercepter implements Interceptor {

  @Override
  public void intercept(Invocation inv) {
    Controller c = inv.getController();
    Account me = c.getAttr(LoginService.loginAccountCacheName);
    if (me == null) {
      c.renderJson(Ret.fail("unlogged", true));
      return;
    }
    inv.invoke();
  }
}
