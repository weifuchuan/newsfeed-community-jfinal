package com.fuchuan.nsc.message;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fuchuan.nsc.common.model.Message;
import com.fuchuan.nsc.common.model.Remind;
import com.fuchuan.nsc.remind.RemindService;
import com.jfinal.kit.Ret;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.Record;

public class MessageService {
	public static final MessageService me = new MessageService();

	private Message dao = Message.dao;

	public Page<Message> paginate(int fromId, int toId, int p) {
		Page<Message> page = dao.paginate(p, 10,
				Db.getSqlPara("message.paginate", fromId, toId));
		if (p == 1) {
			RemindService.me.delete(toId, Remind.MESSAGE);
		}
		return page;
	}

	public Ret send(int fromId, int toId, String content, long createAt) {
		Message message = new Message();
		message.setContent(content);
		message.setFromId(fromId);
		message.setToId(toId);
		message.setCreateAt(createAt);
		Ret ret;
		try {
			if (message.save()) {
				ret = Ret.ok("id", message.getId());
				RemindService.me.add(toId, Remind.MESSAGE);
			} else {
				ret = Ret.fail("msg", "发送失败");
			}
		} catch (Exception e) {
			e.printStackTrace();
			ret = Ret.fail("msg", "发送失败");
		}
		return ret;
	}

	public List<Record> list(int id) {
		List<Record> list = Db.find(Db.getSqlPara("message.list", id));
		List<Record> records = new ArrayList<>();
		Set<Integer> otherIdSet = new HashSet<>();
		for (Record msg : list) {
			if (msg.getInt("fromId") == id) {
				if (!otherIdSet.contains(msg.getInt("toId"))) {
					records.add(msg);
					otherIdSet.add(msg.getInt("toId"));
				}
			} else {
				if (!otherIdSet.contains(msg.getInt("fromId"))) {
					records.add(msg);
					otherIdSet.add(msg.getInt("fromId"));
				}
			}
		}
		return records;
	}
}
