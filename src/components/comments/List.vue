<template>
  <div>
    <div class="comment-box">
      <div class="box-pic">
        <img src="@/assets/images/profile-pic.png" alt="" class="profile-pic" />
      </div>
      <h1>{{ id }}</h1>
      <div class="comment-text">
        <input
          @keyup.enter="addComment"
          type="text"
          ref="comment"
          placeholder="Write a comment..."
          class="cmt-input"
          v-model="form.content"
        />
      </div>
    </div>
    <br />
    <div v-for="comment in comments">
      <Detail v-bind:comment="comment"></Detail>
    </div>
  </div>
</template>
<script>
import Detail from "./Detail.vue";
import axios from "axios";

export default {
  components: { Detail },
  data() {
    return {
      name: "List",
      auth: JSON.parse(localStorage.getItem("auth")),
      form: {
        id: null,
        content: "",
        userId: null,
        createdAt: "",
        updatedAt: "",
        postId: null,
      },
      listComments: [],

      newComments: this.comments,
    };
  },
  mounted() {
    this.setFocus();
  },

  props: {
    comments: {
      type: Object,
      required: true,
    },
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async addComment() {
      if (this.checkValidation()) {
        let date = new Date();
        this.form.createdAt = date.toDateString("en-US");
        this.form.updatedAt = date.toDateString("en-US");
        this.form.userId = this.auth.user.id;
        this.form.postId = this.post.id;
        const res = await axios.post("http://localhost:3000/comments", this.form);
        this.form.content = "";
        this.comments.push(res.data);
      }
    },
    setFocus: function () {
      this.$refs.comment.focus();
      console.log("hueueueueuuuu");
    },
    checkValidation() {
      if (this.form.content) {
        return true;
      }
      return false;
    },
    // updateComments(id) {
    //   console.log(id);
    //     console.log("comment",this.newComments)
    //     this.newComments = this.newComments.filter(comments => comments.id !== id)
    //     this.$parent.$parent.$parent.$emit("update-comments", this.newComments);
    // },
  },
};
</script>
<style lang="css" scoped>
.comment-box {
  display: flex;
  text-align: start;
}

.comment-box .box-pic {
  margin-right: 0.7rem;
  position: relative;
}

.box-pic::after {
  display: block;
  position: absolute;
  width: 0.7rem;
  height: 0.7rem;
  bottom: 0.3rem;
  left: 2.3rem;
  border-radius: 50%;
  border: 0.3rem solid white;
}

.box-pic:hover {
  cursor: pointer;
}

.profile-pic {
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
}

.comment-text {
  display: flex;
  max-width: 600px;
  align-items: center;
  flex: 1;
}

.cmt-input {
  width: 100%;
  border: none;
  padding: 0.7rem;
  font-size: 0.9rem;
  color: rgba(5, 5, 5, 0.8);
  border-radius: 2rem;
  outline: none;
  flex: 1;
  background-color: #eee;
}

.cmt-input::placeholder {
  opacity: 0.8;
}

.cmt-input::focus::-webkit-input-placeholder {
  opacity: 0.6;
}

.comment-friend {
  display: flex;
  text-align: start;
  font-size: 0.8rem;
}

.friend-comment-pic {
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  margin-right: 0.7rem;
  cursor: pointer;
  margin-top: 0.1rem;
}

.friend-comment-pic:hover {
  filter: brightness(0.95);
}

.friend-comment-comment {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-right: 0.5rem;
  padding: 0.5rem 0.9rem;
  background: rgb(240, 240, 240);
  border-radius: 1rem;
}

.comment-author {
  align-self: flex-start;
  font-size: 0.8rem;
}

.comment-author:hover {
  text-decoration: underline;
}

.comment-author {
  font-weight: 550;
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
}

.comment-box .image img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border-radius: 50%;
}

.comment-box .comment-submit {
  float: right;
  padding: 6px 10px;
  border: none;
  background: #009cff;
  color: #eee;
  cursor: pointer;
  border-radius: 3px;
}

.comment-box .comment-submit:hover {
  background: #0076bf;
}
</style>
