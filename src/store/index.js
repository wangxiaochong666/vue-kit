import Vue from 'vue';
import Vuex from 'vuex';

import { importAll } from '@/lib/import-all';

import { global } from './global';

const modules = importAll(
  require.context(
    '@/models', // 路径
    false, // 是否包含子目录
    /^((?!noimport).)*\.js$/, // 过滤
    'sync', // 模式
  ),
);

Vue.use(Vuex);

export const store = new Vuex.Store({ ...global, modules });

export default store;
