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