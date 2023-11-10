<template>
    <div class="box has-text-weight-bold">
        <div class="columms">
            <div class="colummn is-7">
                Descrição da Tarefa
            </div>
            <div class="colummn">
                <TempoCronometrado tempoEmSegundos="15" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import TempoCronometrado from './TempoCronometrado.vue';

export default defineComponent({
    name: 'TarefaListada',
    components: { TempoCronometrado },
})

</script>

<style scoped>

.box {
    background: #fa5486 ;
}

</style>