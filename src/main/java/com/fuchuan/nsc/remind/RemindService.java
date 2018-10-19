package com.fuchuan.nsc.remind;

import com.fuchuan.nsc.common.model.Remind;

import java.util.List;

public class RemindService {
  public static final RemindService me = new RemindService();

  private static final Remind dao = new Remind().dao();

  public Remind getRemind(int accountId){
    return dao.findById(accountId);
  }
}
