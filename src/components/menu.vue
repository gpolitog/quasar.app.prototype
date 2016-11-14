<template>
  <quasar-layout>
  <!-- Header -->
  <div slot="header" class="toolbar">
    <!-- opens left-side drawer using its ref -->
    <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
      <i>menu</i>
    </button>
    <quasar-toolbar-title :padding="1">
      Title
    </quasar-toolbar-title>
    <!-- opens right-side drawer using its ref -->
    <button class="hide-on-drawer-visible" @click="$refs.rightDrawer.open()">
        <i>menu</i>
      </button>
  </div>
  <!-- Navigation Tabs -->
  <quasar-layout>
    ...
    <!-- Left side Drawer -->
    <quasar-drawer>
      <div class="list platform-delimiter">
        <div class="list-header">
          Left Side Drawer
        </div>
        <quasar-drawer-link icon="mail" to="/account" exact>Account</quasar-drawer-link>
        <quasar-drawer-link icon="alarm" to="/alarms" exact>Alarms</quasar-drawer-link>
      </div>
    </quasar-drawer>
    <router-view class="layout-view"></router-view>
    <!--
      Right side Drawer;
      Notice the HTML Attributes on <drawer> element
    -->
    <quasar-drawer right-side>
      <div class="list platform-delimiter">
        <div class="list-header">
          Right Side Drawer
        </div>
        <quasar-drawer-link icon="mail" to="/shopping-cart" exact>Shopping Cart</quasar-drawer-link>
        <quasar-drawer-link icon="mail" to="/weather" exact>Weather</quasar-drawer-link>
      </div>
    </quasar-drawer>
  </quasar-layout>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
</style>
