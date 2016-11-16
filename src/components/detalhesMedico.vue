
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

                  <div class="item multiple-lines">
                    <div class="item-content has-secondary">
                      <div>Clínica Salutare</div>
                      <div class="item-label item-smaller addressDetail">Rua Dona Francisca 3775</div>
                      <div class="item-label item-smaller addressDetail">Saguaçú - CEP 89765003</div>
                      <div class="item-label item-smaller addressDetail text-italic">( a 550m )</div>
                      <div class="item-label item-smaller text-italic labelConvenio">
                        <span class="label bg-green text-white">Unimed</span>
                        <span class="label bg-red text-white">Agemed</span>
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
                    </div>
                    <div class="item-secondary">
                      <i>
                        place
                      </i>
                    </div>
                  </div>

                </div>
              </quasar-collapsible>
              <quasar-collapsible icon="credit_card" label="Convênios">
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

<style scoped>
  .addressDetail {
    font-size: .75em !important;
  }
  .labelConvenio {
    font-size: .75em !important;
    margin-top: 10px;
  }
</style>
