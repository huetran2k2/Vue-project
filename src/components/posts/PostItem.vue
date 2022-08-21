<template>
  <div class="container">
    <div class="content-post">
      <div class="post-body">
        <Header v-bind:post="post"></Header>
        <Content v-bind:post="post"></Content>
        <Interactive  v-bind:post="post"></Interactive>
        <List v-if="isShowCmt"></List>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/posts/Header.vue";
import Interactive from "@/components/posts/Interactive.vue";
import Content from "@/components/posts/Content.vue";
import List from "../comments/list.vue";

export default {
  name: "PostItem",
  components: {
    Header,
    Content,
    Interactive,
    List,
},
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  watch: {
    post() {
      console.log(post)
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
