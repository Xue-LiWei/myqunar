<template>
    <div class="booksevice">

      <div class="unlogin-box">
        <div class="unlogin">
          <img src="../../assets/images/wudingdan.png" alt="">
          <p class="tips">您还没有登录哦<br>点击登录，享受订单操作、问题咨询、投诉反馈等服务</p>
          <div class="login"><router-link to="/login">登录</router-link></div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "booksevice"
    }
</script>

<style scoped>
  .booksevice{
    width: 100%;
    height: 100vh;
  }

  .unlogin-box{
    background-color: #f0f2f4;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .unlogin{
    width: 50%;
    margin: 100px auto;
  }

  .unlogin img{
    width: 100%;
  }

  .tips{
    text-align: center;
    font-size: 1em;
    margin: 10px 0;
    color: #666;
  }

  .unlogin .login{
    width: 100px;
    height: 40px;
    background-color: transparent;
    color: #00afc7;
    line-height: 40px;
    text-align: center;
    margin: 20px auto;
    font-size: 1em;
    border: 1px solid #00afc7;
  }

  .unlogin .login a{
    text-decoration: none;
    color: #00afc7;
  }
</style>
