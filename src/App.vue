<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <RegistroFormulario />
      <div class="lista">
        <TarefaListada />
        <TarefaListada />
        <TarefaListada />
        <TarefaListada />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import RegistroFormulario from './components/RegistroFormulario.vue';
import TarefaListada from './components/TarefaListada.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    RegistroFormulario,
    TarefaListada
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
  
}
</style>
