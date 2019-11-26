import "core-js/stable";
import "regenerator-runtime/runtime";
import "es6-promise/auto";
import "whatwg-fetch";

import Vue from "vue";
import Router from "vue-router";
import CompositionApi from "@vue/composition-api";
import VueI18n from "vue-i18n";

import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

import setConfig from "@/lib/set-config";
import filters from "@/lib/filters";

import App from "@/containers/App";
import routes from "@/router/routes";
import store from "@/store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/css/reset.css";
import { upperCase } from "./utils/string/upperCase";
import { lowerCase } from "./utils/string/lowerCase";
import { dateformat } from "./utils/date/dateformat";

dayjs.locale("zh-cn");

Vue.use(VueI18n)
  .use(filters, { dateformat, upperCase, lowerCase })
  .use(CompositionApi)
  .use(ElementUI)
  .use(Router)
  .use(filters, { dateformat, upperCase, lowerCase })
  .use(setConfig, {
    productionTip: false,
    devtools: process.env.NODE_ENV === "development" ? true : false
  });

export const router = new Router({
  routes
});

const i18n = new VueI18n({
  locale: "zh-CN", // 语言标识
  messages: {
    "zh-CN": require("@/locales/zh-CN"), // 中文语言包
    "en-US": require("@/locales/en-US") // 英文语言包
  }
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
