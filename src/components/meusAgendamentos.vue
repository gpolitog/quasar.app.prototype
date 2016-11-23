
<template>
  <div>
    <div class="layout-padding" style="margin:1em;">

      <div class="card">
        <div class="item three-lines">
          <img class="item-primary" src="statics/img/avatars/1.jpg">
          <div class="item-content has-secondary">
            <div>Mauriano Salazar</div>
            <div>
              <span>Cardiologia</span><br />
              (crm 988987)
            </div>
          </div>
          <div class="item-secondary stamp">
            1 dia
          </div>
          <i class="item-secondary">schedule</i>
        </div>
        <div class="card-content">
            <div class="list item-delimiter">
              <quasar-collapsible icon="info_outline" label="Info. Agenda">
                <div class="text-justify" style="font-size:.9em; margin-bottom:1em; margin-top:1em;">

                  <div class="row linhaDetalhesLabel">
                      <span class="labelDetalhes">Status:</span>
                  </div>
                  <div class="row linhaDetalhesValor">
                     <span class="valorDetalhes">AGUARDANDO CONFIRMAÇÃO</span>
                  </div>

                  <div class="row linhaDetalhesLabel">
                      <span class="labelDetalhes">Data Solicitação:</span>
                  </div>
                  <div class="row linhaDetalhesValor">
                     <span class="valorDetalhes">terça, dia 22/11/2016 às 11h33m</span>
                  </div>

                  <div class="row linhaDetalhesLabel">
                      <span class="labelDetalhes">Solicitado para:</span>
                  </div>
                  <div class="row linhaDetalhesValor">
                     <span class="valorDetalhes">Cristiane Silva (por Unimed)</span>
                  </div>


                </div>
              </quasar-collapsible>
              <quasar-collapsible icon="add_location" label="Local">
                <div class="locais-main">
                  <div class="item multiple-lines">
                    <div class="item-content has-secondary local">
                      <div>Clínica Salutare</div>
                      <div class="item-label item-smaller addressDetail">Rua Dona Francisca 3775</div>
                      <div class="item-label item-smaller addressDetail">Saguaçú - CEP 89765003</div>
                      <div class="item-label item-smaller addressDetail text-italic">( a 550m )</div>

                      <div class="item-label item-smaller text-italic">
                        <span class="label bg-green text-white labelConvenio">Unimed</span>
                      </div>
                    </div>
                    <div class="item-secondary">
                      <i>
                        place
                      </i>
                    </div>
                  </div>
                </div>
              </quasar-collapsible>
            </div>

        </div>
        <div class="card-actions">
          <div class="auto text-primary">
            <button @click="cancelar()" class="negative "><i class="on-left">cancel</i> Cancelar</button>
          </div>
          <div class="auto text-primary">
            <button @click="confirmar()" class="primary"><i class="on-left">check</i> Confirmar</button>
          </div>
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
    this.setHeaderTitle('Agendamentos Pendentes')
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
        title: 'Cancelar Agenda',
        message: 'Você realmente deseja cancelar a agenda referente a consulta com o Dr. Mauriao Salazar?',
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
              Toast.create.negative('Solicitação de agenda cancelada!')
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
  text-align: left;
}

</style>
