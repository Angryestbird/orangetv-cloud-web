<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue';
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from 'vue-router';
import { videoPlay } from 'vue3-video-play';
import 'vue3-video-play/dist/style.css';
import { useVideoStore, Video } from '~/stores/videoStore';
import Option from '~/util/option';

// 初始化播放信息
const videoStore = useVideoStore()
const props = defineProps<{ id: string }>()
var video: Video = videoStore.getById(parseInt(props.id))

// 响应屏幕宽度
const clientWidth = ref(document.body.clientWidth);
const playerWidth = computed(() => clientWidth.value - 120)
const playerWidthPx = computed(() => playerWidth.value.toString() + 'px')

onMounted(() => {
  window.onresize = () => clientWidth.value = document.body.clientWidth
})

// 设置播放器属性
const options = computed(() => {
  var option = new Option();
  if (video != undefined) {
    option.title = video.title
    option.poster = video.coverUrl
    option.type = video.type || option.type
    option.src = video.url

    option.width = playerWidthPx.value
    option.height = Math.floor(playerWidth.value * 0.625).toString() + 'px'
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
    <el-page-header :icon="ArrowLeft" title="返回" :content="video.title" @back="goBack" />
    <video-play ref="video" :style="{ display: 'inline-block', width: playerWidthPx }" v-bind="options" />
    <!-- <a>{{ options }}}</a> -->
  </div>
</template>