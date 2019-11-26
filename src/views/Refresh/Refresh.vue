<template>
  <div></div>
</template>

<script>
const Refresh = {
  name: "Refresh",

  beforeRouteEnter(to, from, next) {
    next(vm => vm.$router.replace(from.fullPath));
  }
};

export default Refresh;
</script>

<style lang="scss" scoped></style>
