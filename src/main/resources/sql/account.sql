#sql("login")

  select * from `account` where `username` = #para(0) and `password` = #para(1)

#end

#sql("accountExists")

  select count(*) `count` from `account` where `username` = #para(0)

#end

#sql("add")

  insert into `account` (`username`, `password`, `avatar`) 
  values (#para(0), #para(1), #para(2))

#end 

#sql("followList")
	select a.username, a.avatar, a.id, f.createAt
	from `follow` f, `account` a 
	where f.fromId = #para(0) and f.toId = a.id
#end

#sql("fansList")
	select a.username, a.avatar, a.id, f.createAt  
	from `follow` f, `account` a 
	where f.toId = #para(0) and f.fromId = a.id
#end