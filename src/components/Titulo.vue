<template>
    <button class="botonTitulo" @click="goHome">
        <h1 class="titulo">Costify</h1>
    </button>
</template>

<style>
    .titulo{
        color: var(--primario-10);
        font-size: 2.5rem;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .botonTitulo{
        background-color: transparent;
        border: none;
        cursor: pointer;
        width: 100%;
    }
</style>
<script>
export default {
    name: 'Titulo',
    methods:{
        goHome() {this.$router.push("/")},

    }
}
</script>