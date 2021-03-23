<template>
  <div id="hello">
    <h1 class="blue">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorl",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$blue: #333333;
</style>
