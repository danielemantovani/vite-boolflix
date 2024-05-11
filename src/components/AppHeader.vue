<script>

import { store } from "../store.js";

export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-black">
            <div class="container">
                <a class="navbar-brand fs-1 text-danger" href="#">Boolflix</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Serie TV</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" aria-disabled="true">Film</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" aria-disabled="true">Originali</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" aria-disabled="true">Aggiunti di recente</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" aria-disabled="true">La mia lista</a>
                        </li>
                    </ul>
                    <div class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Cosa vuoi guardare?" aria-label="Search" v-model="store.searchQuery" @keyup.enter="$emit('filter')" >
                        <button class="btn btn-outline-danger" type="submit" @click="$emit('filter')">Cerca</button>
                    </div>
                </div>
            </div>
        </nav>
</template>

<style scoped lang="scss"></style>