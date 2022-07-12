<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { toggleDark } from '~/composables';
import { useRouter, useRoute } from 'vue-router'

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
  </el-menu>
</template>

<style scoped>
.logo {
  width: 36px;
  height: 36px;
}
</style>
