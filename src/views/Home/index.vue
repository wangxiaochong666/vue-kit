<template>
  <div class="page p-home">
    <div>
      <p>中英文切换</p>
      <button>中文</button>
      <button>英文</button>
    </div>

    <div>
      <p>主题切换</p>
      <button>白色</button>
      <button>黑色</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const Home = {
  name: "Home",
  components: {},

  data() {
    return {};
  },

  computed: {
    ...mapState("theme", ["curTheme"])
  },

  // 方法
  methods: {
    ...mapActions("theme", ["update"])
  },

  // 组件创建
  created() {},

  // 组件销毁
  destroyed() {},

  // 路由离开前
  beforeRouteLeave(to, from, next) {
    next();
  }
};

export default Home;
</script>

<style lang="scss" scoped></style>
