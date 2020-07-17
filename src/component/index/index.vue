<template>
    <div class="xlw-index">
<!--      首页底部tabbar-->
      <index-tabbar></index-tabbar>
<!--      首页内容-->
<!--      搜索与下载-->
      <index-select></index-select>
<!--      类别-->
      <index-kinds></index-kinds>
<!--      特惠度假-->
      <index-Special-holiday></index-Special-holiday>
<!--      特惠门票-->
      <index-Special-ticket></index-Special-ticket>
<!--      轮播-->
      <index-lunbo></index-lunbo>
<!--      旅行攻略-->
      <index-travel></index-travel>
<!--      footer-->
      <index-footer></index-footer>
    </div>
</template>

<script>
    import indextabbar from './tabbar';
    import indexselect from './iselect';
    import indexkinds from './kinds';
    import specialholiday from './special-holiday';
    import specialticket from './special-ticket';
    import travel from "./travel";
    import footer from "./ifooter";
    import lunbo from "./lunbo";
    export default {
      name: "index",
      components:{
        'index-tabbar':indextabbar,
        'index-select':indexselect,
        'index-kinds':indexkinds,
        'index-Special-holiday':specialholiday,
        'index-Special-ticket':specialticket,
        'index-travel':travel,
        'index-footer':footer,
        'index-lunbo':lunbo
      }
    }
</script>

<style scoped>
  .xlw-index{
    width: 100%;
  }
</style>
