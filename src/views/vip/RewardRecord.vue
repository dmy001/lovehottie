<template>
<div>
  <section >
    <div class="reward">
      <div class="rewardLayout">
        <div class="rewardtop flex justify-end text-right">
          <span @click="meReward">我的打赏</span>
          <span >/</span>
          <span  @click="ReceiveReward">收到的打赏</span>
        </div>
     <table >
<thead class="tableSize">
  <!-- 表格头部 -->
  <tr class="rewardformtop">
 <th class="tableIndication">指示</th>
 <th class="tableGold">打赏金币</th>
 <th class="tableTime">打赏时间</th>
  </tr>
</thead>
<!-- 没有数据 -->
<!-- <tbody class="noData w-60px h-20px bg-black">
  <tr>
    <td>没有数据</td>
  </tr>
</tbody> -->

<!-- 表格内容 -->
<!-- 我的打赏 -->
<tbody v-for="item in items" :key="item.message" v-show ="!RewardPage">
  <tr class="tabularData">
    <td class="indicationData">{{item.message}}</td>
    <td  class="rewardData">{{item.ss}}</td>
    <td  class="timeData">{{item.sss}}</td>
  </tr>
</tbody>
<!-- 收到的打赏 -->
<tbody v-for="item in shuju" :key="item.message" v-show="RewardPage">
  <tr class="tabularData">
    <td class="indicationData">{{item.one}}</td>
    <td  class="rewardData">{{item.tow}}</td>
    <td  class="timeData">{{item.san}}</td>
  </tr>
</tbody>
     </table>
     <!-- 没有数据 -->
    <!-- <div class="noData">
  <span>没有数据</span>
 </div> -->
      </div>
    </div>
    <div class="LayoutButton">
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
      {message:'美女',ss:'美女',sss:'美女'},
       {message:'美女',ss:'美女',sss:'美女'},
       {message:'美女',ss:'美女',sss:'美女'},
    ],
   
      shuju: [
       {one:'美女',tow:'美女',},
       {one:'美女',tow:'美女',san:'美女'},
       {one:'美女',tow:'美女',san:'美女'},
    ]
  }
  },
 methods:{
   meReward(){
    this.RewardPage = !false
   },
   ReceiveReward(){
     this.RewardPage = !true
   }
 }

};
</script>

<style lang="scss" scoped>
.rewardLayout {
  width: 796px;
  height: 500px;
  // background: aquamarine;
  margin: 20px 0px 10px 0px;
}
.rewardtop{
  width:700px;
   margin: 50px 20px 20px 0px;
  font-size:14px;
}

.tableSize{
  width: 745px;
  height: 100%;
}
.tableIndication{
  width: 301px;
  height: 42px;
   background-color: #DCE7FD; 
  border-style:solid;
	border-width:1px;
  border-color:red;
}
.tableGold{
  width: 178px;
  height: 42px;
   background-color: #DCE7FD; 
 border-style:solid;
	border-width:1px;
   border-color:red;
}
.tableTime{
  width: 266px;
  height: 42px;
   background-color: #DCE7FD; 
  border-style:solid;
	border-width:1px;
   border-color:red;
}
.noData{
  width: 745px;
  height: 90px;
  padding-top:30px ;
  background-color: blue ;
 border-style:solid;
	border-width:1px;
   border-color:red;
   border-top-style:none;
 font-size: 18px;
} 
// .tabularData{
//   height:42px;
//   background-color:red ;
// }
.indicationData{
   width: 301px;
  height: 42px;
   background-color: #e9ecef;
  border-style:solid;
	border-width:1px;
  border-color:red;
}
.rewardData{
   width: 178px;
  height: 42px;
   background-color: #e9ecef;
  border-style:solid;
	border-width:1px;
   border-color:red;
}
.timeData{
   width: 266px;
  height: 42px;
   background-color: #e9ecef;
  border-style:solid;
	border-width:1px;
   border-color:red;
}
.LayoutButton {
  width: 796px;
  height: 40px;
}
</style>