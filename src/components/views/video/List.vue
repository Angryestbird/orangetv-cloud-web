<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { useVideoStore } from '~/stores/videoStore';
import { VideoPlay } from '@element-plus/icons-vue';
import { Film } from '@element-plus/icons-vue'
import { computed } from '@vue/reactivity';
import { storeToRefs } from 'pinia';

// 定义搜索文本为入参
const props = defineProps<{
  searchText?: number
}>()

// 初始化设备相关参数
const clientWidth = ref(document.body.clientWidth);
const isMobile = computed(() => clientWidth.value < 768)
const cntPerRow = computed(() => isMobile.value ? 2 : 5)
onMounted(() => {
  window.onresize = () => clientWidth.value = document.body.clientWidth
})

// 初始化store
const videoStore = useVideoStore()
const { dataList, totalInPage, lineNum } = storeToRefs(videoStore)
onMounted(() => videoStore.fetch())

// 播放回调
const router = useRouter()
const playVideo = (id: number) => router.push({
  name: 'videoPlay',
  params: { id }
})
</script>

<template>
  <div>
    <el-page-header :icon="Film" content="影视" title=" " />
    <el-row v-for="rowNum in lineNum(cntPerRow)" style="margin-top: 12px;">
      <template v-for="(o, index) in cntPerRow" :key="(rowNum - 1) * cntPerRow + o">
        <el-col v-if="(rowNum - 1) * cntPerRow + o <= totalInPage" :xs="10" :span="4"
          :offset="index > 0 ? (isMobile ? 2 : 1) : 0">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <el-image :src="dataList[(rowNum - 1) * cntPerRow + index].coverUrl" class="image" fit="scale-down" />
            <div style="display: flex;justify-content: space-between;">
              <div style="padding: 5px">
                <span class="title">{{ dataList[(rowNum - 1) * cntPerRow + index].title }}</span>
                <div class="bottom">
                  <time class="time">{{ dataList[(rowNum - 1) * cntPerRow + index]
                      .uploadTime.toLocaleTimeString()
                  }}</time>
                </div>
              </div>
              <div style="margin: 3px;">
                <el-button class="button" type="warning" :icon="VideoPlay" circle
                  @click="() => playVideo(dataList[(rowNum - 1) * cntPerRow + index].id)" />
              </div>
            </div>
          </el-card>
        </el-col>
      </template>
    </el-row>
    <div style="display: flex;justify-content: center;">
      <el-pagination layout="prev, pager, next" :total="videoStore.totalCnt" />
    </div>
  </div>
</template>

<style scoped>
.time {
  font-size: 12px;
  color: #999;
}

.title {
  font-size: 0.8em;
}

/* 调整卡片行间距 */
.ep-card {
  margin-top: 10px;
  margin-bottom: 10px;
}

.bottom {
  margin-top: 6px;
  line-height: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image {
  width: 100%;
  height: 120px;
}
</style>