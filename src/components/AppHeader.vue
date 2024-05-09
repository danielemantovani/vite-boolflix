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
    <div class="container, d-flex">
        <div class="justify-content-between">
            <h1>Boolflix</h1>
        </div>
        <div>
            <input type="text" v-model="store.searchQuery">
            <button @click = "$emit ('filter')">Cerca</button>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>