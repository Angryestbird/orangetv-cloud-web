<script setup lang="ts">
import { User } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'

const formRef = ref<FormInstance>()
var loginVO = reactive({
    username: '',
    password: ''
})
const rules = reactive<FormRules>({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 5, max: 30, message: '长度应为5-30', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 36, message: '长度应为6-36', trigger: 'blur' },
    ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}
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
                        <el-form :model="loginVO" label-width="60px" :rules="rules" ref="formRef"
                            style="max-width: 350px;">
                            <el-form-item label="用户" prop="username">
                                <el-input v-model="loginVO.username"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="password">
                                <el-input v-model="loginVO.password" type="password"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button @click="submitForm(formRef)">登录</el-button>
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
