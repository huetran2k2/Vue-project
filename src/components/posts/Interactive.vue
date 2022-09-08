<template>
  <div class="post-detail">
    <div class="like-comment-preview">
      <div class="likes-preview">
        <font-awesome-icon icon="fa-solid fa-thumbs-up" />
        <font-awesome-icon icon="fa-solid fa-heart" />
        <span class="count-likes">{{ post.emotions.length }}</span>
      </div>
      <div class="comment-share-preview">
        <span @click="showComment()"
          >{{ post.comments ? post.comments.length : "" }} comments &ensp;</span
        >
        <span>{{ post.shares ? post.shares.length : "" }} shares</span>
      </div>
    </div>
  </div>

  <div class="likes-comment-share-icons">
    <div class="like" tabindex="1" @click="addEmotions">
      <font-awesome-icon icon="fa-solid fa-thumbs-up" />&nbsp;
      <span>like</span>
    </div>
    <div class="comment" @click="showComment()">
      <font-awesome-icon icon="fa-solid fa-comment" />&nbsp;
      <span>comment</span>
    </div>
    <div class="share">
      <font-awesome-icon icon="fa-solid fa-share" />&nbsp;
      <span>share</span>
    </div>
  </div>
  <div v-if="isShowCmt">
    <List v-bind:comments="post.comments" v-bind:post="post"></List>
  </div>
</template>

<script>
import List from "@/components/comments/List.vue";
import axios from "axios";

export default {
  name: "Interactive",
  data() {
    return {
      isShowCmt: false,
      auth: JSON.parse(localStorage.getItem("auth")),
      form: {
        id: null,
        postId: null,
        userId: null,
        createdAt: "",
        updatedAt: "",
      },
    };
  },
  methods: {
    showComment() {
      this.isShowCmt = !this.isShowCmt;
    },
    async addEmotions() {
      let a = this.post.emotions.find(e => e.userId === this.auth.user.id)

      if (!a) {
        let date = new Date();
          this.form.createdAt = date.toDateString("en-US");
          this.form.updatedAt = date.toDateString("en-US");
          this.form.userId = this.auth.user.id;
          this.form.postId = this.post.id;
          const res = await axios.post("http://localhost:3000/emotions", this.form);
          this.post.emotions.push(res.data);
      } else {
        await axios
        .delete(`http://localhost:3000/emotions/${a.id}`)
        .then((data) => {
          this.post.emotions.pop(a);
        })
        .catch((err) => console.log(err));
      }
      
     
    },
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: { List },
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

.comment-share-preview {
  cursor: pointer;
}
</style>
