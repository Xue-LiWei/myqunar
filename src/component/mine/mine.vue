<template>
    <div class="mine">
      <div class="header">
        <router-link to="/">
          <div class="back">
            <img src="../../assets/images/backwhite.png" alt="">
          </div>
        </router-link>
      </div>

      <div class="mine-top">
        <router-link to="/login">
          <span>
            <img src="../../assets/images/avatar.png" alt="">
          </span>
          <p>登录/注册</p>
        </router-link>
      </div>

      <div class="mymoney">
        <div class="money">
          <span>
            <img src="../../assets/images/money.png" alt="">
          </span>
          我的钱包
        </div>
        <ul class="mymoney-con">
          <li>
            <span>0.00</span>
            <p>账户余额</p>
          </li>
          <li>
            <span>0</span>
            <p>星券</p></li>
          <li>
            <span>0<i>张</i></span>
            <p>银行卡</p></li>
        </ul>
      </div>

      <ul class="mine-conn">
        <li>
          <span>
            <img src="../../assets/images/tip.png" alt="">
          </span>
          我的订单
          <i>
            <img src="../../assets/images/you.png" alt="">
          </i>
        </li>
        <li>
          <span>
            <img src="../../assets/images/tip.png" alt="">
          </span>
          我的退款
          <i>
            <img src="../../assets/images/you.png" alt="">
          </i>
        </li>
        <li>
          <span>
            <img src="../../assets/images/tip.png" alt="">
          </span>
          我的发票
          <i>
            <img src="../../assets/images/you.png" alt="">
          </i>
        </li>
        <li>
          <span>
            <img src="../../assets/images/tip.png" alt="">
          </span>
          我的攻略
          <i>
            <img src="../../assets/images/you.png" alt="">
          </i>
        </li>
        <li>
          <span>
            <img src="../../assets/images/tip.png" alt="">
          </span>
          意见反馈
          <i>
            <img src="../../assets/images/you.png" alt="">
          </i>
        </li>
        <li>
          <span>
            <img src="../../assets/images/tip.png" alt="">
          </span>
          关于去哪儿网
          <i>
            <img src="../../assets/images/you.png" alt="">
          </i>
        </li>
      </ul>

      <p>Qunar京ICP备05021087<span>电脑版</span></p>
    </div>
</template>

<script>
    export default {
        name: "mine"
    }
</script>

<style scoped>
  .mine{
    width: 100%;
    height: 100vh;
    background-color: #eee;
  }

  .header{
    width: 100%;
    height: 40px;
    position: fixed;
    background-color: transparent;
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

  .mine-top{
    width: 100%;
    height: 160px;
    text-align: center;
    overflow: hidden;
    background: url("../../assets/images/mybg.jpg") no-repeat 0 0;
    background-size: 100% 160px;
  }

  .mine-top span{
    display: block;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    border: 3px solid rgba(0,0,0,0.1);
    margin: 50px auto 5px;
    background: #eeeeee;
  }

  .mine-top span img{
    width: 65px;
    height: 65px;
  }

  .mine-top a{
    text-decoration: none;
  }

  .mine-top p{
    color: #fff;
    font-size: 0.9em;
  }

  .mymoney,.mine-conn{
    width: 100%;
    margin: 10px 0;
    background-color: #fff;
  }

  .mymoney-con{
    width: 100%;
  }

  .mymoney-con:after,.mine>p:after{
    content: "";
    display: block;
    clear: both;
  }

  .mymoney-con li{
    width: 25%;
    height: 65px;
    margin: 0 4%;
    text-align: center;
    line-height: 25px;
    float: left;
    padding-top: 15px;
    color: #666;
  }

  .mymoney-con li span{
    font-size: 1em;
  }

  .mymoney-con li p{
    font-size: 0.8em;
  }

  .mymoney-con li span i{
    margin-left: 2px;
    font-size: 0.5em;
    font-style: normal;
  }

  .mine-conn{
    background-color: transparent;
  }

  .money,.mine-conn li{
    width: 100%;
    height: 3em;
    margin: 0 auto;
    font-size: 0.9em;
    line-height: 3em;
    padding-left: 2.5%;
    background-color: #fff;
    border-bottom: 1px solid #eeeeee;
  }

  .mine-conn li:nth-of-type(5){
    margin-top: 10px;
  }

  .money span,.mine-conn li span{
    display: inline-block;
    width: 1.9em;
    height: 2em;
    vertical-align: middle;
    margin-right: 5px;
    border-radius: 10px;
    background-color: #4fc3f7;
  }

  .money span{
    background-color: #ff7043;
  }

  .mine-conn li:nth-of-type(2) span{
    background-color: #ffa21f;
  }

  .mine-conn li:nth-of-type(3) span{
    background-color: #ffa21f;
  }

  .mine-conn li:nth-of-type(4) span{
    background-color: #ffa21f;
  }

  .mine-conn li:nth-of-type(5) span{
    background-color: #90a4ae;
  }

  .mine-conn li:nth-of-type(6) span{
    background-color: #90a4ae;
  }

  .money span img,.mine-conn li span img{
    width: 80%;
    height: 80%;
    display: block;
    margin: 0.2em auto;
  }

  .mine-conn i{
    float: right;
    width: 3em;
    text-align: center;
    line-height: 3em;
  }

  .mine-conn i img{
    width: 10px;
    height: 10px;
  }

  .mine>p{
    text-align: center;
    font-size: 0.6em;
    color: #bfbfbf;
    position: relative;
    margin-top: 50px;
  }

  .mine>p>span{
    color: #00afc7;
    position: absolute;
    top: 0;
    right: 2.5%;
  }
</style>
