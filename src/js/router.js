import VueRouter from 'vue-router';

import index from '../component/index/index';
import book from  '../component/index/book';

export default new VueRouter({
  routes:[
    {
      path:'/',
      component:index
    },
    {
      path:'/book',
      component:book
    }
  ]
})
