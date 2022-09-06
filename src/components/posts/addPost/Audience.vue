<template>
  <section class="audience">
    <header>
      <div class="arrow-back"><i class="fas fa-arrow-left"></i></div>
      <p>Select Audience</p>
    </header>
    <div class="content">
      <p>Who can see your post?</p>
      <span>Your post will show up in News Feed, on your profile and in search
        results.</span>
    </div>
    <div v-for="ob in Objects" :key="ob.id">
      <Object v-bind:ob="ob" v-bind:rangeValue="rangeValue" @update-range-value="updateRangeValue"></Object>
    </div>
  </section>
</template>

<script>
import Object from "./Object.vue";
export default {
  data() {
    return {
      rangeValue: "Public",
      Objects: [
        {
          "id": 1,
          "range": "Public",
          "description": "Anyone on or off Facebook"
        },
        {
          "id": 2,
          "range": "Friend",
          "description": "Anyone on or off Facebook"
        },
        {
          "id": 3,
          "range": "Pecific",
          "description": "Only show to some friends"
        },
        {
          "id": 4,
          "range": "Only me",
          "description": "Only you can see your post"
        },
        {
          "id": 5,
          "range": "Custom",
          "description": "Include and exclude friends"
        },
      ]
    };
  },
  methods: {
    updateRangeValue(range) {
      this.rangeValue = range;
    },
  },
  components: { Object }
}
</script>

<style lang="css" scoped>
.audience header {
  padding: 17px 0;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #bfbfbf;
}

.audience header .arrow-back {
  position: absolute;
  left: 25px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  font-size: 15px;
  color: #747474;
  border-radius: 50%;
  background: #e4e6eb;
}

.audience header p {
  font-size: 22px;
  font-weight: 600;
}

.audience .content {
  margin: 20px 25px 0;
}

.audience .content p {
  font-size: 17px;
  font-weight: 500;
}

.audience .content span {
  font-size: 14px;
  color: #65676b;
}
</style>