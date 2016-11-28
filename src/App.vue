<template>
  <!-- Don't drop "quasar-app" class -->
  <div id="quasar-app">
    <q-layout>
      <div slot="header" class="toolbar primary">
        <!-- <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()"> -->
        <button @click="backHistory()" v-if="showBackHistory()">
          <i class="botaoVoltarIOS ios-only">arrow_back</i>
          <i class="mat-only">arrow_back</i>
          </button>
        <button @click="$refs.leftDrawer.open()">
          <i class="botaoMenuHamburguerIOS ios-only">menu</i>
          <i class="mat-only">menu</i>
        </button>
        <q-toolbar-title :padding="1">
          <div class="tituloIOS ios-only">
            {{ general.headerTitle }}
          </div>
          <div class="mat-only">
            {{ general.headerTitle }}
          </div>
        </q-toolbar-title>
        <button @click="$refs.rightDrawer.open()">
          <i class="botaoMenuPerfilIOS ios-only">person</i>
          <i class="mat-only">person</i>
        </button>
      </div>

      <q-drawer ref="leftDrawer" swipe-only>
        <div class="toolbar primary">
          <q-toolbar-title :padding="1">
              DocMob
          </q-toolbar-title>
        </div>

        <div class="list no-border platform-delimiter">
          <q-drawer-link icon="search" :to="{ path: '/agendarConsulta', exact: true }">
            Agendar consulta
          </q-drawer-link>
          <hr>
          <div class="list-label">Opções</div>
          <q-drawer-link icon="input" :to="{ path: '/login', exact: true }">
            Entrar
          </q-drawer-link>
          <q-drawer-link icon="check_box" :to="{ path: '/meusAgendamentos', exact: true }">
            Meus Agendamentos
          </q-drawer-link>
          <q-drawer-link icon="person" :to="{ path: '/meuPerfil', exact: true }">
            Meu Perfil
          </q-drawer-link>
          <q-drawer-link icon="mail" :to="{ path: '/contato', exact: true }">
            Contato
          </q-drawer-link>
          <hr>
          <q-drawer-link icon="format_align_justify" :to="{ path: '/prescricoes', exact: true }">
            Prescrições
          </q-drawer-link>
          <hr>
          <q-drawer-link icon="info" :to="{ path: '/sobre', exact: true }">
            Sobre o DocMob
          </q-drawer-link>
        </div>
      </q-drawer>

      <router-view class="layout-view"></router-view>


      <q-drawer right-side swipe-only ref="rightDrawer">
        <div class="toolbar light">
          <q-toolbar-title :padding="1">
              Dados do perfil
          </q-toolbar-title>
        </div>

        <p style="padding: 25px;" class="text-grey-7">
          Aqui entram informacoes principais do perfil, historico de notificacoes. Uma area importante de facil acesso.
        </p>
      </q-drawer>

      <div slot="footer" class="" v-if="route.name !== undefined && route.name.indexOf('meusAgendamentos') > -1">

          <q-tabs slot="navigation" class="blue">
            <q-tab
              icon="watch_later"
              route="/meusAgendamentos"
              exact>
            </q-tab>
            <q-tab
              icon="check_circle"
              route="/MeusAgendamentosConfirmados"
              exact>
            </q-tab>
            <q-tab
              icon="exit_to_app"
              route="/MeusAgendamentosEncerrados"
              exact>
            </q-tab>
            <q-tab
              icon="cancel"
              route="/MeusAgendamentosCancelados"
              exact>
            </q-tab>
          </q-tabs>

      </div>

      <div slot="footer" class="" v-if="route.name !== undefined && route.name.indexOf('meuPerfil') > -1">

          <q-tabs slot="navigation" class="blue">
            <q-tab
              icon="person"
              route="/meuPerfil"
              exact>
            </q-tab>
            <q-tab
              icon="people"
              route="/meuPerfilVidas"
              exact>
            </q-tab>
          </q-tabs>

      </div>

    </q-layout>

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
      if ([ 'porMedico', 'porEspecialidade', 'detalhesMedico', 'criarNovoUsuario', 'preferenciasHorarios' ].indexOf(this.route.name) > -1) {
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
  .tituloIOS {
    margin-top: .9em !important;
  }
  .tituloMAT {
    margin-top: .9em !important;
  }
 .botaoVoltarIOS {
   font-size: 1.9em !important;
   margin-top: .8em;
 }
 .botaoVoltarMAT {
   font-size: 1.9em !important;
   margin-top: .8em;
 }
 .botaoMenuHamburguerIOS {
   font-size: 1.9em !important;
   margin-top: .8em;
 }
 .botaoMenuHamburguerMAT {
   font-size: 1.9em !important;
   margin-top: .8em;
 }
 .botaoMenuPerfilIOS {
   font-size: 1.9em !important;
   margin-top: .8em;
 }
 .botaoMenuPerfilMAT {
   font-size: 1.9em !important;
   margin-top: .8em;
 }
 button {
   text-shadow: none !important;
 }

</style>
