<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <el-container>
      <el-aside width="64px">
        <BaseSide />
      </el-aside>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </el-config-provider>
</template>