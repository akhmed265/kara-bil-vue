<template>
  <div class="new-post">
    <!-- <button 
      class="new-post__button"
      type="button"
      >
        New Post
    </button> -->

    <form 
      @submit.prevent
      action=""
    >
      <input 
        v-bind:value="title"
        @input = "title = $event.target.value"
        type="text" 
        class="new-post__input"
        placeholder="Название"  
      >
      <input 
        v-bind:value="body"
        @input = "body = $event.target.value"
        type="text" 
        class="new-post__input"
        placeholder="Текст"  
      >

      <button class="new-post__button">
        Создать
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NewPost',

  data() {
    return {
    title: '',
    body: ''
    }
  },

  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }

      this.posts.push(newPost);
      this.title = '';
      this.body = '';
    }
  }
})
</script>

<style lang="scss" scoped>
.new-post {
  &__button {
    background-color: transparent;
    color: var(--color-white);
    box-shadow: none;
    border: 3px solid var(--color-white);
    border-radius: 10px;
    padding: 20px 50px;
    margin-bottom: 30px;
    margin-top: 20px;

    &:hover {
      animation: pulsate 1s ease-in-out;
    }
  }

  @keyframes pulsate {
    0%  {
      box-shadow: 
        0 0 15px var(--color-white);
    }
  }

  &__input {
    width: 100%;
    height: 35px;
    padding-left: 20px;
    outline: none;
    border: 3px solid var(--color-purple);
    
    &:first-child {
      margin-bottom: 10px;
    }
  }
}
</style>