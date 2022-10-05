<template>
    <div>
        <el-button type="info" @click="cleartoken()">退出</el-button>
    </div>
</template>

<script>
export default {
    name: "MyHome",
    methods: {
        cleartoken() {
            window.sessionStorage.clear();
            //清空所有的token
            this.$router.push('/login')
            //跳转到登录页面
        }
    }
}
</script>

<style lang="scss" scoped>
</style>