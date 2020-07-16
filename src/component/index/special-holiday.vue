<template>
    <main>
      <div class="Special-holiday">
        <h2>特惠度假</h2>
        <div class="shtitle-box">
          <span class="shtitle-one">当季热门度假</span>
          <span class="shtitle-two">当季特惠度假</span>
        </div>
        <ul class="sh-con">
          <li>
            <a href="#">
              <div class="img-box">
                <img src="../../assets/images/sh-1.jpg" alt="">
                <!--图片上文字-->
                <span>
                  <i>广州-丽江</i>
                  <b>3天跟团游</b>
                </span>
              </div>
              <p>含往返飞机票+2晚住宿</p>
              <i>￥ 2070</i>
            </a>
          </li>
        </ul>
<!--        更多-->
        <div class="sh-more">
          更多特惠度假
          <span>
            <img src="../../assets/images/right.png" alt="">
          </span>
        </div>
      </div>
    </main>
</template>

<script>
    export default {
        name: "special-holiday"
    }
</script>

<style scoped>
  .Special-holiday{
    width: 95%;
    margin: 0 auto;
    padding: 10px 0;
    /*background-color: #aaaaaa;*/
    overflow: hidden;
  }

  .Special-holiday h2{
    font-size: 1.2em;
    font-weight: 700;
    margin-left: 5px;
    line-height: 1em;
  }

  .shtitle-box{
    width: 100%;
    margin: 10px 0 5px;
  }

  .shtitle-one,.shtitle-two{
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

  .shtitle-one{
    background-color: #18c0c8;
    color: #fff;
  }

  .shtitle-two{
    background-color: #fff;
    color: #707070;
  }

  .sh-con{
    width: 100%;
    overflow: hidden;
    padding-bottom: 10px;
  }

  .sh-con li{
    width: 49%;
    float: left;
    background-color: #FFFFFF;
  }

  .sh-con li:nth-of-type(2n){
    margin-left: 2%;
  }

  .sh-con li a{
    display: block;
    text-decoration: none;
  }

  .sh-con .img-box{
    position: relative;
  }

  .sh-con li img{
    width: 100%;
    display: block;
  }

  .sh-con li span{
    display: block;
    width: 60%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    background-color: rgba(0,0,0,0.5);
  }

  .sh-con li span>i{
    display: block;
    width: 100%;
    color: #fff;
    font-size: 0.85em;
    font-style: normal;
    text-align: center;
    margin: 5px 0;
  }

  .sh-con li span>b{
    display: block;
    width: 100%;
    color: #ffde00;
    font-size: 0.2em;
    font-style: normal;
    text-align: center;
    margin: 5px 0 2px;
  }

  .sh-con li>a>p{
    color: #000;
    font-size: 0.85em;
    line-height: 1.7em;
    padding-left: 5px;
  }

  .sh-con li>a>i{
    display: block;
    width: 100%;
    color: #ff7400;
    font-weight: bold;
    font-style: normal;
    font-size: 1em;
    padding-left: 5px;
  }

  .sh-more{
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

  .sh-more span{
    display: inline-block;
    width: 10px;
    height: 10px;
    line-height: 5px;
    text-align: center;
    vertical-align: middle;
  }

  .sh-more span img{
    width: 8px;
    height: 8px;
  }
</style>
