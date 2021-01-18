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
        prop="name"
        label="用户名"
        width="200">
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
        label="取关"
        width="200">
            <template slot-scope="scope">
                <el-button type="success" @click="cancelconcernedto(scope.row.email)">取关</el-button>
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
        this.$http.post('user/getMyConcerned', {
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
          cancelconcernedto(toMail) {
              console.log(toMail)
              var _this = this;
              this.$http.post('user/cancelconcernedto', {
                u1: this.$session.get("userId"),
                u2: toMail
                }).then( function (response) {
                  console.log(response.data);
                  if(response.data.code == 200) {
                    console.log(this)
                      _this.$message.success("取注成功")
                      _this.$router.go(0)
                      
                  }
                  else {
                      _this.$message.error("取注失败")
                  }
                });
          }
      }
}
</script>

<style lang="less" scoped>

</style>