package com.fuchuan.nsc.login;

import com.fuchuan.nsc.common.model.Account;
import com.jfinal.kit.Ret;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.ehcache.CacheKit;

public class LoginService {
  public static final LoginService me = new LoginService();

  private static final Account accountDao = new Account().dao();

  // 存放登录用户的 cacheName
  public static final String loginAccountCacheName = "loginAccount";

  // "jfinalId" 仅用于 cookie 名称，其它地方如 cache 中全部用的 "sessionId" 来做 key
  public static final String sessionIdName = "jfinalId";


  public Ret login(String username, String password) {
    Account account = accountDao.findFirst(accountDao.getSqlPara("account.login", username, password));
    if (account == null) {
      if (0 == Db.findFirst(Db.getSqlPara("account.accountExists", username)).getInt("count")
      ) {
        return (Ret.fail("msg", "账号不存在"));
      } else {
        return (Ret.fail("msg", "密码错误"));
      }
    } else {
      account.setPassword("");
//      CacheKit.put(loginAccountCacheName, sessionId, loginAccount);
      return (Ret.ok().set("account", account));
    }
  }

  public Account getLoginAccountWithSessionId(String sessionId) {
    return CacheKit.get(loginAccountCacheName, sessionId);
  }
}
