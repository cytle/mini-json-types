import { WindowJSON, YesOrNo } from './types';

/**
 * 在 /pages 目录中的 .json 文件用于配置当前页面的窗口表现。页面配置比 app.json 全局配置简单得多，只能设置 window 相关配置项，但无需写 window 这个键。页面配置项会优先于全局配置项。
 *
 * window 配置项同 全局配置项，同时支持以下几点：
 *
 * - 支持 optionMenu 配置导航图标，点击后触发 onOptionMenuClick。注意：optionMenu 配置将被废弃，建议使用 my.setOptionMenu 设置导航栏图标。
 * - 支持 titlePenetrate，设置导航栏点击穿透。
 * - 支持 barButtonTheme，设置导航栏图标主题。
 * @see https://opendocs.alipay.com/mini/framework/page-json
 * @example
 * ```json
 * {
 *   "optionMenu": {
 *     "icon": "https://img.alicdn.com/tps/i3/T1OjaVFl4dXXa.JOZB-114-114.png"
 *   },
 *   "titlePenetrate": "YES",
 *   "barButtonTheme": "light"
 * }
 * ```
 */
export interface PageJSON extends WindowJSON {
  /**
   * 设置导航栏额外图标，目前支持设置属性 icon，值为图标 url（以 https/http 开头）或 base64 字符串，大小建议 30*30 px
   * 基础库 1.3.0
   */
  optionMenu?: {
    icon: string;
  };
  /**
   * 是否允许导航栏点击穿透。
   * 支付宝客户端 10.1.52
   * @default "NO"
   */
  titlePenetrate?: YesOrNo;
  /**
   * 设置导航栏图标主题，仅支持真机预览。“default”为蓝色图标，“light”为白色图标，
   * 支付宝客户端 10.1.52
   */
  barButtonTheme?: string;
}
