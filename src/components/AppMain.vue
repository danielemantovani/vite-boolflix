<script>

import {store} from "../store.js"

import Card from './Card.vue';

export default {
    components:{
        Card,
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
        <section class="movies row">
            <div class="container col g-3 p-5" v-for="film in store.moviesArray"> 
                <Card :cardObj="film" />
            </div>
        </section>
        <section class="tv-series row">
            <div class="container col g-3 p-5" v-for="tv in store.tvArray">
                <Card :cardObj ="tv"/>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">

</style> 

