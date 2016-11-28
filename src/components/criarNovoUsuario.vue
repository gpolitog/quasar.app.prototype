
<template>
  <div>
    <div class="layout-padding" style="margin:1em;">

      <q-transition name="slide">
        <q-stepper @finish="finish()" ref="stepper" v-show="!finished">
          <q-step title="Seus dados">

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

            <label>
              <q-toggle v-model="pessoa.sexo" class="pink"></q-toggle>
              {{ pessoa.sexo ? ' Sexo feminino' : ' Sexo masculino' }}
            </label>

          </q-step>

          <q-step title="Dados no convênio" :ready="true">
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
                  <q-datetime v-model="dataNascimento" type="date" style="margin-top:16px;"></q-datetime>
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

          </q-step>

          <q-step title="Confirme o SMS" :ready="checked">

            <div class="floating-label custom">
              <input type="number" required class="full-width">
              <label>* Informe o código recebido</label>
            </div>

            <button @click="resentSMS()" class="tertiary" style="margin-top:.8em;">reenviar código sms</button>

            <div style="padding-top: 1.7em; padding-bottom:.7em;">
              <label>
                <q-toggle v-model="checked" class="orange"></q-toggle>
                Eu aceito os <span style="color:blue; text-decoration:underline;">termos</span>.
              </label>
            </div>
          </q-step>
        </q-stepper>
      </q-transition>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import DmButton from './buttonFullWidth.vue'
import { Toast } from 'quasar'

export default {
  data () {
    return {
      dataNascimento: '2016-09-18T10:45:00.000Z',
      ready: false,
      finished: false,
      checked: false,
      pessoa: {
        sexo: true
      }
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
      this.$router.push({ name: 'preferenciasHorarios' })
    },
    reset () {
      this.$refs.stepper.reset()
      this.finished = false
    },
    resentSMS () {
      Toast.create.info('Código SMS reenviado com sucesso!')
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
