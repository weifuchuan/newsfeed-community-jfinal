#sql("login")

  select * from `account` where username = #para(0) and password = #para(1)

#end

#sql("accountExists")

  select count(*) `count` from `account` where username = #para(0)

#end

