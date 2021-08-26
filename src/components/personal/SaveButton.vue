<template>
  <div class="flex flex-row space-x-5">
    <button
      class="w-20 h-8 bg-red-400 rounded-2xl text-white focus:outline-none"
    >
      {{ title }}
    </button>
    <button
      class="
        w-20
        h-8
        rounded-2xl
        border border-solid border-gray-400
        focus:outline-none
      "
    >
      {{ name }}
    </button>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    name: String,
  },
};
</script>
