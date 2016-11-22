<template>
  <!-- Don't drop "quasar-app" class -->
  <div id="quasar-app">

    <quasar-layout>
      <div slot="header" class="toolbar primary">
        <!-- <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()"> -->
        <button @click="backHistory()" v-if="showBackHistory()">
            <i class="botaoVoltar">arrow_back</i>
          </button>
        <button @click="$refs.leftDrawer.open()">
          <i class="botaoMenuHamburguer">menu</i>
        </button>
        <quasar-toolbar-title :padding="1">
          <div class="titulo">
            {{ general.headerTitle }}
          </div>
        </quasar-toolbar-title>
        <button @click="$refs.rightDrawer.open()">
          <i class="botaoMenuPerfil">person</i>
        </button>
      </div>

      <quasar-drawer ref="leftDrawer" swipe-only>
        <div class="toolbar primary">
          <quasar-toolbar-title :padding="1">
              DocMob
          </quasar-toolbar-title>
        </div>

        <div class="list no-border platform-delimiter">
          <quasar-drawer-link icon="search" to="/agendarConsulta">
            Agendar consulta
          </quasar-drawer-link>
          <hr>
          <div class="list-label">Layout Components</div>
          <quasar-drawer-link icon="build" to="/showcase/layout/toolbar" exact>
            Toolbar
          </quasar-drawer-link>
          <quasar-drawer-link icon="tab" to="/showcase/layout/tabs" exact>
            Tabs
          </quasar-drawer-link>
          <quasar-drawer-link icon="compare_arrows" to="/showcase/layout/drawer" exact>
            Layout Drawer
          </quasar-drawer-link>
        </div>
      </quasar-drawer>

      <router-view class="layout-view"></router-view>


      <quasar-drawer right-side swipe-only ref="rightDrawer">
        <div class="toolbar light">
          <quasar-toolbar-title :padding="1">
              Right-side Drawer
          </quasar-toolbar-title>
        </div>

        <p style="padding: 25px;" class="text-grey-7">
          This is yet another Drawer that does not gets displayed alongside content on
          bigger screens.
        </p>
      </quasar-drawer>


    </quasar-layout>

  </div>


</template>

<script>
/*
 * Root component
 */

// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require('./themes/app.' + __THEME + '.styl')
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require('quasar/dist/quasar.' + __THEME + '.css')
// ==============================

import { mapState, mapActions } from 'vuex'

export default {
  mounted () {
    this.setHeaderTitle('Agendar Consulta')
  },
  methods: {
    ...mapActions([
      'setHeaderTitle'
    ]),
    showBackHistory () {
      if ([ 'porMedico', 'porEspecialidade', 'detalhesMedico' ].indexOf(this.route.name) > -1) {
        return true
      }
      return false
    },
    backHistory () {
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapState({
      general: state => {
        return state
      },
      route: state => {
        const { route } = state
        return route
      }
    })
  }
}
</script>

<style>
 .titulo {
   margin-top: .9em !important;
 }
 .botaoVoltar {
   font-size: 1.9em !important;
   margin-top: .8em;
 }
 .botaoMenuHamburguer {
   font-size: 1.9em !important;
   margin-top: .8em;
 }
 .botaoMenuPerfil {
   font-size: 1.9em !important;
   margin-top: .8em;
 }
 button {
   text-shadow: none !important;
 }

</style>
