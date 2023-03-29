<template>
<div class="organization">
  <div style="display: flex; gap: 10px;">
    <input
      class="search"
      type="text"
      placeholder="Pesquise sua musica"
      v-model="search"
      >
    <button class="btn">Search</button>
  </div>
  <div class="songList">
    <div class="songList__wrapper">
      <template v-if="songs_local.length !== 0 && !pesquisando">
        <SongCard v-for="song of songs_local" :key="song.id" :song="song" />
      </template>
      <template v-else-if="songs_local.length">
        <SongCardSkeleton v-for="i of 6" :key="i" />
      </template>
      <template v-if="songs_local.length !== 0 && pesquisando">
        <SongCard v-for="song of arrayDeeze" :key="song.id" :song="song" />
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
    type: Array as PropType<Song[]>,
    required: true
  }
})
</script>
<script lang="ts">
import { defineComponent } from 'vue'
import { Song } from 'interfaces/Song'
import adele from '../assets/json_search_adele.json'
import eminem from '../assets/json_searc_eminem.json'
import rihanna from '../assets/json_search_rihanna.json'
/*
*
*
* export interface Song {
  id: string
  artista: string
  nombre: string
  portada: string
  url: string
  order: number
}
*
* */
export default defineComponent({
  data() {
    return {
      search: '',
      pesquisando: false,
      arrayDeeze: [] as Array<Song>,
      adeleSongs: adele.data,
      eminemSongs: eminem.data,
      rihannaSongs: rihanna.data,
      songs_local: [] as Array<Song>
    }
  },
  methods: {
    getList(){
      let list: any[] =[];
      list = list.concat(this.adeleSongs).concat(this.eminemSongs).concat(this.rihannaSongs)
      list =  list.map(item => ({
        id: item.id,
        artista: item.artist.name,
        nombre: item.title,
        portada: item.album.cover_big,
        url: item.preview,
        order: item.rank
      } as Song))
      return list;
    }
  },
  watch: {
    songs(v){
      if(v.length){
        this.songs_local = v.concat(this.getList())
      }
    },
    search(v){
      if(v.length){
        this.pesquisando = true;
      } else {
        this.pesquisando = false;
      }
    }
  }

})
</script>

<style lang="scss" scoped>
.organization{
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
