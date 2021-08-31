<template>
  <div class="waterfall-container">
    <div class="w-full flex flex-row">
      <div class="flex flex-col" style="width: calc(100% / 3)">
             <!-- 分享内容 -->
        <editDynamic></editDynamic>
 <!-- 朋友圈内容和动态广场内容 -->
        <div v-for="i in 10" :key="i">
          <div v-if="i % 3 === 1"> 
            <!-- 1 4 7  -->

            <card
              :imgsrc="''"
             ></card>
          </div>
        </div>
      </div>
      <div class="flex flex-col" style="width: calc(100% / 3)">
        <div v-for="i in 10" :key="i">
          <div v-if="i % 3 === 2">
            <card
              
            ></card>
          </div>
        </div>
      </div>
      <div class="flex flex-col" style="width: calc(100% / 3)">
        <div v-for="i in 10" :key="i">
          <div v-if="i % 3 === 0">
            <card
            
            ></card>
          </div>
        </div>
      </div>
    </div>
 
  </div>
       

</template>

<script>
import card from "@components/home/zone/Card.vue";
import editDynamic from "@components/editDynamic.vue";



export default {
  components: {
    card,
    editDynamic,
  },
};
</script>
<style lang="scss" >

.bg_icon {
  background: url("~@images/person/dynamic.png") no-repeat;
  display: inline-block;
}
 .shareList {
    padding: 20px;
  }
.show {
  display: block;
}
.hide {
  display: none;
}

</style>