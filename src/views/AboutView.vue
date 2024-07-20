<template>
  <div class="about">
    <Titulo/>
    <DatosGenerales :saldo="999" :presupuesto="999" :moneda="'COP'"/>
    <p>
      This is an about page
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import Titulo from '@/components/Titulo.vue'
import DatosGenerales from '@/components/DatosGenerales.vue'

export default {
  name: 'AboutView',
  components: {
    Titulo,
    DatosGenerales,
  }
}
</script>
