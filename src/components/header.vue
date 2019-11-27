<template>
  <div>
    <el-dropdown @command="handleCommand" class="lang">
      <span class="el-dropdown-link">
        {{lang=='zh-CN'?'中文':'English'}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
        v-for="item in $t('lang.language')"
        :command="item.lang"
        :key="item.name"
        >{{ item.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown @command="handleTheme" class="theme">
      <span class="el-dropdown-link">
        <span v-for="item in $t('lang.theme')"
          :command="item.command"
          :key="item.command"
          v-if="item.command==curTheme">
          {{item.name}}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="item in $t('lang.theme')"
          :command="item.command"
          :key="item.command">
          {{item.name}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex';
export default {
  computed:{
    ...mapState('bgColor',{
      lang:'lang'
    }),
    ...mapState('bgColor',{
      curTheme:'curTheme'
    }),
  },
  methods: {
    ...mapMutations('bgColor',['changeLang','changeTheme']),
    handleCommand(command) {
      this.changeLang(command);
      this.$i18n.locale = command;
    },
    handleTheme(command){
      this.$confirm('您确定要切换为该主题?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.changeTheme(command);
        this.$message({
          type: 'success',
          message: '更换主题成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消!'
        });          
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.el-dropdown{
  position: absolute;
  right: 30px;
  cursor: pointer;
  .el-dropdown-link.el-dropdown-selfdefine{
    color: #ffffff;
  }
}
.theme{
  right: 100px;
}
</style>
