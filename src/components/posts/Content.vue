<template>
  <div class="description">
    <div v-for="(line, index) in content.split('\n')" :key="index">{{ line }}</div>
  </div>
  <div class="post-detail">
    <img src="@/assets/images/feed-image-1.png" class="upload-img" alt="" />
    <div class="like-comment-preview">
      <div class="likes-preview">
        <font-awesome-icon icon="fa-solid fa-thumbs-up" />
        <font-awesome-icon icon="fa-solid fa-heart" />
        <span class="count-likes">556k</span>
      </div>
      <div class="comment-share-preview">
        <span>22.8k comments &ensp;</span>
        <span>22.8k shares</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Content",
  data() {
    return {
      content: `I'm bilding HTML CSS
CSS is cool!`,
    };
  },
};
</script>

<style lang="scss" scoped></style>
