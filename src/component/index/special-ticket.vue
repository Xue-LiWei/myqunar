<template>
  <main>
    <div class="Special-ticket">
      <h2>特惠门票</h2>
      <div class="sttitle-box">
        <span v-bind:class="{sttitle:flag==1}" v-on:click="changeone()">当季景点门票</span>
        <span v-bind:class="{sttitle:flag==2}" v-on:click="changetwo()">特惠门票</span>
      </div>
      <ul class="st-con" v-show="flag==1">
        <li v-for="(item,index) in ticketlist1">
          <router-link to="/thedetails">
            <div class="img-box">
              <img :src="item.imgsrc" alt="">
            </div>
            <p>{{item.con}}</p>
            <b>{{item.conn}}</b>
            <i>{{item.price}}</i>
          </router-link>
        </li>
      </ul>

      <ul class="st-con" v-show="flag==2">
        <li v-for="(item,index) in ticketlist2">
          <router-link to="/thedetails">
            <div class="img-box">
              <img :src="item.imgsrc" alt="">
            </div>
            <p>{{item.con}}</p>
            <b>{{item.conn}}</b>
            <i>{{item.price}}<s>起</s></i>
          </router-link>
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
        name: "special-ticket",
      data(){
        return{
          flag:1,
          ticketlist1:[],
          ticketlist2:[]
        }
      },
      mounted() {
        this.$http.get('./data/index.json')
          .then((response)=> {
            // console.log(response);
            this.ticketlist1=response.data.ticketlist1;
            this.ticketlist2=response.data.ticketlist2;
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

  .sttitle-box>span{
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

  .sttitle-box>.sttitle{
    background-color: #18c0c8;
    color: #fff;
  }

  .st-con{
    width: 100%;
    overflow: hidden;
    padding-bottom: 10px;
  }

  .st-con li{
    width: 49%;
    float: left;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: #FFFFFF;
  }

  .st-con li>a{
    text-decoration: none;
  }

  .st-con li:nth-of-type(2n){
    margin-left: 2%;
  }

  .st-con .img-box{
    position: relative;
    height: 100px;
    border-radius: 4px;
    overflow: hidden;
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
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
  }

  .st-con li>a>i{
    color: #ff7400;
    font-weight: bold;
    font-style: normal;
    font-size: 1em;
    padding-left: 5px;
  }

  .st-con li>a>i>s{
    font-size: 0.7em;
    font-weight: normal;
    text-decoration: none;
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
