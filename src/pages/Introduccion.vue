<template>
  <div class="curso-main-container introduccion">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero">
          <span><i class="fas fa-info"></i></span>
        </div>
        <h1>Introducción</h1>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-9 my-lg-0 my-3">
          <p>
            La preparación y modelado de datos constituye una fase determinante
            en el desarrollo de soluciones de <em>machine learning</em>. Los
            mejores algoritmos pueden fallar si los datos no están adecuadamente
            preparados, y las decisiones tomadas durante esta fase impactan
            directamente en el rendimiento y la confiabilidad de los modelos
            resultantes.
          </p>
          <div class="row justify-content-center mb-4">
            <div class="col-lg-4 my-lg-0 my-3 j1">
              <img class="img-t img-a" src="@/assets/curso/temas/3.png" />
            </div>
            <div class="col-lg-8 my-lg-0 my-3">
              <div class="bg3 p-3 j1 mb-4">
                <p class="mb-0">
                  Este componente formativo aborda sistemáticamente las
                  diferentes etapas de la preparación de datos, desde la
                  construcción inicial de <em>datasets</em> hasta su preparación
                  final para el entrenamiento de modelos. Se exploran técnicas
                  avanzadas para el tratamiento de sesgos, estrategias efectivas
                  de segmentación y métodos de preparación que optimizan el
                  rendimiento de los modelos.
                </p>
              </div>
              <p>
                A lo largo del componente, se examinarán prácticas probadas y
                metodologías actuales que permiten transformar datos crudos en
                conjuntos de entrenamiento de alta calidad. El énfasis en la
                calidad de los datos y la eliminación de sesgos refleja la
                creciente importancia de la equidad y la responsabilidad en el
                desarrollo de sistemas de IA.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 my-lg-0 my-3 j1">
          <img class="img-t img-a" src="@/assets/curso/temas/4.png" />
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div
            class="row justify-content-center align-items-center bg2 text-white p-4 brad"
          >
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/5.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                La combinación de fundamentos teóricos con aplicaciones
                prácticas proporciona las herramientas necesarias para abordar
                los desafíos reales en la preparación de datos para
                <em>machine learning</em>. Como dice un principio fundamental en
                ciencia de datos: "La calidad de un modelo nunca puede superar
                la calidad de los datos que lo alimentan".
              </p>
            </div>
          </div>
        </div>
      </div>
      <h5 class="mb-5">
        ¡Bienvenido a este viaje por las técnicas avanzadas de preparación de
        datos!
      </h5>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12">
          <figure>
            <div class="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/m7K8vxnehz8?si=qdOtH1qiqUWqTuUn"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              >
              </iframe>
            </div>
            <figcaption>
              Vide. Preparación y modelado de datos para algoritmos de
              <em>machine learning</em>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
