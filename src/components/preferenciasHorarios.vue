
<template>
  <div>
    <div class="layout-padding" style="margin:1em;">

      <p class="caption">Informe sua preferência em dias da semana e seus respectivos períodos do dia para facilitar o processo de agendamento da consulta.</p>
      <blockquote>
        <small>
          Você pode adicionar mais de uma preferência, combinando assim diferentes dias da semana e períodos.
        </small>
      </blockquote>
      <div class="">
        <q-dialog-select label="Dia da semana" type="checkbox" v-model="diasSelecionados" ok-label="selecionar" cancel-label="sair" :options="diasDaSemana"></q-select>
      </div>
      <div class="row">
        <q-dialog-select label="Período do dia" type="checkbox" v-model="periodosSelecionados" ok-label="selecionar" cancel-label="sair" :options="periodos"></q-select>
      </div>
      <div class="" style="margin-top:10px;">
        <button class="primary small shadow-2" @click="adicionaPreferencia()">
          <i class="on-left">check_circle</i>Adicionar
        </button>
      </div>

      <div class="">
        <table :class="'striped-even'" class="quasar-table" style="margin-top:20px; max-width: 30% important!;">
          <!-- <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-right">Price</th>
              <th class="text-right">In Stock</th>
            </tr>
          </thead>
 -->
          <tbody>
            <tr v-for="(preferencia, index) in preferencias">
              <td class="text-left">
                <span class="chip label bg-info text-white customChip" v-for="dia in preferencia.dias">
                  {{ dia }}
                  <i class="on-right">close</i>
                </span>
              </td>
              <td class="text-left">
                <span style="margin:2px;" class="chip label bg-info text-white customChip" v-for="periodo in preferencia.periodos">
                  {{ periodo }}
                  <i class="on-right">close</i>
                </span>
              </td>
              <!-- <td class="text-left">{{ preferencia.dias.join(', ') }}</td> -->
              <!-- <td class="text-left">{{ preferencia.periodos.join(', ') }}</td> -->
              <td class=""><button @click="removePreferencia(index)" class="negative circular small shadow-2"><i>delete_forever</i></button></td>
            </tr>
          </tbody>
        </table>

        <!-- dias selecionados: {{ diasSelecionados }} <br />
        periodos selecionados: {{ periodosSelecionados }} <br>
        periodos: {{ preferencias }} -->

        <q-fab
           class="absolute-bottom-right"
           classNames="red shadow-3"
           active-icon="done"
           icon="send"
           @click="enviaSolicitacao(acessarMeusAgendamentos)"
           direction="up"
           style="right: 25px; bottom: 28px;"
         >
           <q-small-fab class="secondary shadow-3" @click.native="enviaSolicitacao(acessarMeusAgendamentos)">done</q-small-fab><span class="label-small-fab-1 shadow-3">Enviar solicitação</span>
         </q-fab>

      </div>

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
      preferencias: [],
      periodosSelecionados: [],
      periodos: [
        {
          label: 'Indiferente',
          value: 'Indiferente'
        },
        {
          label: 'Manhã',
          value: 'Manhã'
        },
        {
          label: 'Início da manhã',
          value: 'Início  da manhã'
        },
        {
          label: 'Fim da manhã',
          value: 'Fim da manhã'
        },
        {
          label: 'Tarde',
          value: 'Tarde'
        },
        {
          label: 'Início da tarde',
          value: 'Início da tarde'
        },
        {
          label: 'Fim da tarde',
          value: 'Fim da tarde'
        },
        {
          label: 'Início da noite',
          value: 'Início da noite'
        }
      ],
      diasSelecionados: [],
      diasDaSemana: [
        {
          label: 'Indiferente',
          value: 'Indiferente'
        },
        {
          label: 'Terça-feira',
          value: 'ter'
        },
        {
          label: 'Quarta-feira',
          value: 'qua'
        },
        {
          label: 'Quinta-feira',
          value: 'qui'
        },
        {
          label: 'Sexta-feira',
          value: 'sex'
        },
        {
          label: 'Sábado',
          value: 'sab'
        },
        {
          label: 'Domingo',
          value: 'dom'
        }
      ]
    }
  },
  mounted () {
    this.setHeaderTitle('Preferências de Horários')
  },
  methods: {
    ...mapActions([
      'setHeaderTitle'
    ]),
    acessarMeusAgendamentos () {
      this.$router.push({ name: 'meusAgendamentos' })
    },
    enviaSolicitacao (callback) {
      console.log('solicita enviada')
      Toast.create({
        html: 'Solicitação de agenda enviada com sucesso',
        icon: 'check_circle',
        timeout: 4000,
        button: {
          label: 'Acompanhar',
          handler () {
            callback()
          }
        }
      })
    },
    adicionaPreferencia () {
      const _dias = JSON.parse(JSON.stringify(this.diasSelecionados))
      const _periodos = JSON.parse(JSON.stringify(this.periodosSelecionados))
      console.log('_dias.length, _periodos.length', _dias.length, _periodos.length)
      if ((_dias.length > 0) && (_periodos.length > 0)) {
        this.preferencias.push({ dias: _dias, periodos: _periodos })
        // this.$set(this.diasSelecionados, [])
        // this.$set(this.periodosSelecionados, [])
        this.diasSelecionados.splice(0)
        this.periodosSelecionados.splice(0)
      }
      else {
        Toast.create.info('Selecione sua preferência de dias e períodos através dos botões ao lado')
      }
    },
    removePreferencia (index) {
      this.preferencias.splice(index, 1)
    }
  },
  components: {
    DmButton
  },
  computed: {
    habilitaBotaoAdd () {
      return this.diasSelecionados.length > 0 && this.periodosSelecionados.length > 0
    }
  },
  watch: {
    preferencias: {
      deep: true,
      handler (val, oldVal) {
        if (val[0] !== undefined) {
          console.log(JSON.stringify(val[0].dias))
        }
      }
    }
  }
}

</script>

<style scoped>
  .custom {
    margin-bottom: 1em;
  }
  .customChip {
    font-size: .9em;
    margin: 2px;
  }
  .label-small-fab-1 {
    font-size: .89em;
    text-align: center;
    background-color: #26a69a;
    color: white;
    position: absolute;
    top: 8px;
    left: -130px;
    padding: 7px;
    padding-left: 15px;
    padding-right: 15px;
  }

</style>
