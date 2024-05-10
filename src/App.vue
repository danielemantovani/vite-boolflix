<script>

import axios from "axios"
import { store } from "./store.js"

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppHeader,
    AppMain,

  },
  data() {
    return {
      store,
    }
  },

  methods: {
  
    // getData(){

    //   this.isLoading = true

    //   const params = {
    //     api_key: this.store.apiKey, 
    //     query: this.store.searchQuery
    //   }

    //   const showMovie = axios.get ("https://api.themoviedb.org/3/search/movie",{
    //     params,
    //   });
    //   const showTv = axios.get ("https://api.themoviedb.org/3/search/tv",{
    //     params,
    //   });

    //   axios.all ([showMovie, showTv]). then ((resp) => {
    //     this.store.moviesArray = resp[0].data.results;
    //     this.store.tvArray = resp[1].data.results;
    //   })
    //   //finally sarà eseguito quando arriveranno tutte due le riposte
    //   .finally (()=>{
    //     this.isLoading = false
    //   });
    // },

    getMovie() {
      this.showMovie(),
      this.showTv()
    },

    //funzione per fare chiamata api per la categoria film
    showMovie() {
      console.log("click");
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: this.store.apiKey, //chiave personale api importata dallo store 
            query: this.store.searchQuery, //come da documentazione dell'api che stiamo utilizzando query è la parola chiave per filtrare i titoli dei film, quindi quando andremo a digitare qualcosa nell'input del component AppHeader ci usciranno i risultati inerenti alla parola cercata
          }
        })
        .then((resp) => {
          // console.log(resp);
          this.store.moviesArray = resp.data.results; //inseriamo nell'array vuoto nello store la risposta che ci da la chiamata api contenente l'elenco di tutti i film presenti
          console.log(this.store.moviesArray);
        });
    },

    showTv() {
      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: this.store.apiKey,
            query: this.store.searchQuery,
          }
        })
        .then((resp) => {
          this.store.tvArray = resp.data.results;
          console.log(this.store.tvArray);
        });
    },
  }
}
</script>

<template>
  <!-- gli passiamo la parola all'interno delle parentesi nell'emit (in AppHeader) per far recepire al genitore che ciò che succede al figlio  -->
  <AppHeader @filter="getMovie" />
  <AppMain />

</template>

<style scoped lang="scss"></style>