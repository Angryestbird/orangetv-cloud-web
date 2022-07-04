<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { VideoPlay } from '@element-plus/icons-vue';
import { Film } from '@element-plus/icons-vue'
import { computed } from '@vue/reactivity';
const props = defineProps<{
  searchText?: number
}>()

const clientWidth = ref(document.body.clientWidth);
onMounted(() => {
  window.onresize = () => clientWidth.value = document.body.clientWidth
})

const currentDate = ref(new Date().toLocaleString())
const src = ref("https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png")

const isMobile = computed(() => clientWidth.value < 768)
const cntPerRow = computed(() => isMobile.value ? 2 : 5)

const list = ref(['a', 'b', 'c', 'd', 'e', 'f'])
const totalInPage = ref(list.value.length);
const lineNum = computed(() => Math.ceil(totalInPage.value / cntPerRow.value))

</script>

<template>
  <div>
    <el-page-header :icon="Film" content="影视" title=" " />
    <el-row v-for="rowNum in lineNum">
      <template v-for="(o, index) in cntPerRow" :key="(rowNum - 1) * cntPerRow + o">
        <el-col v-if="(rowNum - 1) * cntPerRow + o <= totalInPage" :span="10" :sm="4"
          :offset="index > 0 ? (isMobile ? 2 : 1) : 0">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <el-image :src="src" class="image" fit="scale-down" />
            <div style="display: flex;justify-content: space-between;">
              <div style="padding: 5px">
                <span class="title">Yummy hamburger {{ list[(rowNum - 1) * cntPerRow + index] }}</span>
                <div class="bottom">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
              <div style="margin: 3px;">
                <el-button class="button" type="warning" :icon="VideoPlay" circle />
              </div>
            </div>
          </el-card>
        </el-col>
      </template>
    </el-row>
    <div style="display: flex;justify-content: center;">
      <el-pagination layout="prev, pager, next" :total="50" />
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