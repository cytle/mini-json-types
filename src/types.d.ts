export type HexColor = string;
export type YesOrNo = 'YES' | 'NO';
export type PathString = string;

/**
 * `window` 用于设置小程序的状态栏、导航条、标题、窗口背景色等。
 *
 * @see https://opendocs.alipay.com/mini/framework/app-json#window
 * @example
 * ```json
 * {
 *   "window":{
 *     "defaultTitle": "支付宝接口功能演示"
 *   }
 * }
 * ```
 */
export interface WindowJSON {
  /** 页面默认标题。 */
  defaultTitle?: string;
  /**
   * 是否允许下拉刷新，
   * @default true
   * **说明：**
   * - 下拉刷新生效的前提是 allowsBounceVertical 值为 YES。
   * - window 全局配置后全局生效，但是如果单个页面配置了该参数，以页面的配置为准。
   */
  pullRefresh?: boolean;

  /** 是否允许向下拉拽。
   * @default "YES"
   */
  allowsBounceVertical?: YesOrNo;
  /** 导航栏透明设置。
   * 支持 always 一直透明 / auto 滑动自适应 / none 不透明。
   * @default "none"
   */
  transparentTitle?: "always" | "auto" | "none";
  /** 是否允许导航栏点击穿透。
   * @default "NO"
   */
  titlePenetrate?: YesOrNo;
  /** 是否进入时显示导航栏的 loading。
   * @default "NO"
   */
  showTitleLoading?: YesOrNo;
  /** 导航栏图片地址。*/
  titleImage?: string;
  /** 导航栏背景色。例：白色 "#FFFFFF"。*/
  titleBarColor?: HexColor;
  /** 页面的背景色。例：白色 "#FFFFFF"。*/
  backgroundColor?: HexColor;
  /** 下拉露出显示背景图的底色。例：白色 "#FFFFFF"。*/
  backgroundImageColor?: HexColor;
  /**
   * 下拉露出显示背景图的链接。
   */
  backgroundImageUrl?: string;

  /** 仅支持 iOS，是否支持手势返回。
   * @default "YES"
   */
  gestureBack?: YesOrNo;
  /** 仅支持 Android，是否显示 WebView 滚动条。
   * @default "YES"
   */
  enableScrollBar?: YesOrNo;
  /** 页面上拉触底时触发时距离页面底部的距离，单位为 px，详情请参见 页面事件处理函数。 1.19.0 ，目前iOS在page.json下设置无效，只能全局设置。 */
  onReachBottomDistance?: number;
  /**
   * rpx 单位是否宽度自适应 ，默认true，当设置为 false 时，2 rpx 将恒等于 1 px，不再根据屏幕宽度进行自适应，注意，此时 750 rpx 将不再等于100% 宽度。
   * 1.23.0
   **/
  responsive?: boolean;
}

export interface TabBarItemJSON {
  /** 设置页面路径 */
  pagePath?: string;
  /** 名称 */
  name?: string;
  /** 平常图标路径（非选中状态） */
  icon: string;
  /** 高亮图标路径（选中状态） */
  activeIcon: string;
}
/**
 * 如果开发的小程序是一个多 tab 应用（客户端窗口的底部栏可以切换页面），那么可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。
 *
 * @see https://opendocs.alipay.com/mini/framework/app-json#tabBar
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
 *   "tabBar": {
 *     "textColor": "#dddddd",
 *     "selectedColor": "#49a9ee",
 *     "backgroundColor": "#ffffff",
 *     "items": [
 *       {
 *         "pagePath": "pages/index/index",
 *         "name": "首页"
 *       },
 *       {
 *         "pagePath": "pages/logs/logs",
 *         "name": "日志"
 *       }
 *     ]
 *   }
 * }
 * ```
 */
export interface TabBarJSON {
  /** 文字颜色 */
  textColor?: HexColor;
  /** 选中文字颜色 */
  selectedColor?: HexColor;
  /** 背景色 */
  backgroundColor?: HexColor;
  /** 每个 tab 配置 */
  items: TabBarItemJSON[];
}
