<template>
  <div>
    <el-menu
      router
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
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
export default {};
</script>
<style lang="scss" scoped></style>
