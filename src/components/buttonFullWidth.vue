<template lang="html">
  <div class="full-width">
    <router-link :to="{ name: to }">
      <button :class="color + ' row items-stretch shadow-2'" :style="'width: 100%; margin-bottom: ' + marginBottom + ';'">
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
      default: '10px'
    },
    to: String
  }
}
</script>

<style scoped>
  .no-shadow {
    text-shadow: none;
  }
</style>
