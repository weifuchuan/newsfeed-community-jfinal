#sql("paginate")
	select  n.* 
	from `newsfeed` n, ( 
		select toId accountId from `follow` where fromId = #para(0) 
		union all
		(select #para(0) accountId)
	) f
	where n.accountId = f.accountId 
	order by n.createAt desc 
#end

#sql("extractUsefulDataForPublishPost")
	select
		a.avatar avatar, 
		a.username username, 
		p.title title,
		p.id postId 
	from `post` p, `account` a
	where (
		#for(id : idList)
			#(for.first ? "" : "or") p.id = #(id)
		#end
	) and p.accountId = a.id
#end

#sql("extractUsefulDataForFollowAccount")
	select
		a.avatar avatar, 
		a.username username,		
		a.id accountId
	from `account` a
	where 
		#for(id : idList)
			#(for.first ? "" : "or") a.id = #(id)
		#end
#end

#sql("extractUsefulDataForCommentPost")
	select
		a.avatar avatar, 
		a.username username,		
		c.content content, 
		p.title title,
		c.id commentId 
	from `account` a, `post` p, `comment` c
	where (
		#for(id : idList)
			#(for.first ? "" : "or") c.id = #(id)
		#end
	) and c.accountId = a.id and c.postId = p.id 
#end