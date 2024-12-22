<template>
  <div class="curso-main-container pb-3">
    <BannerInterno icono="fas fa-sitemap" titulo="Síntesis"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <p>
        El diagrama representa la estructura integral del componente formativo
        sobre preparación y modelado de datos para <i>machine learning</i>.
        Partiendo del concepto central de preparación y modelado, se ramifica en
        cuatro áreas esenciales: construcción de datasets, tratamiento de
        sesgos, segmentación de datos y preparación para modelos. Cada área
        incorpora subtemas específicos que constituyen los elementos
        fundamentales para una preparación efectiva de datos en contextos de IA.
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-8 my-lg-0 my-3">
          <div
            class="row justify-content-center align-items-center bg1 p-4 brad mb-4"
          >
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/1.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                Esta organización ilustra el flujo natural del proceso de
                preparación de datos, desde su recolección inicial hasta su
                optimización final para el entrenamiento de modelos. La
                interrelación entre las diferentes áreas muestra cómo cada etapa
                construye sobre la anterior, creando un proceso cohesivo que
                asegura la calidad y efectividad de los datos para
                <i>machine learning</i>.
              </p>
            </div>
          </div>
          <div class="bg2 text-white p-3 j1">
            <p class="mb-0">
              El diagrama funciona como una hoja de ruta visual para comprender
              la estructura y alcance del componente, permitiendo al aprendiz
              visualizar rápidamente la progresión del aprendizaje y las
              conexiones entre los diferentes temas. Se sugiere utilizarlo como
              referencia para organizar el estudio y comprender la integración
              de los diversos aspectos de la preparación de datos para
              <i>machine learning</i>.
            </p>
          </div>
        </div>
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-t img-a" src="@/assets/curso/temas/2.png" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10 mb-5">
          <div class="bgs p-4 brad">
            <figure>
              <img
                src="@/assets/curso/temas/sintesis.svg"
                alt="La Figura 3 se denomina «Síntesis temática del componente», allí se mencionan los principales temas tratados sobre preparación y modelado de datos para machine learning —como la construcción de datasets, la segmentación de datos, el tratamiento de sesgos y la preparación para modelos— y algunos subtemas que los integran."
              />
            </figure>
          </div>
        </div>
        <div class="col-auto">
          <a
            class="anexo mb-5"
            :href="obtenerLink('/downloads/Sintesis.pdf')"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/bullets/icono-pdf.svg" />
            </div>
            <div class="anexo__texto">
              <p>Anexo. Síntesis</p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
