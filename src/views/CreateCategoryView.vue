<template>
    <div class="createCategoryView">
        <header class="createCategoryView__header">
            <Titulo />
        </header>
        <main class="createCategoryView__main">
            <form action="" class="createCategoryView__main__form">
                <div class="form__item">
                    <label for="categoria">Categoría</label>
                    <input
                        type="text"
                        name="categoria"
                        id="categoria"
                        placeholder="Comida"
                        autofocus
                    />
                </div>
                <div class="form__item">
                    <label for="presupuesto">Presupuesto</label>
                    <div class="form__item__presupuesto">
                        <input
                            type="number"
                            name="presupuesto"
                            id="presupuesto"
                            placeholder="1000"
                        />
                        <p>{{ moneda }}</p>
                    </div>
                </div>
                <div class="form__item">
                    <label for="descripcion">Descripción (Opcional)</label>
                    <input type="text" name="descrpcion" id="descripcion" 
                    placeholder="Productos básicos"/>
                </div>
                <div class="form__botones">
                    <Boton
                        texto="Guardar"
                        type="submit"
                        class="form__botones__guardar"
                    />
                    <Boton texto="Cancelar" class="form__botones__cancelar" />
                </div>
            </form>
        </main>
    </div>
</template>
<script>
import Titulo from "@/components/Titulo.vue";
import Boton from "@/components/Boton.vue";
export default {
    name: "CreateCategoryView",
    components: {
        Titulo,
        Boton,
    },
    data() {
        return {
            moneda: "COP",
        };
    },
};
</script>
<style>
.createCategoryView {
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: 100vh;
}

.createCategoryView__header {
    display: flex;
    justify-content: center;
    align-items: center;
}

.createCategoryView__main {
    display: flex;
    justify-content: center;
    align-items: center;
}

.createCategoryView__main__form {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 50%;
    justify-content: center;
    align-items: center;
}

.form__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 16px;
    border: 1px solid var(--color-primario-30);
    background-color: none;
    width: 100%;
}

.form__item label {
    color: var(--color-black);
    font-size: 1rem;
    text-align: left;
}

.form__item input {
    color: var(--color-primario-40);
    font-size: 1.5rem;
    border: none;
    background-color: var(--color--white);
    width: 100%;
}
.form__item input::placeholder {
    color: var(--color-primario-70);
}
.form__item__presupuesto {
    display: flex;
    gap: 8px;
    align-items: center;
    color: var(--color-primario-40);
}

.form__botones {
    display: flex;
    gap: 16px;
    justify-content: center;
    width: auto;
}

.form__botones__guardar {
    background-color: var(--color-secundario-60);
    border: 1px solid var(--color-primario-10);
    color: var(--color-black);
}

.form__botones__guardar:hover {
    background-color: var(--color-success);
}

.form__botones__cancelar {
    background-color: var(--color-secundario-90);
    border: 1px solid var(--color-primario-10);
    color: var(--color-black);
}

.form__botones__cancelar:hover {
    background-color: var(--color-danger);
}

@media screen and (max-width: 768px) {
    .createCategoryView__main__form {
        width: 100%;
        justify-content: center;
    }

    .form__item {
        width: 80%;
    }

    .form__botones {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        gap: 32px;
    }
}

@media screen and (max-width: 480px) {
    .createCategoryView__main__form {
        width: 100%;
    }

    .form__item {
        width: 100%;
    }
}

@media screen and (max-width: 400px) {
    .createCategoryView__main__form {
        width: 100%;
    }

    .form__item {
        width: 100%;
    }

    .form__item__presupuesto input {
        width: 80%;
    }
}
</style>
