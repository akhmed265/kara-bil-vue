<template>
  <div class="new-post">
    <button 
      class="create-post"
      @click="showDialog"
    >
      Создать пост
    </button>
    <my-dialog :show="false">
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

        <input
          v-on="formModel.file"
          type="file"
          class="new-post__input"
        >

        <button class="new-post__button" @click="handleCreateBtnClick">
          Создать
        </button>
      </form>
    </my-dialog>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

import MyDialog from "../../components/MyDialog/index.vue";


export default defineComponent({
  name: 'NewPost',

  components: {
    MyDialog
  },

  emits: ['create'],

  setup(props, context) {
    const formModel = reactive({
      title: '',
      body: '',
      file: ''
    })

    const handleCreateBtnClick = () => {
      context.emit('create', formModel)
    }

    return {
      formModel,
      handleCreateBtnClick,
      dialogVisible: false
    }
  },

  methods: {
    showDialog() {
      this.dialogVisible = true;
    }
  }
})
</script>

<style lang="scss" scoped>
.new-post {
  color: #fff;

  &__button {
    background-color: transparent;
    color: var(--color-purple);
    box-shadow: none;
    border: 3px solid var(--color-purple);
    border-radius: 10px;
    padding: 20px 50px;
    margin-top: 20px;
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

  .create-post {
    background-color: #f0f0f3;
    color: var(--color-dark);
  }
}
</style>