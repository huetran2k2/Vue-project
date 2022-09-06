<template>
 <div class="post-detail">
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

  <div class="likes-comment-share-icons">
    <div class="like" tabindex="1">
      <font-awesome-icon icon="fa-solid fa-thumbs-up" />&nbsp;
      <span>like</span>
    </div>
    <div class="comment" @click="showComment()">
      <font-awesome-icon icon="fa-solid fa-comment" />&nbsp;
      <span>comment</span>
    </div>
    <div class="share">
      <font-awesome-icon icon="fa-solid fa-share" />&nbsp;
      <span >share</span>
    </div>
  </div>
    <div v-if="isShowCmt">
      <List v-bind:comments="post.comments" v-bind:post="post"  ></List>
  </div>

</template>

<script>
import List from "@/components/comments/List.vue";
export default {
  name: "Interactive",
  data() {
    return {
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
    },
  },
  components: { List }
};
</script>

<style lang="css" scoped>
.likes-comment-share-icons {
  position: relative;
  width: 100%;
  border-top: 1px solid gray;
  padding: 1rem 0;
  display: flex;
  justify-content: space-evenly;
  font-size: 17px;
  color: rgb(51, 51, 51);
}
.likes-comment-share-icons > div {
  cursor: pointer;
}
.likes-comment-share-icons > div:nth-child(1):focus {
  color: rgb(19, 128, 200);
}
.likes-comment-share-icons i {
  font-size: 15px;
}
.likes-preview {
  display: flex;
  align-items: center;
}
.like-comment-preview {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0.5rem;
  justify-content: space-between;
}
.likes-preview .fa-thumbs-up,
.fa-heart {
  position: relative;
  border-radius: 50px;
  background-color: rgb(19, 128, 200);
  color: white;
  padding: 5%;
  border: 2px solid white;
}
.fa-heart {
  background-color: rgb(227, 40, 40);
  margin-left: -6px;
}
.comment-share-preview{
  cursor: pointer;
}
</style>
