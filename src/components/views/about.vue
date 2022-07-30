<script setup lang="ts">
import {
    Film,
    DataAnalysis,
    Warning,
    Setting,
    User
} from '@element-plus/icons-vue'
</script>

<template>
    <div>
        <el-page-header :icon="Warning" content="关于" title=" " />

        <el-card style="margin-top: 12px;">
            <h1>
                <img class="logo" fit="cover" src="/favicon.svg" /> <span>橘子云TV</span>
            </h1>
            <p>
                这是一个简单的项目，项目整合了Vue 3，Element+ UI，Pinia等较新且流行的前端框架。
                同时，为了增加一点娱乐性，配合后端项目搭建的视频服务器，实现了播放本地视频的功能。
                项目使用typescript语言开发，视频播放使用的组件是vue3-video-play。
            </p>
            <h2>模块</h2>
            <el-row :gutter="12">
                <el-col :span="12">
                    <signboard name="影视" :icon="Film">
                        <p>用户选择视频转到视频播放页，支持搜素功能，支持响应式布局，移动端分二栏排列。</p>
                    </signboard>
                </el-col>
                <el-col :span="12">
                    <signboard name="统计" :icon="DataAnalysis">
                        <p>统计视频播放量并用图表展示，整个了echarts项目，统计播放量排名前十的影视。</p>
                    </signboard>
                </el-col>
            </el-row>
            <el-row :gutter="12">
                <el-col :span="12">
                    <signboard name="设置" :icon="Setting">
                        <p>用户在这里配置个人喜好。目前支持开启夜间模式，更新视频元数据，查看系统运行状态。</p>
                    </signboard>
                </el-col>
                <el-col :span="12">
                    <signboard name="用户" :icon="User">
                        <p>用户在这里登录，查看和更新用户个人信息。管理员可以创建和删除其它的用户。</p>
                    </signboard>
                </el-col>
            </el-row>
            <h2>关于</h2>
            <p>我的GitHub主页 <a href="https://github.com/angryestbird">nightCat</a></p>
        </el-card>
    </div>
</template>

<style scoped>
.ep-row {
    padding-top: 6px;
    padding-bottom: 6px;
}

.logo {
    width: 24px;
    height: 24px;
}
</style>
