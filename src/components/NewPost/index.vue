<template>
  <div class="new-post">
    <button
        class="create-post"
        @click="showDialog"
    >
      Создать пост
    </button>

    <my-dialog :show="dialogVisible" @close="dialogVisible = false">
      <form @submit.prevent>
        <input
            v-model.lazy="formModel.title"
            type="text"
            class="new-post__input"
            placeholder="Название"
        >

        <textarea
            v-model.lazy="formModel.body"
            class="new-post__input new-post__input_textarea"
            placeholder="Текст"
        />

        <button class="new-post__button" @click="handleCreateBtnClick">
          Создать
        </button>
      </form>
    </my-dialog>

  </div>
</template>

<script lang="ts">
import {defineComponent, ref, reactive} from 'vue';

import MyDialog from "../../components/MyDialog/index.vue";

export default defineComponent({
  name: 'NewPost',

  components: {
    MyDialog
  },

  emits: ['create'],

  setup(props, context) {
    const dialogVisible = ref(false)
    const formModel = reactive({
      title: '',
      body: ''
    })

    const handleCreateBtnClick = () => {
      if (Object.values(formModel).every(Boolean)) {
        const newPost = {
          title: formModel.title,
          body: formModel.body
        }
        context.emit('create', newPost)

        dialogVisible.value = false
        formModel.title = ''
        formModel.body = ''
      }
    }

    const showDialog = () => {
      dialogVisible.value = true
    }

    return {
      formModel,
      dialogVisible,
      handleCreateBtnClick,
      showDialog
    }
  }
})
</script>

<style lang="scss" scoped>
.new-post {
  color: #fff;
  margin-bottom: 20px;
  padding-left: 45px;

  &__button {
    background-color: var(--color-dark);
    color: var(--color-white);
    box-shadow: none;
    border: none;
    border-radius: 5px;
    padding: 10px 30px;
    margin-top: 20px;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      scale: 0.9;
    }
  }

  &__input {
    width: 100%;
    height: 35px;
    padding-left: 20px;
    outline: none;
    border-radius: 3px;
    border: 2px solid var(--color-dark);

    &_textarea {
      height: 90px;
      padding-top: 10px;
      max-width: 708px;

      @media (max-width: 540px) {
        max-width: 314px;
      }
    }

    &:first-child {
      margin-bottom: 10px;
    }
  }

  .create-post {
    background-color: var(--color-white);
    box-shadow: none;
    border: none;
    border-radius: 5px;
    padding: 10px 30px;
    margin-top: 20px;
    transition: all 0.3s ease-in-out;
    outline: none;

    &:hover {
      opacity: 0.7;
    }

    &:active {
      scale: 0.8;

      @media (max-width: 540px) {
        &:active {
          scale: 0.9;
        }
      }
    }

    @media (max-width: 540px) {
      padding: 7px 10px;
    }
  }

  @media (max-width: 540px) {
    padding-left: 45px;
  }
}
</style>