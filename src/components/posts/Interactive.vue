<template>
  <div class="likes-comment-share-icons">
    <div class="like" tabindex="1">
      <font-awesome-icon icon="fa-solid fa-thumbs-up" />&nbsp;
      <i>like</i>
    </div>
    <div class="comment">
      <font-awesome-icon icon="fa-solid fa-comment" />&nbsp;
      <i>comment</i>
    </div>
    <div class="share">
      <font-awesome-icon icon="fa-solid fa-share" />&nbsp;
      <i>share</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Interactive",
};
</script>

<style lang="css" scoped>
.likes-comment-share-icons {
  position: relative;
  width: 100%;
  border-top: 1px solid gray;
  padding: 1rem 0;
  display: flex;
  justify-content: space-evenly;
  font-size: 20px;
  color: rgb(51, 51, 51);
}
.likes-comment-share-icons > div {
  cursor: pointer;
}
.likes-comment-share-icons > div:nth-child(1):focus {
  color: rgb(19, 128, 200);
}
.likes-comment-share-icons i {
  font-size: 15px;
}
</style>
