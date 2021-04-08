<template>
  <div>朋友圈</div>
</template>

<script>
export default {
  created() {
    this.$store.commit("setCurrentPath", {
      path: this.$router.history.current.path,
    });
  },
};
</script>