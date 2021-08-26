<template>
  <div class="bg-white pb-16">
    <div>
      <div class="text-left mt-8">
        <p class="mb-2 text-gray-800 font-bold">
          1、{{ $trans("什么是网站金币") }}？
        </p>
        <p class="ml-5">
          {{
            $trans(
              "本网站为用户提供金币服务，你可以在本网站购买和使用金币。金币没有期限限制。金币不可退还。金币没有货币价值，不得站外私自买卖或转让。"
            )
          }}
        </p>
      </div>
      <div class="text-left mt-4 mb-4">
        <p class="mb-2 text-gray-800 font-bold">
          2、{{ $trans("如何充值/购买金币") }}？
        </p>
        <p class="ml-5">
          {{
            $trans(
              "您可以登录-充值。我们目前仅提供PayPal、支付宝等网络安全支付方式，如果您没有PayPal账户，您可以选择 -PayPal-信用卡支付的方式。所有的支付方式都是绝对安全的。本站绝没有任何自动记忆或重复收费的程序。有任 何疑问，请马上与我们联系。"
            )
          }}
        </p>
      </div>
      <div class="text-left">
        <p class="mb-2 text-gray-800 font-bold">
          3、{{ $trans("一金币需要多少美元") }}？
        </p>
        <p class="ml-5">{{ $trans("1枚金币大约需要1美元。") }}</p>
      </div>
      <div class="text-left mt-4 mb-4">
        <p class="mb-2 text-gray-800 font-bold">
          4、{{ $trans("充值有优惠吗") }}？
        </p>
        <p class="ml-5">{{ $trans("充值1金币需1美元，目前充值没有优惠。") }}</p>
      </div>
      <div class="text-left">
        <p class="mb-2 text-gray-800 font-bold">
          5、{{ $trans("在充值页面无法成功充值") }}？
        </p>
        <p class="ml-5">{{ $trans("请尝试以下解决方案") }}：</p>
        <p class="ml-5">（1）{{ $trans("请先查看你的信用卡是否有问题。") }}</p>
        <p class="ml-5">（2）{{ $trans("更换浏览器重新尝试一下。") }}</p>
        <p class="ml-5">
          （3）{{
            $trans("如在系统提示您的信用卡不能用于支付这笔交易，请联系贝宝。")
          }}
        </p>
        <p class="ml-5">
          {{ $trans("如果所有方法都尝试过后仍旧无法成功充值，请联系我们。") }}
        </p>
      </div>
      <div class="text-left mt-4 mb-4">
        <p class="mb-2 text-gray-800 font-bold">
          6、{{ $trans("充值过后多长时间可以到账") }}？
        </p>
        <p class="ml-5">
          {{
            $trans(
              "通常情况下充值过后金额就会在账户里显示出来的。但是电子帐单支付，需要等待3-6个交易日才能到帐。如果您对 交易有疑问的话可以提交给我们您的货品号和交易号，以便我们帮您核查。"
            )
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>