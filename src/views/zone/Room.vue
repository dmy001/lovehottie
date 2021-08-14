<template>
  <div class="w-full">
    <!-- <Card /> -->
    <waterfall />
  </div>
</template>

<script>
// import Card from "@components/home/zone/Card.vue";
import waterfall from "@components/home/zone/Waterfall.vue";
export default {
  name: "zoneCard",
  components: {
    waterfall,
  },
  created() {
    this.$store.commit("setCurrentPath", {
      path: this.$router.history.current.path,
    });
  },
};
</script>