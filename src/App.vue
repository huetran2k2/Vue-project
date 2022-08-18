<template>
  <router-view />
</template>
<script>
import ListPost from "./components/posts/ListPost.vue";
import CommentDetail from "./components/posts/CommentDetail.vue";

export default {
  name: "App",
  components: {
    ListPost, CommentDetail
  },
};
</script>
<style lang="scss" scoped></style>
