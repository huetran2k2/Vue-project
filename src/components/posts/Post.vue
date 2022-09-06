<template>
    <FormAdd @update-list-post="updateListPosts"></FormAdd>
    <div v-for="post of listPost" :key="post.id">
        <PostItem v-bind:post="post" v-bind:id="id" @update-posts="updatePosts"></PostItem>
    </div>
</template>
<script>
import PostItem from "@/components/posts/PostItem.vue";
import axios from 'axios'
import FormAdd from "./addPost/FormAdd.vue";

export default {
    name: "ListPost",
    data() {
        return {
            listPost: [],
        }
    },
    components: {
        PostItem,
        FormAdd
    },
    created() {
        this.getPost()
    },
   
    methods: {
        async getPost() {
            try {
                const res = await axios.get(`http://localhost:3000/posts?_expand=user&_embed=comments&_embed=emotions&_embed=shares`);
                setTimeout(() => {
                    this.listPost = res.data;
                }, 1)

            } catch (e) {
                console.error(e);
            }
        },
        updateListPosts(e) {
            console.log("update list post", e);
            this.listPost.push(e);
        },
  
    updatePosts(id) {
        this.listPost = this.listPost.filter(listPost => listPost.id !== id)
        alert("Are you sure????")
        console.log(this.listPost);

    },

    }
};
</script>
<style lang="css" scoped>
</style>
