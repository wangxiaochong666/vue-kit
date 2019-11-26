<template>
  <div>
    <header-com></header-com>
    <slider-com></slider-com>
    <router-view></router-view>
  </div>
</template>
<script>
import headerCom from "./header.vue";
import sliderCom from "./sliderBar.vue";
export default {
  components: {
    headerCom: headerCom,
    sliderCom: sliderCom
  }
};
</script>
<style lang="scss" scoped></style>
