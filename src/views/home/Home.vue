<template>
  <section>
    <div class="bg-base-bgColor">
      <Header />
      <div class="flex w-px1200 mx-auto">
        <div class="min-h-810 mt-px50">
          <Left></Left>
          <div class="m-px15 w-px860 ml-px260">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </section>
</template>

<script>
import Header from "@components/common/Header.vue";
import Left from "@components/common/contentLeft.vue";
import Footer from "@components/common/footer.vue";

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
    Footer,
  },
};
</script>