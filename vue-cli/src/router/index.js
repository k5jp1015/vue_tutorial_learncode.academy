import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Friends from '@/components/Friends'
import Contact from '@/components/Contact'
import Account from '@/components/Account'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // path(SPAでいうと1ページ)に対してコンポーネントが紐付いているイメージ
      // この下にさらにコンポーネントを紐付けることも可能 
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // /:〜でパラメータ設定
      path: '/friends/:id/:age/:weight',
      name: 'Friends',
      // propsをtrueに指定することでFriends.vue内でpropsとして指定、利用することができる
      props: true,
      component: Friends
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})
