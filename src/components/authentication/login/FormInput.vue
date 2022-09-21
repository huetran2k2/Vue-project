<template>
  <div>
    <form action="#">
      <input type="email" placeholder="Email address" v-model="email" />
      <input type="text" placeholder="Password" v-model="password" />
      <div v-if="error">
        {{ error }}
      </div>
      <div v-if="success" id="success">Logged in Successfully</div>
      <button type="button" @click="login()">Log In</button>
      <a href="#">Forgotten Password</a>
    </form>
    <hr />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
      success: false,
    };
  },
  methods: {
    async login() {
      const authData = { email: this.email, password: this.password };
      this.success = false;
      this.error = null;
      try {
        const res = await axios.post("http://localhost:3000/signin", authData);
        const auth = res.data;
        localStorage.setItem("auth", JSON.stringify(auth));
        this.$router.push('/')
        this.success = true;
      } catch (err) {
        this.error = err.message;
      }
    },
  },
};
</script>
<style lang="css" scoped>
.form-box input {
  width: 100%;
  margin-bottom: 15px;
  padding: 15px;
  font-size: 18px;
  box-sizing: border-box;
  border: 1px solid #eeebeb;
  border-radius: 5px;
  outline: none;
}

.form-box input:focus {
  box-shadow: 0px 0px 1px 1px rgb(22, 111, 229);
}
.form-box button {
  width: 100%;
  margin-bottom: 15px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  padding: 13px 0;
  cursor: pointer;
  background: #166fe5;
}

.form-box button:hover {
  background: #1877f2;
}

.form-box a {
  color: #166fe5;
  font-size: 14px;
  text-decoration: none;
  margin-top: 5px;
  margin-bottom: 20px;
  display: block;
}

.form-box a:hover {
  text-decoration: underline;
}

.form-box hr {
  border: 1px solid #dadde1;
  margin-bottom: 15px;
}
</style>
