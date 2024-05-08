<script>

import axios from "axios"
import {store} from "./store.js"

import AppHeader from "./components/AppHeader.vue";
import SearchBar from "./components/SearchBar.vue";
import AppMain from "./components/AppMain.vue"

export default{
  components: {
    AppHeader,
    SearchBar,
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
            query: "ciao"
          },
        })
        .then((resp) =>{
          console.log(resp);
        });
    }
  }
}
</script>

<template>
  <AppHeader />
  <SearchBar 
  @filter="showMovie"
  />
  <AppMain 
  />
</template>

<style scoped lang="scss">

</style>