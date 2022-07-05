<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router';
import { videpPlay } from 'vue3-video-play'

import { reactive } from "vue";
const options = reactive({
  width: "800px",
  height: "450px",
  color: "#409eff",
  muted: false, //静音
  webFullScreen: false,
  autoPlay: false, //自动播放
  currentTime: 0,
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false, //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制器
  title: "", //视频名称
  type: "m3u8",
  src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", //视频源
  // src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4", //视频源
  // src: "https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/playlist.m3u8", //视频源
  poster: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/ironMan.jpg", //封面
  controlBtns: [
    "audioTrack",
    "quality",
    "speedRate",
    "volume",
    "setting",
    "pip",
    "pageFullScreen",
    "fullScreen",
  ],
});


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
  <el-page-header :icon="ArrowLeft" title="返回" content="videoName" @back="goBack" />
  <vue3-video-play v-bind="options" poster="https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/ironMan.jpg" />
</template>