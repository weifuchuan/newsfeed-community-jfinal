package com.fuchuan.nsc.login;

import com.fuchuan.nsc.common.model.Account;
import com.fuchuan.nsc.common.model.Session;
import com.jfinal.kit.Ret;
import com.jfinal.kit.StrKit;
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
    Account loginAccount = accountDao.findFirst(accountDao.getSqlPara("account.login", username, password));
    if (loginAccount == null) {
      if (0 == Db.findFirst(Db.getSqlPara("account.accountExists", username)).getInt("count")
      ) {
        return (Ret.fail("msg", "账号不存在"));
      } else {
        return (Ret.fail("msg", "密码错误"));
      }
    } else {
      loginAccount.setPassword("");
      long liveSeconds = 3 * 365 * 24 * 60 * 60;
      // 传递给控制层的 cookie
      int maxAgeInSeconds = (int) (liveSeconds);
      // expireAt 用于设置 session 的过期时间点，需要转换成毫秒
      long expireAt = System.currentTimeMillis() + (liveSeconds * 1000);
      // 保存登录 session 到数据库
      Session session = new Session();
      String sessionId = StrKit.getRandomUUID();
      session.setId(sessionId);
      session.setAccountId((int) (long) loginAccount.getId());
      session.setExpireAt(expireAt);
      if (!session.save()) {
        return Ret.fail("msg", "保存 session 到数据库失败，请联系管理员");
      }
      loginAccount.put("sessionId", sessionId);
      CacheKit.put(loginAccountCacheName, sessionId, loginAccount);

      return Ret.ok(sessionIdName, sessionId)
          .set("account", loginAccount)
          .set("maxAgeInSeconds", maxAgeInSeconds);
    }
  }

  public Account loginWithSessionId(String sessionId, String loginIp) {
    Session session = Session.dao.findById(sessionId);
    if (session == null) {      // session 不存在
      return null;
    }
    if (session.isExpired()) {  // session 已过期
      session.delete();		// 被动式删除过期数据，此外还需要定时线程来主动清除过期数据
      return null;
    }

    Account loginAccount = accountDao.findById(session.getAccountId());
    if (loginAccount != null ) {
      CacheKit.put(loginAccountCacheName, sessionId, loginAccount);
      return loginAccount;
    }
    return null;
  }

  public Account getLoginAccountWithSessionId(String sessionId) {
    return CacheKit.get(loginAccountCacheName, sessionId);
  }
}
