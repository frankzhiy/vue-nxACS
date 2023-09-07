<template>
  <div class="login-container">
    <div class="login-wrapper">
      <div class="login-title">欢迎，请登录</div>
      <el-form ref="loginForm" :model="loginForm" :rules="rules" class="login-form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item class="submit-button-container">
          <el-button type="primary" @click="handleSubmit">登 陆</el-button>
        </el-form-item>
      </el-form>
      <div class="extra-links">
        <a href="#">忘记密码?</a>
        没有账号？<a href="#">点击这里</a>
      </div>
    </div>
    <div class="footer-text">宁夏ACS</div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const loginForm = ref({
      username: "",
      password: "",
    });

    const rules = {
      username: [
        { required: true, message: "Oops！请输入用户名", trigger: "blur" },
      ],
      password: [
        { required: true, message: "密码也别忘了", trigger: "blur" },
      ],
    };

    function handleSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          console.log("Submit:", loginForm.value);
        } else {
          console.log("Validation failed");
          return false;
        }
      });
    }

    return {
      loginForm,
      rules,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('~@/assets/Login.jpg');
  background-size: cover;
  background-position: center;
}

.login-wrapper {
  width: 350px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 40px;
}

.login-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}

.login-form {
  margin-bottom: 20px;
}
.submit-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.extra-links {
  display: flex;
  justify-content: space-between;
}

.extra-links a {
  color: #409eff;
  text-decoration: none;
}

.extra-links a:hover {
  text-decoration: underline;
}

.footer-text {
  position: absolute;
  bottom: 20px;
  text-align: center;
  width: 100%;
  font-size: 16px;
}
</style>
