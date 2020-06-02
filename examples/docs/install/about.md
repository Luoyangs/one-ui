## OneUI

Once you like, you will like forever

### 组件实现规划
#### 1. 通用 General
1. [ ✔ ] Color
2. [ ✔ ] Button
3. [ ✔ ] Avatar
4. [ ] Col
5. [ ] Row
5. [ ✔ ] Icon
6. [ ✔ ] Card
#### 2. 导航 Navigation
1. [ ] Header
2. [ ] Sidebar
3. [ ] Tabs
4. [ ] Pagination
5. [ ] Anchor
6. [ ] Affix
7. [ ] Breadcrumb
8. [ ] Backtop
#### 3. 数据录入 Data Entry
1. [ ] Checkbox
2. [ ] Radio
3. [ ] Select
4. [ ] Cascader
5. [ ] Input
6. [ ] Rate
7. [ ] Switch
8. [ ] Upload
9. [ ] Form
10. [ ] Calendar
11. [ ] ColorPicker
12. [ ] DatePicker
#### 4. 数据展示 Data Display
1. [ ] Table
2. [ ] Badge
3. [ ] Tag
4. [ ] Steps
5. [ ] Timeline
6. [ ] Tree
7. [ ] Menu
8. [ ] Collapse
9. [ ] Swiper
10. [ ] InfiniteScroll
#### 5. 反馈 Feedback
1. [ ] Modal
2. [ ] Notify
3. [ ] Toast
4. [ ] Alert
5. [ ] Tooltip
6. [ ] Popover
7. [ ] Progress
8. [ ] Skeletion
9. [ ] Spin
10. [ ] Drawer
11. [ ] Loading


### 项目目录结构

```
one-ui
|-- build                    // 构建脚本目录
|-- config                   // 构建相关配置
|-- lib                      // 生产导出目录
|-- packages                 // 业务组件源码目录
|   |-- index.ts             // 所有业务组件主入口
|   |-- component-a
|   |   |-- src
|   |   |-- index.ts
|   |   |-- README.md
|   |-- ...
|-- src                      // 源码目录
|   |-- index.ts             // 主入口
|   |-- utils
|   |-- constants
|   |-- filters
|   |-- mixins
|   |-- styles               // 公共样式
|   |-- localization         // 翻译配置目录，维护各个组件的transify mapping
|   |-- locale
|-- public                   // 公共资源
|-- types
|-- components.json          // 各个组件入口配置
|-- package.json
|-- README.md
```
