<template>
  <quasar-layout>
    <!--
      Replace following "div" with
      "<router-view class="layout-view">" component
      if using subRoutes
    -->
    <div class="layout-view">
      <button class="primary circular" @click="capturar()">
  <i>wifi</i>
</button>

{{ qualidade }}
    </div>
  </quasar-layout>
</template>
<script>
import { Loading } from 'quasar'
export default {
  data () {
    return {
      qualidade: ''
    }
  },
  methods: {
    capturar () {
      Loading.show({
        message: 'Testando Sinal',
        messageColor: '#ffffff',
        spinner: 'radio',
        spinnerSize: 250, // in pixels
        spinnerColor: '#0000cc',
        delay: 300
      })
      setTimeout(() => {
        Loading.hide()
        this.qualidade = 'Otima'
        console.log(this.qualidade)
      }, 5000)
    }
  }
}
</script>
