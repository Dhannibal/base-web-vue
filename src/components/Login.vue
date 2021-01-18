<template>
  <div class="login_container">
    <div class="login_box">
       <!-- 头像 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>

        <!-- 登录表单 -->
      <el-form ref="loginFormRef"  label-width="0px" class="login_form" :model="loginForm">
        <!-- 用户名 -->
        <el-form-item>
          <el-input class="input" 
          placeholder="邮箱"  
          prefix-icon="el-icon-user-solid"
          v-model="loginForm.email"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input class="input"
           placeholder="密码"
           prefix-icon="el-icon-view"
           v-model="loginForm.pwd"
           type="password"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
          <el-button type="primary" @click="regist">注册</el-button>
        </el-form-item>
       </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email:'825857667@qq.com',
        pwd:'123456'
      }
    }
  },
  methods:{
    // 重置
    resetLoginForm() {
        // console.log(this);
        this.loginForm.email = '';
        this.loginForm.pwd = '';
    },
    login() {
      var _this = this;
      this.$http.post('user/login', {
        email: this.loginForm.email,
        pwd: this.loginForm.pwd
        }).then( function (response) {
          console.log(response.data);
          if(response.data.code == 200) {
            console.log(this)
              _this.$message.success("登录成功")
              _this.$session.set("userId",_this.loginForm.email); 
              _this.$router.push("Home");
          }
          else {
              _this.$message.error("登录失败")
          }
        });
    },
    regist() {
        this.$router.push("regist");
    }
  }
}
</script>

<style lang="less" scoped>
.login_container{
  background-color: #2b4b6b;
  height: 100%;
}
.login_box{
  width: 450px;
  height: 300px;
  background-color: white;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box{
  height: 130px;
  width: 130px;
  border: 1px  solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img{
    width: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.login_form{
  margin-top: 20%;
}
.input {
  width: 80%;
}
</style>