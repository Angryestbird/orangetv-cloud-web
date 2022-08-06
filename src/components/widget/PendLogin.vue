
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useLoginStore } from '~/stores/loginStore'
import { onMounted } from 'vue';

interface Props {
    tryLogin: () => void,
}
const props = defineProps<Props>()
const loginStore = useLoginStore()
const { loggedIn } = storeToRefs(loginStore)
onMounted(() => props.tryLogin())
</script>

<template>
    <div>
        <el-skeleton v-if="!loggedIn" :rows="9" animated />
        <slot v-if="loggedIn"></slot>
    </div>
</template>
