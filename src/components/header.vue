<template>
  <div>
    {{ $t("lang.login") }}
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        国际化<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item in $t('lang.language')" :command="item.name" :key="item.name"
          >{{ item.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  methods: {
    handleCommand(command) {
      if (command == "Chinese" || command == "中文") this.$i18n.locale = "zh-CN";
      else this.$i18n.locale = "en-US";
    }
  }
};
</script>
<style lang="scss" scoped></style>
