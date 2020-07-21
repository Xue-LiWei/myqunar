<template>
  <div class="thedetails">
    <div class="header">
      <router-link to="/">
        <div class="back">
          <img src="../../assets/images/backwhite.png" alt="">
        </div>
      </router-link>
    </div>

    <div class="box">
      <div class="cservice">
        <span>
          <img src="../../assets/images/tab3.png" alt="">
        </span>
        <p>客服</p>
      </div>
      <div class="buycar">
        <span>
          <img src="../../assets/images/buycar.png" alt="">
        </span>
        <p>购物车</p>
      </div>
      <div class="shop">
        <span>
          <img src="../../assets/images/shop.png" alt="">
        </span>
        <p>店铺</p>
      </div>
      <div class="addcar">加入购物车</div>
      <div class="book">立即预定</div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "thedetails"
    }
</script>

<style scoped>
  .thedetails{
    width: 100%;
    height: 100vh;
    background-color: #eee;
  }

  .header{
    width: 100%;
    height: 40px;
    position: fixed;
    background-color: #18c0c8;
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

  .box{
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
  }

  .cservice,.buycar,.shop{
    width: 13%;
    height: 100%;
    text-align: center;
    float: left;
    margin: 0 1%;
  }

  .cservice span,.buycar span,.shop span{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-top: 5px;
  }

  .cservice span img,.buycar span img,.shop span img{
    width: 20px;
    height: 20px;
    display: block;
  }

  .cservice p,.buycar p,.shop p{
    font-size: 0.7em;
    color: #616161;
  }

  .addcar,.book{
    width: 25%;
    height: 80%;
    margin: 5px 1.25%;
    text-align: center;
    line-height: 40px;
    font-size: 1em;
    border-radius: 5px;
    color: #fff;
    float: left;
    background-color: #ff7400;
  }

  .addcar{
    background-color: #ff9800;
  }
</style>
