package com.fuchuan.nsc.remind;

import com.fuchuan.nsc.common.model.Remind;
import com.jfinal.aop.Before;
import com.jfinal.plugin.activerecord.tx.Tx;

import java.util.List;

public class RemindService {
	public static final RemindService me = new RemindService();

	private static final Remind dao = new Remind().dao();

	public Remind getRemind(int accountId) {
		Remind remind = dao.findById(accountId);
		if (remind == null) {
			remind = new Remind();
			remind.setAccountId(accountId);
			remind.save();
		}
		return remind;
	}

	@Before(Tx.class)
	public void add(int accountId, String type) {
		Remind remind = Remind.dao.findById(accountId);
		if (remind == null) {
			remind = new Remind();
			remind.setAccountId(accountId);
			remind.save();
		}
		int cnt = remind.get(type, 0);
		cnt++;
		remind.set(type, cnt);
		remind.update();
	}

	public void delete(int accountId, String type) {
		Remind remind = Remind.dao.findById(accountId);
		if (remind == null) {
			remind = new Remind();
			remind.setAccountId(accountId);
			remind.save();
			return;
		}
		remind.set(type, 0);
		remind.update();
	}

	@Before({ Tx.class })
	public void clear(int accountId) {
		Remind remind = Remind.dao.findById(accountId);
		if (remind != null) {
			remind.setComment(0);
			remind.setFans(0);
			remind.setLike(0);
			remind.setMessage(0);
			remind.setNay(0);
			remind.setReferMe(0);
			remind.update();
		}
	}
}
