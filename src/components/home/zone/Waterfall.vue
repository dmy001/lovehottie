<template>
  <div class="waterfall-container">
    <div class="w-full flex flex-row">
      <div class="flex flex-col" style="width: calc(100% / 3)">
             <!-- 分享内容 -->
        <editDynamic></editDynamic>
 <!-- 朋友圈内容和动态广场内容 -->
        <div v-for="i in 10" :key="i">
          <div v-if="i % 3 === 1">

            <card
              :imgsrc="
                Math.random() > 0.5
                  ? 'https://images.gagahi.com/Z-03550c90d1d74a8e92be62a425cbdc27?imageView2/2/w/262/h/262'
                  : ''
              "
            ></card>
          </div>
        </div>
      </div>
      <div class="flex flex-col" style="width: calc(100% / 3)">
        <div v-for="i in 10" :key="i">
          <div v-if="i % 3 === 2">
            <card
              :imgsrc="
                Math.random() > 0.5
                  ? 'https://sources.gagahi.com/ac4b849baad14bcdbd6fe80940f09a10?imageView2/2/w/262/h/262'
                  : ''
              "
            ></card>
          </div>
        </div>
      </div>
      <div class="flex flex-col" style="width: calc(100% / 3)">
        <div v-for="i in 10" :key="i">
          <div v-if="i % 3 === 0">
            <card
              :imgsrc="
                Math.random() > 0.5
                  ? 'https://sources.lovehottie.com/Z-7941c6ea659d4e04b1f4e7e816eea308?imageView2/2/w/262/h/262'
                  : ''
              "
            ></card>
          </div>
        </div>
      </div>
    </div>
 >
              <!-- 评论列表 -->
              <!-- <div class="text-left" v-if="listShow">
                <div
                  class="comment_list overflow-hidden"
                  v-for="(item, index) in contentList"
                  :key="index"
                >
                  <div class="comment_content">
                    <div class="content_left float-left">
                      <img
                        class="w-9 h-9 rounded-full"
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
                      <div class="right_text mt-1 mb-2.5">
                        <span class="text-12px mr-px15">
                          {{ item.content }}
                        </span>
                        <div
                          class="
                            icon_content
                            px-0
                            py-0
                            bg-none
                            h-5
                            inline
                            max-w-full
                            absolute
                          "
                          style="color: #999"
                        >
                          <div
                            class="inline-block align-middle"
                            style="margin-left: 20px"
                          >
                            <i
                              class="
                                message_iconSmall
                                inline-block
                                cursor-pointer
                                w-3.5
                                h-3
                              "
                              @click.stop="inputShow = true"
                              @click="onMessage(item.name)"
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
                              style="width: 13px; height: 13px"
                            >
                              <div
                                class="
                                  trans-type2
                                  w-36
                                  h-28
                                  absolute
                                  hidden
                                  top-5
                                "
                                style="left: -30px"
                              >
                                <span
                                  class="ul_bg2 w-5 h-7 absolute left-7 -top-3"
                                ></span>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
              <!-- 评论 -->
              <!-- <div class="textInput text-left">
                <input
                  type="text"
                  class="w-full py-1 pl-5"
                  style="
                    outline: none;
                    font-size: 12px;
                    border: 1px solid #dcdcdc;
                    border-radius: 20px;
                    cursor: pointer;
                  "
                  @click.stop="inputShow = true"
                  v-if="inputShow == false"
                  placeholder="喜欢你有趣的点评~"
                  @click="mineMessage()"
                />
                <div v-if="inputShow">
                  <textarea
                    v-model="inputContent"
                    id="sellineName"
                    autofocus="autofocus"
                    name=""
                    class="textArea"
                    rows="2"
                    :placeholder="this.placeholder"
                    style="outline: none"
                    maxlength="240"
                    show-word-limit
                  ></textarea>
                  <div class="flex justify-between ml-4 mt-1">
                    <span style="color: #999"
                      >{{ inputContent.length }}/240</span
                    >
                    <div class="sendBtn" @click="sendBtn()">
                      <i class="senI"></i>
                    </div>
                  </div>
                </div>
              </div>
     -->
  </div>
       

</template>

<script>
import card from "@components/home/zone/Card.vue";
import editDynamic from "@components/editDynamic.vue";



export default {
  components: {
    card,
    editDynamic,
  },
};
</script>
<style lang="scss" >

.bg_icon {
  background: url("~@images/person/dynamic.png") no-repeat;
  display: inline-block;
}
 .shareList {
    padding: 20px;
  }
.show {
  display: block;
}
.hide {
  display: none;
}

</style>