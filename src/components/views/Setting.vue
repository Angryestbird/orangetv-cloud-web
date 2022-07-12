<script setup lang="ts">
import { Setting } from '@element-plus/icons-vue';
import { isDark, toggleDark } from '~/composables';

</script>

<template>
    <div>
        <el-page-header :icon="Setting" content="设置" title=" " />
        <el-row :gutter="20">
            <el-col :span="12" :offset="6" :xs="{ span: 24, offset: 0 }">
                <div class="grid-content ep-bg-purple">
                    <el-card style="margin-top: 12px;">
                        <el-form>
                            <el-form-item label="夜间模式">
                                <el-switch :value="isDark" @click="toggleDark()"></el-switch>
                            </el-form-item>
                        </el-form>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
