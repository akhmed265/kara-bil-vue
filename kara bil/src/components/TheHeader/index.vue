<template>
  <header class="the-header">
    <div class="container">
      <div class="the-header__inner">
        <img src="../../assets/img/logo.svg" alt="" class="the-header__logo">

        <nav class="the-header__nav">
          <ul class="the-header__list">
            <li class="the-header__item the-header__item_purple">Главная</li>
            <li class="the-header__item">Стихи</li>
            <li class="the-header__item">Об Авторе</li>
            <li class="the-header__item">Каналы</li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="js">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheHeader'
})
</script>

<style lang="scss" scoped>
.the-header {
  background-color: var(--color-dark);

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }

  &__list {
    color: var(--color-white);
    display: flex;
    font-size: 18px;
  }

  &__item {
    cursor: pointer;

    &_purple {
      color: var(--color-purple);
    }
  }

  &__item:not(:last-child) {
    margin-right: 10px;
  }

}
</style>