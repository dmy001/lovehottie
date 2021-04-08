<template>
  <div class="w-full">
    <Card />
  </div>
</template>

<script>
import Card from "@components/home/zone/Card.vue";
export default {
  name: "zoneCard",
  components: {
    Card,
  },
  created() {
    this.$store.commit("setCurrentPath", {
      path: this.$router.history.current.path,
    });
  },
};
</script>