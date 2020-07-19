<template>
    <div class="mine">
      <div class="header">
        <router-link to="/">
          <div class="back">
            <img src="../../assets/images/backwhite.png" alt="">
          </div>
        </router-link>
      </div>

      <div class="mine-top">
        <span>
          <img src="../../assets/images/avatar.png" alt="">
        </span>
        <p>登录/注册</p>
      </div>

    </div>
</template>

<script>
    export default {
        name: "mine"
    }
</script>

<style scoped>

  .header{
    width: 100%;
    height: 40px;
    position: fixed;
    background-color: transparent;
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

  .mine-top{
    width: 100%;
    height: 160px;
    text-align: center;
    overflow: hidden;
    background: url("../../assets/images/mybg.jpg") no-repeat 0 0;
    background-size: 100% 160px;
  }

  .mine-top span{
    display: block;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    border: 3px solid rgba(0,0,0,0.1);
    margin: 50px auto 5px;
    background: #eeeeee;
  }

  .mine-top span img{
    width: 65px;
    height: 65px;
  }

  .mine-top p{
    color: #fff;
    font-size: 0.9em;
  }
</style>
