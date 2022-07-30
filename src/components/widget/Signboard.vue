<script setup lang="ts">
import { DefineComponent } from 'vue';

interface Props {
    name: string,
    icon: DefineComponent<any>
}

const props = defineProps<Props>()
</script>

<template>
    <el-card>
        <div class="signboard">
            <el-icon :size="60">
                <component :is="icon"></component>
            </el-icon>
            <div style="padding-left: 36px;">
                <h3>
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