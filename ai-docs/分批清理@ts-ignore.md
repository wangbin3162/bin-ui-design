
**目标**
- 分批清理 `src` 中 `@ts-ignore`（当前约 731 处），优先高收益低风险区域。
- 该补类型的补类型，该建接口的建接口，尽量把 `@ts-ignore` 改成真实类型。
- 对确实暂时无法消除的点，改成 `@ts-expect-error` 并加原因说明，防止长期失控。
- 不改 `demo/`、`ai-docs/`，不改组件目录结构，不做逻辑重写。

**执行原则**
- 每批只做一个“风险层级”，每批都跑完整校验再进入下一批。
- 优先“类型声明补齐”而不是“业务代码改写”。
- 单次 PR 控制在 100~200 处 `@ts-ignore` 清理量，便于 review 与回滚。
- 每批结束必须做到：`pnpm run type-check`、`pnpm run lint`、`pnpm run build:package` 通过。

**分批计划（建议 5 批）**
1. 第 0 批：建立治理基线（1 天）
- 新增统计脚本（如 `/Users/wangbin/workspace/my-projects/bin-ui-design/build/scan-ts-ignore.ts`），输出按文件分组的 ignore 报告。
- 增加规则：禁止新增裸 `@ts-ignore`，允许 `@ts-expect-error` 且必须带原因。
- 建立 CI 门槛：`@ts-ignore` 总量不得回升。

2. 第 1 批：基础类型补齐（1~2 天，低风险）
- 优先改这类文件：`src/_utils/*`、`src/_directives/*`、`src/_hooks/*`。
- 补全常见缺失类型：
  - DOM 扩展属性（如 `__resizeListeners__`、`__ro__`）放在全局声明文件（如 `/Users/wangbin/workspace/my-projects/bin-ui-design/src/types/dom-augment.d.ts`）。
  - 动画/事件处理函数签名统一。
  - 通用工具函数参数、返回值显式化。
- 目标：清理 80~120 处。

3. 第 2 批：内部模块与上下文接口（2~3 天，中低风险）
- 重点：`src/_internal/*`、`src/config-provider/*`、`src/*/types.ts`。
- 建立并统一注入上下文接口（Form/Menu/Select/Tree 等），减少 `inject()` 后的 `unknown`/`{}`。
- 为公共内部能力加泛型/接口（如 Popper、Scrollbar、ContextMenu）。
- 目标：再清理 120~180 处。

4. 第 3 批：中等复杂组件（3~4 天，中风险）
- 先做 ignore 中等但影响面大的组件：`carousel`、`menu`、`radio`、`checkbox`、`slider`、`input-number`、`color-picker`。
- 策略：先补 props/emits/computed 类型，再消除模板侧 `@ts-ignore`。
- 对外暴露类型统一从各组件 `types.ts` 导出，减少重复类型定义。
- 目标：再清理 150~200 处。

5. 第 4 批：高复杂历史组件攻坚（4~6 天，高风险）
- 按当前热点顺序推进：`tree`、`table`、`date-picker`、`form`、`select`、`cascader`。
- 这些模块允许短期保留少量 `@ts-expect-error`（必须写明原因和后续 TODO），先把高频错误链切断。
- 目标：再清理 200+ 处，把 `@ts-ignore` 压到可控规模（例如 <100）。

**每批的固定工作流**
- 统计：`rg -n "@ts-ignore" src | wc -l`
- 开发：仅清理当批范围，新增接口放在对应 `types.ts` 或 `src/types/*.d.ts`
- 替换策略：
  - 能改类型就改类型
  - 不能立即消除的改 `@ts-expect-error: reason`
- 验证：
  - `pnpm run type-check`
  - `pnpm run lint`
  - `pnpm run build:package`
- 记录：更新“剩余 ignore Top 文件列表”，作为下一批输入

**必要新增类型/接口清单（优先）**
- 全局 DOM 扩展声明（ResizeObserver/自定义挂载字段）
- 组件注入上下文接口（`FormContext`、`SelectContext`、`TreeContext` 等）
- 通用事件类型（键盘/鼠标/动画）与组件回调签名
- 可复用工具类型：`MaybeRef<T>`、`Nullable<T>`、`Arrayable<T>`、`EmitFn<T>` 等

**验收标准**
- 不新增裸 `@ts-ignore`。
- `@ts-ignore` 数量持续下降，且每批有明确减少量。
- 构建/类型/规范检查稳定通过。
- 无组件行为回归（重点抽查 `tree/table/date-picker/form/select/cascader`）。

