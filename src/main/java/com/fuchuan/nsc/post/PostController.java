package com.fuchuan.nsc.post;

import com.jfinal.core.Controller;
import com.jfinal.kit.Ret;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.Record;

public class PostController extends Controller {

  public void index() {
    int p = getParaToInt("p", 1);
    Page<Record> paginate = PostService.me.paginate(p);
    renderJson(Ret.by("pageSize", paginate.getPageSize())
        .set("posts", paginate.getList())
        .set("pageNumber", paginate.getPageNumber())
        .set("totalPage", paginate.getTotalPage())
    );
  }

  

}
