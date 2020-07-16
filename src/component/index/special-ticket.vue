<template>
  <main>
    <div class="Special-ticket">
      <h2>特惠门票</h2>
      <div class="sttitle-box">
        <span class="sttitle-one">当季景点门票</span>
        <span class="sttitle-two">特惠门票</span>
      </div>
      <ul class="st-con">
        <li>
          <a href="#">
            <div class="img-box">
              <img src="../../assets/images/st-1.jpg" alt="">
            </div>
            <p>含长隆水上乐园</p>
            <b>全球必去的水上乐园</b>
            <i>￥ 125</i>
          </a>
        </li>
      </ul>
      <!--        更多-->
      <div class="st-more">
        更多特惠门票
        <span>
          <img src="../../assets/images/right.png" alt="">
        </span>
      </div>
    </div>
  </main>
</template>

<script>
    export default {
        name: "special-ticket"
    }
</script>

<style scoped>
  .Special-ticket{
    width: 95%;
    margin: 10px auto;
    padding: 10px 0;
    /*background-color: #aaaaaa;*/
    overflow: hidden;
  }

  .Special-ticket h2{
    font-size: 1.2em;
    font-weight: 700;
    margin-left: 5px;
    line-height: 1em;
  }

  .sttitle-box{
    width: 100%;
    margin: 10px 0 5px;
  }

  .sttitle-one,.sttitle-two{
    display: inline-block;
    width: 30%;
    height: 30px;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    margin-right: 5px;
    border-radius: 3px;
    border: 1px solid #d7d7d7;
  }

  .sttitle-one{
    background-color: #18c0c8;
    color: #fff;
  }

  .sttitle-two{
    background-color: #fff;
    color: #707070;
  }

  .st-con{
    width: 100%;
    overflow: hidden;
    padding-bottom: 10px;
  }

  .st-con li{
    width: 49%;
    float: left;
    background-color: #FFFFFF;
  }

  .st-con li:nth-of-type(2n){
    margin-left: 2%;
  }

  .st-con li a{
    display: block;
    text-decoration: none;
  }

  .st-con .img-box{
    position: relative;
  }

  .st-con li img{
    width: 100%;
    display: block;
  }

  .st-con li>a>p{
    color: #000;
    font-size: 0.85em;
    line-height: 1.7em;
    padding-left: 5px;
  }

  .st-con li>a>b{
    display: block;
    width: 100%;
    color: #707070;
    font-style: normal;
    font-weight: normal;
    font-size: 0.8em;
    padding-left: 5px;
  }

  .st-con li>a>i{
    color: #ff7400;
    font-weight: bold;
    font-style: normal;
    font-size: 1em;
    padding-left: 5px;
  }

  .st-more{
    width: 95%;
    border: 1px solid #18c0c8;
    border-radius: 3px;
    background-color: #fff;
    margin: 10px auto 0;
    text-align: center;
    font-size: 0.8em;
    line-height: 2.8em;
    color: #18c0c8;
  }

  .st-more span{
    display: inline-block;
    width: 10px;
    height: 10px;
    line-height: 5px;
    text-align: center;
    vertical-align: middle;
  }

  .st-more span img{
    width: 8px;
    height: 8px;
  }
</style>
