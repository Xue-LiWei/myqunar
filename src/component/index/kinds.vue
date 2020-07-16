<template>
  <main>
    <div class="kinds-one">
      <ul>
        <li>
          <img src="../../assets/images/hotel.png" alt="">
          <i>酒店</i>
        </li>
        <li>
          <img src="../../assets/images/flight.png" alt="">
          <i>机票</i>
        </li>
        <li>
          <img src="../../assets/images/train.png" alt="">
          <i>火车票</i>
        </li>
        <li>
          <img src="../../assets/images/package.png" alt="">
          <i>度假</i>
        </li>
        <li>
          <img src="../../assets/images/piao.png" alt="">
          <i>景点门票</i>
        </li>
      </ul>
    </div>

    <div class="kinds-two">
      <ul>
        <li>
          <img src="../../assets/images/kind2-1.png" alt="">
          <i>海外酒店</i>
        </li>
        <li>
          <img src="../../assets/images/kind2-2.png" alt="">
          <i>低价机票</i>
        </li>
        <li>
          <img src="../../assets/images/kind2-3.png" alt="">
          <i>汽车票船票</i>
        </li>
        <li>
          <img src="../../assets/images/kind2-4.png" alt="">
          <i>自由行</i>
        </li>
        <li>
          <img src="../../assets/images/kind2-5.png" alt="">
          <i>攻略</i>
        </li>
      </ul>
    </div>

    <div class="kinds-three">
      <ul>
        <li>
          <img src="../../assets/images/kind3-1.png" alt="">
          <i>名宿客栈</i>
        </li>
        <li>
          <img src="../../assets/images/kind3-2.png" alt="">
          <i>专车自驾</i>
        </li>
        <li>
          <img src="../../assets/images/kind3-3.png" alt="">
          <i>赚钱·信用卡</i>
        </li>
        <li>
          <img src="../../assets/images/kind3-4.png" alt="">
          <i>旅游团购</i>
        </li>
        <li>
          <img src="../../assets/images/kind3-5.png" alt="">
          <i>一日游</i>
        </li>
      </ul>
    </div>

    <div class="kinds-four">
      <ul>
        <li>
          <img src="../../assets/images/kind4-1.png" alt="">
          <i>特惠酒店</i>
        </li>
        <li>
          <img src="../../assets/images/kind4-2.png" alt="">
          <i>借钱</i>
        </li>
        <li>
          <img src="../../assets/images/kind4-3.png" alt="">
          <i>白金卡</i>
        </li>
        <li>
          <img src="../../assets/images/kind4-4.png" alt="">
          <i>邮轮</i>
        </li>
        <li>
          <img src="../../assets/images/kind4-5.png" alt="">
          <i>周边短途</i>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
    export default {
        name: "kinds"
    }
</script>

<style scoped>
  .kinds-one,.kinds-two,.kinds-three,.kinds-four{
    width: 100%;
    padding: 7px 0;
  }

  .kinds-one ul,.kinds-two ul,.kinds-three ul,.kinds-four ul{
    width: 95%;
    margin:0 auto;
    overflow: hidden;
  }

  .kinds-one ul>li,.kinds-two ul>li,.kinds-three ul>li,.kinds-four ul>li{
    width: 20%;
    float: left;
    text-align: center;
  }

  .kinds-one ul>li img{
    width: 70%;
    border-radius: 50%;
  }

  .kinds-one ul>li i{
    display: block;
    width: 80%;
    margin: 3px auto 0;
    font-style: normal;
    font-size: 13px;
  }

  .kinds-two ul>li img,.kinds-three ul>li img,.kinds-four ul>li img{
    width: 40%;
    border-radius: 50%;
  }

  .kinds-two ul>li i,.kinds-three ul>li i,.kinds-four ul>li i{
    display: block;
    width: 100%;
    margin: 3px auto 0;
    font-style: normal;
    font-size: 13px;
  }
</style>
