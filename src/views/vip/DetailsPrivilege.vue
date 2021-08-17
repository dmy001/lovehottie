<template>
  <div class="bg-white pb-4">
    <table class="w-11/12 border mt-9">
      <tr class="h-10 bg-indigo-100">
        <td class="border border-gray-300" colspan="4" rowspan="2">特权</td>
        <td class="border border-gray-300" colspan="2">普通会员</td>
        <td class="border border-gray-300" colspan="2" rowspan="2">迷你会员</td>
        <td class="border border-gray-300" colspan="2" rowspan="2">高级会员</td>
        <td class="border border-gray-300" colspan="2" rowspan="2">VIP会员</td>
      </tr>
      <tr class="h-10 bg-indigo-100">
        <td class="border border-gray-300">男性</td>
        <td class="border border-gray-300">女性</td>
      </tr>
      <tr class="h-12">
        <td class="border" colspan="4">翻译字符</td>
        <td class="border">—</td>
        <td class="border">—</td>
        <td class="border" colspan="2">—</td>
        <td class="border" colspan="2">—</td>
        <td class="border" colspan="2">1500/天</td>
      </tr>
      <tr class="h-12">
        <td class="border" colspan="4">翻译贵宾</td>
        <td class="border">—</td>
        <td class="border">—</td>
        <td class="border" colspan="2">—</td>
        <td class="border" colspan="2">—</td>
        <td class="border" colspan="2">3*10翻译VIP</td>
      </tr>
      <tr class="h-12">
        <td class="border" colspan="4">IM消息数</td>
        <td class="border">6</td>
        <td class="border">6</td>
        <td class="border" colspan="2">50</td>
        <td class="border" colspan="2">无限</td>
        <td class="border" colspan="2">无限</td>
      </tr>
      <tr class="h-12">
        <td class="border" colspan="4">VIP会员优惠券</td>
        <td class="border">—</td>
        <td class="border">—</td>
        <td class="border text-green-700" colspan="2">√</td>
        <td class="border text-green-700" colspan="2">√</td>
        <td class="border" colspan="2">—</td>
      </tr>
      <tr class="h-12">
        <td class="border" colspan="4">看到谁喜欢我</td>
        <td class="border">—</td>
        <td class="border">—</td>
        <td class="border" colspan="2">—</td>
        <td class="border" colspan="2">—</td>
        <td class="border text-green-700" colspan="2">√</td>
      </tr>
      <tr class="h-12">
        <td class="border" colspan="4">消息是否已读</td>
        <td class="border">—</td>
        <td class="border">—</td>
        <td class="border" colspan="2">—</td>
        <td class="border" colspan="2">—</td>
        <td class="border text-green-700" colspan="2">√</td>
      </tr>
      <tr class="h-12">
        <td class="border" colspan="4">虚拟礼物</td>
        <td class="border">—</td>
        <td class="border">—</td>
        <td class="border" colspan="2">—</td>
        <td class="border" colspan="2">5</td>
        <td class="border" colspan="2">无限</td>
      </tr>
      <tr class="h-12">
        <td class="border" colspan="4">模糊图</td>
        <td class="border">—</td>
        <td class="border">—</td>
        <td class="border" colspan="2">3</td>
        <td class="border" colspan="2">10</td>
        <td class="border" colspan="2">无限</td>
      </tr>
    </table>
    <div class="mt-9">
      <p class="flex justify-start">笔记：</p>
      <p class="flex justify-start mt-3 mb-3">
        <span class="text-pink-600">翻译字：</span>只有VIP会员每天1500字。翻译价格：1金/100字。
      </p>
      <p class="flex justify-start">
          <span class="text-pink-600">翻译VIP：</span>VIP会员可免费享受3次10分钟翻译VIP
      </p>
      <p class="flex justify-start mt-3 mb-3">
          <span class="text-pink-600">看到喜欢我的人：</span>只对VIP会员开放
      </p>
      <p class="flex justify-start mb-3">
          <span class="text-pink-600">留言是否为：</span>只对VIP会员开放
      </p>
      <p class="flex justify-start">
          <span class="text-pink-600">虚拟礼物：</span>对所有会员开放；VIP会员每月可无限次发送虚拟礼物；高级会员每月可送5份虚拟礼物
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>