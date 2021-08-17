<template>
  <div>
    <div class="w-3/5 rounded-2xl bg-white">
      <section class="h-12 bg-red-400 rounded-t-2xl flex justify-between pl-3">
        <p class="text-left mt-3 text-white">选择国家</p>
        <span class="w-9 h-9 rounded-full bg-red-400 -mt-3 -mr-1"></span>
      </section>
      <section class="flex justify-center mt-5 pb-5" >
        <Tabs value="name1" class="space-x-10">
          <TabPane label="A-G" name="name1">标签一的内容
          </TabPane>
          <TabPane label="H-M" name="name2">标签二的内容</TabPane>
          <TabPane label="N-S" name="name3">标签三的内容</TabPane>
          <TabPane label="T-Z" name="name4">标签四的内容</TabPane>
        </Tabs>
      </section>
      <section class="flex justify-center mt-5 bottom-5   z-5 relative">
          <Button title="确定" name="取消"></Button>
      </section>
    </div>
  </div>
</template>
<script>
import Button from '@components/personal/Button.vue';
export default{
    components:{
        Button
    }
}
</script>
<style lang="scss" scoped>

</style>
