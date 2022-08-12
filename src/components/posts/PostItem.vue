<template>
  <div class="container">
    <div class="content-post">
      <div class="post-body">
        <PostHeader></PostHeader>
        <Content></Content>
        <Interactive></Interactive>
      </div>
    </div>
  </div>
</template>
<script>
import PostHeader from "@/components/posts/PostHeader.vue";
import Interactive from "@/components/posts/Interactive.vue";
import Content from "@/components/posts/Content.vue";
export default {
  name: "PostItem",
  components: {
    PostHeader,
    Content,
    Interactive,
  },
};
</script>
<style lang="scss" scoped></style>
