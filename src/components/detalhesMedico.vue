
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
                <div class="text-justify thin-paragraph" style="font-size:.9em">
                  Dr. Mauriano Salazar graduou-se em medicina pela UNIPAC, no ano de 1999. Especializou-se em Cardiologia e Terapia Intensiva (CTI) pela Fundação Mario Pena e Hospital Luxemburgo, em Belo Horizonte. Após esse período, trabalhou como Cardiologista em hospitais, Unidades Coronarianas e Centros de Tratamento Intensivo.Nesta ultima década dedicou-se a estudos que abrangeram não somente a área de Cardiologia, mas também a Fisiologia, Neurociências, Psicologia, mudança de comportamento e cardiologia esportiva.
                </div>
              </quasar-collapsible>
              <quasar-collapsible icon="add_location" label="Locais de Atend.">
                <div>
                  Lorem ipsum dolor sit amet...
                </div>
              </quasar-collapsible>
              <quasar-collapsible icon="shopping_cart" label="Third">
                <div>
                  Lorem ipsum dolor sit amet...
                </div>
              </quasar-collapsible>
            </div>

        </div>
        <div class="card-actions">
          <div class="text-primary">
            <i>thumb_up</i> 11k likes
          </div>
          <div class="text-primary">
            <i>mode_comment</i> 8 comments
          </div>
          <div class="auto"></div>
          <div class="text-grey-6">
            23 minutes ago.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted () {
    this.setHeaderTitle('Mauriano Salazar')
  },
  methods: {
    ...mapActions([
      'setHeaderTitle'
    ])
  }
}

</script>

<style lang="css">
</style>
