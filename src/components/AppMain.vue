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
    <div class="bg-dark mt-5">
        <section class="movies row">
            <div class="container col g-3 p-5" v-for="film in store.moviesArray"> 
                <AppCard :cardObj="film" />
            </div>
        </section>
        <section class="tv-series row">
            <div class="container col g-3 p-5" v-for="tv in store.tvArray">
                <AppCard :cardObj ="tv"/>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">

</style> 

