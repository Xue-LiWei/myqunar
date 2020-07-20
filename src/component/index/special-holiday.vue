<template>
    <main>
      <div class="Special-holiday">
        <h2>特惠度假</h2>
        <div class="shtitle-box">
          <span v-bind:class="{shtitle:flag==1}" v-on:click="changeone()">当季热门度假</span>
          <span v-bind:class="{shtitle:flag==2}" v-on:click="changetwo()">当季特惠度假</span>
        </div>
        <ul class="sh-con" v-show="flag==1">
          <li v-for="(item,index) in holidaylist1">
              <div class="img-box">
                <img :src="item.imgsrc" alt="">
                <!--图片上文字-->
                <span>
                  <i>{{item.imgi}}</i>
                  <b>{{item.imgb}}</b>
                </span>
              </div>
              <p>{{item.con}}</p>
              <i>{{item.price}}</i>
          </li>
        </ul>

        <ul class="sh-con" v-show="flag==2">
          <li v-for="(item,index) in holidaylist2">
              <div class="img-box">
                <img :src="item.imgsrc" alt="">
              </div>
              <p>{{item.con}}</p>
              <b>{{item.conn}}</b>
              <i>{{item.price}}<s>起</s></i>
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
        name: "special-holiday",
      data(){
          return{
            flag:1,
            holidaylist1:[],
            holidaylist2:[],
          }
      },
      mounted() {
        this.$http.get('./data/index.json')
          .then((response)=> {
            // console.log(response);
            this.holidaylist1=response.data.holidaylist1;
            this.holidaylist2=response.data.holidaylist2;
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });
      },
      methods:{
        changeone(){
          this.flag=1
        },
        changetwo(){
          this.flag=2
        }
      }
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

  .shtitle-box>span{
    display: inline-block;
    width: 30%;
    height: 30px;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    margin-right: 5px;
    border-radius: 3px;
    border: 1px solid #d7d7d7;
    background-color: #fff;
    color: #707070;
  }

  .shtitle-box>.shtitle{
    background-color: #18c0c8;
    color: #fff;
  }

  .sh-con{
    width: 100%;
    overflow: hidden;
    padding-bottom: 10px;
  }

  .sh-con li{
    width: 49%;
    float: left;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: #FFFFFF;
  }

  .sh-con li:nth-of-type(2n){
    margin-left: 2%;
  }

  .sh-con .img-box{
    position: relative;
    height: 100px;
    border-radius: 4px;
    overflow: hidden;
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

  .sh-con li>p{
    color: #000;
    font-size: 0.85em;
    line-height: 1.7em;
    padding-left: 5px;
    width: 100%;
    height: 1.7em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
  }

  .sh-con li>i{
    display: block;
    width: 100%;
    color: #ff7400;
    font-weight: bold;
    font-style: normal;
    font-size: 1em;
    padding-left: 5px;
  }

  .sh-con li>i>s{
    font-size: 0.7em;
    font-weight: normal;
    text-decoration: none;
  }

  .sh-con li>b{
    display: block;
    width: 100%;
    height: 1.6em;
    line-height: 1.6em;
    color: #707070;
    font-style: normal;
    font-weight: normal;
    font-size: 0.8em;
    padding-left: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
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
