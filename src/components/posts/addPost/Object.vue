<template>
  <ul class="list" :class="customClass">
    <li class="audience">
      <div class="column">
        <div class="icon"><i class="fas fa-globe-asia"></i></div>
        <div class="details">
          <p>{{ ob.range }}</p>
          <span>{{ ob.description }}</span>
        </div>
      </div>
      <div class="ul">
        <input type="radio" name="objects" :value="ob.range"  />
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    customClass: function () {
      return this.rangeValue === this.ob.range ? "dark-theme" : "light-theme";
    },
  },
  // watch: {
  //   rangeValue() {
  //     this.$emit("update-range-value", this.rangeValue);
  //   },
  // },
  props: {
    ob: {
      type: Object,
      required: true,
    },
    rangeValue: {
      type: String,
    },
  },
};
</script>

<style lang="css" scoped>
.column {
  display: flex;
  align-items: center;
}
.list {
  padding: 0.3rem 2rem;
  margin-top: 1rem;
}
.audience {
  display: flex;
  justify-content: space-between;
}

input[type="radio"] {
  -ms-transform: scale(1.5);
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}

.dark-theme {
  background: #f0f1f4;
}

.light-theme {
  background: #ffff;
}

.icon {
  height: 50px;
  width: 50px;
  color: #333;
  font-size: 23px;
  border-radius: 50%;
  background: #e4e6eb;
}

.details {
  margin-left: 15px;
}

p {
  font-weight: 500;
  margin-bottom: 0.5rem;
}

span {
  font-size: 14px;
  color: #65676b;
}

.radio {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: relative;
  border: 1px solid #707070;
}

.radio {
  border: 2px solid #4599ff;
}

.radio::before {
  content: "";
  width: 12px;
  height: 12px;
  border-radius: inherit;
}

.radio::before {
  background: #4599ff;
}
</style>
