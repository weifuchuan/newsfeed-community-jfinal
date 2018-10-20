#sql("paginate")
  select
    p.id id,
    p.title title,
    p.content content,
    p.createAt createAt,
    p.likeCount likeCount,
    p.nayCount nayCount,
    p.modifyAt modifyAt,
    a.id accountId,
    a.username username,
    a.avatar avatar
  from `post` p inner join `account` a on p.accountId = a.id
  order by p.createAt desc
#end

#sql("findById")
  select
    p.id id,
    p.title title,
    p.content content,
    p.createAt createAt,
    p.likeCount likeCount,
    p.nayCount nayCount,
    p.modifyAt modifyAt,
    a.id accountId,
    a.username username,
    a.avatar avatar
  from `post` p, `account` a 
  where p.accountId = a.id and p.id = #para(0)
  order by p.createAt desc
#end

#sql("like")
  select postId 
  from `post_like` l
  where (
    #for(postId : postIdList)
      #(for.first ? "" : "or") l.postId = #para(postId) 
    #end 
  ) and l.accountId = #para(accountId) 
#end

#sql("nay")
  select postId 
  from `post_nay` l
  where (
    #for(postId : postIdList)
      #(for.first ? "" : "or") l.postId = #para(postId) 
    #end 
  ) and l.accountId = #para(accountId) 
#end
