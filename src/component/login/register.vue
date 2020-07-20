<template>
  <div class="register">
    <div class="header">
      <div class="back" @click="back()">
        <img src="../../assets/images/backwhite.png" alt="">
      </div>
      <div class="signup">注册</div>
    </div>

    <form action="">
      <div class="input-box">
        <label for="phone">手机号</label>
        <input type="text" placeholder="请输入手机号" id="#phone">
      </div>
      <div class="input-box">
        <label for="icode">图形码</label>
        <input type="text" placeholder="请输入验证码" id="#icode">
        <span>获取图形码</span>
      </div>
      <div class="input-box">
        <label for="code">验证码</label>
        <input type="text" placeholder="请输入验证码" id="#code">
        <span>获取验证码</span>
      </div>
    </form>

    <div class="go">注册</div>
    <div class="allow">登录即同意去哪儿 <span>用户服务协议</span> 和 <span>隐私政策</span></div>
    <div class="footer">
      <div class="footer-box">
        <span>电脑端</span>
        <span>关于我们</span>
      </div>
      <p>Qunar 京ICP备05021087</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "register",
      methods:{
        back(){
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>
  .register{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    background-color: #f3f9fc;
  }

  .header{
    width: 100%;
    height: 40px;
    position: fixed;
    z-index: 99;
    background-color: #00afc7;
    border-bottom: 1px solid #aaa;
  }

  .back{
    width: 20%;
    height: 40px;
    float: left;
  }

  .back img{
    display: block;
    width: 24px;
    margin: 10px;
  }

  .signup{
    width: 60%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 1em;
    color: #fff;
    float: left;
  }

  .input-box{
    width: 95%;
    height: 40px;
    margin: 0 auto;
    line-height: 40px;
    border-bottom: 1px solid #aaa;
  }

  .input-box:nth-of-type(3){
    border: none;
  }

  .input-box label{
    color: #18c0c8;
    font-size: 1em;
    float: left;
  }

  .input-box input{
    width: 40%;
    height: 30px;
    margin-left: 40px;
    outline: none;
    border: none;
    float: left;
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
    margin-top: 50px;
    background-color: #fff;
  }

  .go{
    width: 95%;
    height: 50px;
    margin: 15px 2.5% 20px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    background-color: #18c0c8;
    opacity: 0.5;
  }

  .allow{
    width: 95%;
    margin: 2.5% auto;
    color: #9e9e9e;
    font-size: 0.8em;
    text-align: center;
  }

  .footer{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    padding-bottom: 20px;
  }

  .footer-box{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #d7d7d7;
  }

  .footer-box span{
    width: 50%;
    float: left;
    text-align: center;
    color: #18c0c8;
    line-height: 50px;
    font-size: 0.8em;
  }

  .footer p{
    text-align: center;
    color: #d4d9de;
    line-height: 40px;
    font-size: 0.8em;
  }
</style>
