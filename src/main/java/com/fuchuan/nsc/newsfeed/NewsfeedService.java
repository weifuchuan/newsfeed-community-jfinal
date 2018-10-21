package com.fuchuan.nsc.newsfeed;

import java.util.List;
import java.util.Map;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import com.fuchuan.nsc.common.model.Newsfeed;
import com.jfinal.kit.Kv;
import com.jfinal.kit.Ret;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.Record;
import com.jfinal.plugin.activerecord.SqlPara;

public class NewsfeedService {

	public static final NewsfeedService me = new NewsfeedService();

	public Ret add(int accountId, int refType, int refId, Integer refParentType, Integer refParentId, long createAt) {
		Newsfeed newsfeed = new Newsfeed();
		newsfeed.setAccountId(accountId);
		newsfeed.setRefType(refType);
		newsfeed.setRefId(refId);
		if (refParentId != null && refParentType != null) {
			newsfeed.setRefParentId(refParentId);
			newsfeed.setRefParentType(refParentType);
		}
		newsfeed.setCreateAt(createAt);
		Ret ret;
		try {
			if (newsfeed.save()) {
				ret = Ret.ok();
			} else {
				ret = Ret.fail();
			}
		} catch (Exception e) {
			e.printStackTrace();
			ret = Ret.fail();
		}
		return ret;
	}

	public Page<Record> paginate(int accountId, int pageNumber) {
		SqlPara sp = Db.getSqlPara("newsfeed.paginate", accountId);
		Page<Record> newsfeedPage = Db.paginate(pageNumber, 10, sp);
		this.fillUsefulData(newsfeedPage.getList());
		return newsfeedPage;
	}

	private void fillUsefulData(List<Record> newsfeeds) {
		List<Record> publishPostNS = newsfeeds.stream().filter(ns -> ns.getInt("refType") == Newsfeed.PUBLISH_POST)
				.collect(Collectors.toList());
		List<Record> followAccountNS = newsfeeds.stream().filter(ns -> ns.getInt("refType") == Newsfeed.FOLLOW_ACCOUNT)
				.collect(Collectors.toList());
		List<Record> commentPostNS = newsfeeds.stream().filter(ns -> ns.getInt("refType") == Newsfeed.COMMENT_POST)
				.collect(Collectors.toList());
		
		List<Integer> idList;
		
		if (publishPostNS.size() > 0) {
			idList = publishPostNS.stream().map(ns -> ns.getInt("refId")).collect(Collectors.toList());
			Map<Integer, Record> res = Db
					.find(Db.getSqlPara("newsfeed.extractUsefulDataForPublishPost", Kv.by("idList", idList))).stream()
					.collect(Collectors.toMap((Record r) -> r.getInt("postId"), (Record r) -> r));
			publishPostNS.forEach(ns -> ns.setColumns(res.get(ns.getInt("refId")).remove("postId")));
		}
		
		if (followAccountNS.size() > 0) {
  		idList = followAccountNS.stream().map(ns -> ns.getInt("refId")).distinct().collect(Collectors.toList());
  		idList.addAll(followAccountNS.stream().map(ns -> ns.getInt("accountId")).distinct().collect(Collectors.toList()));
  		Map<Integer, Record> res2 = Db
  				.find(Db.getSqlPara("newsfeed.extractUsefulDataForFollowAccount", Kv.by("idList", idList))).stream()
  				.collect(Collectors.toMap((Record r) -> r.getInt("accountId"), (Record r) -> r));
  		followAccountNS.forEach(ns -> {
  			// fill follower
  			Record record = res2.get(ns.getInt("accountId"));
  			ns.set("username", record.getStr("username"));
  			ns.set("avatar", record.getStr("avatar"));
  			// fill friend
  			record = res2.get(ns.getInt("refId"));
  			ns.set("toUsername", record.getStr("username"));
  			ns.set("toAvatar", record.getStr("avatar"));
  		});
		}
		
		if (commentPostNS.size() > 0) {
  		idList = commentPostNS.stream().map(ns -> ns.getInt("refId")).collect(Collectors.toList());
  		Map<Integer, Record> res3 = Db
  				.find(Db.getSqlPara("newsfeed.extractUsefulDataForCommentPost", Kv.by("idList", idList))).stream()
  				.collect(Collectors.toMap((Record r) -> r.getInt("commentId"), (Record r) -> r));
  		commentPostNS.forEach(ns -> {
  			Record record = res3.get(ns.getInt("refId"));
  			record.remove("commentId");
  			ns.setColumns(record);
  		});
  	}
	}

}
