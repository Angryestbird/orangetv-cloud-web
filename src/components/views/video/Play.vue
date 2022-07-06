<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue';
import { reactive } from "vue";
import { useRoute, useRouter } from 'vue-router';
import { videoPlay } from 'vue3-video-play';
import 'vue3-video-play/dist/style.css';
import { useVideoStore, Video } from '~/stores/videoStore';
import Option from '~/util/option';

// 初始化播放信息
const videoStore = useVideoStore()
const props = defineProps<{ id: number }>()
var video: Video = videoStore.getById(props.id)
const options = reactive(new Option());
if (video != undefined) {
  options.title = video.title
  options.poster = video.coverUrl
  options.type = video.type || options.type
  options.src = video.url
}

// 初始化返回按钮
const router = useRouter()
const route = useRoute()
const goBack = () => {
  router.push({
    name: 'videoList',
    query: {
      ...route.query,
    },
  })
}
</script>

<template>
  <div>
    <el-page-header :icon="ArrowLeft" title="返回" content="videoName" @back="goBack" />
    <video-play ref="video" style="display: inline-block; width: 100%" v-bind="options" />
  </div>
</template>