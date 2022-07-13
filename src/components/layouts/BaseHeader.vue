<script lang="ts" setup>
import {
  DataAnalysis, Film, Menu,
  Search, Setting, User, Warning
} from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toggleDark } from '~/composables'
import 'element-plus/theme-chalk/display.css'

interface SearchItem {
  value: any
}

var searchText = ref('')
const activeIndex = ref('1')
const handleMenuSelect = (key: string, keyPath: string[]) => {
  // console.log(`key=${key},keyPath=${keyPath}`)
  if (key && key.startsWith('/')) {
    router.push({ path: key })
  }
}
const querySearch = (queryString: string, cb: any) => {
  const results: SearchItem[] = [];
  // call callback function to return suggestions
  cb(results)
}

const router = useRouter()
const handleSelect = (item: SearchItem) => {
  searchText = item.value
}
const submit = (e: KeyboardEvent) => router.push({
  name: 'videoList',
  query: {
    search: searchText.value
  }
})
</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false" :default-active="activeIndex"
    @select="handleMenuSelect">
    <el-menu-item index="1"><img class="logo" src="/favicon.svg" /><span style="font-size:large;">橘子云TV</span>
    </el-menu-item>
    <div class="flex-grow"></div>
    <el-autocomplete class="w-50 m-2" size="large" placeholder="搜索资源" :suffix-icon="Search" v-model="searchText"
      :trigger-on-focus="false" :fetch-suggestions="querySearch" @select="handleSelect" clearable
      @keyup.enter="submit" />
    <div class="flex-grow"></div>
    <el-menu-item index="2" h="full" @click="toggleDark()">
      <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height);">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
    <el-sub-menu index="3" class="hidden-sm-and-up">
      <template #title>
        <el-icon>
          <Menu />
        </el-icon>
      </template>
      <el-menu-item index="/video/list">
        <el-icon>
          <film />
        </el-icon>
        <span>影视</span>
      </el-menu-item>
      <el-menu-item index="/statics">
        <el-icon>
          <data-analysis />
        </el-icon>
        <span>统计</span>
      </el-menu-item>
      <el-menu-item index="/setting">
        <el-icon>
          <setting />
        </el-icon>
        <span>设置</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <el-icon>
          <user />
        </el-icon>
        <span>用户</span>
      </el-menu-item>
      <el-menu-item index="/about">
        <el-icon>
          <warning />
        </el-icon>
        <span>关于</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>
.logo {
  width: 36px;
  height: 36px;
}
</style>
