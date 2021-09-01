<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="flex"
      :class="{ active: index === currentIndex }"
      @click="onClick(index)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: -1,
      items: [{ name: "111" }, { name: "222" }],
    };
  },
  methods: {
    onClick(index) {
      console.log(index);
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  border-bottom: 2px solid #e63561;
}
</style>