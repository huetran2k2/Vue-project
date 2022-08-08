<template>
<div class="content-container container">
  <div class="content-area">
    <div class="status-field-container write-post-container">
      <div class="user-profile-box">
        <div class="user-profile">
          <img src="../assets/images/profile-pic.png" alt="" />
          <div>
            <p>Alex Carry</p>
            <small>August 13 1999, 09.18 pm</small>
          </div>
        </div>
        <div>
          <a href="#"><i class="fas fa-ellipsis-v"></i></a>
        </div>
      </div>
      <div class="status-field">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          dolores praesentium dicta laborum nihil accusantium odit laboriosam,
          sed sit autem! <a href="#">#This_Post_is_Better!!!!</a>
        </p>
        <img src="../assets/images/feed-image-1.png" alt="" />
      </div>
      <div class="post-reaction">
        <div class="activity-icons">
          <div><img src="../assets/images/like-blue.png" alt="" />120</div>
          <div><img src="../assets/images/comments.png" alt="" />52</div>
          <div><img src="../assets/images/share.png" alt="" />35</div>
        </div>
        <div class="post-profile-picture">
          <img src="../assets/images/profile-pic.png " alt="" />
          <i class="fas fa-caret-down"></i>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
    name:"Posts"
};
</script>

<style lang="scss" scoped></style>
