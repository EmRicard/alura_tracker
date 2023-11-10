<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao">
      </div>
      <div class="column">
        <TempoContabilizado @ao-temporizador-finalizar="finalizarTarefa"/>
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
  data(){
    return{
      descricao: ""
    }
  },
  methods: {
    finalizarTarefa (tempoDecorrido: number) : void {
      console.log('tempo da tarefa', tempoDecorrido)
      console.log('descrição da tarefa', this.descricao)
      this.descricao = ""
    }
  }
});

</script>