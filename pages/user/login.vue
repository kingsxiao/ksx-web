<template>
  <div class="Login d-flex j-c a-c">
    <div class="window d-flex flex-col j-c a-c">
      <h2>用户登录</h2>
      <div class="login_box">
        <input v-model="userInfo.username" name="userName" type="text" required/>
        <label for="userName">用户名</label>
      </div>
      <div class="login_box">
        <input v-model="userInfo.password" name="passWord" type="text" required/>
        <label for="passWord">密码</label>
      </div>
      <div class="button" to="#" @click="login">
        登录
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <router-link to="/Register" class="Register">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userInfo: {
        username: '',
        password: '',
        token: '',
        userId: ''
      }
    }
  },
  mounted(){
    console.log(this.userInfo)
  },
  methods: {
    login() {
      let param = {
        username: this.userInfo.username,
        password: this.userInfo.password
      }
      this.$axios.post('/admin/login',param).then((res)=>{
        console.log(res)
        if(res.data.code == 0){
          this.$message.success('登陆成功！')
          localStorage.setItem('user_id',res.data.user_id)
          localStorage.setItem('token',res.data.token)
          localStorage.setItem('username',this.userInfo.username)
          this.$router.push('./')
        }else{
          this.$message.error('用户名或密码错误！')
        }
      })
    }
  }
};
</script>

<style scoped lang="less">
.Login {
  background: linear-gradient(#141e30, #243b55);
  height: 100vh;
  width: 100vw;
  display: flex;justify-content: center;
  align-items: center;
  .window{
    width: 400px;
    padding: 40px;
    background: rgba(0, 0, 0, .2);
    box-shadow: 0 15px 25px rgba(0, 0, 0, .4);
    h2{
      color: #FFFFFF;
      margin-bottom: 30px;
    }
    .login_box{
      position: relative;
      width: 100%;
      input{
        outline:none;
        border: none;
        width: 100%;
        padding: 10px 0;
        background: transparent;
        margin-bottom: 30px;
        font-size: 16px;
        color: #FFFFFF;
        border-bottom: 1px solid #FFFFFF;
        &:focus + label,&:valid + label{
          top: -20px;
          color: #03e9f4;
          font-size: 12px;
        }
      }
      label{
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        color: #FFFFFF;
        pointer-events: none;
        transition: all .5s;
      }
    }
    .Register{
      margin-top: 30px;
      color: #03e9f4;
      user-select: none;
      border-bottom: 1px solid transparent;
      &:hover{
        color: #FFFFFF;
        border-color: #FFFFFF;
      }
    }
    .button{
      overflow: hidden;
      color: #03e9f4;
      position: relative;
      padding: 10px 20px;
      text-align: center;
      transition: all .5s;
      cursor: pointer;
      user-select: none;
      &:hover{
        color: #FFFFFF;
        border-radius: 5px;
        background: #03e9f4;
        box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
      }
      span{
        position: absolute;
        &:first-child{
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right,transparent 0,#03e9f4 100%);
          animation: animation1 1s linear infinite;
        }
        &:nth-child(2){
          top: -100%;
          right: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(transparent 0,#03e9f4 100%);
          animation: animation2 1s linear .25s infinite;
        }
        &:nth-child(3){
          bottom: 0;
          right: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(to left,transparent 0,#03e9f4 100%);
          animation: animation3 1s linear .5s infinite;
        }
        &:last-child{
          bottom: -100%;
          left: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(#03e9f4 0,transparent 100%);
          animation: animation4 1s linear .75s infinite;
        }
      }
    }
  }
}
@keyframes animation1 {
  0%{
    left: -100%;
  }
  50%,
  100%{
    left: 100%;
  }

}
@keyframes animation2 {
  0%{
    top: -100%;
  }
  50%,
  100%{
    top: 100%;
  }

}
@keyframes animation3 {
  0%{
    right: -100%;
  }
  50%,
  100%{
    right: 100%;
  }

}
@keyframes animation4 {
  0%{
    bottom: -100%;
  }
  50%,
  100%{
    bottom: 100%;
  }

}
</style>
