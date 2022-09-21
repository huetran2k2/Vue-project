<template>

    <div class="post-comment">
      <div class="list">
        <div class="comment-friend">
          <img v-bind:src="user.avatar" alt="" class="friend-comment-pic" />
          <div class="friend-comment-comment">
            <a class="comment-author"
              >{{ user.lastName + " " }}{{ user.firstName }}
            </a>
            <span class="comment-content"> {{ comment.content }}</span>
          </div>
          <div class="dropdown">
            <button
              class="dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <font-awesome-icon icon="fa-solid fa-ellipsis" />
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item">Chỉnh sửa bình luận </a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" @click="deleteComment(comment.id)"
                  >Xóa</a
                >
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import axios from "axios";
export default {
  name: "CommentDetail",
  data() {
    return {
      user: [],
    };
  },
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      try {
        const res = await axios.get(`http://localhost:3000/users/${this.comment.userId}`);
        this.user = res.data;
        console.log("user", res.data);
      } catch (e) {
        console.log(e);
      }
    },
    async deleteComment(id) {
      await axios
        .delete(`http://localhost:3000/comments/${id}`)
        .then((data) => {
          this.$parent.$parent.$parent.$emit("update-comments", id)
          console.log(id);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="css" scoped>
.comment-session {
  width: 650px;
  height: auto;
  margin: 0 auto;
}

.post-comment .list {
  width: 100%;
  margin-bottom: 12px;
}

.post-comment .list .user {
  display: flex;
  padding: 8px;
  overflow: hidden;
}

.post-comment .list .user img {
  height: 38px;
  width: 38px;
  margin-right: 10px;
  border-radius: 50px;
}

.comment-session .name {
  text-transform: uppercase;
  font-weight: 500;
}

.post-comment .list .day {
  font-size: 12px;
}

.post-comment .comment-post {
  padding: 0 0 15px 58px;
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
.dropdown-toggle::after {
  display: contents;
  margin-left: 0px;
}
</style>
