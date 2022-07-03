<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { ArrowLeft } from '@element-plus/icons-vue'
import { ref } from 'vue';

var content = ref('影视库')

const router = useRouter()
const route = useRoute()

var videoListRoute = {
  name: 'videoList',
  query: {
    ...route.query,
  }
}

// 视频组件包含嵌套的路由
// 初始化后转到视频列表页
// 注意这里使用replace而不是push
router.replace(videoListRoute)

// 用户按返回按钮回到视频列表页
const back = (e: undefined) => router.push(videoListRoute)

</script>

<template>
  <el-page-header :icon="ArrowLeft" :content="content" title="返回" @back="back" />
  <RouterView></RouterView>
</template>

<style scoped>
.ep-page-header__left {
  display: none;
}
</style>