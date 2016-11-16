<template>
  <div>
    <div slot="header" class="toolbar primary">
      <quasar-search v-model="search" class="primary"></quasar-search>
    </div>
    <div class="layout-padding">
      <div class="list item-delimiter">
        <router-link to="/detalhesMedico" tag="div" class="item three-lines" v-for="(medico, index) in listaComFiltro">
          <img class="item-primary" :src="getAvatarURL(medico.id)">
          <div class="item-content has-secondary">
            <div>{{ medico.nome }}</div>
            <div>
              <span>{{ medico.especializacao }}</span><br />
              (crm {{ medico.crm }})
            </div>
          </div>
          <div class="item-secondary stamp">
            {{ medico.dist }}
          </div>
          <i class="item-secondary">location_on</i>
        </router-link>

      </div>
    </div>

      <button @click="sendAllProviders()" class="negative circular shadow-3 absolute-bottom-right" style="right:20px; bottom:25px;"><i>done_all</i></button>

  </div>
</template>

<script>
import { Dialog, Toast } from 'quasar'
import { mapActions } from 'vuex'

export default {
  mounted () {
    this.setHeaderTitle('Por médico...')
  },
  data () {
    return {
      infiniteScrollOn: true,
      search: '',
      listaMedicos: [
        { id: 1, nome: 'Mauriano Salazar', especializacao: 'Cardiologia', crm: 5765, dist: '550 m' },
        { id: 2, nome: 'Paula Guimarães', especializacao: 'Cardiologia', crm: 21308, dist: '970 m' },
        { id: 3, nome: 'Sérgio Silva Souza', especializacao: 'Cardiologia', crm: 98123, dist: '1,1 km' }
        // { id: 4, nome: 'Felipe Schirmandt', especializacao: 'Cardiologia', crm: 66545, dist: '1,2 km' },
        // { id: 5, nome: 'Lizandra Hermann', especializacao: 'Cardiologia', crm: 97878, dist: '1,3 km' }
      ]
    }
  },
  methods: {
    ...mapActions([
      'setHeaderTitle'
    ]),
    getAvatarURL (id) {
      return '../statics/img/avatars/' + id + '.jpg'
    },
    sendAllProviders () {
      Dialog.create({
        title: 'Solicitar Agenda',
        message: 'Você deseja solicitar agenda para todos os médicos da lista?',
        buttons: [
          {
            label: 'Cancelar',
            handler () {
              console.log('Disagreed...')
            }
          },
          {
            label: 'Sim',
            handler () {
              console.log('Agreed!')
              Toast.create.positive('Solicitação enviada')
            }
          }
        ]
      })
    }
  },
  computed: {
    listaComFiltro () {
      return this.listaMedicos.filter((element) => {
        return element.nome.toUpperCase().indexOf(this.search.toUpperCase()) > -1
      })
    }
  }
}
</script>
