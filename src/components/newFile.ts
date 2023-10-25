import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RegistroFormulario',
  data() {
    return {
      tempoEmSegundos: 0
    };
  },
  computed: {
    tempoDecorrido() {
      return new Date().toISOString().substr(11, 8);
    }
  },
  methods: {
    iniciar() {
      setInterval(() => {
        this.tempoEmSegundos += 1;
      }, 1000);
      console.log('iniciando');
    },
    finalizar() {
      console.log('finalizando');
    }
  }
});
