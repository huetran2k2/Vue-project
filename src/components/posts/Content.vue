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
.likes-preview {
  display: flex;
  align-items: center;
}
.like-comment-preview {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0.5rem;
  justify-content: space-between;
}
.likes-preview .fa-thumbs-up,
.fa-heart {
  position: relative;
  border-radius: 50px;
  background-color: rgb(19, 128, 200);
  color: white;
  padding: 5%;
  border: 2px solid white;
}
.fa-thumbs-up {
  z-index: 211;
}
.fa-heart {
  background-color: rgb(227, 40, 40);
  margin-left: -6px;
}
</style>
