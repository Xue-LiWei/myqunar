import VueRouter from 'vue-router';

import index from '../component/index/index';
import bookunlogin from '../component/book/book-unlogin';

import cservice from "../component/cservice/cservice";
import productask from "../component/cservice/productask";
import booksevice from "../component/cservice/booksevice";

import mine from "../component/mine/mine";

export default new VueRouter({
  routes:[
    {
      path: '/',
      component: index
    },
    {
      path: '/book',
      component: bookunlogin
    },
    {
      path: '/cservice',
      component: cservice,
      children:[
        {
          path: '/productask',
          component: productask,
        },
        {
          path: '/booksevice',
          component: booksevice,
        },
        {
          path: '/cservice',
          redirect:'/productask'
        }
      ]
    },
    {
      path: '/mine',
      component: mine
    }
  ]
})
