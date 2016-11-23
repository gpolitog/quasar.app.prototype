
<template>
  <div>
    <div class="layout-padding" style="margin:1em;">
      Histórico de prescrições médicas
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import DmButton from './buttonFullWidth.vue'
// import { Toast } from 'quasar'

export default {
  data () {
    return {
    }
  },
  mounted () {
    this.setHeaderTitle('Prescrições')
  },
  methods: {
    ...mapActions([
      'setHeaderTitle'
    ])
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

<style scoped>

</style>
