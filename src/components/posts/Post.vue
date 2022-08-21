<template>
<button @click="showCreatePost()">Create a post</button>
<div v-if="isShowCreate">
    <NewPost></NewPost>

</div>
    <div v-for="post of listPost" :key="post.id">
        <PostItem v-bind:post="post"></PostItem>
    </div>
</template>
<script>
import PostItem from "@/components/posts/PostItem.vue";
import axios from 'axios'
import NewPost from "./newPost.vue";

export default {
    name: "ListPost",
    data() {
        return {
            listPost: [],
            isShowCreate: false
        }
    },
    components: {
    PostItem,
    NewPost,

},
    created() {
        this.getPost()
    },
    methods: {
        async getPost() {
            try {
                const res = await axios.get(`http://localhost:3000/posts?_expand=user&_embed=comments&_embed=emotions&_embed=shares`);
                this.listPost = res.data;
                console.log(res.data);
            } catch (e) {
                console.error(e);
            }
        },
        showCreatePost(){
            this.isShowCreate =!this.isShowCreate;
        }
    }
};
</script>
<style lang="css" scoped>
.content-post {
  display: flex;
  justify-content: center;
}
.post-body {
  box-shadow: 2px 2px 12px 0px rgb(233, 232, 232);
  overflow: hidden;
  background-color: #fff;
  padding: 1rem;
  max-width: 680px;
  width: var(--a);
  min-width: 464;
  border-radius: 9px;
}
</style>
