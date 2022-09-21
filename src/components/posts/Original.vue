<template>
  <div class="container ">
    <Header v-bind:id="id" v-bind:post="post" :isOriginal="true"></Header>
    <Content v-bind:post="post"></Content>
  </div>
</template>

<script>
import Header from "@/components/posts/Header.vue";
import Content from "@/components/posts/Content.vue";
import axios from "axios";

export default {
  name: "PostItem",
  components: {
    Header,
    Content,
  },
  props: {
    originalId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      post: {},
    };
  },
  async created() {
    await this.getPost();
  },
  methods: {
    async getPost() {
      try {
        const res = await axios.get(
          `http://localhost:3000/posts/${this.originalId}?_expand=user&_embed=comments&_embed=emotions&_embed=shares`
        );
        this.post = res.data;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
<style lang="css" scoped>
</style>
