<template>
  <div class="user-wrap">
    <div class="user-infor">
      <div class="user-img">
        <img src="@/assets/images/profile-pic.png" class="user-pro-pic" alt="" />
      </div>
      <div class="user-content">
        <h2 class="text-title">Tran Thi Hue</h2>
        <br />
        <span>Tue 9 at 10:43 AM.</span>
      </div>
    </div>
    <div class="post-option-icons">
      <font-awesome-icon icon="fa-solid fa-ellipsis" />
    </div>
  </div>
  <HeaderPost/>
</template>
<script>
export default {
  name: "Posts",
};
</script>
<style lang="scss" scoped></style>
