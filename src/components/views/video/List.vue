<script setup lang="ts">
import { ref } from 'vue';
import { VideoPlay } from '@element-plus/icons-vue';
const props = defineProps<{
  searchText?: number
}>()
const currentDate = ref(new Date().toLocaleString())
var src = ref("https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png")
</script>

<template>
  <el-row>
    <el-col v-for="(o, index) in 5" :key="o" :span="4" :offset="index > 0 ? 1 : 0">
      <el-card :body-style="{ padding: '0px' }">
        <el-image :src="src" class="image" fit="cover" />
        <div style="display: flex;justify-content: space-between;">
          <div style="padding: 5px">
            <span class="title">Yummy hamburger</span>
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
  </el-row>
  <el-row>
    <el-col v-for="(o, index) in 5" :key="o" :span="4" :offset="index > 0 ? 1 : 0">
      <el-card :body-style="{ padding: '0px' }">
        <el-image :src="src" class="image" fit="cover" />
        <div style="display: flex;justify-content: space-between;">
          <div style="padding: 5px">
            <span class="title">Yummy hamburger</span>
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
  </el-row>
  <el-pagination layout="prev, pager, next" :total="50" />
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
  display: block;
  max-height: 100px;
}
</style>