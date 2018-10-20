package com.fuchuan.nsc.newsfeed;

import com.fuchuan.nsc.common.interceptor.LoggedIntercepter;
import com.jfinal.aop.Before;
import com.jfinal.core.Controller;

@Before({LoggedIntercepter.class})
public class NewsfeedController extends Controller {
}
