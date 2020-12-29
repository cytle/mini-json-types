export interface SitemapRuleJSON {
  /**
   * 命中该规则的页面是否能被索引
   */
  action?: SitemapRuleAction;
  matching?: string;
  /**
   * 页面路径
   * `*`表示所有页面，不能作为通配符使用
   */
  page: string;
  /**
   * 当 page 字段指定的页面在被本规则匹配时可能使用的页面参数名称的列表（不含参数值）
   */
  params?: string[];
  /**
   * 优先级，值越大则规则越早被匹配，否则默认从上到下匹配
   */
  priority?: number;
}

/**
* 命中该规则的页面是否能被索引
*/
export type SitemapRuleAction = 'allow' | 'disallow';


/**
 * Sitemap 配置
 * 小程序根目录下的 sitemap.json 文件用于配置小程序及其页面是否允许被支付宝索引，文件内容为一个 JSON 对象，小程序服务收录开关打开时，如果没有 sitemap.json 则默认为所有页面都允许被索引。
 * @see https://opendocs.alipay.com/mini/framework/sitemap
 */
export interface SitemapJSON {
  /**
   * 索引规则列表
   */
  rules: SitemapRuleJSON[];
}
