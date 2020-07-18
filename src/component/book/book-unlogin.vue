<template>
      <div class="book">
        <div class="header">
          <router-link to="/">
            <div class="back">
              <img src="../../assets/images/back.png" alt="">
            </div>
          </router-link>
          <div class="title-box">
            <div class="box" @click="toggle()">
              <div class="title">本地订单</div>
              <div class="ico-box">
                <i class="up">
                  <img src="../../assets/images/up.png" alt=""  v-show="flag==false">
                </i>
                <i class="down">
                  <img src="../../assets/images/down.png" alt=""  v-show="flag==true">
                </i>
              </div>
            </div>
          </div>
          <div class="more">订单查询</div>
        </div>

        <div class="unlogin">
          <img src="../../assets/images/order_login.png" alt="">
          <p class="tips">您还没有本地订单<br>快登录查看在线订单吧</p>
          <div class="login">登录</div>
        </div>

<!--        本地订单下拉部分-->
        <div class="conn" v-show="flag==false">
          <ul>
            <li v-bind:class="{addli:index==msg}" v-for="(item,index) in connlist" @click="getindex(index)">{{item}}</li>
          </ul>
        </div>
      </div>
</template>

<script>
    export default {
        name: "book-unlogin",
      data(){
          return{
            flag:true,
            msg:0,
            connlist:["全部","机票","酒店住宿","汽车票·船票","火车票","门票","美食团购","专车·租车"],
          }
      },
      methods:{
        toggle(){
          this.flag=!this.flag;
        },
        getindex(index){
          this.msg=index;
          this.flag=!this.flag;
          if(index==0){
            document.getElementsByClassName("title")[0].innerHTML='本地订单';
          }else{
            document.getElementsByClassName("title")[0].innerHTML=this.connlist[index];
          }
        }
      }
    }
</script>

<style scoped>
  .book{
    width: 100%;
    height: 100vh;
    background-color: #f0f2f4;
    overflow: hidden;
    position: relative;
  }

  .header{
    width: 100%;
    height: 40px;
    position: fixed;
    background-color: #fff;
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

  .title-box{
    width: 60%;
    height: 40px;
    float: left;
    text-align: center;
    line-height: 40px;
    font-size: 1em;
  }

  .box{
    display: inline-block;
    overflow: hidden;
  }

  .title{
    float: left;
  }

  .ico-box{
    width: 20px;
    height: 40px;
    margin-left: 5px;
    float: left;
  }

  .ico-box i{
    width: 100%;
    height: 50%;
    float: left;
  }

  .ico-box i img{
    display: block;
    width: 8px;
    margin: 0;
  }

  .ico-box .up img{
    margin-top: 12px;
  }

  .more{
    width: 20%;
    height: 40px;
    font-size: 0.9em;
    line-height: 40px;
    text-align: center;
    float: right;
    color: #18c0c8;
  }

  .unlogin{
    width: 50%;
    margin: 100px auto;
  }

  .unlogin img{
    width: 100%;
  }

  .tips{
    text-align: center;
    font-size: 1em;
    margin: 10px 0;
    color: #666;
  }

  .unlogin .login{
    width: 100px;
    height: 40px;
    background-color: #ff9800;
    line-height: 40px;
    text-align: center;
    margin: 20px auto;
    color: #fff;
    font-size: 1em;
  }

  .conn{
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 41px;
    background-color: rgba(0,0,0,0.3);
    z-index: 999;
  }

  .conn ul{
    width: 100%;
    overflow: hidden;
    padding: 10px 3%;
    background-color: #fff;
  }

  .conn ul li{
    width: 20%;
    height: 30px;
    margin-left: 8%;
    margin-bottom: 10px;
    border: 1px solid #666;
    border-radius: 3px;
    float: left;
    text-align: center;
    line-height: 30px;
    color: #666;
    font-size: 0.8em;
  }

  .conn ul .addli{
    background-color: #18c0c8;
    border: 1px solid #18c0c8;
    color: #fff;
  }
</style>
