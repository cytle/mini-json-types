import { WindowJSON, TabBarJSON } from './types';

/**
 * `app.json` 用于对小程序进行全局配置，设置页面文件的路径、窗口表现、多 tab 等。
 * @see https://opendocs.alipay.com/mini/framework/app-json
 * @example
 * ```json
 * {
 *   "pages": [
 *     "pages/index/index",
 *     "pages/logs/index"
 *   ],
 *   "window": {
 *     "defaultTitle": "Demo"
 *   }
 * }
 * ```
 */
export interface AppJSON {
  /**	设置页面路径 */
  pages: string[];
  /** 设置默认页面的窗口表现 */
  window?: WindowJSON;
  /** 设置底部 tabbar 的表现 */
  tabBar?: TabBarJSON;
}
