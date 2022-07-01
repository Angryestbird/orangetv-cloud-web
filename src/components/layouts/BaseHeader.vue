<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { toggleDark } from '~/composables';

interface SearchItem {
  value: any
}

var searchText = ref('')
const activeIndex = ref('1')
const handleMenuSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const querySearch = (queryString: string, cb: any) => {
  const results: SearchItem[] = [];
  // call callback function to return suggestions
  cb(results)
}
const handleSelect = (item: SearchItem) => {
  console.log(item)
}
</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false" :default-active="activeIndex"
    @select="handleMenuSelect">
    <el-menu-item index="1">🍊 橘子云TV</el-menu-item>
    <div class="flex-grow"></div>
    <el-menu-item index="2">
      <el-autocomplete class="w-50 m-2" size="large" placeholder="搜索资源" :suffix-icon="Search" v-model="searchText"
        :trigger-on-focus="false" :fetch-suggestions="querySearch" @select="handleSelect" clearable />
    </el-menu-item>
    <div class="flex-grow"></div>
    <el-menu-item index="3" h="full" @click="toggleDark()">
      <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height);">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>
