<template>
  <div  class="bg-base-bgColor">
    <Header />
    <div class="w-1100 mx-auto">
       <div class="min-h-810">
      <Left></Left>
      {{ pageName }}
    </div> 
    </div>
  
  </div>
</template>

<script>
import Header from "@components/common/Header.vue";
import Left from "@components/common/contentLeft.vue";

export default {
  name: "home",
  data() {
    return {
      pageName: "主页",
    };
  },
  components: {
    Header,
    Left
  },
};
</script>