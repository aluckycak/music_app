<template>
  <router-view />
</template>

<style lang="scss">
</style>
<script>
export default {
  mounted() {
    this.$router.push('/home')
  }
}
</script>
