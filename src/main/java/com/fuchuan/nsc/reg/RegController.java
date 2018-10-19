package com.fuchuan.nsc.reg;

import com.jfinal.aop.Inject;
import com.jfinal.core.Controller;
import com.jfinal.kit.Ret;

public class RegController extends Controller {

  @Inject
  private RegService srv;

  public void index() {
    String username = getPara("username", "").trim();
    String password = getPara("password", "").trim();
    if (username.length() < 1 || password.length() < 5) {
      renderJson(Ret.fail("msg", "用户名 或 密码 太短"));
      return;
    }
    renderJson(srv.reg(username, password));
  }

}