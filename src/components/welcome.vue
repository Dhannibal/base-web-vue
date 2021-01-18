<template>
  <el-container>
  <el-main>
      <h1>welcome!</h1>
      <h1>{{userid}}</h1>
  </el-main>
</el-container>

</template>

<script>
export default {
    data(){
        return {
            userid:this.$session.get("userId")
        }
    }
}
</script>

<style lang="less" scoped>
h1{
    font-size: 50px;
}
</style>