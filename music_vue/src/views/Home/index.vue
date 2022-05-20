<template>
  <div class="home">
    <MusicListView />
  </div>
</template>

<script>
// @ is an alias to /src
import MusicListView from '../Home/musicListView.vue'

export default {
  name: 'Home',
  components: {
    MusicListView
  }
}
</script>
