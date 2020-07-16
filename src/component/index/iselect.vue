<template>
  <div class="index-header">
    <div class="myselect">
          <span>
            <img src="../../assets/images/select.png" alt="">
          </span>搜索景点门票
    </div>
    <div class="download">
      <span><img src="../../assets/images/download.png" alt=""></span>
      <i>下载App</i>
    </div>
  </div>
</template>

<script>
    export default {
        name: "iselect"
    }
</script>

<style scoped>
  .index-header{
    width: 95%;
    margin: 18px auto 10px;
    overflow: hidden;
  }

  .myselect{
    width: 80%;
    height: 36px;
    line-height: 36px;
    background-color: #eeeeee;
    font-size: 16px;
    color: #aaaaaa;
    border-radius: 3px;
    float: left;
  }

  .myselect span{
    display: inline-block;
    vertical-align: middle;
    width: 22px;
    height: 22px;
    text-align: center;
    line-height: 22px;
    margin: 0 10px;
  }

  .myselect span img{
    width: 22px;
    height: 22px;
  }

  .download{
    width: 16%;
    font-size: 13px;
    float: left;
    text-align: center;
    margin-left: 10px;
  }

  .download span{
    display: block;
    width: 20px;
    height: 20px;
    margin: 3px auto 0;
    border-radius: 50%;
  }

  .download span img{
    width: 20px;
    height: 20px;
  }

  .download i{
    width: 100%;
    font-size: 6px;
    font-style: normal;
  }
</style>
