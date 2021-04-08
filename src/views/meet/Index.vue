<template>
  <div>
    <ToolBar />
    <AD />
    <div class="flex flex-wrap w-full bg-white mt-px15 min-h-px200 p-px15">
      <Card v-for="i in 30" :key="i" />
    </div>
  </div>
</template>

<script>
import ToolBar from "@components/home/meet/ToolBar.vue";
import AD from "@components/home/meet/AD.vue";
import Card from "@components/home/meet/Card.vue";

export default {
  name: "meet",
  components: {
    ToolBar,
    AD,
    Card,
  },
  created() {
    // this.$store.state.pathStore.currentPath
    this.$store.commit("setCurrentPath", {
      path: this.$router.history.current.path,
    });
    console.log(this.$store);
  },
};
</script>