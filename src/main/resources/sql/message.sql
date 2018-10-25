#sql("paginate")
	select * from `message` 
	where (fromId = #para(0) and toId = #para(1)) or (toId = #para(0) and fromId = #para(1))
	order by createAt desc 
#end

#sql("list")
	SELECT m.*, a.`avatar`, a.`username`
	FROM (
	  SELECT MAX(m.`id`) id 
	  FROM `message` m
	  WHERE m.`fromId` = #para(0)
	  GROUP BY m.`toId`
	  UNION (
	    SELECT MAX(m.`id`) id 
	    FROM `message` m
	    WHERE m.`toId` = #para(0)
	    GROUP BY m.`fromId`
	  )
	) id, `message` m, `account` a 
	WHERE id.id = m.`id` 
		AND ((m.`fromId` = #para(0) AND m.`toId` = a.`id`) 
			OR (m.`toId` = #para(0) AND m.`fromId` = a.`id`))
	ORDER BY m.`createAt` DESC
#end