<template>
  <div class="bg-base-bgColor">
    <Header />
    <div class="flex w-px1200 mx-auto">
      <div class="min-h-810">
        <Left></Left>
        <div class="m-px15 w-px860 ml-px260">
          <ToolBar />
          <AD />
          <div
            class="flex flex-wrap justify-around w-full bg-white mt-px15 min-h-px200 p-px15"
          >
            <Card v-for="i in 30" :key="i" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@components/common/Header.vue";
import Left from "@components/common/contentLeft.vue";
import ToolBar from "@components/home/ToolBar.vue";
import AD from "@components/home/AD.vue";
import Card from "@components/home/Card.vue";

export default {
  name: "home",
  data() {
    return {
      pageName: "主页",
    };
  },
  components: {
    Header,
    Left,
    ToolBar,
    AD,
    Card,
  },
};
</script>