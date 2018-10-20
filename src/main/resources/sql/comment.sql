#sql("findByPostId")
	select 
		c.id id,
		c.accountId accountId,
		c.postId postId,
		c.refId refId,
		c.content content, 
		c.createAt createAt, 
		a.username username, 
		a.avatar avatar
	from `comment` c, `account` a 
	where c.accountId = a.id and postId = #para(0)
#end