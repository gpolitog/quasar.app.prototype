<template>
  <div>
    <div class="layout-padding" style="margin:1em;">

      <div class="row custom">
        <div class="" style="margin-right:20px;">
          <div class="floating-label">
            <input type="text" required class="full-width disabled" value="Selton Mello">
            <label>Nome completo</label>
          </div>
        </div>
        <div class="">
          <div class="floating-label">
            <input type="text" required class="full-width disabled" value="(47) 99832-9421">
            <label>Telefone</label>
          </div>
        </div>
      </div>

      <div class="floating-label custom">
        <input type="email" required class="full-width disabled" value="selton.mello@globo.com">
        <label>E-mail</label>
      </div>

    <div class="floating-label" style="margin-bottom:30px;">
      <textarea required class="full-width"></textarea>
      <label>Comentários</label>
    </div>

    <dm-button color="primary" icon="mail" to="">Enviar contato</dm-button>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import DmButton from './buttonFullWidth.vue'
// import { Toast, Dialog } from 'quasar'

export default {
  data () {
    return {
    }
  },
  mounted () {
    this.setHeaderTitle('Contato')
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

<style>

.custom {
  margin-bottom: 1.2em;
}
</style>
