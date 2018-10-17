package com.fuchuan.nsc.login;

import com.fuchuan.nsc.common.model.Account;
import com.jfinal.aop.Before;
import com.jfinal.aop.Inject;
import com.jfinal.core.Controller;
import com.jfinal.ext.interceptor.POST;
import com.jfinal.kit.Ret;


public class LoginController extends Controller {

  private static final Account accountDao = new Account().dao();

  @Before(POST.class)
  public void index() {
    Account account = accountDao.findFirst("account.login", getPara("username"), getPara("password"));
    if (account == null){

    }
  }

}
