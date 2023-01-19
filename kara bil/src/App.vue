<template>
  <div class="wrapper">
    <the-header />

    <div class="page-content">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheHeader from "./components/TheHeader/index.vue";
export default defineComponent({
  name: 'App',

    components: {
      TheHeader
    }
})
</script>

<style lang="scss" scoped>

</style>