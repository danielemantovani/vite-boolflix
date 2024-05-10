<script>

import {store} from "../store.js";

export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="d-flex justify-content-between p-2">
            <div>
                <h1>Boolflix</h1>
            </div>
            <div class="align-self-center">
                <input type="text" aria-label="Ricerca" v-model="store.searchQuery" @keyup.enter= "$emit ('filter')"> 
                <button @click = "$emit ('filter')">Cerca</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>