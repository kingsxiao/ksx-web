<template>
  <div class="nav-bar">
    <div class="right">
      <span>动态</span>
      <span>消息</span>
      <span>浏览记录</span>
      <span>个人信息</span>
      <span>用户名</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar"
}
</script>

<style lang="less" scoped>
.nav-bar{
  height: 50px;
  width: 100%;
  background: #7f828b;
  .right{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
