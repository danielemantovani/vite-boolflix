<script>

import {store} from "../store.js"
import AppCard from "./AppCard.vue";


export default {
    components:{
        AppCard,
    },
    data() {
        return {
            store,
        }
    },
    methods:{
    }
}
</script>

<template>
    <div class="bg-dark">
        <h2 class="text-white text-center mt-5 p-5 fs-1">FILM</h2>
        <section class="movies row">
            <div class="container col-4 g-3 p-5" v-for="film in store.moviesArray"> 
                <AppCard :cardObj="film" />
            </div>
        </section>
        <h2 class="text-white text-center p-5 fs-1" >SERIE TV</h2>
        <section class="tv-series row">
            <div class="container col g-3 p-5" v-for="tv in store.tvArray">
                <AppCard :cardObj ="tv"/>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">

</style> 

