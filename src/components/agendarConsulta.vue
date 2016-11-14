<template>
    <div class="layout-padding">
      <dm-button color="primary" icon="account_circle" to="porMedico">POR MÉDICO</dm-button>
      <dm-button color="positive" icon="work" to="porEspecialidade">POR ESPECIALIDADE</dm-button>
      <img src="../statics/img/docmob.svg" alt="" />
    </div>
</template>

<script>
import DmButton from './buttonFullWidth.vue'
import { mapState, mapActions } from 'vuex'

export default {
  mounted () {
    this.setHeaderTitle('Agendar Consulta')
  },
  methods: {
    ...mapActions([
      'setHeaderTitle'
    ])
  },
  computed: {
    ...mapState({
      general: state => {
        return state
      }
    })
  },
  components: {
    DmButton
  }
}
</script>

<style lang="css">
</style>
