package com.fuchuan.nsc.account;

import java.util.Date;
import java.util.List;

import com.fuchuan.nsc.common.model.Account;
import com.fuchuan.nsc.common.model.Follow;
import com.jfinal.kit.Ret;

public class AccountService {
	public static final AccountService me = new AccountService();

	private final Account dao = Account.dao;

	public Ret getById(int accountId, Integer otherId) {
		Account account = dao.findById(accountId);
		if (account == null) {
			return Ret.fail("msg", "account not found. ");
		}
		account.setPassword("");
		Ret ret = Ret.ok("account", account);
		if (otherId != null) {
			List<Follow> follows = Follow.dao.find(
					"select * from `follow` where (fromId = ? and toId = ?) or (fromId = ? and toId = ?)",
					accountId, otherId, otherId, accountId);
			if (follows.size() == 0) {
				ret.set("relation", Follow.NO_RELATION);
			} else if (follows.size() == 1) {
				Follow follow = follows.get(0);
				if (follow.getFromId() == accountId) {
					ret.set("relation", Follow.FOLLOW);
				} else {
					ret.set("relation", Follow.FANS);
				}
			} else if (follows.size() == 2) {
				ret.set("relation", Follow.FRIEND);
			}
		}
		return ret;
	}

	public Ret follow(int fromId, int toId) {
		Follow follow = new Follow();
		follow.setFromId(fromId);
		follow.setToId(toId);
		follow.setCreateAt(new Date().getTime());
		try {
			if (follow.save()) {
				return Ret.ok();
			} else {
				return Ret.fail("msg", "关注失败");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return Ret.fail("msg", "关注失败");
		}
	}

	public Ret unfollow(int fromId, int toId) {
		Follow follow = Follow.dao.findById(fromId, toId);
		if (follow != null) {
			follow.delete();
			return Ret.ok();
		}
		return Ret.fail("msg", "没关注");
	}

}
