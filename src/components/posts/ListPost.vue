<template>
    <div v-for="post of listPost" :key="post.id">
        <PostItem v-bind:post="post"></PostItem>
    </div>
</template>
<script>
import PostItem from "@/components/posts/PostItem.vue";
import axios from 'axios'
export default {
    name: "ListPost",
    data() {
        return {
            listPost: []
        }
    },
    components: {
        PostItem,
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
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
