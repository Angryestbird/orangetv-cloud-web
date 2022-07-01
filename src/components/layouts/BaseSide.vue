<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="true" :router="true">
    <el-menu-item index="/video">
      <el-icon>
        <VideoPlay />
      </el-icon>
      <template #title>播放</template>
    </el-menu-item>
    <el-menu-item index="/statics">
      <el-icon>
        <DataLine />
      </el-icon>
      <template #title>统计</template>
    </el-menu-item>
    <el-menu-item index="/setting">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>设置</template>
    </el-menu-item>
    <el-menu-item index="/about">
      <el-icon>
        <Warning />
      </el-icon>
      <template #title>关于</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  VideoPlay,
  DataLine,
  Warning,
  Setting,
} from '@element-plus/icons-vue'
</script>
