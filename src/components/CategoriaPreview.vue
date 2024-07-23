<template>
    <div class="categoriaPreview">
        <h3 class="categoriaPreview__nombre">{{ categoria }}</h3>
        <h2 class="categoriaPreview__presupuesto">
            {{ moneda }} {{ presupuesto }}
        </h2>
    </div>
</template>
<script>
export default {
    name: "CategoriaPreview",
    props: {
        categoria: String,
        presupuesto: Number,
        moneda: String,
    },
};
</script>
<style>
.categoriaPreview {
    display: flex;
    flex-direction: column;
    padding: 8px;
    text-align: left;
    background-color: var(--color-primario-90);
    border-radius: 16px;
    width: 70%;
    border: 1px solid var(--color-primario-10);
}

.categoriaPreview__nombre {
    color: var(--color-black);
    font-size: 1rem;
}

.categoriaPreview__presupuesto {
    color: var(--color-black);
    font-size: 1.5rem;
}
@media screen and (max-width: 768px) {
    .categoriaPreview {
        width: 100%;
    }
    
}
</style>
