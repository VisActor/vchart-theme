# VChart Aurora Theme - Agent Context (AGENTS.md)

提供关于 `vchart-aurora-theme` 项目的核心上下文。

## 1. 核心目录与环境

- **运行环境**: Vite (Demo), Rollup/TypeScript (Build)
- **根目录**: `packages/vchart-aurora-theme`
- **启动与运行**:
  - `npm run start` 启动开发服务器。
  - 可以通过内置浏览器访问 http://localhost:5173/，验证改动效果，利用 HMR 实时预览。
- **核心依赖**: `@visactor/vchart` (需保持 >= 2.0.22)。

## 2. 核心文件映射

| 模块         | 文件路径                     | 关键内容与修改范围                      |
| :----------- | :--------------------------- | :-------------------------------------- |
| **全局色板** | `src/common/color-scheme.ts` | `colorList`, `palette`                  |
| **设计变量** | `src/common/token.ts`        | 基础尺寸与字体                          |
| **组件样式** | `src/common/component/*.ts`  | `axis.ts`, `legend.ts`, `tooltip.ts` 等 |
| **图表系列** | `src/common/series/*.ts`     | `bar.ts`, `line.ts`, `pie.ts` 等        |
| **测试用例** | `demo/src/chartSpec.ts`      | 图表的测试 Spec，用于 Demo 展示         |

## 3. 开发闭环工作流

1. **需求分析**: 区分“修改主题”还是“修改 Demo Spec”。
2. **代码修改**: 定位源码，保持风格，避免改动构建配置。
3. **验证闭环**: 启动项目，如果缺少 Demo 则在 `chartSpec.ts` 补充并在 `chart-list.ts` 注册，最终通过浏览器确认效果。

## 4. 经验教训 (Lessons Learned)

1. **区分作用域**: 不要将特定业务的样式写入主题源码 (`src/`)，应在 `demo/` 中的 Spec 里实现。
2. **渐变色处理**: Legends/Tooltip 继承渐变色可能异常，请使用 `getSolidColor` (在 `src/common/utils.ts`) 提取纯色填充。
3. **配置冲突**: 避免在 Series 主题中写 `legends`，优先通过全局组件配置 (`component.legend`)。
4. **区域背景**: 在 `region` 中配置复杂渐变色易出问题，建议退而求其次使用图表级别的 `background` 配置。
