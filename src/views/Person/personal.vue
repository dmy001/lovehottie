<template>
  <div class="bg-white">
    <section
      class="
        w-full
        h-12
        leading-normal
        bg-blue-100
        border-t border-gray-300 border-solid
        flex
        justify-between
      "
    >
      <span class="text-left mt-4 ml-5">{{ $trans("设置") }}</span>
      <router-link to="/home/PersonHome"
        ><button class="text-right text-gray-400 mt-4 mr-5 outline-none">
          {{ $trans("返回个人主页") }}>> >
        </button></router-link
      >
    </section>
    <!-- 个人资料设置部分 -->
    <section id="information" class="pt-10 -mt-10">
      <SetUpHeader
        :title="$trans('您的个人资料')"
        @writeInformation="writeInformation"
      ></SetUpHeader>
      <!--个人信息展示部分-->
      <div v-show="!show">
        <div class="w-1/4 flex justify-end">
          <img
            class="
              w-16
              mt-5
              shadow
              rounded-full
              max-w-full
              h-auto
              align-middle
              border-none
            "
            src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
            alt=""
          />
        </div>
        <ShowContent :content="informations" v-show="!show"></ShowContent>
      </div>
      <!--个人信息编辑部分-->
      <div v-show="show">
        <ul>
          <li class="flex flex-row">
            <div class="w-1/4 flex justify-end">
              <img
                class="
                  w-16
                  mt-5
                  shadow
                  rounded-full
                  max-w-full
                  h-auto
                  align-middle
                  border-none
                "
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
                alt=""
              />
            </div>
            <div class="w-3/4 flex justify-start ml-2">
              <button
                class="
                  w-24
                  h-8
                  leading-8
                  text-gray-400
                  mt-9
                  ml-1
                  border border-solid border-gray-300
                  rounded-2xl
                  focus:outline-none
                "
                @click="editHeader = true"
              >
                {{ $trans("编辑照片") }}
              </button>
            </div>
          </li>
          <li class="flex justify-between text-sm mt-3">
            <span class="w-1/4 text-right text-gray-400 pr-2"
              >{{ $trans("昵称") }}:</span
            >
            <label class="w-3/4 text-left">
              <input
                class="
                  w-1/2
                  h-8
                  rounded-2xl
                  border border-solid border-gray-300
                  p-4
                  focus:outline-none
                "
                type="text"
                maxlength="16"
              />
            </label>
          </li>
          <li class="flex justify-between text-sm mt-5">
            <span class="w-1/4 text-right text-gray-400 pr-2"
              >ID{{ $trans("号") }}:</span
            >
            <label class="w-3/4 text-left">
              <input
                class="
                  w-1/2
                  h-8
                  rounded-2xl
                  border border-solid border-gray-300
                  p-4
                  focus:outline-none
                "
                type="text"
              />
            </label>
          </li>
          <li class="flex justify-between text-sm mt-5">
            <span class="w-1/4 text-right text-gray-400 pr-2"
              >{{ $trans("年龄") }}:</span
            >
            <label class="w-3/4 text-left space-x-3">
              <Select class="w-28 h-8" v-model="year">
                <Option v-for="(it, index) in years" :value="it" :key="index">
                  {{ it }}</Option
                >
              </Select>
              <Select class="w-28 h-8" v-model="month">
                <Option v-for="(it, index) in months" :value="it" :key="index">
                  {{ it }}
                </Option>
              </Select>
              <Select class="w-28 h-8" v-model="day">
                <Option v-for="(it, index) in days" :value="it" :key="index">
                  {{ it }}
                </Option>
              </Select>
            </label>
          </li>
          <li class="flex justify-between text-sm mt-5">
            <span class="w-1/4 text-right text-gray-400 pr-2"
              >{{ $trans("性别") }}:</span
            >
            <label class="w-3/4 text-left">
              <RadioGroup>
                <Radio label="女"> </Radio>
                <Radio label="男"> </Radio>
              </RadioGroup>
            </label>
          </li>
          <li class="flex justify-between text-sm mt-5">
            <span class="w-1/4 text-right text-gray-400 pr-2"
              >{{ $trans("职业") }}:</span
            >
            <label class="w-3/4 text-left">
              <Select class="w-1/2 h-8" placeholder="$trans('其他')">
                <Option v-for="(it, index) in job" :value="it" :key="index">
                </Option>
              </Select>
            </label>
          </li>
          <li
            class="city flex justify-between text-sm mt-5 cursor-pointer"
            @click="toSetCity = true"
          >
            <span class="w-1/4 text-right text-gray-400 pr-2"
              >{{ $trans("国家") }}:</span
            >
            <label class="w-3/4 text-left">
              <input
                class="
                  w-1/2
                  h-8
                  rounded-2xl
                  border border-solid border-gray-300
                  p-4
                  focus:outline-none
                  cursor-pointer
                "
                type="text"
              />
              <span class="w-1/2 flex justify-end">
                <img class="h-2 -mt-5 mr-5" src="~@images/xld.png" />
              </span>
            </label>
          </li>
          <li class="flex justify-between text-sm mt-5">
            <span class="w-1/4 text-right text-gray-400 pr-2"
              >{{ $trans("语言") }}:</span
            >
            <label class="w-3/4 text-left">
              <Select class="w-1/2 h-8" placeholder="English">
                <Option
                  v-for="(it, index) in language"
                  :value="it"
                  :key="index"
                >
                </Option>
              </Select>
            </label>
          </li>
          <li class="flex justify-between text-sm mt-5">
            <span class="w-1/4 text-right text-gray-400 pr-2"
              >{{ $trans("身高") }}(cm):</span
            >
            <label class="w-3/4 text-left">
              <input
                class="
                  w-1/2
                  h-8
                  rounded-2xl
                  border border-solid border-gray-300
                  p-4
                  focus:outline-none
                "
                type="text"
                maxlength="16"
                value=""
              />
            </label>
          </li>
          <li class="flex justify-between text-sm mt-5">
            <span class="w-1/4 text-right text-gray-400 pr-2"
              >{{ $trans("体重") }}(kg):</span
            >
            <label class="w-3/4 text-left">
              <input
                class="
                  w-1/2
                  h-8
                  rounded-2xl
                  border border-solid border-gray-300
                  p-4
                  focus:outline-none
                "
                type="text"
                maxlength="16"
                value=""
              />
            </label>
          </li>
          <li class="flex justify-between text-sm mt-5">
            <span class="w-1/4 text-right text-gray-400 pr-2"
              >{{ $trans("个性签名") }}:</span
            >
            <span class="w-3/4 text-left">
              <textarea
                class="
                  w-1/2
                  h-20
                  rounded-2xl
                  border border-solid border-gray-300
                  p-4
                  focus:outline-none
                "
                value=""
              />
            </span>
          </li>
          <li class="flex justify-between text-sm mt-5">
            <span class="w-1/4 text-right text-gray-400 pr-2"
              >{{ $trans("兴趣") }}:</span
            >
            <div class="w-3/4 text-left">
              <Interest></Interest>
            </div>
          </li>
          <li class="ml-48 mt-8 pb-10">
            <SaveButton
              title="$trans('保存')"
              name="$trans('取消')"
            ></SaveButton>
          </li>
        </ul>
      </div>
    </section>
    <!-- 账号设置部分-->
    <section id="account" class="pt-10 -mt-10">
      <SetUpHeader
        :title="$trans('您的账号')"
        @writeInformation="setAccount"
      ></SetUpHeader>
      <ShowContent :content="account" v-show="!set"></ShowContent>
      <div v-show="set">
        <ul class="space-y-5 mt-5">
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("金币") }}：</span
            >
            <span class="w-3/4 text-left text-sm -mt-1">
              0
              <router-link to="/home/vip/RechargeGold">
                <button
                  class="
                    w-16
                    h-7
                    px-2
                    border border-solid border-gray-400
                    rounded-2xl
                    text-center
                    leading-7
                    ml-24
                    focus:outline-none
                  "
                >
                  {{ $trans("充值") }}
                </button>
              </router-link>
            </span>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("会员级别") }}：</span
            >
            <span class="w-3/4 text-left text-sm -mt-1">
              {{ $trans("普通会员") }}
              普通会员
              <router-link to="/home/vip/UpgradeVip">
                <button
                  class="
                    w-16
                    h-7
                    px-2
                    border border-solid border-gray-400
                    rounded-2xl
                    text-center
                    leading-7
                    ml-12
                    focus:outline-none
                  "
                >
                  {{ $trans("升级") }}
                </button>
              </router-link>
            </span>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("翻译包字符数") }}：</span
            >
            <span class="w-3/4 text-left text-sm">0</span>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("邮箱") }}：</span
            >
            <label class="w-3/4 text-left"
              ><input
                class="
                  w-1/2
                  h-8
                  rounded-2xl
                  border border-solid border-gray-300
                  p-4
                  focus:outline-none
                "
                type="text"
                name="email"
            /></label>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("手机号") }}：</span
            >
            <label class="w-3/4 text-left"
              ><input
                class="
                  w-1/2
                  h-8
                  rounded-2xl
                  border border-solid border-gray-300
                  p-4
                  focus:outline-none
                "
                type="text"
                name="phone"
            /></label>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("当前密码") }}：</span
            >
            <label class="w-3/4 text-left"
              ><input
                class="
                  w-1/2
                  h-8
                  rounded-2xl
                  border border-solid border-gray-300
                  p-4
                  focus:outline-none
                "
                type="text"
            /></label>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("新密码") }}：</span
            >
            <label class="w-3/4 text-left"
              ><input
                class="
                  w-1/2
                  h-8
                  rounded-2xl
                  border border-solid border-gray-300
                  p-4
                  focus:outline-none
                "
                type="text"
            /></label>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("确认密码") }}：</span
            >
            <label class="w-3/4 text-left"
              ><input
                class="
                  w-1/2
                  h-8
                  rounded-2xl
                  border border-solid border-gray-300
                  p-4
                  focus:outline-none
                "
                type="password"
            /></label>
          </li>
          <li class="ml-48 mt-8">
            <SaveButton
              :title="$trans('保存')"
              :name="$trans('取消')"
            ></SaveButton>
          </li>
        </ul>
      </div>
    </section>
    <!-- 认证 -->
    <section>
      <SetUpHeader
        :title="$trans('认证')"
        @writeInformation="setIdentity"
      ></SetUpHeader>
      <div v-show="!identity">
        <p class="mt-5">{{ $trans("邮箱未认证") }}</p>
      </div>
      <!-- 认证设置部分 -->
      <div v-show="identity" class="flex flex-col">
        <section class="flex flex-row mt-5">
          <span class="float-left mt-4 ml-36 text-sm text-gray-400"
            >{{ $trans("认证邮箱") }}：</span
          >
          <input
            class="
              w-1/3
              h-8
              mt-2
              float-left
              ml-2
              rounded-l-full
              p-4
              focus:outline-none
              border-solid border border-gray-400
            "
            type="text"
            name="fname"
            v-model="mailboxFilling"
          />
          <div
            class="
              w-24
              h-8
              float-left
              mt-2
              rounded-r-full
              border-l-0 border-solid border border-gray-400
              text-sm
              leading-8
              sendEmail
            "
            @click="judgeMailboxEmpty"
          >
            {{ $trans("发送邮件") }}
          </div>
        </section>
        <section class="mt-3">
          <span class="float-left ml-56">
            1、{{
              $trans("忘记登录密码后可通过此邮箱重置密码，让您的账户更安全")
            }}！
          </span>
          <span class="float-left ml-56">
            2、{{ $trans("如果您没有收到认证邮件，请联系客服提出您的问题") }}。
          </span>
        </section>
        <section class="ml-52 mt-8 mb-20">
          <SaveButton
            :title="$trans('保存')"
            :name="$trans('取消')"
          ></SaveButton>
        </section>
      </div>
    </section>
    <!-- 隐私 -->
    <section>
      <SetUpHeader
        :title="$trans('隐私')"
        @writeInformation="setSelf"
      ></SetUpHeader>
      <div v-show="!self">
        <ul class="space-y-5 mt-5">
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("是否公开我的个人档案") }}？：</span
            >
            <span class="w-3/4 text-left">{{ $trans("公开") }}</span>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("加好友申请") }}：</span
            >
            <span class="w-3/4 text-left">{{ $trans("允许任何人添加") }}</span>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("是否公开我的动态点赞") }}：</span
            >
            <span class="w-3/4 text-left">{{ $trans("公开") }}</span>
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("是否公开我的动态评论") }}：</span
            >
            <span class="w-3/4 text-left">{{ $trans("公开") }}</span>
          </li>
        </ul>
      </div>
      <!-- 隐私设置部分 -->
      <div v-show="self">
        <ul class="space-y-5 mt-5">
          <li class="flex text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("是否公开我的个人档案") }}？：</span
            >
            <input
              type="radio"
              name="personalFiles"
              value="1"
              class="mt-1 ml-1 focus:outline-none"
            />
            <label class="ml-2">{{ $trans("民众") }} </label>
            <input
              type="radio"
              name="personalFiles"
              value="1"
              class="mt-1 ml-7 focus:outline-none"
            />
            <label class="ml-2">{{ $trans("朋友们") }}</label>
            <input
              type="radio"
              name="personalFiles"
              value="1"
              class="mt-1 ml-7 focus:outline-none"
            />
            <label class="ml-2">{{ $trans("限制自己") }}</label>
          </li>
          <li class="flex text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("好友请求") }}：</span
            >
            <input
              type="radio"
              name="friendRequest"
              value="1"
              class="mt-1 ml-1 focus:outline-none"
            />
            <label class="ml-2">{{ $trans("允许大家加我为好友") }}</label
            ><br />
            <input
              type="radio"
              name="friendRequest"
              value="1"
              class="mt-1 ml-7 focus:outline-none"
            />
            <label class="ml-2">{{ $trans("需要验证才能加我为好友") }}</label>
          </li>
          <li class="flex text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("是否透露我的喜好") }}：</span
            >
            <input
              type="radio"
              name="myPreferences"
              value="1"
              class="mt-1 ml-1 focus:outline-none"
            />
            <label class="ml-2">{{ $trans("民众") }}</label
            ><br />
            <input
              type="radio"
              name="myPreferences"
              value="1"
              class="mt-1 ml-7 focus:outline-none"
            />
            <label class="ml-2">{{ $trans("限制自己") }}</label>
          </li>
          <li class="flex text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("是否公开我的评论") }}：</span
            >
            <input type="radio" name="myComments" value="1" class="mt-1 ml-1" />
            <label class="ml-2">{{ $trans("民众") }}</label
            ><br />
            <input type="radio" name="myComments" value="1" class="mt-1 ml-7" />
            <label class="ml-2">{{ $trans("限制自己") }}</label>
            <input
              type="radio"
              name="myComments"
              value="1"
              class="mt-1 ml-1 focus:outline-none"
            />
            <label class="ml-2">民众</label><br />
            <input
              type="radio"
              name="myComments"
              value="1"
              class="mt-1 ml-7 focus:outline-none"
            />
            <label class="ml-2">限制自己</label>
          </li>
        </ul>
        <div class="ml-48 mt-8 mb-20">
          <SaveButton
            :title="$trans('保存')"
            :name="$trans('取消')"
          ></SaveButton>
        </div>
      </div>
    </section>
    <!-- 通知 -->
    <section>
      <SetUpHeader
        :title="$trans('通知')"
        @writeInformation="setNotice"
      ></SetUpHeader>
      <!-- 通知设置部分 -->
      <div v-show="!notice">
        <ul class="space-y-5 mt-5">
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("当有人喜欢你") }}：</span
            >
            <span class="w-3/4 text-left" v-show="picked">{{
              $trans("是")
            }}</span>
            <!-- <span class="w-3/4 text-left" v-show="picked">{{$trans('否')}}</span> -->
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("当有访客") }}：</span
            >
            <span class="w-3/4 text-left" v-show="picked">{{
              $trans("是")
            }}</span>
            <!-- <span class="w-3/4 text-left" v-show="picked">{{$trans('否')}}</span> -->
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("收到礼物") }}：</span
            >
            <span class="w-3/4 text-left" v-show="picked">{{
              $trans("是")
            }}</span>
            <!-- <span class="w-3/4 text-left" v-show="picked">{{$trans('否')}}</span> -->
          </li>
          <li class="flex justify-between text-sm">
            <span class="w-1/4 text-right text-gray-400"
              >{{ $trans("离线邮件通知") }}：</span
            >
            <span class="w-3/4 text-left" v-show="picked">{{
              $trans("是")
            }}</span>
            <!-- <span class="w-3/4 text-left" v-show="picked">{{$trans('否')}}</span> -->
          </li>
        </ul>
      </div>
      <!-- 通知设置部分 -->
      <div v-show="notice">
        <ul class="space-y-5 mt-5">
          <li class="flex justify-between text-sm">
            <label class="w-1/4 text-right text-gray-400" for="loveMe"
              >{{ $trans("当有其他人喜欢你") }}：</label
            >
            <label class="w-3/4 text-left"
              ><input
                class="loveMe focus:outline-none"
                type="checkbox"
                v-model="picked"
                value="loveMe"
            /></label>
          </li>
          <li class="flex justify-between text-sm">
            <label class="w-1/4 text-right text-gray-400" for="visitor"
              >{{ $trans("当有访客") }}：</label
            >
            <label class="w-3/4 text-left"
              ><input
                class="visitor focus:outline-none"
                type="checkbox"
                v-model="picked"
                value="visitor"
            /></label>
          </li>
          <li class="flex justify-between text-sm">
            <label class="w-1/4 text-right text-gray-400" for="receiveGifts"
              >{{ $trans("收到礼物") }}：</label
            >
            <label class="w-3/4 text-left"
              ><input
                class="receiveGifts focus:outline-none"
                type="checkbox"
                v-model="picked"
                value="receiveGifts"
            /></label>
          </li>
          <li class="flex justify-between text-sm">
            <label
              class="w-1/4 text-right text-gray-400"
              for="emailNotification"
              >{{ $trans("离线邮件通知") }}：</label
            >
            <label class="w-3/4 text-left"
              ><input
                class="emailNotification"
                type="checkbox"
                v-model="picked"
                value="emailNotification"
            /></label>
          </li>
        </ul>
        <div class="ml-48 mt-8 pb-32">
          <SaveButton
            :title="$trans('保存')"
            :name="$trans('取消')"
          ></SaveButton>
        </div>
      </div>
    </section>
    <!-- 选择国家 -->
    <Modal
      v-model="toSetCity"
      title="$trans('选择国家')"
      width="600"
      footer-hide
      :closable="false"
    >
      <p slot="header">
        <span class="text-white">{{ $trans("选择国家") }}</span>
        <span
          class="closed w-9 h-9 rounded-full -top-2 -right-3 absolute"
          @click="toSetCity = false"
        ></span>
      </p>
      <City></City>
      <section class="absolute bottom-10 w-full text-center space-x-5">
        <button class="w-20 h-8 bg-red-400 rounded-2xl text-white">
          {{ $trans("确定") }}
        </button>
        <button
          class="
            w-20
            h-8
            rounded-2xl
            text-white
            border border-solid border-gray-400
            focus:outline-none
          "
          @click="toSetCity = false"
        >
          确定
        </button>
        <button
          class="
            w-20
            h-8
            focus:outline-none
            rounded-2xl
            border border-solid border-gray-400
          "
          @click="toSetCity = false"
        >
          取消
        </button>
      </section>
    </Modal>
    <!-- 上传头像 -->
    <Modal
      v-model="editHeader"
      footer-hide
      width="500"
      title="修改头像信息"
      :closable="false"
    >
      <p slot="header">
        <span class="text-white">修改头像信息</span>
        <span
          class="closed w-9 h-9 rounded-full -top-2 -right-3 absolute"
          @click="editHeader = false"
        ></span>
      </p>
      <section>
        <div class="h-10 border-b border-solid border-gray-400 mx-5">
          <span
            class="
              h-10
              leading-10
              border-b-2 border-solid border-blue-500
              cursor-pointer
              inline-block
            "
            >本地上传</span
          >
        </div>
        <div class="w-full relative top-20">
          <Upload
            class="flex justify-center"
            :show-upload-list="false"
            :before-upload="handleUpload"
            :on-success="handleSuccess"
            :format="['jpg', 'jpeg', 'png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            action="//jsonplaceholder.typicode.com/posts/"
          >
            <div
              class="
                w-28
                h-10
                rounded-3xl
                bg-red-400
                text-white text-base
                leading-10
                text-center
                mx-auto
                cursor-pointer
              "
              @click="editHeader = false"
            >
              选择图片
            </div>
          </Upload>
          <p class="text-gray-400 text-center mt-3">
            支持JPG,JPEG,PNG,BMP,GIF格式，且文件小于5M
          </p>
          <p class="mx-5 mt-5">
            注意：您的头像必须是您本人清晰可辨的单人照，让人看清您的样子，并符合您的年龄和性别，不可包含裸露内容。
          </p>
        </div>
      </section>
    </Modal>
    <!-- 编辑头像缩略图 -->
    <Modal
      v-model="editSmallHeader"
      title="编辑缩略图"
      width="600"
      footer-hide
      :closable="false"
    >
      <p slot="header">
        <span class="text-white">编辑缩略图</span>
        <span
          class="closed w-9 h-9 rounded-full -top-2 -right-3 absolute"
          @click="editSmallHeader = false"
        ></span>
      </p>
      <section class="mx-5 flex justify-between mt-5">
        <div
          class="relative flex justify-center items-center"
          style="
            width: 410px;
            height: 300px;
            border: 1px solid #ccc;
            float: left;
          "
        >
          <img
            v-if="base64Img"
            class="w-3/4 h-4/5 object-contain"
            :src="base64Img"
          />
        </div>
        <div
          class="relative right-5 flex flex-col justify-between text-center"
          style="width: 60px"
        >
          预览：
          <div class="mx-auto">
            <img
              style="
                width: 60px;
                height: 60px;
                border-radius: 50%;
                object-fit: contain;
              "
              :src="base64Img"
            />
          </div>
          <p class="mb15 tc">60*60</p>
          <div class="mx-auto">
            <img
              style="
                width: 45px;
                height: 45px;
                border-radius: 50%;
                object-fit: contain;
              "
              :src="base64Img"
            />
          </div>
          <p class="mb15 tc">45*45</p>
          <div class="mx-auto">
            <img
              style="
                width: 30px;
                height: 30px;
                border-radius: 50%;
                object-fit: contain;
              "
              :src="base64Img"
            />
          </div>
          <p class="tc">30*30</p>
        </div>
      </section>
      <section class="absolute bottom-10 w-full text-center space-x-5">
        <button
          class="w-20 h-8 focus:outline-none bg-red-400 rounded-2xl text-white"
          @click="upload"
        >
          保存
        </button>
        <button
          class="
            w-20
            h-8
            focus:outline-none
            rounded-2xl
            border border-solid border-gray-400
          "
          @click="editSmallHeader = false"
        >
          {{ $trans("取消") }}
        </button>
      </section>
    </Modal>
  </div>
</template>
<script>
import SetUpHeader from "@components/personal/SetUpHeader.vue";
import ShowContent from "@components/personal/ShowContent.vue";
import Interest from "@components/personal/Interest.vue";
import City from "@components/personal/City.vue";
import SaveButton from "@components/personal/SaveButton.vue";

export default {
  data() {
    return {
      editHeader: false,
      editSmallHeader: false,
      showEmail: false,
      mailboxFilling: [],
      picked: [],
      showModal: false,
      toSetCity: false,

      file: null,
      loadingStatus: false,
      base64Img: null,
      informations: [
        { title: "昵称", value: "嘟嘟" },
        { title: "ID号", value: "1354635" },
        { title: "年龄", value: "23" },
        { title: "性别", value: "女" },
        { title: "职业", value: "IT" },
        { title: "国家", value: "中国" },
        { title: "语言", value: "English" },
        { title: "身高(cm)", value: "165" },
        { title: "体重(kg)", value: "90" },
        { title: "个性签名", value: "dfgfhhgjjjffhhhhfdh" },
        { title: "兴趣", value: "dfhhgvvbhgh" },
      ],

      account: [
        { title: "金币", value: 0 },
        { title: "会员级别", value: "普通会员" },
        { title: "翻译包字符数", value: 0 },
        { title: "邮箱", value: " " },
        { title: "手机号码", value: " " },
        { title: "密码", value: "****" },
      ],
      year: 0,
      month: 0,
      day: 1,
      years: Array.from(
        { length: 100 },
        (item, index) => index + 1910
      ).reverse(),
      months: Array.from({ length: 12 }, (item, index) => index + 1),

      job: [
        "文案",
        "客户经理",
        "文员",
        "销售",
        "设计",
        "程序员",
        "会计",
        "模特",
        "商人",
      ],
      language: [
        "English",
        "简体中文",
        "繁體中文",
        "한국어",
        "Pусский",
        "Deutsch",
        "Español",
        "日本語",
      ],
      show: false,
      set: false,
      identity: false,
      self: false,
      notice: false,
    };
  },
  computed: {
    days: {
      get: function () {
        return Array.from(
          { length: new Date(this.year, this.month, 0).getDate() },
          (item, index) => index + 1
        );
      },
    },
  },
  components: {
    SetUpHeader,
    ShowContent,
    Interest,
    City,
    SaveButton,
  },
  methods: {
    writeInformation() {
      this.show = !this.show;
    },
    close() {
      this.showModal = !this.showModal;
      // this.toSetCity=!this.toSetCity
    },
    setAccount() {
      this.set = !this.set;
    },
    setIdentity() {
      this.identity = !this.identity;
    },
    setSelf() {
      this.self = !this.self;
    },
    setNotice() {
      this.notice = !this.notice;
    },
    judgeMailboxEmpty() {
      if (this.mailboxFilling === "") {
        this.showEmail = true;
      }
    },
    handleUpload(file) {
      this.editSmallHeader = true;

      this.file = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const _base64 = reader.result;
        this.base64Img = _base64;
        // console.log(_base64);

        // console.log(...this.imgList)
      };
      // return false;
    },
    upload() {
      // this.loadingStatus = true;
      this.editSmallHeader = false;
      setTimeout(() => {
        this.file = null;
        // this.loadingStatus = false;
        this.$Message.success("Success");
      }, 1500);
    },
    handleSuccess(res, file) {
      file.url =
        "https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar";
      file.name = "7eb99afb9d5f317c912f08b5212fd69a";
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " +
          file.name +
          " is incorrect, please select jpg or png.",
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 2M.",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.set-information {
  width: 20px;
  height: 20px;
  background: url(/img/little.c7c7e4e0.png) 0 -616px no-repeat;
  vertical-align: middle;
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
// select{
//   -webkit-appearance: none;
//     -moz-appearance: none;
//     appearance:none;
//     background: url("~@images/triggle.png") right center no-repeat;
//     vertical-align: middle;
// }
.sendEmail:hover {
  background-color: red;
}
.city span {
  background-image: url(https://statics.lovehottie.com/web-pc/images/xld.png)
    no-repeat;
  cursor: pointer;
  vertical-align: top;
}
.ivu-modal-content {
  height: 200px;
}
</style>