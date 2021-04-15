<template>
  <div class="comment">
    <!-- //评论列表 -->
    <div v-if="showCommentList" class="commnet-list text-12px">
      <div class="comment-list-item">
        <img src="https://sources.lovehottie.com/images/default/male.png" />
        <div class="flex flex-col justify-start ml-px3 text-left">
          <div>
            <span class="text-base-color2">Jack</span>
            <span class="text-base-color4 ml-px3">04-08 00:07</span>
          </div>
          <div class="comment-content mt-px3">
            <span>曾经沧海难为水，除却巫山不是云</span>
            <!-- 评论图标 -->
            <i class="cmtIcon" @click="replyIconCli"></i>
            <!-- 翻译图标 -->
            <i class="tranIcon"></i>
          </div>
        </div>
      </div>
      <!-- 评论回复区 -->
      <div class="reply-txt" v-if="showReplyList">
        <textarea
          v-model="commentText"
          class="reply-content"
          :placeholder="replyCmtHolder + 'Jack'"
        ></textarea>
        <div
          class="text-px14 text-base-color4 flex justify-between items-center"
        >
          <span>{{ commentText.length }}/240</span>
          <div class="sendReplyIcon"><i class="inline-block"></i></div>
        </div>
      </div>
    </div>
    <!-- 书写评论内容区 -->
    <div v-if="!showCommentBtn" class="cmt-txt">
      <textarea
        v-model="commentText"
        class="cmt-content"
        :placeholder="commentHolder"
      ></textarea>
      <div class="text-px14 text-base-color4 flex justify-between items-center">
        <span>{{ commentText.length }}/240</span>
        <div class="sendCmtIcon"><i class="inline-block"></i></div>
      </div>
    </div>
    <!-- 点击显示写评论区 -->
    <div v-if="showCommentBtn" @click="commentBtnCli" class="cmt-btn">
      喜欢你有趣的点评~
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      commentText: "",
      showCommentList: false,
      showReplyList: false,
      showCommentBtn: true,
      replyCmtHolder: "回复: ",
      commentHolder: "评论内容",
    };
  },
  methods: {
    commentBtnCli() {
      this.showCommentBtn = false;
    },
    replyIconCli() {
      this.showReplyList = !this.showReplyList;
    },
    closeCommentText(e) {
      if (
        document.querySelector(".cmt-txt") &&
        !document.querySelector(".cmt-txt").contains(e.target)
      ) {
        this.showCommentBtn = true;
      }
    },
    commentIconCli() {
      this.showCommentList = !this.showCommentList;
    },
  },
  mounted() {
    document.addEventListener("click", this.closeCommentText);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeCommentText);
  },
};
</script>

<style lang="scss" scoped>
.comment {
  background-color: #f5f5f5;
  margin-top: 5px;
  @apply p-px15;
  .cmt-content,
  .reply-content {
    outline: none;
    border: 1px solid;
    border-radius: 15px;
    @apply w-full border-card-gray p-px10;
  }
  .cmt-btn {
    width: 100%;
    height: 30px;
    padding-left: 15px;
    margin-top: 5px;
    border-radius: 15px;
    background-color: #fff;
    border: 1px solid;
    @apply border-card-gray text-base-color4 text-12px flex items-center cursor-pointer;
  }
  .sendCmtIcon,
  .sendReplyIcon {
    padding: 3px 16px;
    border-radius: 13px;
    @apply cursor-pointer bg-base-color1 text-12px;
    i {
      background: url("~@images/dynamic.png") no-repeat;
      background-position: -251px 4px;
      width: 14px;
      height: 20px;
    }
  }

  .comment-list-item {
    @apply flex flex-row items-center;
    & > img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .comment-content {
      line-height: 18px;
      i {
        width: 14px;
        height: 14px;
        background: url("~@images/dynamic.png") no-repeat;
        display: inline-block;
        margin-left: 8px;
        cursor: pointer;
      }

      .cmtIcon {
        background-position: -46px -3px;
      }
      .tranIcon {
        background-position: -25px -2px;
      }
    }
  }
}
</style>