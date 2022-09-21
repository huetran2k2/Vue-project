<template>
  <div class="status-field-container write-post-container">
    <Header v-bind:id="id" v-bind:post="post" @update-posts="updatePosts"></Header>
    <Content v-bind:post="post"></Content>
    <Original v-if="post.originalId" :originalId="post.originalId"></Original>
    <Interactive v-bind:post="post" @update-data-posts="updateDataPosts"></Interactive>
  </div>
</template>
<script>
import Header from "@/components/posts/Header.vue";
import Interactive from "@/components/posts/Interactive.vue";
import Content from "@/components/posts/Content.vue";
import Original from "@/components/posts/Original.vue";

export default {
  name: "PostItem",
  components: {
    Header,
    Content,
    Interactive,
    Original,
  },
  methods: {
    updatePosts(id) {
      this.$emit("update-posts", id);
      console.log("data", id);
    },
    updateDataPosts(post) {
      this.$emit("update-list-post", post);
      // this.listPost.push(e);
    },
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped></style>
