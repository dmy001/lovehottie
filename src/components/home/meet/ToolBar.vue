<template>
  <div class="w-full">
    <div class="flex justify-between items-center p-px15 w-full bg-white">
      <div class="flex justify-center items-center text-px14 flex-wrap">
        <img :src="STATICBASEURI + '/images/oy1.jpg'" />
        <span
          >已经有<span class="text-base-color2 font-bold"> 100 </span
          >{{ $trans("多个国家的用户") }}</span
        >
        <a class="ml-px15 text-base-color2 cursor-pointer"
          >{{ $trans("邀请好友") }} >></a
        >
      </div>
      <div class="flex flex-row">
        <div>
          <button
            class="
              btnBorder
              flex
              justify-center
              items-center
              text-base-color4 text-px14
              ml-2
              rounded-2xl
              px-3
              py-1
            "
            style="outline: none"
            @click="btnSelect()"
          >
            {{ $trans("精确筛选") }}
          </button>
        </div>
        <div class="menu">
          <button
            class="
              btnBorder
              flex
              justify-center
              items-center
              ml-2
              rounded-2xl
              px-3
              py-1
              w-32
            "
            style="outline: none; border: 1px solid $lineColor1"
            @mouseover="mouseOver"
            @mouseleave="mouseLeave"
          >
            {{ $trans(value) }}
            <img
              class="ml-2"
              src="../../../assets/images/index/xld.png"
              v-show="showText"
              alt=""
            />
            <img
              class="ml-2"
              src="../../../assets/images/index/xld1.png"
              v-show="showText1"
              alt=""
            />
          </button>
          <ul
            class="menuContent absolute ml-2 w-32"
            @mouseover="mouseOver1"
            @mouseleave="mouseLeave1"
          >
            <li
              class="py-1 px-5 w-32"
              v-for="(item, index) in menuSelect"
              :key="index"
              @click="changeValue(item)"
            >
              {{ $trans(item) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-full mt-px3" v-show="showSelect">
      <div class="flex flex-row p-px15 bg-white text-left">
        <div class="flex-1">
          <span class="filter-item-title text-base">{{ $trans("国家") }}</span>
          <div class="country-list">
            <div class="country-list-item">
              <input
                type="radio"
                name="country"
                id="om"
                :value="$trans('欧美')"
                v-model="selCountry"
              />
              <label for="om">{{ $trans("欧美") }}</label>
            </div>
            <div class="country-list-item">
              <input
                type="radio"
                name="country"
                id="zga"
                :value="$trans('中港台')"
                v-model="selCountry"
              />
              <label for="zga">{{ $trans("中港台") }}</label>
            </div>
            <div class="country-list-item">
              <input
                type="radio"
                name="country"
                id="rh"
                :value="$trans('日韩')"
                v-model="selCountry"
              />
              <label for="rh">{{ $trans("日韩") }}</label>
            </div>
            <div class="country-list-item">
              <input
                type="radio"
                name="country"
                id="qt"
                :value="$trans('其他')"
                v-model="selCountry"
              />
              <label for="qt">{{ $trans("其他") }}</label>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <span class="filter-item-title text-base">{{ $trans("性别") }}</span>
          <div class="sex-list">
            <div class="sex-list-item">
              <input type="radio" id="sexA" value="unlimit" v-model="selSex" />
              <label for="sexA">{{ $trans("不限") }}</label>
            </div>
            <div class="sex-list-item">
              <input type="radio" id="sexB" value="male" v-model="selSex" />
              <label for="sexB">{{ $trans("男") }}</label>
            </div>
            <div class="sex-list-item">
              <input type="radio" id="sexC" value="female" v-model="selSex" />
              <label for="sexC">{{ $trans("女") }}</label>
            </div>
          </div>
          <span class="filter-item-title text-base">{{ $trans("年龄") }}</span>
          <div class="flex">
            <Slider v-model="sliderRange" range class="flex-1"></Slider>
          </div>
        </div>
        <div class="flex-1">
          <span class="filter-item-title text-base">{{ $trans("语言") }}</span>
          <div class="lang-list">
            <div class="flex flex-wrap">
              <div
                v-for="(item, index) in country"
                :key="index"
                class="lang-list-item mt-4 w-32"
              >
                <input
                  type="radio"
                  id="aa"
                  :value="item"
                  v-model="redioVal"
                  @change="getRadioVal"
                />
                <label class="ml-2" for="aa">{{ item }} </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-px15 bg-white text-left">
        <div
          class="border border-red-500 rounded-3xl px-6 py-2 inline-block"
          @click="showTitle()"
          style="cursor: pointer"
        >
          <div class="text-red-500 flex">
            <div class="mr-2 whitespace-nowrap">
              {{ $trans("高级选项") }}
            </div>
            <img
              class="mt-2"
              style="height: 100%"
              src="../../../assets/images/index/xld.png"
              v-show="showImg"
              alt=""
            />
            <img
              class="mt-2"
              style="height: 100%"
              src="../../../assets/images/index/xld1.png"
              v-show="showImg1"
              alt=""
            />
            <!-- <span class="bg-select-button"></span> -->
          </div>
        </div>
        <div class="flex ml-6 mt-6" v-show="isShow">
          <Select v-model="model1" style="width: 200px">
            <Option
              v-for="item in heightList"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}</Option
            >
          </Select>
          <Select class="ml-10" v-model="model2" style="width: 200px">
            <Option
              v-for="item in weightList"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}</Option
            >
          </Select>
          <Select class="ml-10" v-model="model3" style="width: 200px">
            <Option
              v-for="item in jobList"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}</Option
            >
          </Select>
        </div>
        <div class="flex justify-center mt-6">
          <button class="bg-red-400 text-white rounded-3xl px-6 py-2">
            {{ $trans("重新搜索") }}
          </button>
          <button class="ml-6 bg-gray-200 text-black rounded-3xl px-6 py-2">
            {{ $trans("取消") }}
          </button>
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
      selSex: "",
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
      menuSelect: ["推荐", "在线", "最新"],
      redioVal: "简体中文",
      isShow: false,
      showImg: true,
      showImg1: false,
      showSelect: false,
      showText: true,
      showText1: false,
      value: "推荐",
      heightList: [
        {
          value: "150cm—160cm",
          label: "150cm—160cm",
        },
        {
          value: "160cm—170cm",
          label: "160cm—170cm",
        },
        {
          value: "170cm—180cm",
          label: "170cm—180cm",
        },
        {
          value: "180cm 以上",
          label: "180cm 以上",
        },
      ],
      weightList: [
        {
          value: "40kg—50kg",
          label: "40kg—50kg",
        },
        {
          value: "50kg—60kg",
          label: "50kg—60kg",
        },
        {
          value: "60kg—70kg",
          label: "60kg—70kg",
        },
        {
          value: "70kg—80kg",
          label: "70kg—80kg",
        },
        {
          value: "80kg 以上",
          label: "80kg 以上",
        },
      ],
      jobList: [
        {
          value: "文案",
          label: "文案",
        },
        {
          value: "文员",
          label: "文员",
        },
        {
          value: "程序员",
          label: "程序员",
        },
        {
          value: "设计",
          label: "设计",
        },
        {
          value: "销售",
          label: "销售",
        },
        {
          value: "客户经理",
          label: "客户经理",
        },
        {
          value: "工程师",
          label: "客户经理",
        },
        {
          value: "CEO",
          label: "CEO",
        },
        {
          value: "会计",
          label: "会计",
        },
        {
          value: "出纳",
          label: "出纳",
        },
        {
          value: "公务员",
          label: "公务员",
        },
        {
          value: "农民",
          label: "农民",
        },
        {
          value: "渔民",
          label: "渔民",
        },
        {
          value: "医生",
          label: "医生",
        },
        {
          value: "护士",
          label: "护士",
        },
        {
          value: "清洁工",
          label: "清洁工",
        },
        {
          value: "保安",
          label: "保安",
        },
        {
          value: "警察",
          label: "警察",
        },
        {
          value: "教练",
          label: "教练",
        },
        {
          value: "运动员",
          label: "运动员",
        },
        {
          value: "司机",
          label: "司机",
        },
        {
          value: "快递员",
          label: "快递员",
        },
        {
          value: "服务员",
          label: "服务员",
        },
        {
          value: "空姐",
          label: "空姐",
        },
        {
          value: "机长",
          label: "机长",
        },
        {
          value: "维修工",
          label: "维修工",
        },
        {
          value: "采购",
          label: "采购",
        },
        {
          value: "厨师",
          label: "厨师",
        },
        {
          value: "美食家",
          label: "美食家",
        },

        {
          value: "导游",
          label: "导游",
        },
        {
          value: "老师",
          label: "老师",
        },
        {
          value: "学生",
          label: "学生",
        },
      ],

      model1: "160cm—170cm",
      model2: "60kg—70kg",
      model3: "程序员",
    };
  },
  methods: {
    changeValue(item) {
      this.value = item;
    },
    mouseOver() {
      this.showText = false;
      this.showText1 = true;
    },
    mouseLeave() {
      this.showText1 = false;
      this.showText = true;
    },
    mouseOver1() {
      this.mouseOver();
    },
    mouseLeave1() {
      this.mouseLeave();
    },

    getRadioVal() {
    },
   
    showTitle() {
      this.isShow = !this.isShow;
      this.showImg = !this.showImg;
      this.showImg1 = !this.showImg1;
    },
    btnSelect() {
      this.showSelect = !this.showSelect;
    },
  },
};
</script>

<style lang="scss" scoped>
.btnBorder {
  border: 1px solid $lineColor1;
}
.filter-item-title {
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
ul li {
  cursor: pointer;
}
ul li:hover {
  background-color: #ccc;
  display: block;
}
.menuContent {
  display: none;
  border: 1px solid #dcdcdc;
  border-radius: 18px;
  background: #fff;
  padding: 13px 0;
}

.menu:hover .menuContent {
  display: block;
}
</style>