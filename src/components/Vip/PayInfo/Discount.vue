<template>
  <div class="Discount">
    <div class="text-left w-full text-sm">
      <p class="text-left">{{$trans('优惠券')}}</p>
      <hr />
      <div class="my-5">
        <i class="w-5 h-5 rounded-full inline-block align-middle"></i
        ><span>{{$trans('无可用优惠券')}}</span
        ><span class="text-orangeFont align-middle"
          >{{$trans('(会员优惠券仅限金币支付使用)')}}</span
        >
      </div>
      <hr />
      <div class="mr-5">
        <p class="text-right mt-8">{{$trans('订单金额：')}}{{$trans(price)}}</p>
        <p class="text-right mt-4 mb-8">
          {{$trans('实付金额：')}}<span class="text-orangeFont">{{$trans(price)}}</span>
        </p>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>

export default {
  props:{
    price:String
  }
};
</script>

<style lang='scss' scoped>
.Discount {
  hr {
    border-style: dotted;
  }
  i {
    background: url("../../../assets/images/nocounpon_ischecked.jpg") 4px 5px
      no-repeat;
    background-color: rgb(203, 203, 203);
  }
}
</style>