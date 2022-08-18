<template>
  <div class="user-wrap">
    <div class="user-infor">
      <div class="user-img">
        <img v-bind:src="post.user.avatar" class="user-pro-pic" alt="" />
      </div>
      <div class="user-content">
        <h2 class="text-title">{{post.user.name}}</h2>
        <br />
        <span>{{post.createdAt}}</span>
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
  props:{
    post:{
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped></style>
