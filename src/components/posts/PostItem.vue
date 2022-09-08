<template>
  <div class="status-field-container write-post-container">
    <Header v-bind:id="id" v-bind:post="post" @update-posts="updatePosts"></Header>
    <Content v-bind:post="post"></Content>
    <Interactive v-bind:post="post"></Interactive>
  </div>
</template>
<script>
import Header from "@/components/posts/Header.vue";
import Interactive from "@/components/posts/Interactive.vue";
import Content from "@/components/posts/Content.vue";


export default {
  name: "PostItem",
  components: {
    Header,
    Content,
    Interactive,
  },

  methods: {
    updatePosts(id) {
      this.$emit('update-posts', id)
      console.log("data",id);
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
