<template>
  <div>
    <ul class="space-y-5 mt-5">
      <li
        v-for="(item, index) in content"
        :key="index"
        class="flex justify-between text-sm"
      >
        <span class="w-1/4 text-right text-gray-400">{{ item.title }}：</span>
        <span class="w-3/4 text-left">{{ item.value }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
 props:{
       content:Array
 }
};
</script>
