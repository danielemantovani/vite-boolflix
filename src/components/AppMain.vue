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
    }
}
</script>

<template>
    <section>
        <h2>Film</h2>
        <div class="container" v-for="film in store.moviesArray"> 
            <Card :cardObj="film" />
        </div>
    </section>
    <section>
        <h2>Serie TV</h2>
        <div v-for="tv in store.tvArray">
            <Card :cardObj ="tv"/>
        </div>
    </section>
</template>

<style scoped lang="scss"></style> 

