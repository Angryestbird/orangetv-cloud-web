# 橘子云TV🍊

这是一个简单的项目，项目整合了Vue 3，Element+ UI，Pinia等较新且流行的前端框架。
同时，为了增加一点娱乐性，配合后端项目实现了播放视频的功能。播放组件使用了vue3-video-play。
配套的后端项目是orangetv-cloud-server。前后端使用nginx整合到一起。
为了增加可维护性，本项目使用typescript语言开发。

## 安装

```bash
npm install
```

### 启动开发环境

```bash
npm run dev
```

### 构建生产发布包

```bash
npm run build
```

### 部署到docker

```bash
docker-complse up -d
```

### 个性化主题

修改 `src/styles/element/index.scss`.

## 模块

### 播放

允许用户选择视频并播放。采用响应式布局的方法，完美适配了移动端、桌面端和其它大屏设备。

### 统计

统计视频播放量Top10并用图表展示，图表组件采用的是Apache Echarts。仅注册了必须的组件。

### 设置

用户个人喜好配置页面，目前支持切换到夜间模式。后续计划增加更多的管理功能。

## 关于

我的GitHub主页 [nightCat](https://github.com/angryestbird)
