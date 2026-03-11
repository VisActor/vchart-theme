# 任务列表 (Tasks)

请在此文档中添加开发需求。AI 将会读取此文档，按顺序执行任务并更新状态。

## 📝 提需示例 (Request Examples)

如果你需要提出新需求，请复制以下格式添加到 **[待办任务]** 区域：

### 示例 1：修改样式

```markdown
- [ ] **Task: 调整柱状图默认宽度**
  - **描述**: 将柱状图（Bar Chart）的默认 `barMaxWidth` 设置为 20px。
  - **文件**: `src/common/series/bar.ts`
  - **验证**: 检查 Demo 中的柱状图是否变宽/变窄。
```

### 示例 2：新增图表配置

```markdown
- [ ] **Task: 添加漏斗图测试用例**
  - **描述**: 在 Demo 中新增一个漏斗图（Funnel Chart）的 Spec，用于测试漏斗图主题样式。
  - **文件**: `demo/src/chartSpec.ts`
  - **验证**: Demo 页面出现漏斗图。
```

---

## 🚀 待办任务 (Pending Tasks)

<!-- 请在下方添加你的新任务 -->

- [ ] **Task: 修复 Line/Area 图例和 Tooltip 颜色渐变问题**
  - **描述**: 在 Line 和 Area 图表中，由于 Series 样式使用了渐变色，导致 Legends 和 Tooltip 的图形也呈现渐变。需修改主题配置，使其显示为纯色。
  - **文件**: `src/common/series/line.ts`, `src/common/series/area.ts`
  - **优先级**: 高

---

## 🔄 进行中 (In Progress)

<!-- AI 正在执行的任务 -->

---

## ✅ 已完成 (Completed)

<!-- 已完成的任务历史 -->

- [x] **Task: 禁用迷你面积图 Hover 效果 (Demo Only)**

  - **描述**: 修改 Demo 配置，禁用迷你面积图 (`areaSimpleSpec`) 的 Hover 交互。注意：只改 Demo，不改主题。
  - **文件**: `demo/src/chartSpec.ts`
  - **优先级**: 中

- [x] **Task: 基础折线图增加背景色和圆角 (Demo Only)**

  - **描述**: 修改 Demo 配置，为基础折线图 (`lineSpec`) 添加渐变背景 `linear-gradient(180deg, #F5F9FF 0%, #FFFFFF 97.6%)` 和圆角 `12px`, 只包含图表区域，不包含 xy 轴。注意：只改 Demo，不改主题。
  - **文件**: `demo/src/chartSpec.ts`
  - **优先级**: 中

- [x] **Task: tooltip 的每项的图形形状改成圆形**
  - **描述**: tooltip 的每项的图形形状改成圆形，和 legends 的形状保持一致。在面积图 demo 中完成验证
  - **优先级**: 高
