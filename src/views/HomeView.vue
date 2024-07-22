<template>
    <div class="homeView">
        <header class="homeView__header">
            <button class="homeView__header__botonHistorial">
                <img src="../assets/historial.png" alt="imagen historial gastos">
            </button>
            <Titulo class="homeView__header__titulo" />
        </header>
        <DatosGenerales :saldo="999" :presupuesto="999" :moneda="'COP'" />
        <ul class="homeView__categorias">
            <li class="homeView__categorias__item" v-for="(value, key) in items">
                <CategoriaPreview
                    :categoria="key"
                    :presupuesto="value"
                    :moneda="'COP'"
                />
            </li>
        </ul>
        <div class="homeView__botones">
            <Boton class="botonPrimario" :texto="'Registrar Gasto'" />
            <Boton class="botonSecundario" :texto="'Agregar categoría'" />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Titulo from "@/components/Titulo.vue";
import DatosGenerales from "@/components/DatosGenerales.vue";
import CategoriaPreview from "@/components/CategoriaPreview.vue";
import Boton from "@/components/Boton.vue";
export default {
    name: "HomeView",
    components: {
        Titulo,
        DatosGenerales,
        CategoriaPreview,
        Boton,
    },
    data() {
        return {
            items: {
                Comida: 120,
                Transporte: 999,
                Entretenimiento: 999,
                Salud: 999,
                Educación: 999,
                Otros: 999,
            },
        };
    },
};
</script>

<style>
.homeView{
    gap: 2rem;
    height: 100vh;
}
.homeView__header {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
.homeView__header__botonHistorial {
    justify-self: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    grid-column: 1;
}
.homeView__header__titulo {
    justify-self: center;
    grid-column: 2;
}
.homeView__categorias {
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 100%;
    text-align: center;
    gap: 1.5rem;
    height: 50vh;
    overflow-y: auto;
    scrollbar-width: none;
}
.homeView__categorias__item {
    display: flex;
    list-style: none;
    width: 100%;
    text-align: center;
    justify-content: center;
}
.homeView {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}
.homeView__botones {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1rem;
}

@media screen and (max-width: 768px) {
    .homeView__header__botonHistorial {
        justify-self:left;
    }
}

</style>
