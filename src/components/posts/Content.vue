<template>
  <div class="description">
    <div>{{ post.title }}</div>
  </div>
  <div>
    <img v-bind:src="post.image" class="upload-img" alt="" />
  </div>
 
</template>
<script>
// import CommentDetail from "@/components/posts/CommentDetail.vue";
export default {
  name: "Content",
   props: {
    post: {
      type: Object,
      required: true
    },
  },
};
</script>

<style lang="css" scoped>
.upload-img {
  position: relative;
  width: 100%;
}
.count-likes {
  margin-left: 2%;
  margin-top: 5px;
}
.description {
  padding: 0.7rem;
  margin-left: -12px;
  white-space: pre-wrap;
}

</style>
