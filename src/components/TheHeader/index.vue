<template>
  <header class="the-header">
    <div class="container">
      <div class="the-header__inner">
        <router-link to="/">
          <img src="../../assets/img/logo.svg" alt="" class="the-header__logo">
        </router-link>

        <nav class="the-header__nav">
          <button
              type="button"
              class="hamburger"
              @click="isShowMenu = !isShowMenu"
          />

          <ul
              v-if="isShowMenu"
              class="the-header__list"
          >
            <li class="the-header__item">
              <router-link
                to="/"
                class="the-header__link"
              >
                Главная
              </router-link>
            </li>

            <li class="the-header__item">
              <router-link
                to="/about"
                class="the-header__link"
              >
                Об Авторе
              </router-link>
            </li>

            <li class="the-header__item">
              <router-link
                to="/social"
                class="the-header__link"
              >
                Каналы
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TheHeader',

  setup() {
    const isShowMenu = ref(false)

    return {
      isShowMenu
    }
  }
})
</script>

<style lang="scss" scoped>
.the-header {
  background-color: var(--color-dark);
  border-bottom: 2px solid var(--color-purple);
  padding: 0 30px;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;

    @media (max-width: 540px) {
      padding: 7px 0 0 0;
    }
  }

  &__logo {
    transition: all 0.3s ease-in-out;

    @media (max-width: 912px) {
      width: 200px;
    }

    @media (max-width: 540px) {
      width: 150px;
    }
  }

  &__nav {
    position: relative;

    .bar {
      @media (max-width: 800px) {
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--color-white);
        width: 20px;
        height: 1px;
        transition: all 0.3s ease-in-out;
      }
    }

    .top-bar {
      @media (max-width: 800px) {
        top: -5px;
        right: 0;
      }
    }

    .btm-bar {
      @media (max-width: 800px) {
        top: 5px;
        right: 0;
      }
    }
  }

  &__list {
    font-size: 18px;
    z-index: 10;
    position: absolute;
    top: 60px;
    right: 0;
    width: 150px;
    background-color: var(--color-white);
    padding-left: 10px;

    @media (max-width: 540px) {
      top: 37px;
    }
  }

  &__item {
    padding-top: 10px;

    &:last-child {
      padding-bottom: 10px;
    }
  }

  &__link {
    text-decoration: none;
    color: var(--color-dark);
  }

  @media (max-width: 540px) {
    height: 50px;
  }
}

.hamburger {
  display: block;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: 0;
  padding: 0;
  background-image: url('../../assets/hamburger.svg');
  background-repeat: no-repeat;
  background-position: center;
}
</style>