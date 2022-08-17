<template>
  <div class="container">
    <div class="content-post">
      <div class="post-body">
        <Header></Header>
        <Content></Content>
        <Interactive></Interactive>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/posts/Header.vue";
import Interactive from "@/components/posts/Interactive.vue";
import Content from "@/components/posts/Content.vue";

export default {
  name: "Post",
  components: {
    Header,
    Content,
    Interactive,
  },
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
