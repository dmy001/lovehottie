<template>
  <div class="bg-white pb-4">
    <table class="w-full border mt-9">
      <tr class="h-10 bg-indigo-100">
        <td class="border border-gray-300" colspan="4" rowspan="2">
          {{ $trans("特权名称") }}
        </td>
        <td class="border border-gray-300" colspan="2">
          {{ $trans("普通用户") }}
        </td>
        <td class="border border-gray-300" colspan="2" rowspan="2">
          {{ $trans("Mini会员") }}
        </td>
        <td class="border border-gray-300" colspan="2" rowspan="2">
          {{ $trans("高级会员") }}
        </td>
        <td class="border border-gray-300" colspan="2" rowspan="2">
          {{ $trans("VIP会员") }}
        </td>
      </tr>
      <tr class="h-10 bg-indigo-100">
        <td class="border border-gray-300">{{ $trans("男") }}</td>
        <td class="border border-gray-300">{{ $trans("女") }}</td>
      </tr>
      <tr class="h-12">
        <td class="border" colspan="4">{{ $trans("翻译字符") }}</td>
        <td class="border">—</td>
        <td class="border">—</td>
        <td class="border" colspan="2">—</td>
        <td class="border" colspan="2">—</td>
        <td class="border" colspan="2">1500/{{ $trans("天") }}</td>
      </tr>
      <tr class="h-12">
        <td class="border" colspan="4">{{ $trans("翻译VIP") }}</td>
        <td class="border">—</td>
        <td class="border">—</td>
        <td class="border" colspan="2">—</td>
        <td class="border" colspan="2">—</td>
        <td class="border" colspan="2">3*10{{ $trans("翻译VIP") }}</td>
      </tr>
      <tr class="h-12">
        <td class="border" colspan="4">{{ $trans("IM消息条数") }}</td>
        <td class="border">6</td>
        <td class="border">6</td>
        <td class="border" colspan="2">50</td>
        <td class="border" colspan="2">{{ $trans("不限") }}</td>
        <td class="border" colspan="2">{{ $trans("不限") }}</td>
      </tr>
      <tr class="h-12">
        <td class="border" colspan="4">{{ $trans("Vip会员优惠券") }}</td>
        <td class="border">—</td>
        <td class="border">—</td>
        <td class="border text-green-700" colspan="2">√</td>
        <td class="border text-green-700" colspan="2">√</td>
        <td class="border" colspan="2">—</td>
      </tr>
      <tr class="h-12">
        <td class="border" colspan="4">{{ $trans("查看谁喜欢我") }}</td>
        <td class="border">—</td>
        <td class="border">—</td>
        <td class="border" colspan="2">—</td>
        <td class="border" colspan="2">—</td>
        <td class="border text-green-700" colspan="2">√</td>
      </tr>
      <tr class="h-12">
        <td class="border" colspan="4">{{ $trans("信息是否已读") }}</td>
        <td class="border">—</td>
        <td class="border">—</td>
        <td class="border" colspan="2">—</td>
        <td class="border" colspan="2">—</td>
        <td class="border text-green-700" colspan="2">√</td>
      </tr>
      <tr class="h-12">
        <td class="border" colspan="4">{{ $trans("虚拟礼物") }}</td>
        <td class="border">—</td>
        <td class="border">—</td>
        <td class="border" colspan="2">—</td>
        <td class="border" colspan="2">5</td>
        <td class="border" colspan="2">{{ $trans("不限") }}</td>
      </tr>
      <tr class="h-12">
        <td class="border" colspan="4">{{ $trans("模糊图") }}</td>
        <td class="border">—</td>
        <td class="border">—</td>
        <td class="border" colspan="2">3</td>
        <td class="border" colspan="2">10</td>
        <td class="border" colspan="2">{{ $trans("不限") }}</td>
      </tr>
    </table>
    <div class="mt-9">
      <p class="flex justify-start">{{ $trans("备注") }}：</p>
      <p class="flex justify-start mt-3 mb-3">
        <span class="text-pink-600">{{ $trans("翻译字符") }}：</span
        >{{ $trans("仅对vip开放，超出字符数：1金币/100字符") }}
      </p>
      <p class="flex justify-start">
        <span class="text-pink-600">{{ $trans("翻译VIP") }}：</span
        >{{ $trans("vip会员可免费使用3次10min翻译vip") }}
      </p>
      <p class="flex justify-start mt-3 mb-3">
        <span class="text-pink-600">{{ $trans("查看谁喜欢我") }}：</span
        >{{ $trans("仅对vip会员开放") }}
      </p>
      <p class="flex justify-start mb-3">
        <span class="text-pink-600">{{ $trans("信息是否已读") }}：</span
        >{{ $trans("仅对vip会员开放") }}
      </p>
      <p class="flex justify-start">
        <span class="text-pink-600">{{ $trans("虚拟礼物") }}：</span
        >{{
          $trans(
            "对所有会员开放，VIP会员每月无限免费赠送，高级会员每月免费赠送5个"
          )
        }}
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>