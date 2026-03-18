# VChart Aurora Theme 开发指南 (AI Development Guide)

本文档旨在为 AI 助手提供一套标准的开发、修改与验证流程，确保 VChart 主题包开发的规范性和高效性。

## 1. 项目环境 (Environment)

- **项目根目录**: `/Users/bytedance/rep/vchart-theme/packages/vchart-aurora-theme`
- **Demo 目录**: `/Users/bytedance/rep/vchart-theme/packages/vchart-aurora-theme/demo`
- **启动项目**: 在 `packages/vchart-aurora-theme` 目录下执行 `npm run start`。
- **运行状态**: 开发服务器启动后 (Vite)，请根据终端输出的 Local 地址访问 Demo 页面（通常为 `http://localhost:5173/` 或 `http://localhost:5174/` 等）。

## 2. 核心文件映射 (File Mapping)

在执行修改任务时，请根据需求类型定位到以下核心文件：

| 模块 (Module) | 文件路径 (Path)                                            | 关键内容 (Content)                                                                                                                                                                                                                           |
| :------------ | :--------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **全局色板**  | [`src/common/color-scheme.ts`](src/common/color-scheme.ts) | `colorList` (数据色板), `palette` (背景色/字体色/轴线色)                                                                                                                                                                                     |
| **设计变量**  | [`src/common/token.ts`](src/common/token.ts)               | `fontFamily`, `fontSize`, `borderRadius`, `padding` 等基础 Token                                                                                                                                                                             |
| **组件样式**  | `src/common/component/*.ts`                                | - [`axis.ts`](src/common/component/axis.ts): 坐标轴<br>- [`legend.ts`](src/common/component/legend.ts): 图例<br>- [`tooltip.ts`](src/common/component/tooltip.ts): 提示框<br>- [`crosshair.ts`](src/common/component/crosshair.ts): 十字准星 |
| **图表系列**  | `src/common/series/*.ts`                                   | - [`bar.ts`](src/common/series/bar.ts): 柱状图<br>- [`line.ts`](src/common/series/line.ts): 折线图<br>- [`pie.ts`](src/common/series/pie.ts): 饼图<br>- 其他: `area.ts`, `scatter.ts`, `radar.ts` 等                                         |
| **测试用例**  | [`demo/src/chartSpec.ts`](demo/src/chartSpec.ts)           | 包含 `barSpec`, `lineSpec`, `pieSpec` 等测试配置，用于 Demo 展示                                                                                                                                                                             |

## 3. 开发流程 (Workflow)

### Step 1: 需求分析

阅读 `TASKS.md` 或用户指令，明确修改点（例如：“修改背景色”或“调整坐标轴字号”）。

### Step 2: 代码修改

1. **定位**: 根据映射表找到对应源码文件。
2. **修改**: 保持代码风格一致，进行最小必要修改。
   - _Tip_: 修改 `color-scheme.ts` 影响全局颜色。
   - _Tip_: 修改 `token.ts` 影响全局尺寸/字体。
   - _Tip_: 修改 `component/series` 文件进行特定组件/图表的精细调整。

### Step 3: 验证闭环

1.  **检查 Demo**: 修改保存后，Vite 会热更新。
2.  **更新用例 (可选)**: 如果现有 Demo 图表无法展示修改效果（例如缺少特定类型的图表），请在 `demo/src/chartSpec.ts` 中添加新的 Spec。 并在 `demo/src/chart-list.ts` 中注册。
3.  **确认**: 启动项目并通过内置浏览器访问 Demo 页面（URL 见启动日志）查看效果，确认是否符合需求。

## 4. 辅助工具 (Tools)

- **VChart 专家助手**: 遇到 VChart 配置问题、需要创建复杂 Demo 或诊断图表问题时，可以使用 `vchart-development-assistant` skill 获取帮助。

## 5. 注意事项

- **只修改必要文件**: 避免改动构建配置或无关逻辑。
- **保持类型安全**: 确保 TypeScript 类型检查通过。
- **实时反馈**: 修改完成后，简要描述改动点并提示用户查看 Demo。
