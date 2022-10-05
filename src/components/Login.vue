<template>
    <div class="container">
        <div class="login_box">
            <div class="avatar_box">
                <img src="@/assets/logo.png" alt="">
            </div>
            <el-form label-width="70px" class="login_form" v-model="form" :rules="rules" ref="login_form">
                <!-- 用户名 -->
                <el-form-item label="用户名" prop="username">
                    <el-input prefix-icon="iconfont icon-user" v-model="form.username" spellcheck="false"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item label="密码" prop="password">
                    <el-input prefix-icon="iconfont icon-password" v-model="form.password" show-password
                        spellcheck="false"></el-input>
                </el-form-item>
                <!-- 按钮 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login()">登录</el-button>
                    <el-button type="info" @click="resetForm()">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';



export default {
    name: 'MyLogin',
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        resetForm() {
            this.$refs.login_form.resetFields();
        },
        async login() {
            const { data: res } = await this.$http.post("login", this.form)

            if (res.meta.status != 200) {
                return this.$message({
                    message: '登录失败',
                    type: 'error '
                })
            } else {
                this.$message({
                    message: '登录成功',
                    type: 'success'
                })
                window.sessionStorage.setItem("token", res.data.token);
                // this.$router.push('/home')
                this.$router.push('/home')
            }
            // const { data: res } = await axios.post("login", this.login_form)
            // console.log(res);
        }
    }
}
</script>

<style lang="less" scoped>
.container {
    background-color: #2b4b6b;
    height: 100%;
}

.login_box {
    height: 300px;
    width: 450px;
    background-color: white;
    border-radius: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .avatar_box {
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;

        img {
            height: 100%;
            width: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }

    .btns {
        // 弹性盒模型
        display: flex;
        justify-content: flex-end;
    }

    .login_form {
        position: absolute;
        bottom: 0;
        width: 100%;
        transform: translate(-10px);
    }
}
</style>