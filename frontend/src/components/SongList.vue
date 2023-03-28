<template>
<div class="organization">
  <div style="display: flex; gap: 10px;">
    <input class="search" type="text" placeholder="Pesquise sua musica">
    <button class="btn">Search</button>
  </div>
  <div class="songList">
    <div class="songList__wrapper">
      <template v-if="songs.length !== 0">
        <SongCard v-for="song of songs" :key="song.id" :song="song" />
      </template>
      <template v-else>
        <SongCardSkeleton v-for="i of 6" :key="i" />
      </template>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Song } from 'interfaces/Song'
import SongCard from 'components/SongCard.vue'
import SongCardSkeleton from './SongCardSkeleton.vue'

defineProps({
  songs: {
    type: Object as PropType<Song[]>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.organization{
  width: 50%;

}
.songList {
  gap: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 3rem;
  padding-bottom: 3rem;
  flex-direction: column;
  /* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #FF784E #DFE9EB;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 10px;
  width: 10px;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #DFE9EB;
}

*::-webkit-scrollbar-track:hover {
  background-color: #B8C0C2;
}

*::-webkit-scrollbar-track:active {
  background-color: #B8C0C2;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #FF784E;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #FB5900;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #ae3d00;
}


  @media screen and (max-width: 1200px) {
    display: none;
  }

  &__wrapper {
    padding-left: 2rem;
    padding-right: 2rem;
    overflow: hidden auto;
  }
}
.search{
  width: 80%;
  border-radius: 5px; 
}
.btn, .search{
  display: inline-block;
  background: transparent;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  font-size: 0.625rem;
  letter-spacing: 0.3em;
  color: rgba(223,190,106,0.7);
  transition: all 0.7s ease-out;
  padding: 18px 10px 20px;
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  margin: 0.625rem;
  border: none;
  border: 1px solid rgba(223,190,106,0.3);
}

.btn, .search:hover {
  color: #fff;
  border: 0.5px solid variables.$color-shadow-orange;
  background-position: 99% 50%;
}
input:focus{
 outline: none;
}
</style>
