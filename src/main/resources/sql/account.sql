#sql("login")

  select * from `account` where username = ? and password = ?

#end

#sql("accountExists")

  select count(*) from `account` where username = ?

#end

