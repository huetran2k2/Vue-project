<template>
  <div class="user-profile-box">
    <div class="user-profile">
      <img v-bind:src="post.user.avatar" class="user-pro-pic" alt="" />
      <div>
        <p>{{ post.user.lastName + " " }} {{ post.user.firstName }}</p>
        <small>{{ post.createdAt }}</small>
      </div>
    </div>
    <div>
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
          <li><a class="dropdown-item" href="#">Chỉnh sửa bài viết </a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a class="dropdown-item" href="#" @click="deletePost(post.id)">Xóa</a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
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
  },
  methods: {
    async deletePost(id) {
      await axios
        .delete(`http://localhost:3000/posts/${id}`)

        .then((data) => {
          // like this
          this.$emit("update-posts", id);
          console.log("data", res.data);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style lang="css" scoped>
.dropdown-toggle {
  border: none;
  outline: none;
  background: white;
}
</style>
