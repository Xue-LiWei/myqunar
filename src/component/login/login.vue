<template>
  <div class="login">
    <div class="header">
      <div class="back" @click="back()">
        <img src="../../assets/images/backwhite.png" alt="">
      </div>
      <div class="signin">登录</div>
      <div class="signup">注册</div>
    </div>

    <div class="box">
      <div class="btn-box">
        <div class="btn-left" v-bind:class="{addbtn:flag=='left'}" @click="left()">短信验证码登录</div>
        <div class="btn-right" v-bind:class="{addbtn:flag=='right'}" @click="right()">账号登录</div>
      </div>
    </div>
<!--左边-->
    <form action="">
      <div class="input-box">
        <label for="phone">手机号</label>
        <input type="text" placeholder="请输入手机号" id="#phone">
      </div>
      <div class="input-box">
        <label for="code">验证码</label>
        <input type="text" placeholder="请输入验证码" id="#code">
        <span>获取验证码</span>
      </div>
    </form>

<!--右边-->
    <div class="go">登录</div>

  </div>
</template>

<script>
    export default {
        name: "login",
      data(){
        return{
          flag:'left'
        }
      },
      methods:{
        back(){
          this.$router.go(-1);
        },
        left(){
          this.flag='left';
        },
        right(){
          this.flag='right';
        }
      }
    }
</script>

<style scoped>
  .login{
    width: 100%;
    overflow: hidden;
  }

  .header{
    width: 100%;
    height: 50px;
    position: fixed;
    z-index: 99;
    background-color: #00afc7;
    border-bottom: 1px solid #aaa;
  }

  .back{
    width: 20%;
    height: 50px;
    float: left;
  }

  .back img{
    display: block;
    width: 24px;
    margin: 10px;
  }

  .signin{
    width: 60%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 1em;
    color: #fff;
    float: left;
  }

  .signup{
    width: 20%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 1em;
    color: #75ffff;
    float: left;
  }

  .box{
    width: 100%;
    height: 50px;
    padding-top: 50px;
    background-color: #00afc7;
  }

  .btn-box{
    width: 95%;
    height: 35px;
    margin: 7.5px auto;
    border-radius: 5px;
    color: #fff;
    border: 1px solid #fff;
    overflow: hidden;
  }

  .btn-left,.btn-right{
    width: 50%;
    height: 100%;
    float: left;
    font-size: 1em;
    text-align: center;
    line-height: 35px;
  }

  .addbtn{
    color: #18c0c8;
    background-color: #fff;
  }

  .input-box{
    width: 95%;
    height: 40px;
    margin: 0 auto;
    line-height: 40px;
    border-bottom: 1px solid #aaa;
  }

  .input-box:nth-of-type(2){
    border: none;
  }

  .input-box label{
    color: #18c0c8;
    font-size: 1em;
  }

  .input-box input{
    width: 40%;
    height: 30px;
    margin-left: 40px;
    outline: none;
    border: none;
  }

  .input-box span{
    width: 30%;
    height: 28px;
    font-size: 0.9em;
    line-height: 28px;
    text-align: center;
    color: #d7d7d7;
    border-radius: 5px;
    border: 1px solid #aaa;
    float: right;
    margin: 5px;
  }

  form{
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
    margin-top: 10px;
  }

  .go{
    width: 95%;
    height: 50px;
    margin: 15px 2.5%;
    line-height: 50px;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    background-color: #18c0c8;
  }
</style>
