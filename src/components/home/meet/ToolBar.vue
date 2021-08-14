<template>
  <div class="w-full">
    <div class="flex justify-between items-center p-px15 w-full bg-white">
      <div class="flex justify-center items-center text-px14">
        <img :src="STATICBASEURI + '/images/oy1.jpg'" />
        <span
          >已经有<span class="text-base-color2 font-bold">100</span
          >多个国家的用户</span
        >
        <a class="ml-px15 text-base-color2 cursor-pointer">邀请好友 >></a>
      </div>
      <div class="flex flex-row">
        <button
          class="
            flex
            justify-center
            items-center
            text-base-color4 text-px14
            toolbar-btn
          "
        >
          精确筛选
        </button>
        <button
          class="
            flex
            justify-center
            items-center
            text-base-color4 text-px14
            toolbar-btn
          "
        >
          推荐
        </button>
      </div>
    </div>
    <div class="w-full mt-px3">
      <div class="flex flex-row p-px15 bg-white text-left">
        <div class="flex-1">
          <span class="filter-item-title">国家</span>
          <div class="country-list">
            <div class="country-list-item">
              <input
                type="radio"
                name="country"
                id="om"
                value="欧美"
                v-model="selCountry"
              />
              <label for="om">欧美</label>
            </div>
            <div class="country-list-item">
              <input
                type="radio"
                name="country"
                id="zga"
                value="中港澳"
                v-model="selCountry"
              />
              <label for="zga">中港澳</label>
            </div>
            <div class="country-list-item">
              <input
                type="radio"
                name="country"
                id="rh"
                value="日韩"
                v-model="selCountry"
              />
              <label for="rh">日韩</label>
            </div>
            <div class="country-list-item">
              <input
                type="radio"
                name="country"
                id="qt"
                value="其他"
                v-model="selCountry"
              />
              <label for="qt">其他</label>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <span class="filter-item-title">性别</span>
          <div class="sex-list">
            <div class="sex-list-item">
              <input type="radio" id="sexA" value="unlimit" v-model="selSex" />
              <label for="sexA">不限</label>
            </div>
            <div class="sex-list-item">
              <input type="radio" id="sexB" value="male" v-model="selSex" />
              <label for="sexB">男</label>
            </div>
            <div class="sex-list-item">
              <input type="radio" id="sexC" value="female" v-model="selSex" />
              <label for="sexC">女</label>
            </div>
          </div>
          <span class="filter-item-title">年龄</span>
          <div class="flex">
            <Slider v-model="sliderRange" range class="flex-1"></Slider>
          </div>
        </div>
        <div class="flex-1">
          <span class="filter-item-title">语言</span>
          <div class="lang-list">
            <div class="flex flex-wrap">
              <div
                v-for="(item, index) in country"
                :key="index"
                class="lang-list-item mt-4 w-32"
              >
                <input
                  type="radio"
                  id="countryRoudio"
                  :value="item"
                  v-model="redioVal"
                  @change="getRadioVal"
                />
                <label for="countryRoudio">{{ item }} </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AD />
  </div>
</template>

<script>
import AD from "@components/home/meet/AD.vue";

export default {
  components: {
    AD,
  },
  data() {
    return {
      selCountry: "中港澳",
      selSex: "中港澳",
      sliderRange: [18, 50],
      country: [
        "English",
        "日本語",
        "русский",
        "Español",
        "简体中文",
        "繁體中文",
        "한국어",
        "Deutsch",
      ],
      redioVal: "简体中文",
    };
  },
  methods: {
    getRadioVal() {
      console.log(this.redioVal);
    },
  },
};
</script>

<style lang="scss" scoped>
.toolbar-btn {
  outline: none;
  width: 88px;
  height: 32px;
  margin-left: 8px;
  border: 1px solid $lineColor1;
  border-radius: 16px;
}
.filter-item-title {
  font-size: 16px;
  color: #333;
}
.country-list,
.sex-list {
  margin-top: 20px;
  margin-left: 5px;
  .country-list-item,
  .sex-list-item {
    margin: 10px 0;
    label {
      @apply ml-px10 cursor-pointer;
    }
  }
}
.sex-list {
  @apply flex flex-row;
  .sex-list-item {
    flex-grow: 1;
  }
}

.lang-list {
  @apply flex;
  & > div {
    margin-left: 5px;
  }
}
</style>