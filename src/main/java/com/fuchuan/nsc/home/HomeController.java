package com.fuchuan.nsc.home;

import com.fuchuan.nsc.post.PostService;
import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.jfinal.ext.interceptor.POST;
import com.jfinal.kit.Ret;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.Record;

public class HomeController extends Controller {

  @Before(POST.class)
  public void index() {
//    Account me = this.getAttr(LoginService.loginAccountCacheName);
    Page<Record> page = PostService.me.paginate(1);
    Ret ret = Ret.by("posts", page.getList());
    ret.set("pageSize", page.getPageSize());
    ret.set("pageNumber", page.getPageNumber());
    ret.set("totalPage", page.getTotalPage());
    renderJson(ret);
  }

}
