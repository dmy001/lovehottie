<template>
  <div class="relative flex flex-col bg-gray-100">
    <div class="topUser">
      <img
        :src="STATICBASEURI + '/images/default/female.png'"
        alt=""
        class="avatar"
      />
      <div class="topRight ml-px10">
        <div class="personName">
          {{ $trans("可爱小怪咖") }}
          <router-link to="/home/personal">
            <span class="inline-block cursor-pointer"></span
          ></router-link>
        </div>
        <div>
          <span>{{ $trans("女") }}，</span>
          <span>{{ $trans("18") }}，</span>
          <span>{{ $trans("中国") }}，</span>
          <span>{{ $trans("GaGaID:40473864") }}</span>
        </div>
      </div>
    </div>
    <!-- 打开相册 -->
    <div v-show="showImgs" class="w-full">
      <div class="top w-full h-10 bg-blue-100 mx-auto flex justify-between">
        <div class="left ml-5 text-left text-base leading-10">
          {{ $trans("我的照片") }}
          <span class="text-gray-400 leading-10">(0)</span>
        </div>
        <div class="right text-right">
          <div
            class="
              w-24
              h-7
              rounded-2xl
              text-center
              mt-2
              bg-red-400
              text-white
              leading-7
              mr-10
            "
          >
            {{ $trans("升级会员") }}
          </div>
          <img
            src="../../assets/images/person/open.png"
            alt=""
            title="$trans('打开相册')"
            class="inline-block -mt-12 mr-3 cursor-pointer"
            @click="openImg"
          />
        </div>
      </div>
      <div class="w-full p-5 bg-white" style="min-height: 575px">
        <section class="flex justify-between">
          <div class="space-x-4">
            <button
              class="h-7 w-24 rounded-2xl border border-gray-400 text-black"
              @click="modalPhoto = true"
            >
              {{ $trans("上传照片") }}
            </button>
            <button
              v-show="!del"
              class="h-7 rounded-2xl border border-gray-400 text-black"
              style="min-width: 96px"
              @click="manage"
            >
              {{ $trans("批量管理") }}
            </button>
            <button
              v-show="del"
              class="h-7 rounded-2xl border border-gray-400 text-black"
              style="min-width: 96px"
              @click="manage"
            >
              {{ $trans("取消批量管理") }}
            </button>
            <button
              v-show="del"
              class="h-7 w-24 rounded-2xl border border-gray-400 text-black"
              @click="delImgs"
            >
              {{ $trans("删除") }}
            </button>
          </div>
        </section>
        <!-- 照片列表 -->
        <section class="w-full ml-5 mt-5">
          <div
            v-for="(img, it) in iamgeList"
            :key="it"
            class="
              imgs
              bg-gray-400
              object-contain
              relative
              float-left
              mr-8
              mt-5
            "
            style="max-width: 180px; max-height: 180px"
            @click.stop="toBigImg(it)"
          >
            <span class="" @click="bigImg = index">
              <img class="w-40 cursor-pointer" :src="img.imgUrl" />
            </span>
            <span class="">
              <!-- <a :href="img.imgUrl + '?imageView2/2/w/560/h/630'" target="_self"></a> -->
              <img class="w-40 h-40 object-contain cursor-pointer" :src="img" />
            </span>
            <span
              v-show="del"
              class="
                selectImg
                w-40
                h-8
                top-0
                absolute
                flex
                justify-end
                cursor-pointer
              "
              @click.stop="toSelectImg(it)"
            >
            </span>
            <span
              v-show="del"
              v-if="option.includes(it)"
              class="
                showSelectImg
                w-40
                h-8
                top-0
                absolute
                flex
                justify-end
                cursor-pointer
              "
              @click.stop="toCancelImg(it)"
            >
            </span>
            <span
              class="
                bgBlack
                w-40
                h-8
                top-32
                absolute
                flex
                justify-end
                cursor-pointer
              "
            >
              <div class="delImg mt-2 ml-32" @click.stop="toDelImg(it)"></div>
            </span>
          </div>
          <!-- 放大图片 -->
          <div v-show="big != -1">
            <img
              :src="this.iamgeList[currentIndex] + '?imageView2/2/w/560/h/630'"
              alt=""
            />
          </div>
          <BigImage
            v-show="openBigImg"
            :images="iamgeList"
            :imagesUrl="
              this.iamgeList[currentIndex] + '?imageView2/2/w/560/h/630'
            "
            @func="closeBigImg"
            @leftBtn="leftImage"
            @rightBtn="rightImage"
          ></BigImage>
        </section>
      </div>
    </div>
    <!-- 我的好友 -->
    <div v-show="showFriendsList" class="w-full">
      <div class="top w-full h-10 bg-blue-100 mx-auto flex justify-between">
        <div class="left ml-5 text-left text-base leading-10">
          {{ $trans("我的好友") }}
          <span class="text-gray-400 leading-10">(0)</span>
        </div>
        <div class="right text-right">
          <img
            src="../../assets/images/person/open.png"
            alt=""
            :title="$trans('好友列表')"
            class="inline-block mt-3 mr-3 cursor-pointer"
            @click="showFriends"
          />
        </div>
      </div>
      <section class="bg-white" style="min-height: 575px">
        <div class="px-10">
          <div
            v-for="(person, i) in friendList"
            :key="i"
            class="friend w-36 h-48 rounded-lg mr-2 mt-5 float-left relative"
            @mousemove="showEdit = true"
            @mouseleave="showEdit = false"
          >
            <div class="w-36 flex flex-col justify-center space-y-3">
              <span class="mx-auto mt-3">
                <router-link to="otherCentre">
                  <img class="w-20 rounded-full" :src="person.adavaUrl" />
                </router-link>
              </span>
              <span v-show="isEdit != i" class="flex flex-row justify-center">
                <router-link to="otherCentre"
                  ><p
                    class="
                      editName
                      w-12
                      text-black
                      overflow-hidden overflow-ellipsis
                    "
                  >
                    {{ person.name }}
                  </p></router-link
                >
                <p class="icon_edit" @click.stop="isEdit = i"></p>
              </span>
              <span v-show="isEdit == i" @click.stop>
                <input
                  id="remarkName"
                  class="
                    remarkName
                    w-36
                    h-5
                    border border-solid border-gray-400
                    px-1
                  "
                  type="text"
                  maxlength="20"
                />
              </span>
            </div>
            <span
              class="del w-36 flex justify-center"
              @click.stop="toDelFriend = true"
            >
              <p class="delFriend absolute -bottom-4"></p>
            </span>
          </div>
        </div>
      </section>
    </div>

    <div
      v-show="!showImgs"
      :class="{ active: showFriendsList == true }"
      class="photo"
    >
      <!-- 展示照片 -->
      <div class="">
        <Swpier></Swpier>
      </div>

      <div
        class="upload float-left top-0 absolute bg-gray-500"
        @click="modalPhoto = true"
      >
        <img
          style="
            width: 123px；height：120px;
            object-fit: cover;
            flex-shrink: 0;
            cursor: pointer;
          "
          src="../../assets/images/person/upload.jpg"
          alt=""
        />
      </div>
      <div class="imgList float-left">
        <!-- <p>{{$trans('尚无展示照片，挑选相册中的照片展示到这里吧')}}</p> -->
        <!-- <p>尚无展示照片，挑选相册中的照片展示到这里吧</p> -->
        <img
          src="../../assets/images/person/open.png"
          alt=""
          :title="$trans('打开相册')"
          class="imgShow"
          @click="openImg"
          absolute
          z-10
        />
      </div>
    </div>
    <div
      v-show="!showImgs"
      :class="{ active: showFriendsList == true }"
      class="personContent   mt-5"
    >
      <div class="shareList flex justify-between">
        <editDynamic></editDynamic>
        <div class="content">
          <div class="content_top">{{ $trans("礼物(0)") }}</div>
          <div class="content_bottom">{{ $trans("还未收到礼物") }}</div>
        </div>
        <div class="right">
          <div class="content_top">{{ $trans("好友(0)") }}</div>

          <img
            src="../../assets/images/person/open.png"
            alt=""
            :title="$trans('好友列表')"
            class="-mt-8 ml-56 cursor-pointer"
            @click="showFriends"
          />
          <div class="content_bottom">{{ $trans("还没有好友") }}</div>
        </div>
      </div>
      <!-- 评论区 -->
      <!-- <div class="mt-px15 bg-white w-full pb-10">
        <div class="dynamic">
          <div class="dynamic_left float-left">
            <img
              :src="STATICBASEURI + '/images/default/female.png'"
              alt=""
              class="avatarLeft"
            />
          </div>
          <div
            class="dynamic_right float-left ml-px10 text-left"
            style="width: 92%; position: relative"
            @mousemove="mouseInner = true"
            @mouseleave="mouseInner = false"
          >
            <p class="flex flex-row">
              <span class="mr-px15 text-base-color1">{{
                $trans("可爱小怪咖")
              }}</span>
              <span class="text-xs">03-03 13:12</span>
              <span
                v-show="mouseInner"
                class="absolute right-0"
                @click="isDelete = true"
                ><img class="w-5 cursor-pointer" src="~@images/error.png"
              /></span>
            </p>
            <p class="content_text">{{ $trans("我不知道啊 不知道") }}</p>
            <div class="ml-px15 mt-px15 dynamic_icon relative">
              <span
                class="bg_icon message_icon mr-px3"
                @click.stop="openList"
              ></span
              ><span class="text-gray-400">{{ this.contentList.length }}</span>
              <div class="fanyi_circle">
                <span class="bg_circle ml-px15"></span>
                <div class="trans-type">
                  <span class="ul_bg"></span>
                  <ul>
                    <li data-type="en">English</li>
                    <li data-type="zh">简体中文</li>
                    <li data-type="cht">繁體中文</li>
                    <li data-type="kor">한국어</li>
                    <li data-type="ru">Pусский</li>
                    <li data-type="de">Deutsch</li>
                    <li data-type="spa">Español</li>
                    <li data-type="jp">日本語</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="dynamic_input mt-px15">
              评论列表
              <div v-if="listShow">
                <div
                  class="comment_list"
                  v-for="(item, index) in contentList"
                  :key="index"
                >
                  <div class="comment_content">
                    <div class="content_left float-left">
                      <img
                        :src="STATICBASEURI + '/images/default/female.png'"
                        alt=""
                      />
                    </div>
                    <div
                      class="content_right ml-px10 float-left"
                      style="width: 656px"
                    >
                      <p>
                        <span class="mr-px15 text-base-color1 text-12px">{{
                          item.name
                        }}</span>
                        <span class="text-12px">{{ item.time }}</span>
                      </p>
                      <div
                        @mousemove="mouseComment = true"
                        @mouseleave="mouseComment = false"
                        class="right_text"
                      >
                        <span class="text-12px mr-px15">
                          {{ item.content }}
                        </span>
                        <div class="inline max-w-full icon_content absolute">
                          <div
                            class="inline-block align-middle"
                            style="margin-left: 20px"
                          >
                            <i
                              class="
                                message_iconSmall
                                inline-block
                                cursor-pointer
                              "
                              @click.stop="inputShow = true"
                            ></i>
                          </div>
                          <div
                            class="relative inline-block align-middle"
                            style="margin-left: 5px"
                          >
                            <i
                              class="
                                bg_circleSmall
                                relative
                                inline-block
                                cursor-pointer
                              "
                            >
                              <div class="trans-type">
                                <span class="ul_bg"></span>
                                <ul>
                                  <li data-type="en">English</li>
                                  <li data-type="zh">简体中文</li>
                                  <li data-type="cht">繁體中文</li>
                                  <li data-type="kor">한국어</li>
                                  <li data-type="ru">Pусский</li>
                                  <li data-type="de">Deutsch</li>
                                  <li data-type="spa">Español</li>
                                  <li data-type="jp">日本語</li>
                                </ul>
                              </div>
                            </i>
                          </div>
                          <div
                            v-show="mouseComment"
                            class="relative inline-block align-middle"
                            style="margin-left: 6px"
                            @click="deleteComment"
                          >
                            <i class="icon close_icon -mt-0.5"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              评论
              <p
                class="dynamic_p cursor-pointer"
                @click.stop="inputShow = true"
                v-if="inputShow == false"
              >
                {{ $trans("喜欢你有趣的点评～") }}
              </p>
              <div v-if="inputShow" class="dynamic_btn">
                <Input
                  id="sellineName"
                  v-model="value17"
                  maxlength="240"
                  show-word-limit
                  type="textarea"
                  placeholder="$trans('发布评论')"
                  style="width: 100%; height: 100px"
                  class="leftText placeholder-gray-800"
                  :rows="2"
                />
                <div class="send_btn float-right">
                  <i class="bg_icon send_i"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <Comment></Comment>
    </div>
    
    <Modal
      v-model="modalPhoto"
      :closable="false"
      :title="$trans('上传图片')"
      width="600"
      footer-hide
      @on-cancel="cancel"
    >
      <p slot="header">
        <span class="text-white">{{ $trans("上传图片") }}</span>
        <span
          class="closed w-9 h-9 rounded-full -top-2 -right-3 absolute"
          @click="cancelAddPhoto"
        ></span>
      </p>
      <imgUpload v-show="modalPhoto"  @closeModalPhoto="completeAddPhoto"></imgUpload>
    </Modal>
    <!-- 删除好友弹出框 -->
    <Modal
      v-model="toDelFriend"
      :closable="false"
      title="$trans('提示')"
      width="500"
      footer-hide
      class="delete"
    >
      <p slot="header">
        <span class="text-white">{{ $trans("提示") }}</span>
        <span
          class="closed w-9 h-9 rounded-full -top-2 -right-3 absolute"
          @click="toDelFriend = false"
        ></span>
      </p>
      <section>
        <p class="text-xl font-medium text-black">
          {{ $trans("确定要删除好友吗？") }}
        </p>
        <p>
          {{
            $trans("删除后你将从对方好友列表中消失，以后不再接收此人的消息。")
          }}
        </p>
      </section>
      <section class="absolute bottom-5 w-full text-center space-x-5">
        <button class="w-20 h-8 bg-red-400 rounded-2xl text-white">
          {{ $trans("确定") }}
        </button>
        <button
          class="w-20 h-8 rounded-2xl border border-solid border-gray-400"
          @click="toDelFriend = false"
        >
          {{ $trans("取消") }}
        </button>
      </section>
    </Modal>
    <!-- 删除图片弹出框 -->
    <Modal
      v-model="delImg"
      on-ok="ok"
      :closable="false"
      title="$trans('提示')"
      width="300"
      footer-hide
      class="delete"
    >
        <p slot="header">
          <span class="text-white">{{$trans('提示')}}</span>
          <span
            class="closed w-9 h-9 rounded-full -top-2 -right-3 absolute"
            @click="delImg = false"
          ></span>
        </p>
        <div>
          <section style="height: 100px; width: 100%">
            <p>{{$trans('该照片所在动态也会一并删除。')}}</p>
          </section>
          <section class="absolute bottom-10 w-full text-center space-x-5">
            <button class="w-20 h-8 bg-red-400 rounded-2xl text-white" @click="delEnsure()">
             {{$trans('确定')}}
            </button>
            <button
              class="w-20 h-8 rounded-2xl border border-solid border-gray-400"
              @click="delImg = false"
            >
              {{$trans('取消')}}
            </button>
          </section>
        </div>
      
      <p slot="header">
        <span class="text-white">{{ $trans("提示") }}</span>
        <span
          class="closed w-9 h-9 rounded-full -top-2 -right-3 absolute"
          @click="delImg = false"
        ></span>
      </p>
      <div>
        <section style="height: 100px; width: 100%">
          <p>{{ $trans("该照片所在动态也会一并删除。") }}</p>
        </section>
        <section class="absolute bottom-10 w-full text-center space-x-5">
          <button
            class="w-20 h-8 bg-red-400 rounded-2xl text-white"
            @click="delEnsure()"
          >
            {{ $trans("确定") }}
          </button>
          <button
            class="w-20 h-8 rounded-2xl border border-solid border-gray-400"
            @click="delImg = false"
          >
            {{ $trans(" 取消") }}
          </button>
        </section>
      </div>
    </Modal>
  </div>
</template>
<script>

import editDynamic from "@components/editDynamic.vue";
import imgUpload from "@components/uploadImg.vue";
import Swpier from "@components/personal/Swpier.vue";
import BigImage from "@/components/home/othercentre/BigImage";
import Comment from "@components/personal/Comment.vue";
export default {
  data() {
    return {
      bigImg: "",
      openBigImg: false,
      currentIndex: -1,
      modalIndex: -1,
      big: -1,
      bacShow: false,
      showFriendsList: false,    
      option: [],
      select: "",
      del: false,
      toDelFriend: false,
      delImg: false,
      showImgs: false,
      modalPhoto: false,
      isEdit: -1,
      emojiShow: false,
      contentList: [
        {
          name: "可爱小怪咖",
          time: "03-03 12:12",
          content: "大风吹啊吹32222222222222",
          number: 323,
        },
        {
          name: "可爱小怪咖",
          time: "03-03 12:12",
          content: "大风吹啊吹3213213",
          number: 323,
        },
        {
          name: "可爱小怪咖",
          time: "03-03 12:12",
          content: "大风吹啊吹321321",
          number: 323,
        },
      ],
      friendList: [
        {
          adavaUrl:
            "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg",
          name: "sss",
        },
        {
          adavaUrl:
            "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg",
          name: "sss",
        },
        {
          adavaUrl:
            "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg",
          name: "sss",
        },
        {
          adavaUrl:
            "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg",
          name: "sss",
        },
      ],
      iamgeList: [
        "https://sources.lovehottie.com/Z-7941c6ea659d4e04b1f4e7e816eea308",
        "https://images.gagahi.com/",
        "https://images.gagahi.com/A-614b46d091d84696bf32bb34ef16e943",
        "https://sources.gagahi.com/ac4b849baad14bcdbd6fe80940f09a10",
      ],
    };
  },
  components: {
    imgUpload,
    editDynamic,
    Swpier,
    BigImage,
    Comment,
    
  },
  methods: {
    cancelAddPhoto(){
       this.modalPhoto = false;  
    },
    completeAddPhoto() {
      this.modalPhoto = false;
      setTimeout(() => {
        this.file = null;
        this.$Message.success("Success");
      }, 1500);
    },
    cancel() {
      //  this.$Message.info('')
    },
    // 点击空白处关闭评论
    closeSel(event) {
    
      var currentName = document.getElementById("remarkName");
       if (currentName) {
        if (!currentName.contains(event.target)) {
          this.isEdit = -1;
        }
      }
    },
    //打开相册
    openImg() {
      this.showImgs = !this.showImgs;
    },
    // 选中
    toSelectImg(it) {
      this.option.push(it);
    },
    // 取消选中
    toCancelImg(it) {
      this.option.splice(this.option.indexOf(it), 1);
    },
    // 批量删除
    delImgs() {
      console.log(...this.option);
      let arr = [];
      for (var i = 0; i < this.option.length; i++) {
        let num = this.option[i];
        arr.push(this.iamgeList[num]);
        // this.iamgeList.splice(this.option[i],1)
      }
      this.iamgeList = this.iamgeList.filter(
        (item) => !arr.some((ele) => ele === item)
      );
      // console.log(arr)
      this.option = [];
    },
    // 单项删除照片
    toDelImg(it) {
      this.modalIndex = it;
      this.delImg = true;
    },
    // 相册点击照片显示大图
    toBigImg(it) {
      console.log(it);
      this.openBigImg = true;
      console.log(this.openBigImg);
      this.currentIndex = it;
    },
    leftImage() {
      --this.currentIndex;
      if (this.currentIndex < 0) {
        this.currentIndex = this.iamgeList.length - 1;
      }
      console.log(this.currentIndex);
    },
    rightImage() {
      console.log(this.currentIndex);
      if (this.currentIndex === this.iamgeList.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex += 1;
      }
    },
    closeBigImg(value) {
      this.openBigImg = value;
    },
    //确定按钮
    delEnsure() {
      this.iamgeList.splice(this.modalIndex, 1);
      this.delImg = false;
    },
    //批量管理显示删除按钮
    manage() {
      this.del = !this.del;
    },
    showFriends() {
      this.showFriendsList = !this.showFriendsList;
    },
  },
  mounted() {
    document.addEventListener("click", this.closeSel);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.bodyCloseMenus);
  },
};
</script>
<style lang="scss"  scoped>
.topUser {
  width: 100%;
  background: #fff;
  height: 100px;
  padding: 20px;
  @apply flex flex-row items-center;
  .avatar {
    width: 60px;
    height: 60px;
    @apply rounded-1/2;
  }
  .topRight {
    font-size: 14px;
    @apply flex flex-col  text-left text-black;
    .personName {
      font-size: 16px;
      @apply text-base-color1;
      span {
        width: 20px;
        height: 20px;
        background: url("~@images/index/little.png") 0 -616px no-repeat;
        vertical-align: middle;
      }
    }
  }
}
.photo {
  width: 856px;
  height: 120px;
  margin: 0 auto;
  position: relative;

  // .imgList {
  //   height: 120px;
  //   width: 733px;
  //   line-height: 120px;
  //   background-color: rgb(238, 238, 238);
  // }
  .imgShow {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
}
.bg_icon {
  background: url("~@images/person/dynamic.png") no-repeat;
  display: inline-block;
}
.personContent {
  width: 856px;
  .shareList {
    padding: 20px;
    background: #fff;
    .content,
    .right {
      width: 262px;
      height: 235px;
      background: #fff none repeat scroll 0 0;
      border: 1px solid #dcdcdc;
      border-radius: 5px;
    }
    .content_top {
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: #f9f9f9;
    }
    .content_bottom {
      @apply mt-px15;
    }
  }
  .dynamic {
    padding: 20px;
    overflow: hidden;
    padding-bottom: 50px;
    .dynamic_left img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
    .content_text {
      width: 722px;
      margin-top: 4px;
      line-height: 24px;
    }
    .dynamic_icon {
      height: 20px;
      // @apply flex items-center;

      .bg_circle {
        background: url("~@images/dynamic.png") no-repeat;
        display: inline-block;
        background-position: -54px -48px;
        cursor: pointer;
        height: 18px;
        width: 18px;
      }

      .trans-type {
        width: 147px;
        height: 110px;
        background-color: inherit;
        position: absolute;
        display: none;
        left: 16px;
        top: 24px;
        z-index: 998;
        .ul_bg {
          width: 20px;
          height: 30px;
          position: absolute;
          left: 30px;
          top: -12px;
          z-index: 2;
          background: url("~@images/person/IMicon.png") 0px -75px repeat;
        }
        ul {
          height: 101px;
          background-color: #fff;
          border: solid 1px #dcdcdc;
          border-radius: 4px;
          padding: 7px 0 0 5px;
          li {
            margin-bottom: 0;
            width: 66px;
            line-height: 20px;
            height: 24px;
            color: #333;
            // @apply text-center float-left cursor-pointer;
          }
          li:hover {
            color: $fontColor1;
          }
        }
      }

      .message_icon {
        background-position: -26px -48px;
        cursor: pointer;
        height: 16px;
        width: 19px;
      }
      .message_icon:hover {
        background-position: -26px -26px;
      }
      .bg_circle:hover {
        background-position: -54px -26px;
      }
      .fanyi_circle {
        line-height: 10px;
      }

      .fanyi_circle:hover .trans-type {
        display: block;
      }
    }
    .dynamic_input {
      width: 100%;
      overflow: hidden;
      border-top: 1px solid #e7e7e7;
      background: #fafafa;
      padding: 20px;
      .comment_list {
        overflow: hidden;
        // @apply w-full;
        .content_left img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
        }
        .right_text {
          margin-top: 4px;
          margin-bottom: 10px;
          .icon_content {
            padding: 0;
            background: none;
            color: #999;
            height: 20px;
            .message_iconSmall {
              display: inline-block;
              width: 14px;
              height: 12px;
              background: url("~@images/person/little1.png") -20px -632px
                no-repeat;
            }
            .message_iconSmall:hover {
              background-position: -58px -632px;
            }
            .bg_circleSmall {
              width: 13px;
              height: 13px;
              background: url("~@images/person/little1.png") -2px -631px
                no-repeat;
            }
            .bg_circleSmall:hover {
              background-position: -40px -631px;
            }
            .bg_circleSmall:hover .trans-type {
              display: block;
            }
            .trans-type {
              width: 147px;
              height: 110px;
              background-color: inherit;
              position: absolute;
              left: -30px;
              display: none;
              top: 19px;
              z-index: 998;
              .ul_bg {
                width: 20px;
                height: 30px;
                position: absolute;
                left: 30px;
                top: -12px;
                z-index: 2;
                background: url("~@images/person/IMicon.png") 0px -75px repeat;
              }
              ul {
                height: 101px;
                background-color: #fff;
                border: solid 1px #dcdcdc;
                border-radius: 4px;
                padding: 7px 0 0 5px;
                li {
                  margin-bottom: 0;
                  width: 66px;
                  line-height: 20px;
                  height: 24px;
                  color: #333;
                  // @apply text-center float-left cursor-pointer;
                }
                li:hover {
                  color: $fontColor1;
                }
              }
            }
          }
        }
      }
      .ivu-input-word-count {
        left: 7px;
        width: 30%;
        font-size: 14px;
        background: #fafafa;
      }
      .ivu-input,
      .ivu-input:focus,
      .ivu-input:hover {
        outline: none;
        border: 1px solid #cccccc;
        box-shadow: 0 0 0 2px transparent;
      }
    }
    .dynamic_p {
      background: #fff none repeat scroll 0 0;
      border: 1px solid #dcdcdc;
      border-radius: 20px;
      color: #999;
      font-size: 12px;
      height: 30px;
      line-height: 30px;
      padding: 0 20px;
      width: 94%;
      position: relative;
    }
    .dynamic_btn {
      position: relative;
      .send_btn {
        right: 10px;
        top: 75px;
        width: 44px;
        height: 29px;
        border-radius: 30px;
        background: $baseColor2 none repeat scroll 0 0;
        color: #fff;
        font-size: 12px;
        // @apply cursor-pointer absolute text-center;
        .send_i {
          background-position: -251px 8px;
          height: 24px;
          width: 14px;
        }
      }
    }
    .fanyi_circle:hover .trans-type {
      display: block;
    }
  }
}
.show {
  display: block;
}
.hide {
  display: none;
}
.dynamic_right:hover {
  display: block;
}
.icon {
  background: url("~@images/person/dynamic.png") no-repeat;
  float: right;
  display: inline;
  cursor: pointer;
  background-position: -232px -3px;
  width: 10px;
  height: 10px;
}
.active {
  display: none;
}
.icon_edit {
  width: 20px;
  height: 20px;
  background: url(/img/little.c7c7e4e0.png) -27px -590px no-repeat;
  vertical-align: middle;
  cursor: pointer;
  display: none;
}
.friend:hover {
  border: solid 1px rgba(192, 190, 190, 0.712);
}
.friend:hover .editName {
  //hover父元素改变子元素
  font-size: larger;
}
.friend:hover .icon_edit {
  //hover父元素改变子元素
  display: block;
}
.delFriend {
  width: 30px;
  height: 31px;
  background: url("~@images/person/little1.png") -2px -655px no-repeat;
  cursor: pointer;
  display: none;
}
.friend:hover .delFriend {
  //hover父元素改变子元素
  display: block;
}
.closed {
  background: url("~@images/iconClosed.png") 0 -39px no-repeat;
  cursor: pointer;
  z-index: 20;
}
.closed:hover {
  background: url("~@images/iconClosed.png") 0 0 no-repeat;
  cursor: pointer;
}
.delImg {
  width: 20px;
  height: 18px;
  background: url(~@images/person/little1.png) -78px -628px no-repeat;
  display: none;
}
.bgBlack {
  background: none;
}
.imgs:hover .delImg,
.bgBlack {
  display: block;
}
.imgs:hover .bgBlack {
  background-color: rgba(3, 3, 3, 0.294);
}
.selectImg {
  top: 5px;
  left: 5px;
  width: 30px;
  height: 30px;
  background: url(~@images/person/little1.png) -40px -759px no-repeat;
}
.showSelectImg {
  top: 5px;
  left: 5px;
  width: 30px;
  height: 30px;
  background: url(~@images/person/little1.png) 0px -759px no-repeat;
}
.delete .ivu-modal-content {
  height: 200px;
}
</style>