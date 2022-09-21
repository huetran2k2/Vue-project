<template>
  <FormAdd 
    @update-list-post="updateListPosts" 
    @update-post-edit="updatePostEdit" 
    v-bind:postEdit="postEdit"
    ></FormAdd>
  <div v-for="post of listPost" :key="post.id">
    <PostItem
      v-bind:post="post"
      v-bind:id="id"
      v-bind:newComment="newComment"
      @update-posts="updatePosts"
      @update-comments="updateComments"
      @update-list-post="updateListPosts"
      @update-data-share="updateShare"
      @post-edit="setPostEdit"
    ></PostItem>
  </div>
</template>
<script>
import PostItem from "@/components/posts/PostItem.vue";
import axios from "axios";
import FormAdd from "./addPost/FormAdd.vue";

export default {
  name: "ListPost",
  emits: ["updateListPosts"],
  data() {
    return {
      listPost: [],
      listComments: [],
      postEdit: null
    };
  },
  components: {
    PostItem,
    FormAdd,
  },
  created() {
    this.getPost();
  },
  methods: {
    async getPost() {
      try {
        const res = await axios.get(
          `http://localhost:3000/posts?_expand=user&_embed=comments&_embed=emotions&_embed=shares`
        );
        setTimeout(() => {
          this.listPost = res.data;
        }, 1000);
      } catch (e) {
        console.error(e);
      }
    },
    updateListPosts(e) {
      console.log("update list post hue", e);
      this.listPost.unshift(e);
    },
    updateDataPosts(e) {
      console.log("update list post 222", e);
      this.listPost.unshift(e);
    },
    updatePosts(id) {
      this.listPost = this.listPost.filter((listPost) => listPost.id !== id);
      alert("Deleted suceessfuly!");
    },
    updateComments(id) {
      for (let i in this.listPost) {
        this.listPost[i].comments = this.listPost[i].comments.filter(
          (comments) => comments.id !== id
        );
      }
      alert("Deleted suceessfuly!");
    },
    updateShare(e) {
      this.listPost.forEach((item) => {
        if (item.id === e.postId) {
          item.shares.push(e);
        }
      });
    },
    setPostEdit(post) {
      this.postEdit = post
    },
    updatePostEdit() {
      console.log('post null');
      this.postEdit = {
        id: null,
        content: "",
        image: "",
        userId: "",
        createdAt: "",
        updatedAt: "",
      }
    }
  },
};
</script>
<style lang="css" scoped></style>
