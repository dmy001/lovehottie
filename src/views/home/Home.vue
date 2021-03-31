<template>
  <div>
    <Header />
    <div>{{ pageName }}</div>
  </div>
</template>

<script>
import Header from "@components/common/Header.vue";

export default {
  name: "home",
  data() {
    return {
      pageName: "主页",
    };
  },
  components: {
    Header,
  },
};
</script>