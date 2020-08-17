// // // with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import './utils/prototype'
import {
    VueAxios
} from './utils/request'
// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'

import bootstrap from './core/bootstrap'
import './core/lazy_use'
import './utils/filter' // global filter
import './components/global.less'
import './css/reset.less'
import './mycomponents/index'
import queryString from 'query-string'

console.log(queryString.parseUrl('https://foo.bar?foo=bar'));
Vue.config.productionTip = false
// var validator = new schema(descriptor);
// mount axios Vue.$http and this.$http
Vue.use(VueAxios)

Vue.directive('my-directive', {
    bind: function (a, b, c) {
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(99999);
    },
    inserted: function () {
        console.log(99999);
    },
    update: function (a) {
        console.log(a);
    },
    componentUpdated: function () {},
    unbind: function () {}
})

new Vue({
    router,
    store,
    created: bootstrap,
    render: h => h(App)
}).$mount('#app')

// import * as utils from './utils/index'

// let tree = [{
//     id: '1',
//     text: '北京',
//     children: [{
//         id: '2',
//         text: '北京市',
//         children: [{
//             id: '3',
//             text: '西城区',
//             children: null
//         }, {
//             id: '4',
//             text: '东城区',
//             children: null
//         }]
//     }]
// }, {
//     id: '5',
//     text: '上海',
//     children: [{
//         id: '6',
//         text: '上海市',
//         children: [{
//             id: '7',
//             text: '黄浦区',
//             children: null
//         }]
//     }]
// }];

// var obj = {
//     'id': '4',
//     'left': {
//         'id': '2',
//         'left': {
//             'id': '1',
//             'left': null,
//             'right': null
//         },
//         'right': {
//             'id': '3',
//             'left': null,
//             'right': null
//         }
//     },
//     'right': {
//         'id': '7',
//         'left': {
//             'id': '6',
//             'left': null,
//             'right': null
//         },
//         'right': {
//             'id': '9',
//             'left': null,
//             'right': null
//         }
//     }
// }

// var invertTree = function (root) {
//     // 判断当前树是否为 null
//     if (root == null) return root;
//     // 左右子树结点交换
//     let right = root.right;
//     let left = root.left;
//     root.right = left;
//     root.left = right;
//     // 分别对左右子树进行递归
//     invertTree(left);
//     invertTree(right);
//     // 返回树的根节点
//     return root;
// };