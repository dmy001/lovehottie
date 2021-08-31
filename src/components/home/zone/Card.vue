<template>
  <!-- <div class="waterfall-container"> -->
  <section>
    <div class="zone-card-container m-px10 border-base-color4 inline-block">
      <div class="w-full" @mousemove="moveCard" @mouseleave="leaveCard">
        <div class="flex items-center p-px10">
          <img
            class="w-px30 h-px30 rounded-1/2"
            src="https://images.gagahi.com/A-942e2ce4e071d89e7d2afc0ab59d9416"
          />
          <div class="flex w-full justify-between">
            <div class="flex flex-col text-12px">
              <span class="text-base-color2">Jack</span>
              <span class="text-base-color4"  @click="qwer">中国</span>
            </div>
            <a
              v-show="showWarning"
              @click="openReport"
              class="reportImg inline-block w-5 h-4"
              style="
                background-position: 0 0;
                text-decoration: none;
                color: #333;
              "
            ></a>
          </div>
        </div>
        <div>
          <div class="">
            <p class="m-px10 mt-0 text-left" :class="{ textWord: showText }">
              Speak out when you love Speak out when you love Speak out when you
              love Speak out when you love Speak out when you love Speak out
              when you loveSpeak out when you love Speak out when you love Speak
              out when you love Speak out when you love Speak out when you love
              Speak out when you loveSpeak out when you love Speak out when you
              love Speak out when you love Speak out when you love Speak out
              when you love Speak out when you loveSpeak out when you love Speak
              out when you love Speak out when you love Speak out when you love
              Speak out when you love Speak out when you loveSpeak out when you
              love Speak out when you love Speak out when you love Speak out
              when you love Speak out when you love Speak out when you love
              
            </p>
            <div class="flex-row inline-block ml-40">
              <div
                v-show="showMoreWord1"
                @click="showMore1"
                class="flex items-center"
              >
                <div
                  class="mr-1 cursor-pointer"
                  style="color: #696969; font-size: 14px"
                >
                  查看更多
                </div>
                <div class="">
                  <img
                    class="w-3 h-3 mr-2"
                    src="../../../assets/images/top2.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                v-show="showMoreWord2"
                @click="showMore2"
                style="float: right"
                class="flex mt-0 items-center"
              >
                <div
                  class="mr-1 cursor-pointer"
                  style="color: #696969; font-size: 14px"
                >
                  收起
                </div>
                <div class="">
                  <img
                    class="w-3 h-3 mr-2"
                    src="../../../assets/images/top1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            v-for="(it, index) in srcec"
            :key="index"
            class="bg-gray-800 inline-block grid-cols-3 justify-center"
           
          >
          

            <!-- 64 1张  20 6张  24 4张 -->
            <img :src="it.url"  class="  bg-gray-600" :class="it.width" @click="imgViewComments(index)" />
          </div>
        </div>
        <!-- 评论  翻译图标 -->
        <div class="fun-icon">
          <div @click="showCmtSwith(i)">
            <i></i>
            <span class="ml-1 text-12px text-base-color4">1</span>
          </div>
          <div>
            <EarthImg class="-ml-4"></EarthImg>
            <span></span>
          </div>
        </div>
        <div class="zone-time text-base-color4 text-12px text-left ml-px15">
          04-08 13:16
        </div>
        <!-- 评论区域 -->
        <comment-block ref="cmtBlock"></comment-block>
      </div>
    </div>
    <!-- 举报 -->
    <Report v-if="showReport"></Report>
    <!-- 显示大图 -->
    <BigImage v-if="showBigImg"
      :imagesUrl="this.vaule"
      >

    </BigImage>
  </section>
  <!-- </div> -->
</template>

<script>
import BigImage from "@/components/home/othercentre/BigImage"
import CommentBlock from "@components/common/commentBlock.vue";
import Report from "@/components/home/othercentre/Report";
import EarthImg from "@/components/home/othercentre/EarthImg";
export default {
  components: {
    "comment-block": CommentBlock,
    Report,
    EarthImg,
    BigImage
  },

  data() {
    return {
      isShowCmtBtn: true,
      commentText: "",
      showWarning: false,
      showReport: false,
      showText: true,
      showMoreWord1: true,
      showMoreWord2: false,
      item: {},
      showBigImg:false,
      // imgWidthtwo:["w-24"],
      // imgWidtsix:["w-20"],
      // imgWidthone:["w-full"],
      srcec: [
        {url:"https://images.gagahi.com/A-942e2ce4e071d89e7d2afc0ab59d9416",width:''},
         {url:"https://images.gagahi.com/A-942e2ce4e071d89e7d2afc0ab59d9416",width:''},
          {url:"https://images.gagahi.com/A-942e2ce4e071d89e7d2afc0ab59d9416",width:''},
          {url:"https://images.gagahi.com/A-942e2ce4e071d89e7d2afc0ab59d9416",width:''},
         {url:"https://images.gagahi.com/A-942e2ce4e071d89e7d2afc0ab59d9416",width:''},
          {url:"https://images.gagahi.com/A-942e2ce4e071d89e7d2afc0ab59d9416",width:''},
          
      ],
    };
  },
  methods: {
    showCmtSwith(index) {
      this.$refs.cmtBlock[--index].commentIconCli();
    },
    moveCard() {
      this.showWarning = true;
    },
    leaveCard() {
      this.showWarning = false;
    },
    openReport() {
      this.showReport = !this.showReport;
    },
    showMore1() {
      this.showMoreWord1 = !this.showMoreWord1;
      this.showMoreWord2 = !this.showMoreWord2;
      this.showText = !this.showText;
    },
    showMore2() {
      this.showMoreWord1 = !this.showMoreWord1;
      this.showMoreWord2 = !this.showMoreWord2;
      this.showText = !this.showText;
    },

    //点击图片显示查看评论
   imgViewComments(value){
   console.log(value)
        },
    //图片判断显示9宫格
    qwer() {
      console.log(this.srcec);
      if (this.srcec.length  <2) {
        this.srcec = this.srcec.map((it)=>{
          it.width = 'w-full';
          return it;  
        })
      }else if(this.srcec.length>1&&this.srcec.length<6&&this.srcec.length != 3){
         this.srcec = this.srcec.map((it)=>{
          it.width = 'w-24';
           return it; 
           })
      }else{
        this.srcec = this.srcec.map((it)=>{
          it.width = 'w-20'
          return it; 
          })
      }

      console.log(this.srcec)
    },
  },
};
</script>

<style lang="scss" scoped>
.waterfall-container {
  display: flex;
  flex-flow: column wrap;
  width: 100%;
}
.zone-card-container {
  width: 262px;
  margin: 5px 5px 5px 0px;
  border-radius: 3px;
  border: 1px solid $lineColor1;
}
.fun-icon {
  width: 100%;
  margin: 3px;
  @apply flex;
  & > div {
    margin-left: 15px;
    @apply flex items-center;
  }
  & > div i {
    background: url("~@images/dynamic.png") no-repeat;
    width: 20px;
    height: 20px;
    display: inline-block;
    cursor: pointer;
  }
  & > div:first-child i {
    background-position: -26px -48px;
  }
  & > div:last-child i {
    background-position: -54px -48px;
  }
}
.reportImg {
  background: url("~@images/person/dynamic.png");
}
.topImg {
  background: url("../../../assets/images/top1.png");
}
.textWord {
  display: -webkit-box;
  word-break: break-word;
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
}
</style>