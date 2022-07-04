<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="true" :router="true">
    <el-menu-item index="/video/list">
      <el-icon>
        <Film />
      </el-icon>
      <template #title>影视</template>
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
    <el-menu-item index="/user">
      <el-icon>
        <User />
      </el-icon>
      <template #title>用户</template>
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
  Film,
  DataLine,
  Warning,
  Setting,
  User
} from '@element-plus/icons-vue'
</script>
