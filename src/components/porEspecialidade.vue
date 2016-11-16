<template>
  <div>
    <div slot="header" class="toolbar primary">
      <quasar-search v-model="search" class="primary"></quasar-search>
    </div>
    <div class="layout-padding">
      <div class="list item-delimiter">
        <router-link tag="div" class="item item-link" v-for="esp in listaComFiltro" to="/porMedico">
          <div class="item-content">
            {{ esp.nome }}
          </div>
          <div class="item-secondary stamp">
              <span class="label bg-grey-4 text-grey-8 ">{{ esp.total }}</span>
          </div>
        </router-link>
      </div>
    </div>

    <quasar-fab
      class="absolute-bottom-left"
      @click="alert()"
      classNames="primary"
      active-icon="alarm"
      icon="arrow_back"
      direction="up"
      style="left:10px; bottom:10px;"
    >
      <quasar-small-fab class="purple" @click.native="toast('mail')">mail</quasar-small-fab>
      <quasar-small-fab class="secondary" @click.native="toast('alarm')">alarm</quasar-small-fab>
    </quasar-fab>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted () {
    this.setHeaderTitle('Por especialidade...')
  },
  data () {
    return {
      infiniteScrollOn: true,
      search: '',
      especilidades: [
        { nome: 'Acupuntura', total: '07' },
        { nome: 'Alergia e Imunologia', total: '13' },
        { nome: 'Cardiologia', total: '11' },
        { nome: 'Endocronologia', total: '07' },
        { nome: 'Oftalmologia', total: '19' },
        { nome: 'Pediatria', total: '23' },
        { nome: 'Pneumologia', total: '15' }
      ]
    }
  },
  methods: {
    ...mapActions([
      'setHeaderTitle'
    ])
  },
  computed: {
    listaComFiltro () {
      return this.especilidades.filter((element) => {
        return element.nome.toUpperCase().indexOf(this.search.toUpperCase()) > -1
      })
    }
  }
}
</script>

<style scoped>

  .customLabel {
    width: 35px;
  }

</style>
