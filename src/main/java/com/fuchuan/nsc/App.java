package com.fuchuan.nsc;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fuchuan.nsc.common.config.MainConfig;
import com.jfinal.server.undertow.UndertowServer;

public class App {
  public static void main(String[] args) {
    int port = 8000;
    boolean devMode = true;
    Map<String, List<String>> res = parseArgs(args);
    if (res.containsKey("port")) {
      try {
        port = Integer.parseInt(res.get("port").get(0));
      } catch (Exception e) {
      }
    }
    if (res.containsKey("devMode")) {
      try {
        devMode = Boolean.parseBoolean(res.get("devMode").get(0));
      } catch (Exception e) {
      }
    }
    UndertowServer.start(MainConfig.class, port, devMode);
  }

  private static Map<String, List<String>> parseArgs(String[] args) {
    Map<String, List<String>> res = new HashMap<>();
    for (int i = 0; i < args.length;) {
      String arg = args[i].trim();
      if (arg.startsWith("-")) {
        List<String> list = new ArrayList<>();
        for (i = i + 1; i < args.length && !args[i].startsWith("-"); i++) {
          list.add(args[i]);
        }
        res.put(arg.substring(1), list);
      } else
        i++;
    }
    return res;
  }
}