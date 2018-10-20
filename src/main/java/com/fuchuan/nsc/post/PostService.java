package com.fuchuan.nsc.post;

import com.fuchuan.nsc.common.model.Account;
import com.fuchuan.nsc.common.model.Comment;
import com.fuchuan.nsc.common.model.Post;
import com.fuchuan.nsc.common.model.PostLike;
import com.fuchuan.nsc.common.model.PostNay;
import com.jfinal.aop.Before;
import com.jfinal.kit.Kv;
import com.jfinal.kit.Ret;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.Record;
import com.jfinal.plugin.activerecord.SqlPara;
import com.jfinal.plugin.activerecord.tx.Tx;
import com.jfinal.plugin.ehcache.CacheKit;
import com.jfinal.plugin.ehcache.CacheName;
import com.jfinal.plugin.ehcache.EvictInterceptor;

import java.util.Date;
import java.util.List;

public class PostService {

	public static final PostService me = new PostService();

	private static final Post dao = new Post().dao();

	public static final String cacheName = "post";

	public Ret add(String title, String content, int accountId) {
		Post post = new Post();
		post.setTitle(title);
		post.setContent(content);
		post.setAccountId(accountId);
		post.setCreateAt(new Date().getTime());
		Ret ret;
		try {
			if (post.save()) {
				ret = Ret.ok();
			} else {
				ret = Ret.fail("msg", "保存失败");
			}
		} catch (Exception e) {
			e.printStackTrace();
			ret = Ret.fail("msg", "保存失败");
		}
		CacheKit.removeAll("post");
		return ret;
	}

	public Page<Record> paginate(int pageNumber) {
		Page<Record> page = Db.paginate(pageNumber, 10, Db.getSqlPara("post.paginate"));
		return page;
	}

	public Page<Record> paginate(int pageNumber, int accountId) {
		Page<Record> page = Db.paginate(pageNumber, 10, Db.getSqlPara("post.paginate"));
		List<Record> list = page.getList();
		Object[] idList = list.stream().map(post -> post.getInt("id")).toArray();
		Db.find(Db.getSqlPara("post.like", Kv.by("postIdList", idList).set("accountId", accountId))).forEach(r -> {
			for (Record post : list) {
				if ((int) post.getInt("id") == (int) r.getInt("postId")) {
					post.set("like", true);
					return;
				}
			}
		});
		Db.find(Db.getSqlPara("post.nay", Kv.by("postIdList", idList).set("accountId", accountId))).forEach(r -> {
			for (Record post : list) {
				if ((int) post.getInt("id") == (int) r.getInt("postId")) {
					post.set("nay", true);
					return;
				}
			}
		});
		return page;
	}

	@Before(Tx.class)
	public Ret like(int postId, int accountId) {
		PostLike pl = PostLike.dao.findById(accountId, postId);
		Post post = dao.findById(postId);
		// 取消赞
		if (pl != null) {
			pl.delete();
			post.setLikeCount(post.getLikeCount() - 1);
			return Ret.ok();
		}
		try {
			PostNay pn = PostNay.dao.findById(accountId, postId);
			if (pn != null) {
				pn.delete();
				post.setNayCount(post.getNayCount() - 1);
			}
			post.setLikeCount(post.getLikeCount() + 1);
			pl = new PostLike();
			pl.setAccountId(accountId);
			pl.setPostId(postId);
			pl.setCreateAt(new Date().getTime());
			pl.save();
			return Ret.ok();
		} catch (Exception e) {
			e.printStackTrace();
			return Ret.fail("msg", "数据库错误");
		}
	}

	@Before(Tx.class)
	public Ret nay(int postId, int accountId) {
		PostNay pl = PostNay.dao.findById(accountId, postId);
		Post post = dao.findById(postId);
		// 取消踩
		if (pl != null) {
			pl.delete();
			post.setNayCount(post.getNayCount() - 1);
			return Ret.ok();
		}
		try {
			PostLike pn = PostLike.dao.findById(accountId, postId);
			if (pn != null) {
				pn.delete();
				post.setLikeCount(post.getNayCount() - 1);
			}
			post.setNayCount(post.getLikeCount() + 1);
			pl = new PostNay();
			pl.setAccountId(accountId);
			pl.setPostId(postId);
			pl.setCreateAt(new Date().getTime());
			pl.save();
			return Ret.ok();
		} catch (Exception e) {
			e.printStackTrace();
			return Ret.fail("msg", "数据库错误");
		}
	}

	@SuppressWarnings("unchecked")
	public Ret getPostAndComments(int id, int accountId) {
		Record post = Db.findFirst(Db.getSqlPara("post.findById", id));
		if (post == null) {
			return Ret.fail("msg", "post not exists. ");
		}
		if (PostLike.dao.findFirst("select * from post_like where postId = ? and accountId = ?", id, accountId) != null) {
			post.set("like", true);
		} else if (PostNay.dao.findFirst("select * from post_nay where postId = ? and accountId = ?", id,
				accountId) != null) {
			post.set("nay", true);
		}
		return Ret.ok("post", post).set(getComments(id));
	}

	public Ret getComments(int id) {
		SqlPara sqlPara = Db.getSqlPara("comment.findByPostId", id);
		List<Record> comments = Db.find(sqlPara);
		return Ret.by("comments", comments);
	}

	public Ret comment(String content, int postId, int accountId, long createAt, Integer refId) {
		Comment comment = new Comment();
		comment.setContent(content);
		comment.setPostId(postId);
		comment.setAccountId(accountId);
		comment.setCreateAt(createAt);
		if (refId != null) {
			comment.setRefId(refId);
		}
		Ret ret;
		try {
			if (comment.save()) {
				ret = Ret.ok("id", comment.getId());
			} else {
				ret = Ret.fail("msg", "评论失败");
			}
		} catch (Exception e) {
			e.printStackTrace();
			ret = Ret.fail("msg", "评论失败");
		}
		return ret;
	}
}
