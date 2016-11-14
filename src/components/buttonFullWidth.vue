<template lang="html">
  <div class="full-width">
    <router-link :to="{ name: to }">
      <button :class="color + ' row items-stretch'" :style="'width: 100%; margin-bottom: ' + marginBottom + ';'">
        <div>
          <i>{{ icon }}</i>
        </div>
        <div class="auto row items-center justify-center"><slot></slot></div>
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    icon: String,
    color: {
      default: 'primary'
    },
    marginBottom: {
      default: '5px'
    },
    to: String
  }
}
</script>

<style lang="css">
</style>
