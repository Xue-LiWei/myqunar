<template>
  <main>
    <div class="travel">
      <h2>
        <span>
          <img src="../../assets/images/bookicon.png" alt="">
        </span>
        旅游攻略
      </h2>
      <div class="traveltitle-box">
        <span v-bind:class="{traveltitle:flag==1}" v-on:click="changeone()">趣味亲子游</span>
        <span v-bind:class="{traveltitle:flag==2}" v-on:click="changetwo()">旅拍也要出大片</span>
      </div>
      <ul class="travel-con" v-show="flag==1">
        <li v-for="(item,index) in travellist1">
          <a href="#">
            <div class="img-box">
              <img :src="item.imgsrc" alt="">
            </div>
            <p>{{item.con}}</p>
          </a>
        </li>
      </ul>

      <ul class="travel-con" v-show="flag==2">
        <li v-for="(item,index) in travellist2">
          <a href="#">
            <div class="img-box">
              <img :src="item.imgsrc" alt="">
            </div>
            <p>{{item.con}}</p>
          </a>
        </li>
      </ul>
      <!--        更多-->
      <div class="travel-more">
        更多精彩攻略
        <span>
          <img src="../../assets/images/right.png" alt="">
        </span>
      </div>
    </div>
  </main>
</template>

<script>
    export default {
        name: "travel",
      data(){
        return{
          flag:1,
          travellist1:[],
          travellist2:[]
        }
      },
      mounted() {
        this.$http.get('./data/index.json')
          .then((response)=> {
            console.log(response);
            this.travellist1=response.data.travellist1;
            this.travellist2=response.data.travellist2;
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
  .travel{
    width: 95%;
    margin: 10px auto;
    padding: 10px 0;
    /*background-color: #aaaaaa;*/
    overflow: hidden;
  }

  .travel h2{
    font-size: 1.2em;
    font-weight: 700;
    margin-left: 5px;
    line-height: 1em;
  }

  .travel h2 span{
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  .travel h2 span img{
    width: 20px;
    height: 20px;
  }

  .traveltitle-box{
    width: 100%;
    margin: 10px 0 5px;
  }

  .traveltitle-box>span{
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

  .traveltitle-box>.traveltitle{
    background-color: #18c0c8;
    color: #fff;
  }

  .travel-con{
    width: 100%;
    overflow: hidden;
    padding-bottom: 10px;
  }

  .travel-con li{
    width: 49%;
    float: left;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: #FFFFFF;
  }

  .travel-con li:nth-of-type(2n){
    margin-left: 2%;
  }

  .travel-con li a{
    display: block;
    text-decoration: none;
  }

  .travel-con .img-box{
    position: relative;
    height: 100px;
    border-radius: 4px;
    overflow: hidden;
  }

  .travel-con li img{
    width: 100%;
    display: block;
  }

  .travel-con li>a>p{
    color: #000;
    font-size: 0.85em;
    line-height: 1.7em;
    padding-left: 5px;
  }

  .travel-more{
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

  .travel-more span{
    display: inline-block;
    width: 10px;
    height: 10px;
    line-height: 5px;
    text-align: center;
    vertical-align: middle;
  }

  .travel-more span img{
    width: 8px;
    height: 8px;
  }
</style>
