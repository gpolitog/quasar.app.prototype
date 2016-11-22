
<template>
  <div>
    <div class="layout-padding" style="margin:1em;">

      <quasar-transition name="slide">
        <quasar-stepper @finish="finish()" ref="stepper" v-show="!finished">
          <quasar-step title="Seus dados">

            <button class="info small" style="margin-bottom:1.3em;">Usar Facebook</button>

            <div class="floating-label custom">
              <input required class="full-width">
              <label>* Informe seu nome completo</label>
            </div>
            <div class="floating-label custom">
              <input type="email" required class="full-width">
              <label>* Informe seu e-mail</label>
            </div>
            <div class="floating-label custom">
              <input type="password" required class="full-width">
              <label>* Informe sua senha</label>
            </div>
            <div class="floating-label custom" style="margin-bottom:2em;">
              <input type="password" required class="full-width">
              <label>* Informe seu telefone</label>
            </div>

          </quasar-step>

          <quasar-step title="Dados no convênio" :ready="true">
            <div class="stacked-label custom">
              <input  readonly class="full-width" value="UNIMED">
              <label>Convênio</label>
            </div>
            <div class="floating-label custom">
              <input required class="full-width">
              <label>* Código</label>
            </div>
            <div class="row">
              <div class="">
                <div class="stacked-label custom">
                  <quasar-datetime v-model="dataNascimento" type="date" style="margin-top:16px;"></quasar-datetime>
                  <label>* Dt. Nasc.</label>
                </div>
              </div>
              <div class="">
                <div class="floating-label custom">
                  <input class="full-width">
                  <label>CPF</label>
                </div>
              </div>
            </div>
            <div class="floating-label custom">
              <input class="full-width">
              <label>Nome da mãe</label>
            </div>

          </quasar-step>

          <quasar-step title="Confirme o SMS" :ready="checked">

            <div class="floating-label custom">
              <input  readonly class="full-width">
              <label>Informe o código recebido</label>
            </div>

            <button class="tertiary" style="margin-top:.8em;">reenviar código sms</button>

            <div style="padding-top: 1.7em; padding-bottom:.7em;">
              <label>
                <quasar-toggle v-model="checked" class="orange"></quasar-toggle>
                Eu aceito os <span style="color:blue; text-decoration:underline;">termos</span>.
              </label>
            </div>

          </quasar-step>
        </quasar-stepper>
      </quasar-transition>

      <div v-show="finished" class="items-center column justify-center full-width full-height">
        <p class="caption">
          <i class="text-primary" style="font-size: 2rem; margin-right: 1rem;">check</i>
          <span>Finished. Well done!</span>
        </p>
        <button class="primary" @click="reset()">Reset</button>
      </p>
    </div>

      <!-- <div class="floating-label custom">
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
      <dm-button color="negative" icon="person_add" to="recuperarSenha">Recuperar senha</dm-button> -->

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import DmButton from './buttonFullWidth.vue'

export default {
  data () {
    return {
      dataNascimento: '2016-09-18T10:45:00.000Z',
      ready: false,
      finished: false,
      checked: false
    }
  },
  mounted () {
    this.setHeaderTitle('Novo usuário')
  },
  methods: {
    ...mapActions([
      'setHeaderTitle'
    ]),
    finish () {
      this.finished = true
      console.log('finalizando...')
    },
    reset () {
      this.$refs.stepper.reset()
      this.finished = false
    }
  },
  components: {
    DmButton
  }
}

</script>

<style scoped>
  .custom {
    margin-bottom: 1em;
  }
</style>
