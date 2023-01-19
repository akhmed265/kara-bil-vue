<template>
  <footer class="the-footer">
    <div class="container">
      <div class="the-footer__inner">
        <img src="../../assets/img/cooperation.svg" alt="" class="the-footer__cooperating">
        <img src="../../assets/img/telegram.svg" alt="" class="the-footer__telegram">
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
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--color-dark);
  min-height: 67px;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    height: 100%;
  }


}
</style>