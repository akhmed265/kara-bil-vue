<template>
  <div class="poem">
    <div class="container">
      <new-post @create="handleCreatePost"/>

      <ul class="poem__list">
        <li
            v-for="post in posts"
            class="poem__item"
            @click="handlePostClick(post)"
        >
          <img src="../../assets/img/kara-1.jpg" alt="" class="poem__image">
          <h3 class="poem__name">{{ post.title }}</h3>
        </li>
      </ul>

      <my-dialog :show="dialogVisible" @close="dialogVisible = false">
        <h2>{{ selectedPost.title }}</h2>
        <div style="overflow-x: auto">
          <pre>{{ selectedPost.body }}</pre>
        </div>
      </my-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref} from "vue";

import NewPost from "../../components/NewPost/index.vue";
import MyDialog from "../../components/MyDialog/index.vue";

export default defineComponent({
  name: 'PoemList',

  components: {
    NewPost,
    MyDialog
  },

  setup() {
    const posts = ref(JSON.parse(localStorage.getItem('posts')) || [])

    const dialogVisible = ref(false)
    const selectedPost = reactive({
      title: '',
      body: ''
    })

    const handlePostClick = (post) => {
      selectedPost.title = post.title
      selectedPost.body = post.body

      dialogVisible.value = true
    }

    const handleCreatePost = (post) => {
      posts.value.push(post)

      localStorage.setItem('posts', JSON.stringify(posts.value))
    }

    return {
      posts,
      dialogVisible,
      handlePostClick,
      selectedPost,
      handleCreatePost
    }
  }
})
</script>

<style lang="scss" scoped>
.poem {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, max(310px));
    grid-gap: 30px;
    justify-content: center;
    transition: all 0.3s ease-in-out;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, max(290px));
    }

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, max(350px));
    }

    @media (max-width: 750px) {
      grid-template-columns: repeat(2, max(250px));
      grid-gap: 15px 15px;
    }

    @media (max-width: 540px) {
      grid-template-columns: max(300px);
      grid-gap: 30px;
    }
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.3);
      transition: all 0.3s linear;
    }

    &:hover::after {
      background-color: rgba(0, 0, 0, 0);
    }

    &:hover::after {
      .poem__name {
      }
    }

    &:hover {
      .poem__name {
        text-shadow: var(--color-dark) 1px 0 10px;
      }
    }
  }

  &__image {
    max-width: 100%;
  }

  &__name {
    position: absolute;
    z-index: 2;
    color: var(--color-white);
    transition: all 0.3s linear;
    padding: 0 15px;
    text-align: center;
  }
}
</style>
