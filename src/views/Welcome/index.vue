<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <span>{{ msg }}</span>

    <div>
      <h2>filters</h2>

      <ul>
        <li>默认值: {{ date | dateformat }}</li>
        <li>传格式: {{ date | dateformat('YYYY年MM月DD日 dddd HH点mm分ss秒SSS毫秒') }}</li>

        <li>{{ count }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Welcome',

  computed: {
    ...mapState('menu', ['count']),
  },

  data() {
    return {
      title: 'Welcome',
      msg: 'Welcome to Your Vue.js App',
      date: new Date(),
    };
  },
};
</script>

<style scoped lang="scss">
  .hello {
    width: 100%;
    height: 100%;
  }
</style>
