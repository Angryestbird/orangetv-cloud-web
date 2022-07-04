<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <el-container>
      <el-aside width="64px">
        <BaseSide />
      </el-aside>
      <el-main>
        <router-view v-slot="{ Component, route }">
          <transition name="slide-fade">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-config-provider>
</template>

<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

/* fix bounce problem while switching route */
/* .slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
} */

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>