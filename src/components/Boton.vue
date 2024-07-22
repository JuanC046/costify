<template>
    <button class="boton">
        {{ texto }}
    </button>
</template>
<style>
.boton{
    border-radius: 1.5rem;
    padding: 0.5rem 1rem;
    font-size: 2rem;
    cursor: pointer;
}
</style>
<script>
export default {
    name: 'Boton',
    props: {
        texto: String
    }
}
</script>