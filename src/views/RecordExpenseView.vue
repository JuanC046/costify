<template>
    <div class="recordExpenseView">
        <header class="recordExpenseView__header">
            <button class="recordExpenseView__header__boton">
                <img src="../assets/x.png" alt="cancelar" />
            </button>
            <Titulo />
            <button class="recordExpenseView__header__boton">
                <img src="../assets/check.png" alt="confirmar" />
            </button>
        </header>
        <main class="recordExpenseView__main">
            <div class="recordExpenseView__main__pantalla">
                <p>{{ operacion }}</p>
                <form
                    action=""
                    class="pantalla__datos"
                >
                    <div class="pantalla__datos__item item__izquierdo">
                        <label for="fecha">Fecha</label>
                        <input type="date" name="fecha" id="fecha"/>
                    </div>
                    <div class="pantalla__datos__item item__derecho">
                        <label for="categoria">Categoría</label>
                        <select name="categoria" id="categoria">
                            <option
                                v-for="(value, key) in categorias"
                                :value="value"
                            >
                                {{ value }}
                            </option>
                        </select>
                    </div>
                </form>
            </div>
            <div class="recordExpenseView__main__teclado">
                <div class="teclado__fila">
                    <Tecla texto="1" />
                    <Tecla texto="2" />
                    <Tecla texto="3" />
                </div>
                <div class="teclado__fila">
                    <Tecla texto="4" />
                    <Tecla texto="5" />
                    <Tecla texto="6" />
                </div>
                <div class="teclado__fila">
                    <Tecla texto="7" />
                    <Tecla texto="8" />
                    <Tecla texto="9" />
                </div>
                <div class="teclado__fila">
                    <Tecla texto="." />
                    <Tecla texto="0" />
                    <Tecla texto="=" />
                </div>
                <div class="teclado__fila">
                    <Tecla texto="DEL" />
                    <Tecla texto="AC" />
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import Titulo from "@/components/Titulo.vue";
import Tecla from "@/components/Tecla.vue";

export default {
    name: "RecordExpenseView",
    components: {
        Titulo,
        Tecla,
    },
    data() {
        return {
            operacion: "",
            categorias: [
                "Comida",
                "Transporte",
                "Entretenimiento",
                "Salud",
                "Educación",
                "Otros",
            ],
        };
    },
    methods: {
        agregarTecla(tecla) {
            if (tecla === "AC") {
                this.operacion = "";
            } else if (tecla === "DEL") {
                this.operacion = this.operacion.slice(0, -1);
            } else if (tecla === "=") {
                this.operacion = eval(this.operacion);
            } else {
                this.operacion += tecla;
            }
        },
    },
};
</script>
<style>
.recordExpenseView {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
}
.recordExpenseView__header {
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    /* padding-left: 2rem;
    padding-right: 2rem; */
}
.recordExpenseView__header__boton {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.recordExpenseView__main {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    padding: 1%;
}
.recordExpenseView__main__pantalla {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-primario-90);
    border-radius: 8px;
    border: 1px solid var(--color-primario-30);
}
.pantalla__datos {
    display: flex;
    height: auto;
    width: 100%;
    justify-content: center;
    text-align: center;
}
.pantalla__datos__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 4px;
    padding: 8px 16px;
    width: 50%;
    border: 1px solid var(--color-primario-30);
}
.item__izquierdo {
    border-radius: 0 0 0 8px;
}
.item__derecho {
    border-radius: 0 0 8px 0;
}
.pantalla__datos__item label {
    color: var(--color-primario-10);
    font-size: 1rem;
}
.pantalla__datos__item input { 
    width: 100%;
    padding: 8px;
    border: 1px solid var(--color-primario-30);
    border-radius: 8px;
    color: var(--color-primario-10);
    background-color: var(--color-primario-90);
}
.pantalla__datos__item select {
    width: 100%;
    padding: 8px;
    border: 1px solid var(--color-primario-30);
    border-radius: 8px;
    color: var(--color-primario-10);
    background-color: var(--color-primario-90);
}
.recordExpenseView__main__teclado {
    display: flex;
    flex-direction: column;
    width: 35%;
    justify-content: center;
    text-align: center;
}
.teclado__fila {
    display: flex;
    justify-content: space-around;
    text-align: center;
}
@media screen and (max-width: 1024px) {
    .recordExpenseView__header {
        justify-content: space-between;
    }
    .recordExpenseView__main {
        flex-direction: column;
        gap: 16px;
    }
    .recordExpenseView__main__pantalla {
        width: 100%;
        height: 100%;
        min-height: 30vh;
        display: flex;
    }
    .recordExpenseView__main__teclado {
        width: 100%;
        height: auto;
    }
    .teclado__fila {
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
}
@media screen and (max-width: 370px) {
    .recordExpenseView__main {
        flex-direction: column;
        gap: 8px;
    }
    .recordExpenseView__main__pantalla {
        width: 100%;
        height: 100%;
        min-height: 20vh;
        display: flex;
    }
    .recordExpenseView__main__teclado {
        width: 100%;
        height: auto;
    }
}
</style>
