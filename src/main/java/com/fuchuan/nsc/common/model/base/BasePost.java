package com.fuchuan.nsc.common.model.base;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.IBean;

/**
 * Generated by JFinal, do not modify this file.
 */
@SuppressWarnings("serial")
public abstract class BasePost<M extends BasePost<M>> extends Model<M> implements IBean {

	public void setId(java.lang.Long id) {
		set("id", id);
	}
	
	public java.lang.Long getId() {
		return getLong("id");
	}

	public void setTitle(java.lang.String title) {
		set("title", title);
	}
	
	public java.lang.String getTitle() {
		return getStr("title");
	}

	public void setContent(java.lang.String content) {
		set("content", content);
	}
	
	public java.lang.String getContent() {
		return getStr("content");
	}

	public void setCreateAt(java.lang.Integer createAt) {
		set("createAt", createAt);
	}
	
	public java.lang.Integer getCreateAt() {
		return getInt("createAt");
	}

	public void setLikeCount(java.lang.Integer likeCount) {
		set("likeCount", likeCount);
	}
	
	public java.lang.Integer getLikeCount() {
		return getInt("likeCount");
	}

	public void setNayCount(java.lang.Integer nayCount) {
		set("nayCount", nayCount);
	}
	
	public java.lang.Integer getNayCount() {
		return getInt("nayCount");
	}

	public void setModifyAt(java.lang.Integer modifyAt) {
		set("modifyAt", modifyAt);
	}
	
	public java.lang.Integer getModifyAt() {
		return getInt("modifyAt");
	}

}
