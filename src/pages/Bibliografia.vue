<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Alfonso Jaramillo, M. C. (2019). Consideraciones para el diseño de instrumentos de recolección de datos. Recuperado de ',
        link:
          'https://acei.co/wp-content/uploads/2019/10/Webinar-ACEI-Dise%C3%B1o-intrumentos-para-recolecci%C3%B3n-de-datos.pdf',
      },
      {
        referencia:
          'ATLAS.ti. (s.f.). Guía exhaustiva sobre el sesgo en la investigación. Recuperado de ',
        link:
          'https://atlasti.com/es/guias/guia-investigacion-cualitativa-parte-1/sesgo',
      },
      {
        referencia:
          'Cepal. (2020). Recomendaciones para eliminar el sesgo de selección en las encuestas de hogares en el contexto de la pandemia de COVID-19. Recuperado de ',
        link:
          'https://repositorio.cepal.org/bitstream/handle/11362/45552/1/S2000316_es.pdf',
      },
      {
        referencia:
          'Emanuelli, P. B. (s.f.). Selección de técnicas: Técnicas de recolección de datos. Criterios para la selección de técnicas de recolección de datos. Recuperado de ',
        link:
          'https://www.academia.edu/30424818/CAP_1_SELECCI%C3%93N_DE_T%C3%89CNICAS_T%C3%89CNICAS_DE_RECOLECCI%C3%93N_DE_DATOS_CRITERIOS_PARA_LA_SELECCI%C3%93N_DE_T%C3%89CNICAS_DE_RECOLECCI%C3%93N_DE_DATOS',
      },
      {
        referencia:
          'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2020). Norma Técnica de la Calidad del Proceso Estadístico (NTC PE 1000:2020). Recuperado de ',
        link:
          'https://www.funcionpublica.gov.co/documents/34645357/0/NTC%2BPE%2B1000-2020%2B%281%29.pdf/35f0fc27-cba3-d396-4dc2-639f33969199?t=1635181030263',
      },
      {
        referencia:
          'Meléndez, J. (2019). Técnicas de recolección de datos: ejemplos y guía paso a paso. Recuperado de ',
        link:
          'https://reisdigital.es/datos-e-informacion/tecnicas-de-recoleccion-de-datos-ejemplos/',
      },
      {
        referencia:
          'Ministerio de Ciencia, Tecnología e Innovación de Colombia. (2021). Guía para la gestión de datos de investigación. Recuperado de ',
        link:
          'https://minciencias.gov.co/sites/default/files/upload/noticias/guia_gestion_de_datos_redcolombianadeic_1.pdf',
      },
      {
        referencia:
          'Ministerio de Ciencia, Tecnología e Innovación de Colombia. (s.f.). Diseño de un Plan de Gestión de Datos de Investigación (PGDI). Recuperado de ',
        link:
          'https://red-documentacion.minciencias.gov.co/Gestion_Datos_Investigacion/Gu%C3%ADa-PGDI',
      },
      {
        referencia:
          'Restrepo, D., & Restrepo, M. (2004). Sesgos en diseños analíticos. Revista Colombiana de Psiquiatría, 33(3), 290-297. Recuperado de ',
        link:
          'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0034-74502004000300007',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
