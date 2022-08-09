<template>
  <div class="container">
    <div class="content-post">
      <div class="post-body">
        <div class="user-infor">
          <div class="user">
            <img src="../assets/images/profile-pic.png" class="user-pro-pic" alt="" />
            <h2>Tran Thi Hue</h2>
          </div>
          <div class="post-option-icons">
            <font-awesome-icon icon="fa-solid fa-ellipsis" />
          </div>
        </div>
        <div class="date-time">Tue 9 at 10:43 AM. <span class="fas fa-earth"></span></div>
        <div class="description">I'm building layout by HTML CSS</div>
        <div class="post-detail">
          <img src="../assets/images/feed-image-1.png" class="upload-img" alt="" />
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Posts",
};
</script>
<style lang="scss" scoped></style>
