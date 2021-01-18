<template>
        <el-container class="el_container">
            <!-- 头部区域 -->
        <el-header class="el_header">
            <div>
                <img src="../assets/logo.png" class = "el_img">  
            </div>
            <span>hbase-web-微博用户展示</span>
             <el-button type="primary" @click="creat">生成用户</el-button>
            <el-button type="primary" @click="logout">退出</el-button>
        </el-header>
        <!-- 页面主题 -->
            <el-container>
                <!-- 侧边栏 -->
                <el-aside width="250px" class="el_aside">
                    <!-- 侧边栏菜单 -->
                    <el-menu
                        background-color="#333744"
                        text-color="#fff"
                        active-text-color="#2487e7" router>
                        <!-- 一级菜单 -->
                        <el-menu-item index="/users">
                            <i class="el-icon-s-custom"></i>
                            <span>关注用户</span> 
                            </el-menu-item>

                            <el-menu-item index="/myconcerned">
                            <i class="el-icon-s-custom"></i>
                            <span>我的关注</span> 
                            </el-menu-item>
        
                        <el-menu-item index="/myfans">
                            <i class="el-icon-s-custom"></i>
                            <span>我的粉丝</span> 
                            </el-menu-item>

                            <el-menu-item @click="dialogVisible = true">
                            <i class="el-icon-s-custom"></i>
                            <span>谁关注了谁</span> 
                            </el-menu-item>
                        </el-menu>
                </el-aside>
                <!-- 右边 -->
                <el-main class="el_main">
                    <!-- {{email}} -->
                    <router-view></router-view>
                </el-main>
            </el-container>
            <!-- 谁关注了谁 对话框 -->
            <el-dialog
            title="查询A是否关注了B"
            :visible.sync="dialogVisible"
            width="50%">

                <el-input class="input" 
                placeholder="用户A"  
                prefix-icon="el-icon-user-solid"
                v-model="dialog.A"></el-input>

                <el-input class="input" 
                placeholder="用户B"  
                prefix-icon="el-icon-user-solid"
                v-model="dialog.B"></el-input>

                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="search(dialog.A, dialog.B)">确 定</el-button>
                </span>
            </el-dialog>
        </el-container>
</template>

<script>
export default {
    data(){
        return {
            email: this.$session.get("userId"),
            dialogVisible: false,
            dialog: {
                A:'',
                B:''
            }
        }
    },
    methods:{
        logout() {
            this.$router.push("/login")
        },
        search(userA, userB) {
            console.log(userA)
            console.log(userB)
            var _this = this;
            this.$http.post('user/isConcerned', {
                u1:userA,
                u2:userB
                }).then( function (response) {
                console.log(response.data);
                if(response.data.code == 200) {
                    // _this.$message.success("请求成功")
                    let istrue = response.data.data
                    if(istrue) {
                        _this.$alert("你猜对了")
                    }
                    else{
                        _this.$alert("还没关注哦！")
                    }
                }
                else {
                    _this.$message.error("请求失败")
                }
            });
            this.dialog.A = ''
            this.dialog.B = ''
            this.dialogVisible = false
        },
        creat(){

        }
    }
}
</script>

<style lang="less" scoped>
.el_header{
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 30px;

}
.el_aside{
     background-color: #333744;
}
.el_main{
    background-color: #EAEDF1;
}
.el_container{
    height: 100%;
}
.el_img{
    width: 50px;
}
</style>