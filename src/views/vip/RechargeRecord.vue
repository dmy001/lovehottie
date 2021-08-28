
<template>
  <div>
    <section>
      <div class="recharge">
        <div class="rechargeLayout">
          <div class="rechargetop flex justify-end text-right">
            <span
              @click="meRecharge"
              :class="{ 'text-red-500': rechargePage == false }"
              >{{$trans("我的打赏")}}</span
            >
            <span>/</span>
            <span
              @click="receiveRecharge"
              :class="{ 'text-red-500': rechargePage == true }"
              >{{$trans("收到的打赏")}}</span
            >
          </div>
          <!-- 我的打赏头部 -->
          <table v-show="!rechargePage">
            <thead class="tableSize">
              <!-- 表格头部 -->
              <tr class="rechargeformtop">
                <th class="transactionNumber">{{$trans("交易编号")}}</th>
                <th class="rechargeAmount">{{$trans("充值金额")}}</th>
                <th class="status">{{$trans("地位")}}</th>
                <th class="rechargeTradingTime">{{$trans("交易时间")}}</th>
              </tr>
            </thead>

            <!-- 表格内容 -->
            <!-- 我的打赏 -->
            <tbody v-for="item in das" :key="item.message">
              <tr class="tabularData">
                <td class="indicationData">{{ item.oms }}</td>
                <td class="rechargeData">{{ item.ss }}</td>
                <td class="tradingData">{{ item.ssqa }}</td>
                <td class="rechargeTimeData">{{ item.sss }}</td>
              </tr>
            </tbody>

          </table>
          <!-- 消费记录头部 -->

          <table  v-show="rechargePage">
            <thead class="tableSize">
              <!-- 表格头部 -->
              <tr class="rechargeformtop">
                <th class="explanation">{{$trans("解释")}}</th>
                <th class="consumptionAmount">{{$trans("消费金额")}}</th>
                <th class="consumpionTradingTime">{{$trans("交易时间")}}</th>
              </tr>
            </thead>

            <!-- 表格内容 -->

            <!-- 消费记录 -->
            <tbody v-for="item in shuju" :key="item.message">
              <tr class="tabularData">
                <td class="explanationData">{{ item.one }}</td>
                <td class="consumptionAmountData">{{ item.tow }}</td>
                <td class="consumptionTimeData">{{ item.san }}</td>
              </tr>
            </tbody>
          </table>
          <!-- 没有数据 -->
          <div class="noData">
  <span>{{$trans("没有数据")}}</span>
 </div>
        </div>
      </div>
      <div class="LayoutButton"></div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rechargePage: false,
      // das: [
      //   { oms: "1234511", ss: "1000", sss: "2021年1月3日", ssqa: "北京" },
      //   { oms: "46141321", ss: "1890", sss: "2021年2月3日", ssqa: "上海" },
      //   { oms: "5212313", ss: "2000", sss: "2021年3月3日", ssqa: "广州" },
      // ],

      // shuju: [
      //   { one: "李四", tow: "10000", san: "2020年1月3日" },
      //   { one: "王二", tow: "15890", san: "2020年5月3日" },
      //   { one: "麻子", tow: "20000", san: "2020年6月3日" },
      // ],
    };
  },
  methods: {
    meRecharge() {
      this.rechargePage = false;
    },
    receiveRecharge() {
      this.rechargePage = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.rechargeLayout {
  width: 745px;
  height: 500px;
  // background: aquamarine;
  margin: 20px 0px 10px 0px;
}
.rechargetop {
  width: 700px;
  margin: 50px 20px 20px 0px;
  font-size: 14px;
}

.tableSize {
  width: 745px;
  height: 100%;
}
.transactionNumber {
  width: 301px;
  height: 42px;
  background-color: #dce7fd;
  border-style: solid;
  border-width: 1px;
  border-color: red;
}
.rechargeAmount {
  width: 116px;
  height: 42px;
  background-color: #dce7fd;
  border-style: solid;
  border-width: 1px;
  border-color: red;
}
.status {
  width: 136px;
  height: 42px;
  background-color: #dce7fd;
  border-style: solid;
  border-width: 1px;
  border-color: red;
}

.rechargeTradingTime {
  width: 192px;
  height: 42px;
  background-color: #dce7fd;
  border-style: solid;
  border-width: 1px;
  border-color: red;
}
.noData {
  width: 745px;
  height: 90px;
  padding-top: 30px;
  background-color: blue;
  border-style: solid;
  border-width: 1px;
  border-color: red;
  border-top-style: none;
  font-size: 18px;
}
// .tabularData{
//   height:42px;
//   background-color:red ;
// }
.indicationData {
  width: 301px;
  height: 42px;
  background-color: #e9ecef;
  border-style: solid;
  border-width: 1px;
  border-color: red;
}
.rechargeData {
  width: 116px;
  height: 42px;
  background-color: #e9ecef;
  border-style: solid;
  border-width: 1px;
  border-color: red;
}
.rechargeTimeData {
  width: 136px;
  height: 42px;
  background-color: #e9ecef;
  border-style: solid;
  border-width: 1px;
  border-color: red;
}
.tradingData {
  width: 192px;
  height: 42px;
  background-color: #e9ecef;
  border-style: solid;
  border-width: 1px;
  border-color: red;
}




.explanation{
  width: 301px;
  height: 42px;
   background-color: #DCE7FD; 
  border-style:solid;
	border-width:1px;
  border-color:red;
}
.consumptionAmount{
  width: 178px;
  height: 42px;
   background-color: #DCE7FD; 
 border-style:solid;
	border-width:1px;
   border-color:red;
}
.consumpionTradingTime{
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
.tabularData{
  width: 745px;
  height:42px;
  background-color:red ;
}
.explanationData{
   width: 301px;
  height: 42px;
   background-color: #e9ecef;
  border-style:solid;
	border-width:1px;
  border-color:red;
}
.consumptionAmountData{
   width: 178px;
  height: 42px;
   background-color: #e9ecef;
  border-style:solid;
	border-width:1px;
   border-color:red;
}
.consumptionTimeData{
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