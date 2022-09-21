<template>
  <Header></Header>
  <div class="container-fluid">
    <Content></Content>
    <div class="content-area">
      <Story></Story>
      <Post></Post>
    </div>
    <Right></Right>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from './header/Header.vue';
import Content from './left/Content.vue';
import Story from './story/Story.vue';
import Right from './right/Right.vue';
import Post from './posts/Post.vue';
import Footer from './footer/Footer.vue';

export default {
components: { Header, Content, Story, Right, Post, Footer }
}
</script>

<style lang="scss" scoped>
</style>