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
                <!-- usiamo emit per comunicare al padre che in questo caso è AppVue che è successo qualcosa, in questo caso gli stiamo comunicando quando viene premuto il tasto in enter o il bottone per avviare la ricerca -->
                <input type="text" v-model="store.searchQuery" @keyup.enter= "$emit ('filter')"> 
                <button @click = "$emit ('filter')">Cerca</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>