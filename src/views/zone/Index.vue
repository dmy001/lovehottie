<template>
  <div>
    <div class="w-full h-px60 bg-white flex flex-row">
      <div class="mr-px15 zone-room" @click="goZoneRoom">
        <a class="cursor-pointer" :class="{ 'text-base-color2': isZoneRoom }"
          >动态广场</a
        >
        <div v-if="isZoneRoom" class="triangle-top"></div>
      </div>
      <div class="zone-friend" @click="goZoneFriend">
        <a class="cursor-pointer" :class="{ 'text-base-color2': !isZoneRoom }"
          >朋友圈</a
        >
        <div v-if="!isZoneRoom" class="triangle-top"></div>
      </div>
    </div>

    <div class="w-full min-h-810 bg-white rounded-px8 mt-px15">
      <div v-if="isZoneRoom">动态广场</div>
      <div v-if="!isZoneRoom">朋友圈</div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "zonelist",
  data() {
    return {
      // isZoneRoom: true,
    };
  },
  computed: {
    isZoneRoom() {
      return this.$store.state.pathStore.currentPath.includes("zone/friend")
        ? false
        : true;
    },
  },
  methods: {
    goZoneRoom() {
      this.$router.push({ path: "/home/zone/room" });
    },
    goZoneFriend() {
      this.$router.push({ path: "/home/zone/friend" });
    },
  },
  created: function () {
    this.$store.commit("setCurrentPath", {
      path: this.$router.history.current.path,
    });
  },
};
</script>

<style lang="scss" scoped>
.zone-friend,
.zone-room {
  @apply ml-px15 h-full flex relative items-center;
}
.zone-room .triangle-top,
.zone-friend .triangle-top {
  left: calc(50% - 15px);
  @apply absolute top-full -mt-px15;
}
</style>