package com.fuchuan.nsc.common.model.base;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.IBean;

/**
 * Generated by JFinal, do not modify this file.
 */
@SuppressWarnings("serial")
public abstract class BaseNewsfeed<M extends BaseNewsfeed<M>> extends Model<M> implements IBean {

	public void setId(java.lang.Integer id) {
		set("id", id);
	}
	
	public java.lang.Integer getId() {
		return getInt("id");
	}

	public void setAccountId(java.lang.Integer accountId) {
		set("accountId", accountId);
	}
	
	public java.lang.Integer getAccountId() {
		return getInt("accountId");
	}

	public void setRefType(java.lang.Integer refType) {
		set("refType", refType);
	}
	
	public java.lang.Integer getRefType() {
		return getInt("refType");
	}

	public void setRefId(java.lang.Integer refId) {
		set("refId", refId);
	}
	
	public java.lang.Integer getRefId() {
		return getInt("refId");
	}

	public void setRefParentType(java.lang.Integer refParentType) {
		set("refParentType", refParentType);
	}
	
	public java.lang.Integer getRefParentType() {
		return getInt("refParentType");
	}

	public void setRefParentId(java.lang.Integer refParentId) {
		set("refParentId", refParentId);
	}
	
	public java.lang.Integer getRefParentId() {
		return getInt("refParentId");
	}

	public void setCreateAt(java.lang.Long createAt) {
		set("createAt", createAt);
	}
	
	public java.lang.Long getCreateAt() {
		return getLong("createAt");
	}

}
