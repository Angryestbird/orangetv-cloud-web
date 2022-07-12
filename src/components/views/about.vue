<script setup lang="ts">
import { Warning } from '@element-plus/icons-vue';
</script>

<template>
    <div>
        <el-page-header :icon="Warning" content="关于" title=" " />

        <el-card style="margin-top: 12px;">
            <h1>橘子云TV</h1>
            <p>
                这是一个简单的项目，项目整合了Vue 3，Element+ UI，Pinia等较新且流行的前端框架。
                同时，为了增加一点娱乐性，配合后端项目搭建的视频服务器，实现了播放本地视频的功能。
                项目使用typescript语言开发，视频播放使用的组件是vue3-video-play。
            </p>
            <h2>模块</h2>
            <h3>影视</h3>
            <p>用户选择视频转到视频播放页，支持搜素功能，支持响应式布局，移动端分二栏排列。</p>
            <h3>统计</h3>
            <p>统计视频播放量并用图表展示，整个了echarts项目，统计播放量排名前十的影视。</p>
            <h3>设置</h3>
            <p>用户配置个人喜好的页面。目前支持开启夜间模式。</p>
            <h3>用户</h3>
            <p>这是用户登录页。</p>
            <h2>关于</h2>
            <p>我的GitHub主页 <a href="https://github.com/angryestbird">nightCat</a></p>
        </el-card>
    </div>
</template>
