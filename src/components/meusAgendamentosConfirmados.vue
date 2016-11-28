
<template>
  <div>
    <div class="layout-padding" style="margin:1em;">

      <div class="card">
        <div class="item three-lines">
          <img class="item-primary" src="statics/img/avatars/2.jpg">
          <div class="item-content has-secondary">
            <div>Paula Guimarães</div>
            <div>
              <span>Cardiologia</span><br />
              (crm 21308)
            </div>
          </div>
          <div class="item-secondary stamp">
            7 dias
          </div>
          <i class="item-secondary">schedule</i>
        </div>
        <div class="card-content">
          <div class="list item-delimiter">
            <q-collapsible icon="info_outline" label="Info. Agenda">
              <div class="text-justify" style="font-size:.9em; margin-bottom:1em; margin-top:1em;">

                <div class="row linhaDetalhesLabel">
                    <span class="labelDetalhes">Status:</span>
                </div>
                <div class="row linhaDetalhesValor">
                   <span class="valorDetalhes">CONFIRMADO</span>
                </div>

                <div class="row linhaDetalhesLabel">
                    <span class="labelDetalhes">Data Solicitação:</span>
                </div>
                <div class="row linhaDetalhesValor">
                   <span class="valorDetalhes">terça, dia 29/11/2016 às 15h14m</span>
                </div>

                <div class="row linhaDetalhesLabel">
                    <span class="labelDetalhes">Data Confirmação:</span>
                </div>
                <div class="row linhaDetalhesValor">
                   <span class="valorDetalhes">terça, dia 29/11/2016 às 16h30m</span>
                </div>

                <div class="row linhaDetalhesLabel">
                    <span class="labelDetalhes">Agendado para:</span>
                </div>
                <div class="row linhaDetalhesValor">
                   <span class="valorDetalhes">Isabeli Cassold (por Unimed)</span>
                </div>

              </div>
            </q-collapsible>
            <q-collapsible icon="add_location" label="Local">
              <div class="item multiple-lines">
                <div class="item-content has-secondary">
                  <div>Clínica Heart</div>
                  <div class="item-label item-smaller addressDetail">Rua Marques de Olinda 2371</div>
                  <div class="item-label item-smaller addressDetail">Glória</div>
                  <div class="item-label item-smaller addressDetail">CEP 89570133</div>
                  <div class="item-label item-smaller addressDetail text-italic">( a 1,2 km )</div>
                  <div class="item-label item-smaller text-italic">
                    <span class="label bg-white text-red labelConvenio agemed">Agemed</span>
                  </div>
                </div>
                <div class="item-secondary">
                  <i>
                    place
                  </i>
                </div>
              </div>
            </q-collapsible>
            <q-collapsible icon="assignment_turned_in" label="Ações">
              <div class="auto text-primary">
                <button @click="cancelar()" class="negative "><i class="on-left">error</i> Solicitar cancelamento</button>
              </div>
            </q-collapsible>
          </div>
        </div>
        <div class="card-actions">
        </div>
      </div>




    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import DmButton from './buttonFullWidth.vue'
import { Toast, Dialog } from 'quasar'

export default {
  data () {
    return {
      confirmacaoOption: ''
    }
  },
  mounted () {
    this.setHeaderTitle('Agendamentos Confirmados')
  },
  methods: {
    ...mapActions([
      'setHeaderTitle'
    ]),
    confirmar () {
      Dialog.create({
        title: 'Sugestões de datas',
        message: 'Selecione uma das sugestões encaminhadas pela Clínica Salutare.',
        form: {
          option: {
            type: 'radio',
            model: 'confirmacaoOption',
            items: [
              { label: '29/11/16 às 15h30m [terça]', value: '1' },
              { label: '29/11/16 às 18h00m [terça]', value: '2' },
              { label: '30/11/16 às 17h30m [quarta]', value: '3' },
              { label: 'Sugerir outras datas', value: '4' },
              { label: 'Entrar na fila de espera', value: '5' }
            ]
          }
        },
        buttons: [
          'Cancelar',
          {
            label: 'Confirmar',
            handler (data) {
              // Toast.create.positive('Returned ' + JSON.stringify(data))
              Toast.create.positive('Aqui entra o texto de confirmação da ação escolhida')
            }
          }
        ]
      })
    },
    cancelar () {
      Dialog.create({
        title: 'Solicitar Cancelamento',
        message: 'Você realmente deseja solicitar o cancelamento da agenda referente a consulta com o Dra. Paula Guimarães?',
        buttons: [
          {
            label: 'Sair',
            handler () {
              // Toast.create('Disagreed...')
            }
          },
          {
            label: 'Cancelar',
            handler () {
              Toast.create.negative('Solicitação de cancelamento de agenda encaminhada para a Clínica Heart!')
            }
          }
        ]
      })
    }
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

<style>
.locais-main {
}
.local {
  margin-bottom: 1em;
}
.addressDetail {
  font-size: .75em !important;
}
.labelConvenio {
  font-size: .95em !important;
  margin-top: 6px;
  margin-right: 2px;
}
.agemed {
  border: 1px solid red;
  height: 1.67em;
}
.area-atuacao-main {
  margin-top: 1em;
  margin-bottom: 1em;
}
.area-atuacao {
  font-size: .85em;
  font-style: italic;
  margin-bottom: .2em;
}
.area-atuacao-icon {
  margin-right: 5px;
}
.labelDetalhes {
  font-size: .9em;
  color: rgb(23, 83, 138);
},
.linhaDetalhesValor {
}
.valorDetalhes {
  margin-bottom: 10px;
  font-size: 1em;
  font-style: italic;
}

</style>
