
<template>
  <div>
    <div class="layout-padding" style="margin:1em;">

      <div class="list">
        <div class="item">
          <img class="item-primary" :src="'statics/img/avatars/vidas/1.jpg'">
          <div class="item-content has-secondary">
            <div>Selton Mello (você)</div>
          </div>
          <div class="item-secondary">
            <i ref="target">more_vert</i>

            <q-popover ref="popover">
              <div class="list">
                <div class="item item-link" @click="$refs.popover.close()">
                  <div class="item-content">Detalhar</div>
                </div>
                <div class="item item-link" @click="$refs.popover.close()">
                  <div class="item-content">Relacionar convênio</div>
                </div>
                <div class="item item-link" @click="$refs.popover.close()">
                  <div class="item-content">Excluir</div>
                </div>
              </div>
            </q-popover>

          </div>
        </div>
        <hr>
        <div class="item">
          <img class="item-primary" :src="'statics/img/avatars/vidas/2.jpg'">
          <div class="item-content has-secondary">
            <div>Jenifer Silva</div>
          </div>
          <div class="item-secondary">
            <i ref="target">more_vert</i>

            <q-popover ref="popover">
              <div class="list">
                <div class="item item-link" @click="$refs.popover.close()">
                  <div class="item-content">Detalhar</div>
                </div>
                <div class="item item-link" @click="$refs.popover.close()">
                  <div class="item-content">Relacionar convênio</div>
                </div>
                <div class="item item-link" @click="$refs.popover.close()">
                  <div class="item-content">Excluir</div>
                </div>
              </div>
            </q-popover>

          </div>
        </div>
        <hr>
        <div class="item">
          <img class="item-primary" :src="'statics/img/avatars/vidas/3.jpg'">
          <div class="item-content has-secondary">
            <div>Criatine Silva</div>
          </div>
          <div class="item-secondary">
            <i ref="target">more_vert</i>

            <q-popover ref="popover">
              <div class="list">
                <div class="item item-link" @click="$refs.popover.close()">
                  <div class="item-content">Detalhar</div>
                </div>
                <div class="item item-link" @click="$refs.popover.close()">
                  <div class="item-content">Relacionar convênio</div>
                </div>
                <div class="item item-link" @click="$refs.popover.close()">
                  <div class="item-content">Excluir</div>
                </div>
              </div>
            </q-popover>

          </div>
        </div>
      </div>

      <q-fab
         class="absolute-bottom-right"
         classNames="red shadow-3"
         active-icon="people"
         icon="person_add"
         direction="up"
         style="right: 25px; bottom: 28px;">
         <q-small-fab class="secondary shadow-3">people</q-small-fab><span class="label-small-fab-1 shadow-3">Adicionar vida</span>
       </q-fab>

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
    this.setHeaderTitle('Meu Perfil - Vidas')
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
.label-small-fab-1 {
  font-size: .89em;
  text-align: center;
  background-color: #26a69a;
  color: white;
  position: absolute;
  top: 8px;
  left: -120px;
  padding: 7px;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
