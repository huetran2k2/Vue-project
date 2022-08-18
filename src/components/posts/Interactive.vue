<template>
  <div class="likes-comment-share-icons">
    <div class="like" tabindex="1">
      <font-awesome-icon icon="fa-solid fa-thumbs-up" />&nbsp;
      <span>like</span>
    </div>
    <div class="comment">
      <font-awesome-icon icon="fa-solid fa-comment" />&nbsp;
      <span>comment</span>
    </div>
    <div class="share">
      <font-awesome-icon icon="fa-solid fa-share" />&nbsp;
      <span>share</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Interactive",
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
