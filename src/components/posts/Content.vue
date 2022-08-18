<template>
  <div class="description">
    <div v-for="(line, index) in content.split('\n')" :key="index">{{ line }}</div>
  </div>
  <div class="post-detail">
    <img v-bind:src="post.image" class="upload-img" alt="" />
    <div class="like-comment-preview">
      <div class="likes-preview">
        <font-awesome-icon icon="fa-solid fa-thumbs-up" />
        <font-awesome-icon icon="fa-solid fa-heart" />
        <span class="count-likes">{{ post.emotions.length }}</span>
      </div>
      <div class="comment-share-preview">
        <span @click="showComment()">{{ post.comments ? post.comments.length : '' }} comments &ensp;</span>
        <span>{{ post.shares ? post.shares.length : '' }} shares</span>
      </div>
    </div>
  </div>
  <div v-if="isShowCmt">
    <div v-for="comment in post.comments">
    <p>{{comment}}</p>
      <CommentDetail v-bind:comment="comment"></CommentDetail>
    </div>
     <div class="comment-box">
            <div class="user">
                <div class="image">
                    <img src="@/assets/images/profile-pic.png" alt="">
                </div>
                <div class="name"></div>
            </div>
            <form action="" method="post">
                <input name="" id="" cols="30" rows="10" placeholder="Your message"/>
            </form>
        </div>
  </div>
</template>
<script>
import CommentDetail from "@/components/posts/CommentDetail.vue";
export default {
  name: "Content",
  data() {
    return {
      content: `I'm bilding HTML CSS
CSS is cool!`,
      isShowCmt: false,
    };
  },
  methods: {
    showComment() {
      this.isShowCmt = !this.isShowCmt;
    }
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: { CommentDetail }
};
</script>

<style lang="scss" scoped>
</style>
