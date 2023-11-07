<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?">
      </div>
      <div class="column">
        <TempoContabilizado />
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import TempoContabilizado from './TempoContabilizado.vue' 

export default defineComponent({
  name: 'RegistroFormulario',
  components: {
    TempoContabilizado
  },
});

</script>