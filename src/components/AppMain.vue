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
    <div class="container" v-for="film in store.moviesArray">
        <Card :cardObj="film" />
    </div>
</template>

<style scoped lang="scss"></style> 

