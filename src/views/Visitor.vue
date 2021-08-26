<template>
  <div class="w-full">
    <div class="w-full bg-white border border-opacity-0 pl-5">
      <div class="text-left mt-5">
        <span> {{$trans('总浏览量')}}: <span class="text-red-500 ml-2">8</span> </span>
        <span class="ml-10">
         {{$trans('今日浏览量')}} :<span class="text-red-500 ml-2">16</span></span
        >
      </div>
      <div class="mt-10">
        <div v-for="(items, index) in list" :key="index">
          <div class="time-content border-dashed w-24 border rounded-3xl">
            {{ items.data }}
          </div>
          <div class="flex border-l-2 ml-12 flex-wrap">
            <div
              v-for="(item, index2) in items.arr"
              :key="index2"
              class="visitors"
            >
              <div class="w-20 ml-10">
                <img class="h-20 w-20 rounded-full" :src="item.imgsrc" alt="" />
                <span>{{ item.name }}</span>
                <p>{{ item.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 懒加载
      list: [
        {
          data: "2021.08.09",
          arr: [
            {
              name: "zrj",
              time: "09:45",
              imgsrc: "https://sources.lovehottie.com/images/default/male.png",
            },
            {
              name: "zrj",
              time: "09:45",
              imgsrc: "https://sources.lovehottie.com/images/default/male.png",
            },
          ],
        },
        {
          data: "2021.08.18",
          arr: [
            {
              name: "zrj",
              time: "09:45",
              imgsrc: "https://sources.lovehottie.com/images/default/male.png",
            },
          ],
        },
        {
          data: "2021.08.18",
          arr: [
            {
              name: "zrj",
              time: "09:45",
              imgsrc: "https://sources.lovehottie.com/images/default/male.png",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.time-content {
  height: 26px;
  line-height: 26px;
}
</style>