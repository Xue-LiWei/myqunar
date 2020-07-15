<script src="../../main.js"></script>
<template>
    <div class="xlw-index">
<!--      首页底部tabbar-->
      <mt-tabbar v-model="selected">
          <router-link to="/">
            <mt-tab-item id="tab1">
              <img slot="icon" src="../../assets/images/tab1.png">
              首页
            </mt-tab-item>
          </router-link>

          <router-link to="/book">
            <mt-tab-item id="tab2">
              <img slot="icon" src="../../assets/images/tab2.png">
              订单
            </mt-tab-item>
          </router-link>

        <router-link to="/cservice">
          <mt-tab-item id="tab3">
            <img slot="icon" src="../../assets/images/tab3.png">
            客服
          </mt-tab-item>
        </router-link>

        <router-link to="/mine">
          <mt-tab-item id="tab4">
            <img slot="icon" src="../../assets/images/tab4.png">
            我的
          </mt-tab-item>
        </router-link>
      </mt-tabbar>

<!--      首页内容-->
<!--      搜索与下载-->
      <div class="index-header">
        <div class="myselect">
          <span>
            <img src="../../assets/images/select.png" alt="">
          </span>搜索景点门票
        </div>
        <div class="download">
          <span><img src="../../assets/images/download.png" alt=""></span>
          <i>下载App</i>
        </div>
      </div>

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
            <i>酒店</i>
          </li>
          <li>
            <img src="../../assets/images/kind2-2.png" alt="">
            <i>机票</i>
          </li>
          <li>
            <img src="../../assets/images/kind2-3.png" alt="">
            <i>火车票</i>
          </li>
          <li>
            <img src="../../assets/images/kind2-4.png" alt="">
            <i>度假</i>
          </li>
          <li>
            <img src="../../assets/images/kind2-5.png" alt="">
            <i>景点门票</i>
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
    export default {
      name: "index",
      data(){
        return {
          selected:'tab1'
        }
      }
    }
</script>

<style scoped>
  .xlw-index .mint-tabbar{
    width: 100%;
    height: 50px;
    background-color: #fff;
    text-decoration: none;
  }

  .xlw-index .mint-tabbar .router-link-active {
    background-color: #fff;
    color: #18c0c8;
  }

  .xlw-index .mint-tabbar >  a{
    text-decoration: none;
    width: 23%;
    margin: 0 20px;
    color: #707070;
  }

  .xlw-index .mint-tab-item{
    padding: 0;
  }

  .xlw-index .mint-tab-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
  }

  .index-header{
    width: 95%;
    margin: 18px auto;
    overflow: hidden;
  }

  .myselect{
    width: 80%;
    height: 36px;
    line-height: 36px;
    background-color: #eeeeee;
    font-size: 16px;
    color: #aaaaaa;
    border-radius: 3px;
    float: left;
  }

  .myselect span{
    display: inline-block;
    vertical-align: middle;
    width: 22px;
    height: 22px;
    text-align: center;
    line-height: 22px;
    margin: 0 10px;
  }

  .myselect span img{
    width: 22px;
    height: 22px;
  }

  .download{
    width: 16%;
    font-size: 13px;
    float: left;
    text-align: center;
    margin-left: 10px;
  }

  .download span{
    display: block;
    width: 20px;
    height: 20px;
    margin: 3px auto 0;
    border-radius: 50%;
  }

  .download span img{
    width: 20px;
    height: 20px;
  }

  .download i{
    width: 100%;
    font-size: 6px;
    font-style: normal;
  }

  .kinds-one,.kinds-two{
    width: 100%;
    padding: 7px 0;
  }

  .kinds-one ul,.kinds-two ul{
    width: 95%;
    margin:0 auto;
    overflow: hidden;
  }

  .kinds-one ul>li,.kinds-two ul>li{
    width: 20%;
    float: left;
    text-align: center;
  }

  .kinds-one ul>li img{
    width: 80%;
    border-radius: 50%;
  }

  .kinds-one ul>li i{
    display: block;
    width: 80%;
    margin: 3px auto 0;
    font-style: normal;
    font-size: 13px;
  }

  .kinds-two ul>li img{
    width: 40%;
    border-radius: 50%;
  }

  .kinds-two ul>li i{
    display: block;
    width: 80%;
    margin: 3px auto 0;
    font-style: normal;
    font-size: 13px;
  }
</style>
