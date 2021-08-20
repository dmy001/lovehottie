<template>
<div>
  <section >
    <div >
      <div class=" mt-5 mb-10" style="width:796px; height:500px">
        <div class="rewardtop text-sm flex justify-end text-right mt-14  mb-4 " style=" width:740px;">
          
          <span @click="meReward" :class="{ 'text-red-500': RewardPage == false }" >我的打赏</span>
     
          <span >/</span>
          <span  @click="ReceiveReward" :class="{ 'text-red-500': RewardPage == true }">收到的打赏</span>
        </div>
     <table >
<thead class=" h-full" style=" width: 745px">
  <!-- 表格头部 -->
  <tr>
 <th class=" h-10 border-red-500 bg-blue-100 border" style="width:301px:height:42px; ">指示</th>  
 <th class=" w-44 h-10 border-red-500 bg-blue-100 border">打赏金币</th>
 <th class="h-10 border-red-500 bg-blue-100 border " style=" width: 266px;">打赏时间</th>
  </tr>
</thead>
<!-- 没有数据 -->
<!-- <tbody class=" h-24 pt-7 bg-green-100 border-red-500 border border-t-0 text-lg" style=:"width: 745px;">
  <tr>
    <td>没有数据</td>
  </tr>
</tbody> -->

<!-- 表格内容 -->
<!-- 我的打赏 -->
<tbody v-for="item in items" :key="item.message" v-show ="!RewardPage">
  <tr>
    <td class=" h-10 border-red-500 bg-blue-200 border" style="width: 301px">{{item.message}}</td>
    <td  class=" w-44 h-10  border-red-500 bg-blue-200 border">{{item.ss}}</td>
    <td  class=" h-10 border-red-500 bg-blue-200 border" style="width: 266px;">{{item.sss}}</td>
  </tr>
</tbody>  
<!-- 收到的打赏 -->
<tbody v-for="item in shuju" :key="item.message" v-show="RewardPage">
  <tr>
    <td class="  h-10 border-red-500 bg-blue-200 border" style="width: 301px">{{item.one}}</td>
    <td  class=" w-44 h-10  border-red-500 bg-blue-200 border">{{item.tow}}</td>
    <td  class=" h-10 border-red-500 bg-blue-200 border" style="width: 266px;">{{item.san}}</td>
  </tr>
</tbody>
     </table>
     <!-- 没有数据 -->
    <!-- <div class="noData">
  <span>没有数据</span>
 </div> -->
      </div>
    </div>
    <div class="LayoutButton h-10" style="width:796px">
    </div>
  </section>

 
</div>  
</template>

<script>
export default {
  data(){
  return{
    RewardPage:false,
    items: [
      {message:'小明',ss:'1000',sss:'2021年1月3日'},
       {message:'小红',ss:'1890',sss:'2021年2月3日'},
       {message:'张三',ss:'2000',sss:'2021年3月3日'},
    ],
   
      shuju: [
       {one:'李四',tow:'10000',san:'2020年1月3日'},
       {one:'王二',tow:'15890',san:'2020年5月3日'},
       {one:'麻子',tow:'20000',san:'2020年6月3日'},
    ]
  }
  },
 methods:{
   meReward(){
    this.RewardPage = false
   },
   ReceiveReward(){
     this.RewardPage = true
   }
 }

};
</script>

