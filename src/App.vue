<template>
  <div class="wrapper">
    <the-header/>

    <div class="page-content">
      <router-view/>
    </div>

    <the-footer/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

import TheHeader from "./components/TheHeader/index.vue";
import TheFooter from "./components/TheFooter/index.vue";

export default defineComponent({
  name: 'App',

  components: {
    TheHeader,
    TheFooter
  }
})
</script>

<style lang="scss" scoped>
.page-content {
  min-height: calc(100vh - 139px);
}
</style>
