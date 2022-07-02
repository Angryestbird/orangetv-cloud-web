<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 视频组件包含嵌套的路由
// 初始化后转到视频列表页
router.push({
  name: 'videoList',
  query: {
    ...route.query,
  },
})
</script>

<template>
  <RouterView></RouterView>
</template>