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
        this.$http.post('user/getMyFans', {
            email:_this.$session.get("userId")
            }).then( function (response) {
            console.log(response.data);
            if(response.data.code == 200) {
                _this.$message.success("请求成功")
                if(response.data.data != null)
                    _this.tableData = response.data.data
                else console.log("!!")
            }
            else {
                _this.$message.error("请求失败")
            }
            });
        },
      methods:{
          
      }
}
</script>

<style lang="less" scoped>

</style>