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
          >{{ post.comments ? post.comments.length : "" }} Comments &ensp;</span
        >
        <button
          type="button"
          class="btn"
          data-bs-toggle="modal"
          data-bs-target="#example"
          @click="getUser()"
        >
          <span>{{ post.shares ? post.shares.length : "" }} Shares</span>
        </button>

        <div class="modal" tabindex="-1" id="example">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Những người đã chia sẽ điều này</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div v-for="user of users">
                  <div class="area">
                    <div class="user-profile-box">
                      <div class="user-profile">
                        <img v-bind:src="users.avatar" class="user-pro-pic" alt="" />
                        <div>
                          <p>{{ user.gender }}</p>
                          <small>{{ post.createdAt }}</small>
                        </div>
                      </div>
                    </div>
                    <br />
                    <a href="">Hiển thị </a>
                    <div class="likes-comment-share-icons">
                      <div class="like" tabindex="1" @click="addEmotions">
                        <font-awesome-icon icon="fa-solid fa-thumbs-up" />&nbsp;
                        <span>Like</span>
                      </div>
                      <div class="share">
                        <font-awesome-icon icon="fa-solid fa-share" />&nbsp;
                        <span>Share</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              >
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div class="likes-comment-share-icons">
    <div :class="likeClass" tabindex="1" @click="addEmotions">
      <font-awesome-icon icon="fa-solid fa-thumbs-up" />&nbsp;
      <span>Like</span>
    </div>
    <div class="comment" @click="showComment()">
      <font-awesome-icon icon="fa-solid fa-comment" />&nbsp;
      <span>Comment</span>
    </div>
    <div class="share" @click="sharePost()">
      <font-awesome-icon icon="fa-solid fa-share" />&nbsp;
      <span>Share</span>
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
      users: [],
      newPost: {},
    };
  },
  created() {},
  methods: {
    showComment() {
      this.isShowCmt = !this.isShowCmt;
    },
    async addEmotions() {
      let a = this.post.emotions.find((e) => e.userId === this.auth.user.id);
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
    async getUser() {
      const res = await axios.get(`http://localhost:3000/users/`);
      this.users = res.data;
    },
    async sharePost() {
      await this.addSharePost();
    },
    async addSharePost() {
      const date = new Date();
      let dataShare = {};
      dataShare.createdAt = date.toDateString("en-US");
      dataShare.updatedAt = date.toDateString("en-US");
      dataShare.userId = this.auth.user.id;
      dataShare.postId = this.post.id;
      await axios
        .post("http://localhost:3000/shares", dataShare)
        .then((res) => {
          this.$parent.$emit("update-data-share", res.data);
          this.addNewPost();
          console.log("shares", res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async addNewPost() {
      let postData = {};
      let date = new Date();
      postData.createdAt = date.toDateString("en-US");
      postData.updatedAt = date.toDateString("en-US");
      postData.userId = this.auth.user.id;
      postData.originalId = this.post.id;
      const res = await axios.post("http://localhost:3000/posts", postData);
      const post = await axios.get(
        `http://localhost:3000/posts/${res.data.id}?_expand=user&_embed=comments&_embed=emotions&_embed=shares`
      );
      this.$emit("update-data-posts", post.data);
      console.log("hue", post.data);
      alert("Share successfully!!");
    },
  },
  watch: {
    newPost() {
      console.log("value", this.newPost);
      console.log("change posst 1");
      // this.$emit("update-data-posts", this.newPost);
    },
  },
  computed: {
    // likeClass() {
    //   let activeLike = false;
    //   this.post.emotions.forEach((item) => {
    //     if (item.userId === this.auth.user.id) {
    //       activeLike = true;
    //     }
    //   });
    //   return activeLike ? "emotion-active" : "";
    // },
    likeClass() {
      const a = this.post.emotions.some((item) => item.userId === this.auth.user.id);
      console.log("a", a);
      return a ? "emotion-active" : "";
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
  padding: 1rem 0;
  display: flex;
  justify-content: space-evenly;
  font-size: 17px;
  color: rgb(51, 51, 51);
}

.likes-comment-share-icons > div {
  cursor: pointer;
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

hr {
  margin: 0;
}

.area {
  box-shadow: inset;
}

.btn {
  border: none;
  outline: none;
}
.emotion-active {
  color: rgb(19, 128, 200);
}
</style>
