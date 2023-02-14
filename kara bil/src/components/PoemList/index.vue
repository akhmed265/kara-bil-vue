<template>
  <div class="poem">
    <div class="container">
      <ul class="poem__list">
        <li href="" class="poem__item" v-for="poem in 9"
            :key="poem">
          <img src="../../assets/img/kara-1.jpg" alt="" class="poem__image">
          <h3 class="poem__name">Здесь</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'PoemList'
})
</script>

<style lang="scss" scoped>
.poem {
  margin-top: 30px;
  margin-bottom: 30px;

  .container {
    padding-left: 120px;
    padding-right: 120px;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, max(310px));
    grid-gap: 30px;
    justify-content: center;
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
        text-shadow: var(--color-dark) 1px 0 10px;      }
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
  }
}
</style>