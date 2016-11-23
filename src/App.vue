<template>
  <!-- Don't drop "quasar-app" class -->
  <div id="quasar-app">

    <quasar-layout>
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
        <quasar-toolbar-title :padding="1">
          <div class="tituloIOS ios-only">
            {{ general.headerTitle }}
          </div>
          <div class="mat-only">
            {{ general.headerTitle }}
          </div>
        </quasar-toolbar-title>
        <button @click="$refs.rightDrawer.open()">
          <i class="botaoMenuPerfilIOS ios-only">person</i>
          <i class="mat-only">person</i>
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
          <div class="list-label">Opções</div>
          <quasar-drawer-link icon="input" to="/login" exact>
            Entrar
          </quasar-drawer-link>
          <quasar-drawer-link icon="check_box" to="/meusAgendamentos" exact>
            Meus Agendamentos
          </quasar-drawer-link>
          <quasar-drawer-link icon="person" to="/meuPerfil" exact>
            Meu Perfil
          </quasar-drawer-link>
          <quasar-drawer-link icon="mail" to="/contato" exact>
            Contato
          </quasar-drawer-link>
          <hr>
          <quasar-drawer-link icon="format_align_justify" to="/prescricoes" exact>
            Prescrições
          </quasar-drawer-link>
          <hr>
          <quasar-drawer-link icon="info" to="/sobre" exact>
            Sobre o DocMob
          </quasar-drawer-link>
        </div>
      </quasar-drawer>

      <router-view class="layout-view"></router-view>


      <quasar-drawer right-side swipe-only ref="rightDrawer">
        <div class="toolbar light">
          <quasar-toolbar-title :padding="1">
              Dados do perfil
          </quasar-toolbar-title>
        </div>

        <p style="padding: 25px;" class="text-grey-7">
          Aqui entram informacoes principais do perfil, historico de notificacoes. Uma area importante de facil acesso.
        </p>
      </quasar-drawer>

      <div slot="footer" class="" v-if="route.name !== undefined && route.name.indexOf('meusAgendamentos') > -1">

          <quasar-tabs slot="navigation" class="blue">
            <quasar-tab
              icon="watch_later"
              route="/meusAgendamentos"
              exact>
            </quasar-tab>
            <quasar-tab
              icon="check_circle"
              route="/MeusAgendamentosConfirmados"
              exact>
            </quasar-tab>
            <quasar-tab
              icon="exit_to_app"
              route="/MeusAgendamentosEncerrados"
              exact>
            </quasar-tab>
            <quasar-tab
              icon="cancel"
              route="/MeusAgendamentosCancelados"
              exact>
            </quasar-tab>
          </quasar-tabs>

      </div>

      <div slot="footer" class="" v-if="route.name !== undefined && route.name.indexOf('meuPerfil') > -1">

          <quasar-tabs slot="navigation" class="blue">
            <quasar-tab
              icon="person"
              route="/meuPerfil"
              exact>
            </quasar-tab>
            <quasar-tab
              icon="people"
              route="/meuPerfilVidas"
              exact>
            </quasar-tab>
          </quasar-tabs>

      </div>

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
