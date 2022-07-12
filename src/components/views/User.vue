<script setup lang="ts">
import { User } from '@element-plus/icons-vue';
import { reactive } from 'vue';

var loginVO = reactive({
    username: '',
    password: ''
})
</script>

<template>
    <div>
        <el-page-header :icon="User" content="用户" title=" " />
        <el-row :gutter="20">
            <el-col :span="12" :offset="6" :xs="{ span: 24, offset: 0 }">
                <el-card style="margin-top: 12px;">
                    <div style="display:flex;justify-content: center;align-items:center;">
                        <img class="logo" src="/favicon.svg" /><span style="font-size: large;">橘子云TV</span>
                    </div>
                    <div style="display:flex;justify-content: center;">
                        <el-form :model="loginVO" label-width="60px" style="max-width: 350px;">
                            <el-form-item label="用户">
                                <el-input v-model="loginVO.username"></el-input>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input v-model="loginVO.password" type="password"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button>登录</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<style>
.logo {
    width: 36px;
    height: 36px;
}
</style>
