package com.fuchuan.nsc.common.config;

import com.fuchuan.nsc.common.model._MappingKit;
import com.jfinal.config.Constants;
import com.jfinal.config.Handlers;
import com.jfinal.config.Interceptors;
import com.jfinal.config.JFinalConfig;
import com.jfinal.config.Plugins;
import com.jfinal.config.Routes;
import com.jfinal.core.JFinal;
import com.jfinal.kit.Prop;
import com.jfinal.kit.PropKit;
import com.jfinal.plugin.cron4j.Cron4jPlugin;
import com.jfinal.plugin.ehcache.EhCachePlugin;
import com.jfinal.template.Engine;
import com.jfinal.ext.interceptor.SessionInViewInterceptor;
import com.jfinal.plugin.druid.DruidPlugin;
import com.jfinal.json.FastJsonFactory;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;
import com.jfinal.plugin.activerecord.dialect.MysqlDialect;
import com.jfinal.render.ViewType;

public class MainConfig extends JFinalConfig {

  private static Prop p = PropKit.use("config.properties");
  /**
   * 配置JFinal常量
   */
  @Override
  public void configConstant(Constants me) {
    //读取数据库配置文件
    PropKit.use("config.properties");
    //设置当前是否为开发模式
    me.setDevMode(PropKit.getBoolean("devMode"));
    //设置默认上传文件保存路径 getFile等使用
    me.setBaseUploadPath("upload/temp/");
    //设置上传最大限制尺寸
    //me.setMaxPostSize(1024*1024*10);
    //设置默认下载文件路径 renderFile使用
    me.setBaseDownloadPath("download");
    //设置默认视图类型
    me.setViewType(ViewType.JFINAL_TEMPLATE);
    //设置404渲染视图
    //me.setError404View("404.html");
    //设置json工厂
    me.setJsonFactory(FastJsonFactory.me());

    //设置启用依赖注入
    me.setInjectDependency(true);
  }

  /**
   * 配置JFinal路由映射
   */
  @Override
  public void configRoute(Routes me) {
    me.add(new FrontRoutes());
  }

  /**
   * 配置JFinal插件
   * 数据库连接池
   * ORM
   * 缓存等插件
   * 自定义插件
   */
  @Override
  public void configPlugin(Plugins me) {
    //配置数据库连接池插件
    DruidPlugin dbPlugin = new DruidPlugin(PropKit.get("jdbcUrl"), PropKit.get("user"), PropKit.get("password"));
    //orm映射 配置ActiveRecord插件
    ActiveRecordPlugin arp = new ActiveRecordPlugin(dbPlugin);
    arp.setShowSql(PropKit.getBoolean("devMode"));
    arp.setDialect(new MysqlDialect());
    dbPlugin.setDriverClass("com.mysql.jdbc.Driver");
    /********在此添加数据库 表-Model 映射*********/
    //如果使用了JFinal Model 生成器 生成了BaseModel 把下面注释解开即可
    _MappingKit.mapping(arp);
    // 强制指定复合主键的次序，避免不同的开发环境生成在 _MappingKit 中的复合主键次序不相同
    arp.setPrimaryKey("post_like", "accountId,postId");
    arp.setPrimaryKey("post_nay", "accountId,postId");
    me.add(arp);
    arp.setShowSql(p.getBoolean("devMode", false));

    arp.getEngine().setToClassPathSourceFactory();
    arp.addSqlTemplate("/sql/all_sqls.sql");

    me.add(new EhCachePlugin());

    //添加到插件列表中
    me.add(dbPlugin);
    me.add(arp);
  }

  /**
   * 配置全局拦截器
   */
  @Override
  public void configInterceptor(Interceptors me) {
    me.addGlobalActionInterceptor(new SessionInViewInterceptor());
  }

  /**
   * 配置全局处理器
   */
  @Override
  public void configHandler(Handlers me) {

  }

  /**
   * 配置模板引擎
   */
  @Override
  public void configEngine(Engine me) {
    //这里只有选择JFinal TPL的时候才用
    //配置共享函数模板
    //me.addSharedFunction("/view/common/layout.html")
  }

  public static void main(String[] args) {
    JFinal.start("src/main/webapp", 80, "/", 5);
  }


}