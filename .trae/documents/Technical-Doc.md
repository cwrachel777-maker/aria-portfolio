# 技术架构文档 - Aria Portfolio

## 1. 技术栈

| 类别 | 技术选型 |
|------|----------|
| 框架 | React 18 + TypeScript |
| 构建工具 | Vite |
| 样式 | Tailwind CSS |
| 路由 | React Router v6 |
| 状态管理 | Zustand（轻量级，如需） |
| 图标 | Lucide React |

---

## 2. 项目结构

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # 顶部固定导航栏
│   │   └── Footer.tsx          # 底部信息栏
│   ├── common/
│   │   ├── ScrollToTop.tsx     # 滚动置顶组件
│   │   └── SectionWrapper.tsx # 板块包装组件
│   └── project/
│       ├── ProjectCard.tsx     # 项目卡片
│       ├── ProjectDetailNav.tsx # 项目详情页顶部导航
│       └── AbilityBlock.tsx    # 能力块组件
├── pages/
│   ├── Home.tsx               # 首页
│   ├── AbilityMap.tsx         # 能力地图
│   ├── Projects.tsx           # 项目经历总入口
│   │   ├── AProjects.tsx      # A板块项目列表
│   │   ├── BProjects.tsx      # B板块项目列表
│   │   └── CProjects.tsx      # C板块项目列表
│   ├── projectDetail/
│   │   ├── A1Project.tsx      # A1项目详情
│   │   ├── A2Project.tsx
│   │   ├── A3Project.tsx
│   │   ├── A4Project.tsx
│   │   ├── B1Project.tsx
│   │   ├── B2Project.tsx
│   │   ├── C1Project.tsx
│   │   ├── C2Project.tsx
│   │   ├── C3Project.tsx
│   │   └── C4Project.tsx
│   ├── MarketInsights.tsx     # 市场洞察
│   └── About.tsx              # 关于我
├── data/
│   └── projects.ts            # 项目数据
├── hooks/
│   ├── useActiveSection.ts    # 监听当前活跃板块
│   └── useScrollToSection.ts  # 平滑滚动跳转
├── types/
│   └── index.ts               # TypeScript 类型定义
└── App.tsx
```

---

## 3. 路由设计

| 路由 | 组件 | 描述 |
|------|------|------|
| / | Home | 首页 |
| /ability | AbilityMap | 能力地图 |
| /projects | Projects | 项目经历总入口（封面页） |
| /projects/a | AProjects | A板块项目列表 |
| /projects/a/1 | A1Project | A1项目详情 |
| /projects/a/2 | A2Project | A2项目详情 |
| ... | ... | ... |
| /projects/b | BProjects | B板块项目列表 |
| /projects/c | CProjects | C板块项目列表 |
| /insights | MarketInsights | 市场洞察 |
| /about | About | 关于我 |

---

## 4. 核心功能实现

### 4.1 固定导航栏 + 滚动高亮

**实现方式**:
- 使用 `IntersectionObserver` 监听各板块的可见性
- 维护一个 `activeSection` 状态
- 点击导航项时使用 `scrollIntoView({ behavior: 'smooth' })` 平滑滚动

**导航项到路由的映射**:
```
首页 → #home (/ 或 #home)
能力地图 → #ability (/ability)
项目经历 → #projects (/projects)
市场洞察 → #insights (/insights)
关于我 → #about (/about)
```

### 4.2 项目详情页导航条

**结构**:
```
[← 返回] [项目名称] [1/2 ←→]
```

**分页逻辑**:
- 单页项目: 不显示分页指示器
- 多页项目: 显示"当前页/总页数"，左右箭头切换

### 4.3 能力块悬停效果

**CSS 类**:
```css
ability-block:
  transition-all duration-300
  hover:-translate-y-2 hover:shadow-lg
```

---

## 5. 组件设计

### 5.1 Header 组件

**Props**:
- `activeSection: string` - 当前活跃板块
- `onNavigate: (section: string) => void` - 导航回调

**状态**: 
- 桌面端: 固定顶部，白色背景
- 滚动时: 添加轻微阴影

### 5.2 ProjectCard 组件

**Props**:
- `title: string`
- `subtitle: string`
- `role: string`
- `onClick: () => void`

**状态**:
- Default: 白色背景
- Hover: 上浮 + 阴影

### 5.3 SectionWrapper 组件

**Props**:
- `id: string` - 板块 ID，用于锚点定位
- `className?: string`

**功能**:
- 设置 `ref` 供 `IntersectionObserver` 使用
- 提供统一的 padding 和最小高度

---

## 6. 样式规范

### 6.1 字体

**主字体**: Inter 或 system-ui  
**备选**: -apple-system, BlinkMacSystemFont

### 6.2 颜色

```css
--color-primary: #000000      /* 主文字 */
--color-secondary: #666666   /* 次要文字 */
--color-accent: #333333      /* 强调色 */
--color-background: #FFFFFF  /* 背景 */
--color-border: #E5E5E5      /* 边框 */
--color-highlight: #000000   /* 高亮状态 */
```

### 6.3 间距

- 基础单位: 4px
- 常用间距: 8px, 16px, 24px, 32px, 48px, 64px
- 板块间距: 96px (24 * 4)

### 6.4 响应式断点

```css
/* 桌面端优先 */
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

---

## 7. 待实现功能

### Phase 1 (当前)
- [x] 桌面端所有页面和组件
- [x] 固定导航栏 + 滚动高亮
- [x] 完整的项目详情页系统
- [x] 小红书链接跳转

### Phase 2 (后续)
- [ ] 移动端适配
- [ ] 图片资源替换
- [ ] 数据动态加载（可选）

---

## 8. 注意事项

1. **内容占位符**: 在真实图片准备好之前，使用灰色占位块
2. **页面高度**: 能力地图和项目经历板块可能较长，确保滚动流畅
3. **面包屑**: 项目详情页保留清晰的返回路径
4. **SEO**: 添加适当的 meta 标签
