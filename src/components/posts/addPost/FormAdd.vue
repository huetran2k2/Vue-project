<template>
  <div class="write-post-container">
    <div class="user-profile">
      <!-- <img v-bind:src="this.auth.user.avatar" alt=""> -->
      <router-link to="/profile"> <img v-bind:src="this.auth.user.avatar" alt="">
      </router-link>
      <div>
        <p> {{ this.auth.user.lastName  }} {{  this.auth.user.firstName  }}</p>
        <small>Public <i class="fas fa-caret-down"></i></small>
      </div>
    </div>
    <div class="post-upload-textarea">
      <textarea name="" placeholder="What's on your mind?" id="" cols="30" rows="3"></textarea>
      <div class="add-post-links">
        <a href="#"><img src="images/live-video.png" alt="">Live Video</a>
        <button class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><a href="#"><img
              src="images/photo.png" alt="" data-bs-toggle="modal"
              data-bs-target="#exampleModal">Photo/Video</a></button>
        <a href="#"><img src="images/feeling.png" alt="">Feeling Activity</a>
      </div>
    </div>
  </div>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-add">
              <div class="content-post-add">
                <section class="post">
                  <header>Create Post</header>
                  <form action="#">
                    <div class="content">
                      <img src="@/assets/images/icons/logo.png" alt="logo" />
                      <div class="details">
                        <p>CodingNepal</p>
                        <div class="privacy">
                          <i class="fas fa-user-friends"></i>
                          <span @click="showAudience">Friends</span>
                          <i class="fas fa-caret-down"></i>
                        </div>
                      </div>
                    </div>
                    <textarea placeholder="What's on your mind?" v-model="form.content"></textarea>
                    <div class="theme-emoji">
                      <img src="@/assets/images/icons/theme.svg" alt="theme" />
                      <img src="@/assets/images/icons/smile.svg" alt="smile" />
                    </div>
                    <div class="options">
                      <p>Add to Your Post</p>
                      <ul class="list">
                        <li>
                          <input type="file" name="image" value="" @change="onFileChange" required class="button-add">
                        </li>
                        <li><img src="@/assets/images/icons/tag.svg" alt="gallery" /></li>
                        <li><img src="@/assets/images/icons/emoji.svg" alt="gallery" /></li>
                        <li><img src="@/assets/images/icons/mic.svg" alt="gallery" /></li>
                        <li><img src="@/assets/images/icons/more.svg" alt="gallery" /></li>
                      </ul>
                    </div>
                  </form>
                </section>
                <div v-if="isShowAudiences">
                  <Audience></Audience>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="addPost()">Post</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Audience from './Audience.vue';
import axios from 'axios';
export default {
  data() {
    return {
      name: "FormAdd",
      isShowAudiences: false,
      auth: JSON.parse(localStorage.getItem("auth")),
      form: {
        id: null,
        content: "",
        image: "",
        userId: "",
        createdAt: "",
        updatedAt: "",

      },
      url: "/profile",
      listPosts: [],
    }
  },
  components: {
    Audience
  },
  methods: {
    showAudience() {
      this.isShowAudiences = !this.isShowAudiences;
    },
    onFileChange(event) {
      // this.form.image = URL.createObjectURL(event.target.files[0]);
      // console.log(this.form.image);
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        this.form.image = reader.result;
      };
    },
    async addPost() {
      let date = new Date()
      this.form.createdAt = date.toDateString('en-US')
      this.form.updatedAt = date.toDateString('en-US')
      this.form.userId = this.auth.user.id
      const res = await axios.post("http://localhost:3000/posts", this.form);
      const post = await axios.get(`http://localhost:3000/posts/${res.data.id}?_expand=user&_embed=comments&_embed=emotions&_embed=shares`);
      this.$emit('update-list-post', post.data)

    }
  },
}
</script>

<style lang="css" scoped>
input.button-add {
  background-image: url(@/assets/images/icons/gallery.svg);
  background-repeat: no-repeat;
  background-position: 5px 1px;
  border: none;
  cursor: pointer;
  height: 22px;
  padding-left: 42px;
}

.modal-content {
  width: 550px;
  z-index: 9999 !important;
  left: 50%;
  transform: translateX(-50%);
}

.form-add {
  display: flex;
  justify-content: center;

}

.content-post-add {
  overflow-y: auto;
  max-height: 90vh;
  background-color: #fff;
  padding: 1rem;
  max-width: 500px;
  width: 100%;
  border-radius: 9px;
}

.post header {
  font-size: 22px;
  font-weight: 600;
  padding: 17px 0;
  text-align: center;
  border-bottom: 1px solid #bfbfbf;
}

.post form {
  margin: 20px 25px;
}

.post form .content,
.audience .list li .column {
  display: flex;
  align-items: center;
}

.post form .content img {
  cursor: default;
  max-width: 52px;
}

.post form .content .details {
  margin: -3px 0 0 12px;
}

form .content .details p {
  font-size: 17px;
  font-weight: 500;
}

.content .details .privacy {
  display: flex;
  height: 25px;
  cursor: pointer;
  padding: 0 10px;
  font-size: 11px;
  margin-top: 3px;
  border-radius: 5px;
  align-items: center;
  max-width: 98px;
  background: #e4e6eb;
  justify-content: space-between;
}

.details .privacy span {
  font-size: 13px;
  margin-top: 1px;
  font-weight: 500;
}

.details .privacy i:last-child {
  font-size: 13px;
  margin-left: 1px;
}

form :where(textarea, button) {
  width: 100%;
  outline: none;
  border: none;
}

form textarea {
  resize: none;
  font-size: 18px;
  margin-top: 30px;
  min-height: 100px;
}

form textarea::placeholder {
  color: #858585;
}

form textarea:focus::placeholder {
  color: #b3b3b3;
}

form :where(.theme-emoji, .options) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.theme-emoji img:last-child {
  max-width: 24px;
}

form .options {
  height: 57px;
  margin: 15px 0;
  padding: 0 15px;
  border-radius: 7px;
  border: 1px solid #b9b9b9;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

form .options :where(.list, li),
.audience :where(.arrow-back, .icon, li .radio) {
  display: flex;
  align-items: center;
  justify-content: center;
}

form .options p {
  color: #595959;
  font-size: 15px;
  font-weight: 500;
  cursor: default;
}

form .options .list {
  list-style: none;
}

.options .list li {
  height: 42px;
  width: 42px;
  margin: 0 -1px;
  cursor: pointer;
  border-radius: 50%;
}

.options .list li:hover {
  background: #f0f1f4;
}

.options .list li img {
  width: 23px;
}

.btn {
  border: none;
  outline: none;
}
</style>