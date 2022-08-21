<template>
  <div>
   
    <div class="comment-box">
      <div class="box-pic">
          <img src="@/assets/images/profile-pic.png" alt="" class="profile-pic"/>
      </div>
      <div class="comment-text">
       <input type="text" placeholder="Write a comment..." name="" value="" class="cmt-input">
      </div>
    </div>
    <br/>
     <div v-for="comment in comments">
      <Detail v-bind:comment="comment"></Detail>
    </div>
   
  </div>
</template>
<script>
import Detail from "./Detail.vue";
export default {
  name: "List",
  components: { Detail },
  props: {
    comments: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped></style>
