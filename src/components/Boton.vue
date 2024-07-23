<template>
    <button class="boton">
        {{ texto }}
    </button>
</template>
<style>
.boton{
    border-radius: 24px;
    padding: 8px 16px;
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