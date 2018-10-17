package com.fuchuan.nsc.common.model.base;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.IBean;

/**
 * Generated by JFinal, do not modify this file.
 */
@SuppressWarnings("serial")
public abstract class BaseComment<M extends BaseComment<M>> extends Model<M> implements IBean {

	public void setId(java.lang.Long id) {
		set("id", id);
	}
	
	public java.lang.Long getId() {
		return getLong("id");
	}

	public void setAccountId(java.lang.Long accountId) {
		set("accountId", accountId);
	}
	
	public java.lang.Long getAccountId() {
		return getLong("accountId");
	}

	public void setPostId(java.lang.Long postId) {
		set("postId", postId);
	}
	
	public java.lang.Long getPostId() {
		return getLong("postId");
	}

	public void setRefId(java.lang.Long refId) {
		set("refId", refId);
	}
	
	public java.lang.Long getRefId() {
		return getLong("refId");
	}

	public void setContent(java.lang.String content) {
		set("content", content);
	}
	
	public java.lang.String getContent() {
		return getStr("content");
	}

	public void setCreateAt(java.lang.Long createAt) {
		set("createAt", createAt);
	}
	
	public java.lang.Long getCreateAt() {
		return getLong("createAt");
	}

}