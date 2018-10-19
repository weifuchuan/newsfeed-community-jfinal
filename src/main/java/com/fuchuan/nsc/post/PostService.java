package com.fuchuan.nsc.post;

import com.fuchuan.nsc.common.model.Post;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.Record;
import com.jfinal.plugin.ehcache.CacheName;

import java.util.List;

public class PostService {

  public static final PostService me=new PostService();

  private static final Post dao = new Post().dao();

  public static final String cacheName = "post";

  public Page<Record> paginate(int pageNumber){
    Page<Record> page = Db.paginate( pageNumber, 10, Db.getSqlPara("post.paginate"));
    return page;
  }

}
