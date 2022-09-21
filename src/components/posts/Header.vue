<template>
  <div class="user-profile-box">
    <div v-if="post.user" class="user-profile">
      <img v-bind:src="post.user.avatar" class="user-pro-pic" alt="" />
      <div>
        <p>{{ post.user.lastName + " " }} {{ post.user.firstName }}</p>
        <small>{{ post.createdAt }}</small>
      </div>
    </div>
    <div v-if="!isOriginal">
      <div class="dropdown">
        <button
          class="dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <font-awesome-icon icon="fa-solid fa-ellipsis" />
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <button class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <li>
              <a
                class="dropdown-item"
                @click="updatePost(post)"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                >Chỉnh sửa bài viết
              </a>
            </li>
          </button>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a class="dropdown-item" @click="deletePost(post.id)">Xóa</a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a class="dropdown-item">Something else here</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Posts",
  data() {
    return {
      status: "",
    };
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
    isOriginal: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    async deletePost(id) {
      await axios
        .delete(`http://localhost:3000/posts/${id}`)
        .then((data) => {
          this.$emit("update-posts", id);
        })
        .catch((err) => console.log(err));
    },
    updatePost(post) {
      this.$parent.$emit("post-edit", post);
    },
  },
};
</script>
<style lang="css" scoped>
.dropdown-toggle::after {
  display: contents;
  margin-left: 0px;
}
.btn {
  border: none;
  outline: none;
}
</style>
