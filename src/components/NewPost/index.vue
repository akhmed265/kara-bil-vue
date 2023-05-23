<template>
  <div class="new-post">
    <form @submit.prevent>
      <input
        v-model="formModel.title"
        type="text"
        class="new-post__input"
        placeholder="Название"
      >
      <input
        v-model="formModel.body"
        type="text" 
        class="new-post__input"
        placeholder="Текст"  
      >

      <button class="new-post__button" @click="handleCreateBtnClick">
        Создать
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'NewPost',

  emits: ['create'],

  setup(props, context) {
    const formModel = reactive({
      title: '',
      body: ''
    })

    const handleCreateBtnClick = () => {
      context.emit('create', formModel)
    }

    return {
      formModel,
      handleCreateBtnClick
    }
  }
})
</script>

<style lang="scss" scoped>
.new-post {
  color: #fff;

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