import VueRouter from 'vue-router';

import index from '../component/index/index';
import bookunlogin from '../component/book/book-unlogin';

export default new VueRouter({
  routes:[
    {
      path:'/',
      component:index
    },
    {
      path:'/book',
      component:bookunlogin
    }
  ]
})
