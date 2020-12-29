import { WindowJSON, TabBarJSON } from './types';

/**
 * app.json 用于对应用进行全局配置，设置路由、窗口表现、渲染方式等。
 * @see http://rax.alibaba-inc.com/docs/guide/app-config
 * @example
 * ```json
 * {
 *   "routes": [
 *     {
 *       "path": "/",
 *       "source": "pages/Home/index"
 *     }
 *   ],
 *   "window": {
 *     "title": "Rax App 1.0"
 *   }
 * }
 * ```
 */
export interface RaxAppJSON {
  /**
   * routes 用于指定应用的页面，每一项代表对应页面的路径及文件信息。
   * @see http://rax.alibaba-inc.com/docs/guide/app-config#routes
   * @example
   * ```json
   * {
   *   "routes": [
   *     {
   *       "path": "/",
   *       "source": "pages/Home/index"
   *     },
   *     {
   *       "path": "/about",
   *       "source": "pages/About/index",
   *       "targets": ["web"],
   *       "window": {
   *         "title": "关于 Rax"
   *       }
   *     }
   *   ]
   * }
   * ```
   */
  routes: RaxRouteItemJSON[];
  /**
   * 可以设置应用的窗口表现，同时也支持针对每个页面设置窗口表现
   * @see http://rax.alibaba-inc.com/docs/guide/app-config#window
   */
  window: WindowJSON;
  /**
   * 如果你的应用是一个多 tab 应用（底部栏可以切换页面），那么可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。
   * @see http://rax.alibaba-inc.com/docs/guide/app-config#tabBar
   */
  tabBar: TabBarJSON;
}

/**
 * routes 用于指定应用的页面，每一项代表对应页面的路径及文件信息。
 * @example
 * ```json
 * {
 *   "path": "/about",
 *   "source": "pages/About/index",
 *   "targets": ["web"],
 *   "window": {
 *     "title": "关于 Rax"
 *   }
 * }
 * ```
 */
export interface RaxRouteItemJSON {
  /** 指定页面对应的匹配路径 */
  path: string;
  /** 指定页面组件地址（必须写成 pages/[PAGE_NAME]/index 格式，嵌套式路由暂不支持）; */
  source: string;
  /** 指定该页面的窗体表现，可以覆盖全局的窗口设置 */
  window?: WindowJSON;
  /** 指定页面需要构建的端，默认为 build.json 所配置的 targets 的值 * */
  targets?: string[];
}
