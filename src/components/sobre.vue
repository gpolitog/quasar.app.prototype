
<template>
  <div>
    <div class="layout-padding" style="margin:1em;">

      sobre o docmob

    </div>

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
    this.setHeaderTitle('Sobre o DocMob')
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


</style>
