<template>
  <div class="index-tabbar">
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
  </div>
</template>

<script>
    export default {
      name: "tabbar",
      data(){
        return {
          selected:'tab1'
        }
      }
    }
</script>

<style scoped>
  .index-tabbar .mint-tabbar{
    width: 100%;
    height: 50px;
    background-color: #fff;
    text-decoration: none;
    position: fixed;
    z-index: 999;
  }

  .index-tabbar .mint-tabbar .router-link-active {
    background-color: #fff;
    color: #18c0c8;
  }

  .index-tabbar .mint-tabbar >  a{
    text-decoration: none;
    width: 23%;
    margin: 0 20px;
    color: #707070;
  }

  .index-tabbar .mint-tab-item{
    padding: 0;
  }

  .index-tabbar .mint-tab-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
  }
</style>
