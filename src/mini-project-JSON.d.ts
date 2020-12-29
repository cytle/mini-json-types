import { PathString } from './types';

export type CompileType =
/** 当前为普通小程序项目。 */
'miniprogram' |
/** 当前为小程序插件项目。 */
'plugin';


/**
 * 小程序项目配置
 * 可以在项目根目录使用 mini.project.json 文件对项目进行配置。
 * @see https://opendocs.alipay.com/mini/01iols
 */
export interface MiniProjectJSON {
  /** 编译类型，参见下表。 */
  compileType?: string;

  /** 指定小程序源码的相对路径（ app.json 文件所在目录）。 */
  miniprogramRoot?: PathString;

  /** 指定插件项目的相对路径（ plugin.json 文件所在目录）。 */
  pluginRoot?: PathString;

  /** 是否启用 自定义组件 功能，可通过 详情面板 切换。 */
  component2?: boolean;

  /** 升级基础库版本从 v1.x 到 v2.x，可通过 详情面板 切换。 */
  enableAppxNg?: boolean;
}
