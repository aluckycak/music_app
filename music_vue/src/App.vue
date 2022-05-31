<template>
  <router-view />
  <footerMusicVue />
</template>

<style lang="scss">
</style>
<script>
import { computed } from '@vue/runtime-core'
import footerMusicVue from './views/footerMusic.vue'
export default {
  mounted() {
    this.$router.push('/home')
  },
  components: {
    footerMusicVue
  }
}
</script>
