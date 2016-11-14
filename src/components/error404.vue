<template>
  <div>
  <button v-if="canGoBack"  @click="goBack">
    <i class="on-left">keyboard_arrow_left</i>
    voltar
  </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      canGoBack: window.history.length > 1
    }
  },
  methods: {
    goBack () {
      window.history.go(-1)
    }
  }
}
</script>

<style>

</style>
