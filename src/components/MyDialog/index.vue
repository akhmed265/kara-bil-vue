<template>
  <Teleport to="body">
    <div
        v-if="show"
        ref="target"
        class="dialog"
    >
      <div
          class="dialog__shadow"
          @click="hideDialog"
      />
      <div class="dialog__content">
        <slot/>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted  } from 'vue';

export default defineComponent({
  name: 'MyDialog',

  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  emits: ['close'],

  setup(props, ctx) {
    const hideDialog = () => {
      console.log(1111)
      ctx.emit('close', false)
    }

    onMounted(() => {
      window.addEventListener('keyup', (event) => {
        if (event.key === 'Escape') {
          ctx.emit('close', false)
        }
      })
    })

    return {
      hideDialog
    }
  }
})
</script>

<style lang="scss" scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  display: flex;
  z-index: 3;

  &__shadow {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: rgb(0 0 0 / 60%);
  }

  &__content {
    position: relative;
    z-index: 1000;
    margin: auto;
    max-width: 768px;
    background-color: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 30px;

    @media (max-width: 575px) {
      max-width: calc(100% - 40px);
    }
  }
}
</style>