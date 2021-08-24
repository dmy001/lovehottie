<template>
  <div class="w-11/12 h-full bg-gray-500 justify-self-center inline-block">
    <div class="pt-10">
      <Button type="success" style="width: 500px; height: 40px" @click="gitPush"
        >Display dialog box</Button
      >

      <Modal
        v-model="modalSubmit"
        title="语言提交"
        @on-ok="submit"
        @on-cancel="cancel1"
      >
        <p>zhongw</p>
        <Input
          v-model="value"
          placeholder="Enter something..."
          style="width: 300px"
        />
        <p>zhongw</p>

        <Input
          v-model="value"
          placeholder="Enter something..."
          style="width: 300px"
        />
        <p>zhongw</p>
        <Input
          v-model="value"
          placeholder="Enter something..."
          style="width: 300px"
        />

        <p>zhongw</p>
        <Input
          v-model="value"
          placeholder="Enter something..."
          style="width: 300px"
        />

        <p>zhongw</p>
        <Input
          v-model="value"
          placeholder="Enter something..."
          style="width: 300px"
        />
        <p>zhongw</p>
        <Input
          v-model="value"
          placeholder="Enter something..."
          style="width: 300px"
        />
        <p>zhongw</p>
        <Input
          v-model="value"
          placeholder="Enter something..."
          style="width: 300px"
        />

        <p>zhongw</p>
        <Input
          v-model="value"
          placeholder="Enter something..."
          style="width: 300px"
        />
      </Modal>
    </div>
    <div class="mt-10">
      <!-- <h2>Highlighted rows, borders</h2> -->
      <Button type="primary" @click="addItem" style="width: 500px; height: 40px"
        >Display dialog box</Button
      >

      <Modal
        v-model="modalFill"
        title="语言填入"
        @on-ok="success"
        @on-cancel="fail"
      >
        <p>zhongw</p>
        <Input
          v-model="value"
          placeholder="Enter something..."
          style="width: 300px"
        />
        <p>zhongw</p>

        <Input
          v-model="value"
          placeholder="Enter something..."
          style="width: 300px"
        />
        <p>zhongw</p>
        <Input
          v-model="value"
          placeholder="Enter something..."
          style="width: 300px"
        />

        <p>zhongw</p>
        <Input
          v-model="value"
          placeholder="Enter something..."
          style="width: 300px"
        />

        <p>zhongw</p>
        <Input
          v-model="value"
          placeholder="Enter something..."
          style="width: 300px"
        />
        <p>zhongw</p>
        <Input
          v-model="value"
          placeholder="Enter something..."
          style="width: 300px"
        />
        <p>zhongw</p>
        <Input
          v-model="value"
          placeholder="Enter something..."
          style="width: 300px"
        />

        <p>zhongw</p>
        <Input
          v-model="value"
          placeholder="Enter something..."
          style="width: 300px"
        />
      </Modal>
    </div>
    <!-- 数据头部 -->

    <table class="">
      <thead>
        <!-- 表格头部 -->
        <tr class="mt-10 justify-self-center inline-block">
          <th class="w-36 h-12 border border-red-500">key</th>
          <th class="w-36 h-12 border border-red-500">充值金额</th>
          <th class="w-36 h-12 border border-red-500">地位</th>
          <th class="w-36 h-12 border border-red-500">交易时间</th>
          <th class="w-36 h-12 border border-red-500">交易时间</th>
          <th class="w-36 h-12 border border-red-500">交易时间</th>
          <th class="w-36 h-12 border border-red-500">交易时间</th>
          <th class="w-36 h-12 border border-red-500">交易时间</th>
          <th class="w-36 h-12 border border-red-500">交易时间</th>
          <th class="w-36 h-12 border border-red-500">操作</th>
        </tr>
      </thead>
      <tbody
        v-for="item in Language"
        :key="item.Language"
        class="justify-self-center inline-block"
      >
        <tr>
          <td class="w-36 h-12 border border-red-500">{{ item.aa }}</td>
          <td class="w-36 h-12 border border-red-500">{{ item.bb }}</td>
          <td class="w-36 h-12 border border-red-500">{{ item.cc }}</td>
          <td class="w-36 h-12 border border-red-500">{{ item.dd }}</td>
          <td class="w-36 h-12 border border-red-500">{{ item.ee }}</td>
          <td class="w-36 h-12 border border-red-500">{{ item.ff }}</td>
          <td class="w-36 h-12 border border-red-500">{{ item.gg }}</td>
          <td class="w-36 h-12 border border-red-500">{{ item.hh }}</td>
          <td class="w-36 h-12 border border-red-500">{{ item.ii }}</td>
          <td class="w-36 h-12 border border-red-500">
            <Button type="primary" shape="circle" @click="modifyA">修改</Button>
            <Button type="primary" shape="circle" @click="deleteA">删除</Button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modalFill: false,
      modalSubmit: false,
      value: "",
      Language: [
        {
          aa: "12",
          bb: "12",
          cc: "12",
          dd: "12",
          ee: "12",
          ff: "12",
          gg: "12",
          hh: "12",
          ii: "12",
          jj: "12",
        },
        {
          aa: "12",
          bb: "12",
          cc: "12",
          dd: "12",
          ee: "12",
          ff: "12",
          gg: "12",
          hh: "12",
          ii: "12",
          jj: "12",
        },
        {
          aa: "12",
          bb: "12",
          cc: "12",
          dd: "12",
          ee: "12",
          ff: "12",
          gg: "12",
          hh: "12",
          ii: "12",
          jj: "12",
        },
        {
          aa: "12",
          bb: "12",
          cc: "12",
          dd: "12",
          ee: "12",
          ff: "12",
          gg: "12",
          hh: "12",
          ii: "12",
          jj: "12",
        },
        {
          aa: "12",
          bb: "12",
          cc: "12",
          dd: "12",
          ee: "12",
          ff: "12",
          gg: "12",
          hh: "12",
          ii: "12",
          jj: "12",
        },
        {
          aa: "12",
          bb: "12",
          cc: "12",
          dd: "12",
          ee: "12",
          ff: "12",
          gg: "12",
          hh: "12",
          ii: "12",
          jj: "12",
        },
        {
          aa: "12",
          bb: "12",
          cc: "12",
          dd: "12",
          ee: "12",
          ff: "12",
          gg: "12",
          hh: "12",
          ii: "12",
          jj: "12",
        },
        {
          aa: "12",
          bb: "12",
          cc: "12",
          dd: "12",
          ee: "12",
          ff: "12",
          gg: "12",
          hh: "12",
          ii: "12",
          jj: "12",
        },
      ],
    };
  },
  methods: {
    gitPush() {
      this.modalSubmit = true;
    },
    addItem() {
      this.modalFill = true;
    },
    //设定成功
    success() {
      this.$Message.info("设置成功");
    },
    //设置失败
    fail() {
      this.$Message.info("设置失败");
    },

    cancel1() {
      this.$Message.info("Clicked 输入shib");
    },
    cancel() {
      this.$Message.info("Clicked 输入成功");
    },
    modifyA() {},
    deleteA() {},
  },
};
</script>


 