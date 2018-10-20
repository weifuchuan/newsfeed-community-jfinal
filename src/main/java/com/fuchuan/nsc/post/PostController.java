package com.fuchuan.nsc.post;

import java.util.List;

import com.fuchuan.nsc.common.interceptor.LoggedIntercepter;
import com.fuchuan.nsc.common.model.Account;
import com.fuchuan.nsc.login.LoginService;
import com.jfinal.aop.Before;
import com.jfinal.aop.Inject;
import com.jfinal.core.Controller;
import com.jfinal.ext.interceptor.POST;
import com.jfinal.kit.Kv;
import com.jfinal.kit.Ret;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.Record;

@Before({ LoggedIntercepter.class, POST.class })
public class PostController extends Controller {

	private PostService srv = PostService.me;

	public void index() {
		int p = getParaToInt("p", 1);
		Account me = getAttr(LoginService.loginAccountCacheName);
		Page<Record> paginate = srv.paginate(p, me.getId());
		renderJson(Kv.by("pageSize", paginate.getPageSize()).set("posts", paginate.getList())
				.set("pageNumber", paginate.getPageNumber()).set("totalPage", paginate.getTotalPage()));
	}

	public void like() {
		Account me = getAttr(LoginService.loginAccountCacheName);
		Ret ret = srv.like(getParaToInt("postId"), me.getId());
		renderJson(ret);
	}

	public void nay() {
		Account me = getAttr(LoginService.loginAccountCacheName);
		Ret ret = srv.nay(getParaToInt("postId"), me.getId());
		renderJson(ret);
	}

	public void add() {
		Account me = getAttr(LoginService.loginAccountCacheName);
		String title = getPara("title");
		String content = getPara("content");
		Ret ret = srv.add(title, content, me.getId());
		renderJson(ret);
	}

	public void get() {
		Account me = getAttr(LoginService.loginAccountCacheName);
		int id = getParaToInt("id");
		Ret ret = srv.getPostAndComments(id, me.getId());
		renderJson(ret);
	}

	public void getComments() {
		int id = getParaToInt("id");
		Ret ret = srv.getComments(id);
		renderJson(ret);
	}

	public void comment() {
		String content = getPara("content");
		int postId = getParaToInt("postId");
		int accountId = getParaToInt("accountId");
		long createAt = getParaToLong("createAt");
		Integer refId = getParaToInt("refId", null);
		Ret ret = srv.comment(content, postId, accountId, createAt, refId);
		renderJson(ret);
	}

}
