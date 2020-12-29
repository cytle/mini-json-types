import { WindowJSON, TabBarJSON } from './types';

/**
 * 组件配置
 * 在 [componentName].json 中声明自定义组件。如果该自定义组件还依赖了其它组件，则还需要额外声明依赖哪些自定义组件。
 * @see https://opendocs.alipay.com/mini/framework/component_configuration
 * @example
 * ```json
 * {
 *   "component": true, // 必选，自定义组件的值必须是 true
 *   "usingComponents": {
 *     "other":"../other/index" // 依赖的组件
 *   }
 * }
 * ```
 */
export interface ComponentJSON {
  /**	设置页面路径 */
  component: boolean;
  /** 声明依赖的自定义组件所在路径： 项目绝对路径以 / 开头，相对路径以 ./ 或者 ../ 开头。 */
  usingComponents?: Record<string, string>;
}
