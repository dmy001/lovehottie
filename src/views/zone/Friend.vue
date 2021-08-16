<template>
  <div class="relative ">
    <div class="personContent">
      <div class="shareList flex justify-start">
        <waterfall />
      </div>
     
    </div>
    <!-- 图片弹出框 -->
    <Modal
      v-model="modalPhoto"
      title="上传图片"
      width="600"
      footer-hide
      @on-cancel="cancel"
    >
      <p slot="header">
        <span class="text-white">上传图片</span>
      </p>
    </Modal>
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
