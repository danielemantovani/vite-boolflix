<script>

import axios from "axios"
import {store} from "./store.js"

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default{
  components: {
    AppHeader,
    AppMain,

  },
  data(){
    return{
      store,
    }
  },
  created () {

  },
  methods:{
    showMovie(){
      console.log("click");
      axios
        .get ("https://api.themoviedb.org/3/search/movie",{
          params: {
            api_key: this.store.apiKey,
            query: this.store.searchQuery,
          },
        })
        .then((resp) =>{
          // console.log(resp);
          this.store.moviesArray = resp.data.results;
          console.log(this.store.moviesArray);
        });
    }
  }
}
</script>

<template>
  <AppHeader 
    @filter="showMovie"
  />
  <AppMain 
  />

</template>

<style scoped lang="scss">

</style>