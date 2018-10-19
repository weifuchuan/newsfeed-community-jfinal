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
  from `post` p, `account` a, `post_like` l, `post_nay` n 
  where p.accountId = a.id 
  order by p.createAt desc
#end