<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue'
const props = defineProps<{
  searchText?: number
}>()
const goBack = () => {
  console.log('go back')
}
</script>

<template>
  <el-page-header :icon="ArrowLeft" title="返回" content="videoName" @back="goBack" />
</template>