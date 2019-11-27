<template>
  <div>
    <el-menu
      router
      default-active="2"
      class="el-menu-vertical-demo"
      :background-color="bgStyleList[curTheme].menuStyle[0]"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item v-for="(item, index) of $t('lang.menu')" :index="item.path" :key="index">
        {{ item.name }}
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex';
export default {
  computed:{
    ...mapState('bgColor',{
      curTheme:'curTheme'
    }),
    ...mapState('bgColor',{
      bgStyleList:'bgStyleList'
    })
  },
};
</script>
<style lang="scss" scoped>
.slider_menu{
  .el-menu{
    border: 0;
  }
}
</style>
