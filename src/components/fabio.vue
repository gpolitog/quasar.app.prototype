<template>
  <quasar-layout>
    <div slot="header" class="toolbar">
      <button @click="$refs.leftDrawer.open()">
        <i>menu</i>
      </button>
      <quasar-toolbar-title :padding="1">
        Funcionários
      </quasar-toolbar-title>

    </div>

    <quasar-drawer ref="leftDrawer" swipe-only>
      <div class="toolbar light">
        <quasar-toolbar-title :padding="1">
            Menu
        </quasar-toolbar-title>
      </div>

      <div class="list no-border platform-delimiter">
        <quasar-drawer-link icon="view_quilt" to="/showcase/layout" exact>
          Funcionários
        </quasar-drawer-link>
        <hr>
        <div class="list-label">Layout Components</div>
        <quasar-drawer-link icon="build" to="/showcase/layout/toolbar" exact>
          Cargos
        </quasar-drawer-link>
      </div>
    </quasar-drawer>

    <!-- <router-view class="layout-view"></router-view> -->
    <div class="layout-padding">

     <!-- <div class="card">
       <div class="card-title bg-primary text-white">
         Colored Card Title
       </div>
       <div class="card-content card-force-top-padding">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       </div>
     </div> -->

     <div class="card">
       <div class="card-title bg-primary text-white">
         Com header
       </div>
       <div class="item two-lines">
         <img class="item-primary" src="../assets/quasar-logo.png">
         <div class="item-content">
           <div>Fulano</div>
           <div>Cargo 1</div>
         </div>
       </div>
       <div class="card-content card-force-top-padding">
         Com texto no card Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
       </div>
     </div>

     <div class="card">
       <div class="item two-lines">
         <img class="item-primary" src="../assets/quasar-logo.png">
         <div class="item-content">
           <div>Ciclano</div>
           <div>Cargo 2</div>
         </div>
       </div>
     </div>

   </div>


  </quasar-layout>
</template>

<script>
var moveForce = 30
var rotateForce = 40

import Quasar, { Utils } from 'quasar'

export default {
  data () {
    return {
      quasarVersion: Quasar.version,
      moveX: 0,
      moveY: 0,
      rotateY: 0,
      rotateX: 0
    }
  },
  computed: {
    position () {
      let transform = `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg)`
      return {
        top: this.moveY + 'px',
        left: this.moveX + 'px',
        '-webkit-transform': transform,
        '-ms-transform': transform,
        transform
      }
    }
  },
  methods: {
    move (event) {
      const {width, height} = Utils.dom.viewport()
      const {top, left} = Utils.event.position(event)
      const halfH = height / 2
      const halfW = width / 2

      this.moveX = (left - halfW) / halfW * -moveForce
      this.moveY = (top - halfH) / halfH * -moveForce
      this.rotateY = (left / width * rotateForce * 2) - rotateForce
      this.rotateX = -((top / height * rotateForce * 2) - rotateForce)
    }
  },
  mounted () {
    this.$nextTick(() => {
      document.addEventListener('mousemove', this.move)
      document.addEventListener('touchmove', this.move)
    })
  },
  beforeDestroy () {
    document.removeEventListener('mousemove', this.move)
    document.removeEventListener('touchmove', this.move)
  }
}
</script>

<style lang="styl">
.logo-container
  width 192px
  height 268px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d
</style>
