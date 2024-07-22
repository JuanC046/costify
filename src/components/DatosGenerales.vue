<template>
    <div class="datosGenerales">
        <div class="datosGenerales__saldo">
            <h3 class="datosGenerales-label">Saldo</h3>
            <h2 class="datosGenerales-valor">{{ moneda }} {{ saldo }}</h2>
        </div>
        <div class="datosGenerales__presupuesto">
            <h3 class="datosGenerales-label">Presupuesto</h3>
            <h2 class="datosGenerales-valor">{{ moneda }} {{ presupuesto }}</h2>
        </div>
    </div>
</template>

<style>
.datosGenerales{
    display: flex;
    background-color: var(--color-primario-80);
    border-radius: 16px;
    width:70%;
}
.datosGenerales__saldo, .datosGenerales__presupuesto{
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    border: 1px solid var(--color-primario-20);
    color: var(--color-black);
    font-weight: normal;
}
.datosGenerales__saldo {
    border-radius: 16px 0 0 16px;
}
.datosGenerales__presupuesto {
    border-radius: 0 16px 16px 0;
}
.datosGenerales-label{
    color: var(--color-primario-10);
    font-size: 1.5rem;
}
.datosGenerales-valor{
    color: var(--color-primario-10);
    font-size: 2rem;
}

@media screen and (max-width: 768px) {
    .datosGenerales{
        width: 100%;
    }
    
}
</style>

<script>
export default {
    name: 'DatosGenerales',
    props: {
        saldo: Number,
        presupuesto: Number,
        moneda: String
    }
}
</script>