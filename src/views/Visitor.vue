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
            {{ items.dvisiDatetime }}
          </div>
          <div class="flex border-l-2 ml-12 flex-wrap">
            <div
              v-for="(item, index2) in items.arr"
              :key="index2"
              class="visitors"
            >
              <div class="w-20 ml-10">
                <img class="h-20 w-20 rounded-full" :src="item.member.membBigimg" alt="" />
                <span>{{ item.member.membNickname }}</span>
                <p>{{ item.visiDatetime }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getVisitor} from '../../src/api/vip/getVisitor.js'
export default {
  data() {
    return {
      endDay:'2021-08-28',
      page:1,
      // 懒加载
      list: [
        {
          visiGagaid: 60015820,
          visiDatetime: "Aug 28, 2021, 2:50:28 PM",
          member: {
            membGagano: "60017173",
            membGagaid: 60015820,
            membNickname: "Jeff",
            membEmail: "6summerfun@gmail.com",
            membBigimg:
              "https://sources.lovehottie.com/a972a0eeb7c248d8852c3ba89095762c",
            online: 0,
            showweight: 0,
            showheight: 0,
            isagainlogin: 0,
            ispaypalreg: 0,
            age: 0,
          },
          showDate: 1630162228000,
        },
     
      ],
    };
  },
  methods:{
    async getVisitors(){
      const res = await getVisitor(this.endDay,this.page);
      console.log(res);
    }
    },
    mounted(){
      this.getVisitors()
    }

  }
</script>

<style lang="scss">
.time-content {
  height: 26px;
  line-height: 26px;
}
</style>