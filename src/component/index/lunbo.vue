<template>
    <div class="lunbo">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="../../assets/images/lunbo1.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../assets/images/lunbo2.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../assets/images/lunbo3.jpg" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "lunbo",
      methods:{

      }
    }
</script>

<style>
  .mint-swipe-indicators{
    bottom: 20px;
  }

  .lunbo .mint-swipe-indicator{
    width: 10px;
    height: 10px;
    background-color: #707070;
    opacity: 1;
  }

  .lunbo .mint-swipe-indicator.is-active{
    background-color: #ff7400;
  }
</style>
<style scoped>
  .lunbo{
    width: 95%;
    margin: 0 auto;
  }

  .mint-swipe {
    height: 120px;
  }

  .mint-swipe img{
    width: 100%;
  }

</style>
