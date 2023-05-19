<template>
  <footer class="the-footer">
    <div class="container">
      <div class="the-footer__inner">
        <img src="../../assets/img/cooperation.svg" alt="" class="the-footer__cooperating">

        <a
          href="#"
          class="the-footer__link"
        >
          <img src="../../assets/img/telegram.svg" alt="" class="the-footer__telegram">
        </a>

      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'TheFooter'
})
</script>

<style lang="scss" scoped>
.the-footer {
  background-color: var(--color-dark);
  min-height: 67px;
  border-top: 2px solid var(--color-purple);

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    height: 100%;
  }

  &__button {
    background-color: transparent;
    border: 2px solid var(--color-white);
    border-radius: 50%;
    padding: 5px;
  }

  &__plus {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
