<template>
  <el-container>
  <el-main>
      <el-table
      :data="tableData"
      style="width: 100%" border stripe>
       <el-table-column
       label="序号"
       width="100"
       type="index">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="250">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="fansNum"
        label="粉丝数"
        width="120"></el-table-column>
        <el-table-column
        prop="concernedNum"
        label="关注数"
        width="120">
      </el-table-column>
      <el-table-column
        label="关注"
        width="200">
            <template slot-scope="scope">
                <el-button type="success" @click="concernedto(scope.row.email)">关注</el-button>
            </template>
      </el-table-column>
    </el-table>
  </el-main>
  </el-container>
</template>

<script>
export default {
    data() {
        return {
          tableData: [],
          
        }
      },
      created: function () {
        var _this = this;
        this.$http.post('user/getNotMyFans', {
            email:_this.$session.get("userId")
            }).then( function (response) {
            console.log(response.data);
            if(response.data.code == 200) {
                _this.$message.success("请求成功")
                _this.tableData = response.data.data
            }
            else {
                _this.$message.error("请求失败")
            }
            });
        },
      methods:{
          concernedto(toEmail) {
              console.log(toEmail)
              var _this = this;
              this.$http.post('user/concernedto', {
                u1: this.$session.get("userId"),
                u2: toEmail
                }).then( function (response) {
                  console.log(response.data);
                  if(response.data.code == 200) {
                    console.log(this)
                      _this.$message.success("关注成功")
                      _this.$router.go(0)
                      
                  }
                  else {
                      _this.$message.error("关注失败")
                  }
                });
          },
          
      }
}
</script>

<style lang="less" scoped>

</style>