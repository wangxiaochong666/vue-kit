import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { filters } from '@/lib/filters';
import { setConfig } from '@/lib/set-config';

import App from './containers/App';

import dateformat from './utils/date/format';
import lowerCase from './utils/string/lowerCase';
import upperCase from './utils/string/upperCase';

import { router } from './router';
import { store } from './store';

Vue
  .use(ElementUI)

  // 使用 filters 替代 Vue.filter(name, fn)
  .use(filters, {
    dateformat,
    lowerCase,
    upperCase,
  })

  // 使用 setConfig 替代 Vue.config.xxx = value;
  .use(setConfig, {
    productionTip: false,
    devtools: process.env.NODE_ENV === 'development',
  });

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
