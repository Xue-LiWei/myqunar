<template>
  <div class="ifooter">
    <p>
      <span>Copyright ©2020 Qunar.com</span>
      <a href="#">京公网安备11010802030542</a>
      <a href="#">京ICP备05021087号</a>
      <a href="#">京ICP证060856号</a>
      <a href="#">营业执照信息</a>
      <a href="#">(京)-非经营性-2016-0110</a>
      <span>
        <i><img src="../../assets/images/24h.png" alt=""></i>
        去哪儿网客服电话95117
      </span>
    </p>
    <p>
      <span>违法和不良信息举报电话：010-59606977</span>
      <span>违法和不良信息举报邮箱：tousu@qunar.com</span>
    </p>
  </div>
</template>

<script>
    export default {
        name: "ifooter"
    }
</script>

<style scoped>
  .ifooter{
    padding: 0 2.5% 70px;
  }

  .ifooter p{
    font-size: 0.7em;
    line-height: 2.1em;
    text-align: center;
    color: #999;
    padding-top: 20px;
  }

  .ifooter p span{
    padding-right: 5px;
    color: #999;
  }

  .ifooter p a{
    text-decoration: none;
    padding-right: 5px;
    color: #999;
  }

  .ifooter i{
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
</style>
