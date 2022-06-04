<template>
  <router-view />
  <footerMusicVue />
</template>

<style lang="scss">
</style>
<script>
import footerMusicVue from './components/footerMusic.vue'
export default {
  mounted() {
    this.$router.push('/home')
  },
  components: {
    footerMusicVue
  }
}
</script>
