<template>
  <div>
    <Modal
      v-model="modal1"
      title="举报"
      width="482"
      :styles="{ top: '150px' }"
      footer-hide
      :closable="false"
    >
      <p slot="header">
        <span class="text-white">举报</span>
        <span
          class="closed w-9 h-9 rounded-full -top-2 -right-3 absolute"
          @click="close()"
        ></span>
      </p>
      <div class="flex flex-wrap ml-16">
        <div v-for="(item, index) in complain" :key="index" class="w-28 mt-10">
          <input
            type="radio"
            id="aa"
            v-model="redioVal"
            @change="getRadioVal"
            :value="item"
          />
          <label for="aa" class="ml-4 mr-4">{{ item }}</label>
        </div>
      </div>
      <div class="w-full flex justify-center">
        <button @click="submitBtn()" class="submitBtn mt-16">提交</button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal1: true,
      complain: [
        "垃圾广告",
        "淫秽色情",
        "虚假中奖",
        "敏感信息",
        "人身攻击",
        "骚扰他人",
        "骗子",
        "广告",
        "色情低俗",
        "违法",
        "政治敏感",
        "谣言",
        "骚扰信息",
      ],
      redioVal: "",
    };
  },
  methods: {
    getRadioVal() {
      console.log(this.redioVal);
    },
    submitBtn() {
      console.log(this.redioVal);
      if (this.redioVal === "") {
        this.$Message.info("未选择选项内容");
        this.modal1 = !this.modal1;
      } else {
        this.$Message.success("举报成功");
        this.modal1 = !this.modal1;
      }
    },
    close() {
      this.modal1 = !this.modal1;
    },
  },
};
</script>

<style lang="scss" scoped>
.closed {
  background: url("~@images/iconClosed.png") 0 -39px no-repeat;
  cursor: pointer;
  z-index: 20;
}
.closed:hover {
  background: url("~@images/iconClosed.png") 0 0 no-repeat;
  cursor: pointer;
}
.submitBtn {
  background-color: #ff625a;
  border-color: #ff625a;
  color: #fff;
  line-height: 28px;
  margin-left: 6px;
  margin-right: 6px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  border-radius: 45px;
  font-weight: 400;
  outline: none;
}
</style>