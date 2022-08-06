<script setup lang="ts">
import 'element-plus/theme-chalk/display.css'
import { computed, DefineComponent, ref } from 'vue';
import { useWindowSize } from '@vueuse/core'

interface Props {
    name: string,
    icon: DefineComponent<any>
}
const props = defineProps<Props>()
const { width } = useWindowSize()
const isMoble = computed(() => width.value < 768)
const iconSize = computed(() => isMoble ? 18 : 60)
</script>

<template>
    <el-card>
        <div class="signboard">
            <el-icon :size="iconSize" class="hidden-xs-only">
                <component :is="icon"></component>
            </el-icon>
            <div :style="{ paddingLeft: isMoble ? '0px' : '36px' }">
                <h3>
                    <el-icon :size="iconSize" class="hidden-sm-and-up">
                        <component :is="icon"></component>
                    </el-icon>
                    <span>{{ name }}</span>
                </h3>
                <slot></slot>
            </div>
        </div>
    </el-card>
</template>

<style scoped>
.signboard {
    display: flex;
    justify-content: left;
    align-items: center;
}
</style>