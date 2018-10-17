package com.fuchuan.nsc.common.config;

import com.fuchuan.nsc.login.LoginController;
import com.jfinal.config.Routes;

public class FrontRoutes extends Routes {
  @Override
  public void config() {
    add("/login", LoginController.class);
  }
}
