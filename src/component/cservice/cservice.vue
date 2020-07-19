<template>
  <div class="cservice">
    <div class="header">
      <div class="title">
        <router-link to="/booksevice">
          <div class="booksevice" v-bind:class="{addtitle:flag=='left'}" @click="toleft()">订单服务</div>
        </router-link>

        <router-link to="/productask">
          <div class="product" v-bind:class="{addtitle:flag=='right'}" @click="toright()">产品咨询</div>
        </router-link>

      </div>
      <span>
        <img src="../../assets/images/phone.png" alt="">
      </span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "cservice",
      data(){
          return{
            flag:'right'
          }
      },
      methods:{
          toright(){
              this.flag='right';
          },
          toleft(){
            this.flag='left';
          }
      }
    }
</script>

<style scoped>
  .cservice{
    position: relative;
  }

  .header{
    width: 100%;
    height: 45px;
    background-color: #00afc7;
    position: fixed;
  }

  .title{
    width: 50%;
    height: 45px;
    margin: 0 auto;
  }

  .title div{
    width: 49%;
    height: 25px;
    margin: 10px 0;
    float: left;
    border: 1px solid #fff;
    text-align: center;
    line-height: 25px;
    font-size: 0.9em;
    color: #fff;
  }

  .title .booksevice{
    border-right: none;
    border-radius: 3px 0 0 3px;
  }

  .title .product{
    border-left: none;
    border-radius: 0 3px 3px 0 ;
  }

  .title .addtitle{
    color: #00afc7;
    background-color: #fff;
  }

  .header span{
    display: block;
    width: 40px;
    height: 37px;
    padding-top: 8px;
    position: absolute;
    right: 0;
    top: 0;
  }

  .header span img{
    width: 24px;
    height: 24px;
  }
</style>
