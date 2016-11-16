<template>
  <div>
    <div slot="header" class="toolbar primary">
      <quasar-search v-model="search" class="primary"></quasar-search>
    </div>
    <div class="layout-padding">

      <!-- <quasar-search v-model="search" class="orange"></quasar-search>
      <quasar-search v-model="search" class="secondary" icon="explore" placeholder="Places"></quasar-search>
      <quasar-search v-model="search" class="primary" icon="local_airport" placeholder="Airports"></quasar-search>
      <quasar-search v-model="search" class="dark" icon="local_hotel" placeholder="Hotels"></quasar-search>

      <p class="caption">Disabled State</p>
      <quasar-search v-model="search" class="primary" disable></quasar-search> -->
      <div class="list item-delimiter">
        <router-link to="/medicoDetalhes" tag="div" class="item three-lines" v-for="(medico, index) in listaComFiltro">
          <img class="item-primary" :src="getAvatarURL(medico.id)">
          <div class="item-content has-secondary">
            <div>{{ medico.nome }}</div>
            <div>
              <span>{{ medico.especializacao }}</span><br />
              (crm {{ medico.crm }})
            </div>
          </div>
          <div class="item-secondary stamp">
            {{ medico.tempo }}
          </div>
          <i class="item-secondary">location_on</i>
        </router-link>

      </div>
    </div>

  </div>
</template>

<script>
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
        { id: 1, nome: 'Mauriano Salazar', especializacao: 'Cardiologia', crm: 5765, tempo: '550 m' },
        { id: 2, nome: 'Paula Guimarães', especializacao: 'Cardiologia', crm: 21308, tempo: '970 m' },
        { id: 3, nome: 'Sérgio Silva Souza', especializacao: 'Cardiologia', crm: 98123, tempo: '1,1 km' }
        // { id: 4, nome: 'Felipe Schirmandt', especializacao: 'Cardiologia', crm: 66545, tempo: '1,2 km' },
        // { id: 5, nome: 'Lizandra Hermann', especializacao: 'Cardiologia', crm: 97878, tempo: '1,3 km' }
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
    loadMore (index, done) {
      setTimeout(() => {
        const items = []
        items.push({ id: 6, nome: 'Irene Matias', especializacao: 'Cardiologia', crm: 75655, tempo: '2 km' })
        items.push({ id: 7, nome: 'Bartolomeu Kollbath', especializacao: 'Cardiologia', crm: 23232, tempo: '2,5 km' })
        items.push({ id: 8, nome: 'Romeu Escada', especializacao: 'Cardiologia', crm: 955343, tempo: '2,7 km' })
        this.listaMedicos = this.listaMedicos.concat(items)
        this.$refs.infiniteScroll.stop()
        this.infiniteScrollOn = false
        done()
      }, 3000)
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
