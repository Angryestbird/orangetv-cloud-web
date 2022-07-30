<script setup lang="ts">
import { User } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useLoginStore } from '~/stores/loginStore.js'
import { VideoPlay } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'
import { onMounted, reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'

const loginVO = reactive({
    username: '',
    password: ''
})

const route = useRoute()
const router = useRouter()
const formRef = ref<FormInstance>()
const loginStore = useLoginStore()
onMounted(loginStore.queryLogin)

const showError = ref('error' in route.query)
const { loggedIn, userInfo } = storeToRefs(loginStore)

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
    var validateResult = await formEl.validate((valid, fields) => {
        if (!valid) {
            console.log('表单格式有误！', fields)
        }
    })
    if (validateResult) {
        var form = <HTMLFormElement>formEl.$el
        form.action = "/api/AUTH-SERVER/login"
        form.method = "post"
        form.submit()
    }
}

const resetForm = (formEl: FormInstance | undefined) => {
    loginVO.username = ''
    loginVO.password = ''
}
</script>

<template>
    <div>
        <el-page-header :icon="User" content="用户" title=" " />
        <el-row :gutter="20">
            <el-col v-if="!loggedIn" :span="12" :offset="6" :xs="{ span: 24, offset: 0 }">
                <el-card style="margin-top: 12px;">
                    <div style="display:flex;justify-content: center;align-items:center;">
                        <img class="logo" src="/favicon.svg" /><span style="font-size: large;">橘子云TV</span>
                    </div>
                    <div style="display:flex;justify-content: center;padding-top: 36px;">
                        <el-form :model="loginVO" label-width="60px" :rules="rules" ref="formRef"
                            style="max-width: 350px;" @keyup.enter="submitForm(formRef)">
                            <el-form-item label="用户" prop="username">
                                <el-input v-model="loginVO.username" name="username"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="password">
                                <el-input v-model="loginVO.password" name="password" type="password"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="warning" @click="submitForm(formRef)">登录</el-button>
                                <el-button @click="resetForm(formRef)">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
                <el-alert v-if="showError" title="用户名或密码错误" type="warning" center show-icon />
            </el-col>
            <el-col v-if="loggedIn" :span="12" :offset="6" :xs="{ span: 24, offset: 0 }">
                <el-card style="margin-top: 12px;">
                    <div style="display:flex;justify-content: center;align-items:center;">
                        <span style="font-size: large;">欢迎您，{{ userInfo.sub }}</span>
                    </div>
                    <div style="display:flex;justify-content: center;padding-top: 36px;">
                        <img class="logo big" src="/favicon.svg" />
                    </div>
                    <div style="display:flex;justify-content: center;padding-top: 36px;">
                        <el-button :icon="VideoPlay" @click="router.push('/video/list')">
                            前往观看影视
                        </el-button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<style>
.logo.big {
    width: 180px;
    height: 180px;
}

.logo {
    width: 36px;
    height: 36px;
}
</style>
