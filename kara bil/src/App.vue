<template>
  <div class="wrapper">
    <the-header />

    <div class="page-content">
      <poem-list />
    </div>

    <the-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheHeader from "./components/TheHeader/index.vue";
import TheFooter from "./components/TheFooter/index.vue";
import PoemList from "./components/PoemList/index.vue";

export default defineComponent({
  name: 'App',

    components: {
      TheHeader,
      TheFooter,
      PoemList
    }
})
</script>

<style lang="scss" scoped>
.page-content {
  margin-left: auto;
  margin-right: auto;
}
</style>