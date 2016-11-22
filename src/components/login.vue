
<template>
  <div>
    <div class="layout-padding" style="margin:1em;">

      <div class="floating-label custom">
        <input required class="full-width">
        <label>Informe seu e-mail ou telefone</label>
      </div>
      <div class="floating-label custom" style="margin-bottom:2em;">
        <input type="password" required class="full-width">
        <label>Informe sua senha</label>
      </div>
      <dm-button color="primary" icon="input" to="porMedico">Entrar</dm-button>
      <dm-button color="info" icon="thumb_up" to="agendarConsulta">Entrar com o facebook</dm-button>
      <dm-button color="positive" icon="lock_open" to="criarNovoUsuario">Criar novo usuário</dm-button>
      <dm-button color="negative" icon="person_add" to="recuperarSenha">Recuperar senha</dm-button>

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import DmButton from './buttonFullWidth.vue'

export default {
  mounted () {
    this.setHeaderTitle('Acessar')
  },
  methods: {
    ...mapActions([
      'setHeaderTitle'
    ])
  },
  components: {
    DmButton
  }
}

</script>

<style scoped>
  .custom {
    margin-bottom: 1.2em;
  }
</style>
