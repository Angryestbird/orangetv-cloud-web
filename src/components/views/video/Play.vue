<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue';
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from 'vue-router';
import { videoPlay } from 'vue3-video-play';
import 'vue3-video-play/dist/style.css';
import { useVideoStore, Video } from '~/stores/videoStore';
import Option from '~/util/option';

// 初始化播放信息
const videoStore = useVideoStore()
const props = defineProps<{ id: string }>()
var { videoInfo } = storeToRefs(videoStore)
videoStore.fetchById(parseInt(props.id))

// 响应屏幕宽度
const clientWidth = ref(document.body.clientWidth);
const playerWidth = computed(() => clientWidth.value - 120)
const playerHeight = computed(() => Math.floor(clientWidth.value / 1.8))
const playerWidthPx = computed(() => playerWidth.value.toString() + 'px')
const playerHeightPx = computed(() => playerHeight.value.toString() + 'px')

onMounted(() => {
  window.onresize = () => clientWidth.value = document.body.clientWidth
})

// 设置播放器属性
const options = computed(() => {
  var option = new Option();
  var video = videoInfo.value
  if (video) {
    option.title = video.title
    option.poster = video.coverUrl
    option.width = playerWidthPx.value
    option.height = playerHeightPx.value
    option.type = video.type || option.type
    option.src = video.url
    return option
  }
})

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
    <el-page-header :icon="ArrowLeft" title="返回" :content="videoInfo?.title" @back="goBack" />
    <video-play ref="video" style="{ display: 'inline-block': width: 100% }" v-bind="options" />
  </div>
</template>