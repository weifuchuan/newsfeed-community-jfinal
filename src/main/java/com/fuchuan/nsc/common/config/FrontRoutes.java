package com.fuchuan.nsc.common.config;

import com.fuchuan.nsc.home.HomeController;
import com.fuchuan.nsc.index.IndexController;
import com.fuchuan.nsc.login.LoginController;
import com.fuchuan.nsc.newsfeed.NewsfeedController;
import com.fuchuan.nsc.post.PostController;
import com.fuchuan.nsc.reg.RegController;
import com.jfinal.config.Routes;

public class FrontRoutes extends Routes {
  @Override
  public void config() {
    add("/", IndexController.class);
    add("/login", LoginController.class);
    add("/reg", RegController.class);     
    add("/home", HomeController.class);
    add("/post", PostController.class);
    add("/newsfeed", NewsfeedController.class);
  }
}
