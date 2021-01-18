<template>
  <div class="login_container">
    <div class="login_box">
       <!-- 头像 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>

        <!-- 登录表单 -->
      <el-form label-width="0px" class="login_form">
        <!-- 邮箱 -->
        <el-form-item>
          <el-input class="input" 
          placeholder="邮箱"  
          prefix-icon="el-icon-user-solid"
          v-model="email"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input class="input"
           placeholder="密码"
           prefix-icon="el-icon-view"
           v-model="pwd"
           type="password"></el-input>
        </el-form-item>
        <!-- 用户名 -->
        <el-form-item>
          <el-input class="input"
           placeholder="用户名"
           prefix-icon="el-icon-view"
           v-model="name"></el-input>
        </el-form-item>
        <!-- 性别 -->
        <el-form-item>
          <el-input class="input"
           placeholder="性别"
           prefix-icon="el-icon-view"
           v-model="sex"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item>
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
        email:'',
        pwd:'',
        name:'',
        sex:''
    }
  },
  methods: {
      regist(){
          var _this = this;
        this.$http.post('user/register', {
            email: this.email,
            pwd: this.pwd,
            name: this.name,
            sex: this.sex
        }).then( function (response) {
        console.log(response.data);
        if(response.data.code == 200) {
            console.log(this)
            _this.$message.success("注册成功")
            _this.$router.push("login");
        }
        else {
            _this.$message.error("注册成功")
        }
        });
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
  height: 450px;
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