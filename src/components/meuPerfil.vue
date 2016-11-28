
<template>
  <div>
    <div class="layout-padding" style="margin:1em;">

      <div class="row custom">
        <div class="" style="margin-right:20px;">
          <div class="floating-label">
            <input type="text" required class="full-width" value="Selton Mello">
            <label>Nome completo</label>
          </div>
        </div>
        <div class="">
          <div class="floating-label">
            <input type="text" required class="full-width disabled" value="(47) 99832-9421">
            <label>Telefone</label>
          </div>
        </div>
      </div>

      <div class="floating-label custom">
        <input type="email" required class="full-width disabled" value="selton.mello@globo.com">
        <label>E-mail</label>
      </div>

      <div class="row custom">
        <div class="" style="margin-right:20px;">
          <div class="floating-label">
            <input type="text" required class="full-width" value="Caroline Italo Costa">
            <label>Nome da mãe</label>
          </div>
        </div>
        <div>
          <label>
            <q-toggle v-model="pessoa.sexo" class="pink"></q-toggle>
            {{ pessoa.sexo ? ' Sexo feminino' : ' Sexo masculino' }}
          </label>
        </div>
      </div>

      <div class="row custom" style="margin-bottom:35px;">
        <div class="" style="margin-right:20px;">
          <div class="floating-label">
            <input type="text" required class="full-width" value="23/11/1976">
            <label>Data de nascimento</label>
          </div>
        </div>
        <div class="">
          <div class="floating-label">
            <input type="text" required class="full-width" value="593.170.333-19">
            <label>CPF</label>
          </div>
        </div>
      </div>

      <dm-button color="primary" icon="save" to="">Salvar dados</dm-button>
      <!-- <dm-button color="info" icon="thumb_up" to="agendarConsulta">Entrar com o facebook</dm-button> -->
      <dm-button color="negative" icon="lock_open" to="">Alterar senha</dm-button>
      <dm-button color="positive" icon="people" to="meuPerfilVidas">Vidas</dm-button>

    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import DmButton from './buttonFullWidth.vue'
// import { Toast, Dialog } from 'quasar'

export default {
  data () {
    return {
      pessoa: {
        sexo: false
      }
    }
  },
  mounted () {
    this.setHeaderTitle('Meu Perfil')
  },
  methods: {
    ...mapActions([
      'setHeaderTitle'
    ])
  },
  components: {
    DmButton
  },
  computed: {
  },
  watch: {
  }
}

</script>

<style scoped>
.custom {
  margin-bottom: 1.2em;
}
</style>
