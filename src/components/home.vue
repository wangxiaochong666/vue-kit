<template>
  <div class="h100 w100">
    <header-com class="header" :style="{'background-color':bgStyleList[curTheme].headerStyle[0]}"></header-com>
    <slider-com class="slider_menu" :style="{'background-color':bgStyleList[curTheme].menuStyle[0]}"></slider-com>
    <content-com class="view-wrap" :style="{'background-color':bgStyleList[curTheme].contentStyle[0]}"></content-com>
  </div>
</template>
<script>
import headerCom from "./header.vue";
import sliderCom from "./sliderBar.vue";
import contentCom from "./content.vue";
import {mapState,mapMutations} from 'vuex';
export default {
  components: {
    headerCom: headerCom,
    sliderCom: sliderCom,
    contentCom:contentCom
  },
  computed:{
    ...mapState('bgColor',{
      bgStyleList:'bgStyleList'
    }),
    ...mapState('bgColor',{
      curTheme:'curTheme'
    })
  },
};
</script>
<style lang="scss" scoped>
.header{
  height: 60px;
  line-height: 60px;
  position: relative;
  box-shadow:0px 0px 10px 1px #cccccc;
}
.slider_menu{
  width: 220px;
  height: calc(100% - 60px);
  float: left;
  overflow: auto;
}
.view-wrap{
  width: calc(100% - 220px);
  height: calc(100% - 60px);
  float: left;
}
</style>
