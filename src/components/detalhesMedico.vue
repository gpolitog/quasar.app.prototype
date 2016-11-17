
<template>
  <div>
    <div class="layout-padding">
      <div class="card">
        <div class="item three-lines">
          <img class="item-primary" src="statics/img/avatars/1.jpg">
          <div class="item-content has-secondary">
            <div>Mauriano Salazar</div>
            <div>
              <span>Cardiologia</span><br />
              (crm 988987)
            </div>
          </div>
          <div class="item-secondary stamp">
            550m
          </div>
          <i class="item-secondary">location_on</i>
        </div>
        <div class="card-content">


            <div class="list item-delimiter">
              <quasar-collapsible icon="info_outline" label="Resumo">
                <div class="text-justify thin-paragraph" style="font-size:.9em; margin-bottom:1em; margin-top:1em;">
                  Dr. Mauriano Salazar graduou-se em medicina pela UNIPAC, no ano de 1999. Especializou-se em Cardiologia e Terapia Intensiva (CTI) pela Fundação Mario Pena e Hospital Luxemburgo, em Belo Horizonte. Após esse período, trabalhou como Cardiologista em hospitais, Unidades Coronarianas e Centros de Tratamento Intensivo.Nesta ultima década dedicou-se a estudos que abrangeram não somente a área de Cardiologia, mas também a Fisiologia, Neurociências, Psicologia, mudança de comportamento e cardiologia esportiva.
                </div>
              </quasar-collapsible>
              <quasar-collapsible icon="add_location" label="Locais de Atend.">
                <div class="locais-main">
                  <div class="item multiple-lines">
                    <div class="item-content has-secondary local">
                      <div>Clínica Salutare</div>
                      <div class="item-label item-smaller addressDetail">Rua Dona Francisca 3775</div>
                      <div class="item-label item-smaller addressDetail">Saguaçú - CEP 89765003</div>
                      <div class="item-label item-smaller addressDetail text-italic">( a 550m )</div>
                      <div class="item-label item-smaller text-italic">
                        <span class="label bg-green text-white labelConvenio">Unimed</span>
                        <span class="label bg-white text-red labelConvenio agemed">Agemed</span>
                        <span class="label bg-blue-10 text-white labelConvenio">Amil</span>
                        <span class="label bg-red text-white labelConvenio">Bradesco</span>
                      </div>
                    </div>
                    <div class="item-secondary">
                      <i>
                        place
                      </i>
                    </div>
                  </div>
                  <div class="item multiple-lines">
                    <div class="item-content has-secondary">
                      <div>Clínica Heart</div>
                      <div class="item-label item-smaller addressDetail">Rua Marques de Olinda 2371</div>
                      <div class="item-label item-smaller addressDetail">Glória</div>
                      <div class="item-label item-smaller addressDetail">CEP 89570133</div>
                      <div class="item-label item-smaller addressDetail text-italic">( a 1,2 km )</div>
                      <div class="item-label item-smaller text-italic">
                        <span class="label bg-green text-white labelConvenio">Unimed</span>
                        <span class="label bg-white text-red labelConvenio agemed">Agemed</span>
                        <span class="label bg-yellow text-blue-10 labelConvenio">Cassi</span>
                      </div>
                    </div>
                    <div class="item-secondary">
                      <i>
                        place
                      </i>
                    </div>
                  </div>
                </div>
              </quasar-collapsible>
              <quasar-collapsible icon="assignment_turned_in" label="Áreas de atuação">
                <div class="area-atuacao-main">
                  <div class="row area-atuacao">
                    <i class="area-atuacao-icon">check</i> Cardiopatia Congênita do Adulto
                  </div>
                  <div class="row area-atuacao">
                    <i class="area-atuacao-icon">check</i> Risco Cirúrgico
                  </div>
                  <div class="row area-atuacao">
                    <i class="area-atuacao-icon">check</i> Acompanhamento Cardiológico de Atletas
                  </div>
                  <div class="row area-atuacao">
                    <i class="area-atuacao-icon">check</i> Cardiologia Fetal
                  </div>
                  <div class="row area-atuacao">
                    <i class="area-atuacao-icon">check</i> Cardiologia Pediátrica
                  </div>
                </div>
              </quasar-collapsible>
            </div>

        </div>
        <div class="card-actions">
          <div class="auto text-primary">
            <i>star</i> 4,5 de média
          </div>
          <div class="auto text-primary">
            <i>mode_comment</i> 8 comentários
          </div>
        </div>
      </div>
    </div>

    <button @click="scheduleRequest(false)" class="negative circular shadow-3 absolute-bottom-right" style="right:20px; bottom:25px;"><i>today</i></button>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ActionSheet, Toast } from 'quasar'

export default {
  mounted () {
    this.setHeaderTitle('Mauriano Salazar')
  },
  methods: {
    ...mapActions([
      'setHeaderTitle'
    ]),
    scheduleRequest (gallery) {
      ActionSheet.create({
        title: 'Solicitar Agenda',
        gallery: gallery,
        actions: [
          {
            label: 'Delete',
            icon: 'delete',
            handler () {
              Toast.create('Deleted Article')
            }
          },
          {
            label: 'Share',
            icon: 'share',
            handler () {
              Toast.create('Shared!')
            }
          },
          {
            label: 'Play',
            icon: 'gamepad',
            handler () {
              Toast.create('Launched Game')
            }
          },
          {
            label: 'Favorite',
            icon: 'favorite',
            handler () {
              Toast.create('Added to favorites')
            }
          },
          {
            label: 'Favorite',
            icon: 'favorite',
            handler () {
              Toast.create('Added to favorites')
            }
          },
          {
            label: 'Favorite',
            icon: 'favorite',
            handler () {
              Toast.create('Added to favorites')
            }
          },
          {
            label: 'Favorite',
            icon: 'favorite',
            handler () {
              Toast.create('Added to favorites')
            }
          },
          {
            label: 'Favorite',
            icon: 'favorite',
            handler () {
              Toast.create('Added to favorites')
            }
          },
          {
            label: 'Favorite',
            icon: '',
            handler () {
              Toast.create('Added to favorites')
            }
          }
        ],
        dismiss: {
          label: 'Cancel',
          icon: 'cancel',
          classes: 'text-primary',
          handler () {
            Toast.create('Cancelled...')
          }
        }
      })
    }
  }
}

</script>

<style scoped>
  .locais-main {
  }
  .local {
    margin-bottom: 1em;
  }
  .addressDetail {
    font-size: .75em !important;
  }
  .labelConvenio {
    font-size: .95em !important;
    margin-top: 6px;
  }
  .agemed {
    border: 1px solid red;
    height: 1.75em;
  }
  .area-atuacao-main {
    margin-top: 1em;
    margin-bottom: 1em;
  }
  .area-atuacao {
    font-size: .85em;
    font-style: italic;
    margin-bottom: .2em;
  }
  .area-atuacao-icon {
    margin-right: 5px;
  }

</style>
