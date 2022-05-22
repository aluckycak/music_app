<template>
  <div class="home">
    <MusicList />
  </div>
</template>

<script>
// @ is an alias to /src
import MusicList from '../Home/musicList.vue'

export default {
  name: 'Home',
  components: {
    MusicList
  }
}
</script>
