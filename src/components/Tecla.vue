<template>
    <button class="tecla">{{ texto }}</button>
</template>
<script>
export default {
    name: "Tecla",
    props: {
        texto: {
            type: String,
            required: true,
        },
    },
};
</script>
<style>
.tecla {
    background-color: var(--color-white);
    color: var(--color-black);
    font-size: 4rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: auto;
    border-radius: 8px;
    border: 1px solid var(--color-primario-30);
}
</style>
