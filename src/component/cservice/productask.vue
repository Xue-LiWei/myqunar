<template>
  <div class="productask">
    <div class="question-top">
      <ul>
        <li>
          <img src="../../assets/images/kind2-1.png" alt="">
          <i>机票问题</i>
        </li>
        <li>
          <img src="../../assets/images/kind2-2.png" alt="">
          <i>酒店问题</i>
        </li>
        <li>
          <img src="../../assets/images/kind2-3.png" alt="">
          <i>火车票问题</i>
        </li>
        <li>
          <img src="../../assets/images/kind2-4.png" alt="">
          <i>门票问题</i>
        </li>
        <li>
          <img src="../../assets/images/kind2-5.png" alt="">
          <i>度假问题</i>
        </li>
        <li>
          <img src="../../assets/images/train.png" alt="">
          <i>用车问题</i>
        </li>
        <li>
          <img src="../../assets/images/package.png" alt="">
          <i>账号问题</i>
        </li>
        <li>
          <img src="../../assets/images/piao.png" alt="">
          <i>其他</i>
        </li>
      </ul>
    </div>

    <div class="question-con">
      <p>常见问题</p>
      <ul>
        <li>
          <span>
            <img src="../../assets/images/kind2-5.png" alt="">
          </span>
          闪游卡
        </li>
        <li>
          <span>
            <img src="../../assets/images/kind2-5.png" alt="">
          </span>
          实名认证
        </li>
        <li>
          <span>
            <img src="../../assets/images/kind2-5.png" alt="">
          </span>
          返现金额如何提现
        </li>
        <li>
          <span>
            <img src="../../assets/images/package.png" alt="">
          </span>
          账户安全险问题
        </li>
        <li>
          <span>
            <img src="../../assets/images/kind2-5.png" alt="">
          </span>
          找不到订单
        </li>
        <li>
          <span>
            <img src="../../assets/images/package.png" alt="">
          </span>
          火车票退票手续费怎么算
        </li>
        <li>
          <span>
            <img src="../../assets/images/train.png" alt="">
          </span>
          到店无法入住
        </li>
      </ul>
    </div>

    <div class="tologin">
      <p>点击登录，享受更多服务</p>
      <div class="login">登录</div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "productask"
    }
</script>

<style scoped>
  .productask{
    width: 100%;
    height: 100vh;
    background-color: #eeeeee;
  }

  .question-top{
    width: 100%;
    padding-top: 45px;
  }

  .question-top ul{
    width: 100%;
    margin:0 auto;
    overflow: hidden;
    background-color: #fff;
  }

  .question-top ul>li{
    width: 25%;
    float: left;
    text-align: center;
    margin: 10px 0;
  }

  .question-top ul>li img{
    width: 30%;
    border-radius: 50%;
  }

  .question-top ul>li i{
    display: block;
    width: 100%;
    margin: 3px auto 0;
    font-style: normal;
    font-size: 13px;
  }

  .question-con p{
    font-size: 0.8em;
    line-height: 3em;
    padding-left: 2.5%;
  }

  .question-con ul{
    width: 100%;
    border-radius: 6px;
    margin-bottom: 90px;
    background-color: #fff;
  }

  .question-con ul li{
    width: 95%;
    height: 3em;
    margin: 0 auto;
    font-size: 0.9em;
    line-height: 3em;
    border-bottom: 1px solid #eeeeee;
  }

  .question-con ul li span{
    display: inline-block;
    width: 1.6em;
    height: 1.6em;
    vertical-align: middle;
    text-align: center;
    line-height: 1.2em;
    margin-right: 5px;
  }

  .question-con ul li span img{
    width: 100%;
    height: 100%;
  }

  .tologin{
    width: 100%;
    padding: 0 0 10px;
    background-color: #eeeeee;
    z-index: 999;
    position: fixed;
    left: 0;
    bottom: 0;
  }

  .tologin p{
    font-size: 0.8em;
    line-height: 3em;
    padding-left: 2.5%;
  }

  .login{
    width: 95%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 8px;
    color: #18c0c8;
    background-color: #fff;
    margin: 0 auto;
  }
</style>
