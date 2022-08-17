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
</template>

<script>
export default {
  name: "Posts",
};
</script>
<style lang="css" scoped>
.user-wrap {
  justify-content: space-between;
  display: flex;
}
.user-content {
  margin-left: 10px;
}
.user-infor {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.text-title {
  position: relative;
  display: inline-block;
  font-size: 18px;
}
.user-pro-pic {
  position: relative;
  width: 50px;
  border-radius: 50px;
}
.post-option-icons {
  color: rgb(78, 78, 78);
  font-size: 22px;
}
.post-option-icons > span {
  position: relative;
  margin: 0 1rem;
  color: rgb(51, 51, 51);
}
</style>
