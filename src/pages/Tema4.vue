<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>4</span></div>
        <h1>Preparación para modelos</h1>
      </div>
      <div class="bloque-texto-g color-secundario p-3 p-sm-4 p-md-5">
        <div
          class="bloque-texto-g__img"
          :style="{
            'background-image': `url(${require('@/assets/curso/temas/36.png')})`,
          }"
        ></div>
        <div class="bloque-texto-g__texto p-4">
          <p class="mb-0">
            La fase final en el procesamiento de datos antes del entrenamiento
            de modelos de <i>machine learning</i> requiere una serie de
            transformaciones específicas que optimicen el rendimiento del
            algoritmo. Esta etapa resulta determinante para el éxito del modelo,
            pues los algoritmos de aprendizaje automático son sensibles a la
            escala y formato de los datos de entrada.
          </p>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_4_1" class="titulo-segundo color-acento-contenido">
        <h2>4.1 Escalamiento y normalización</h2>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-8 my-lg-0 my-3">
          <div class="bg4 brad p-3 j1 mb-4">
            <p class="mb-0">
              El escalamiento y normalización de datos constituyen
              transformaciones matemáticas que ajustan los valores numéricos a
              rangos específicos, facilitando el proceso de aprendizaje del
              modelo. Estas técnicas cobran especial relevancia cuando las
              variables presentan escalas muy diferentes entre sí.
            </p>
          </div>
          <p>
            La normalización min-max ajusta los valores a un rango específico,
            típicamente entre 0 y 1, preservando las relaciones entre los datos
            originales. Por otro lado, la estandarización (o normalización
            Z-<em>score</em>) transforma los datos para que tengan media cero y
            desviación estándar unitaria. La elección entre estas técnicas
            depende del algoritmo y la naturaleza de los datos. La siguiente
            tabla presenta una comparación detallada de las principales técnicas
            de escalamiento y sus casos de uso:
          </p>
        </div>
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-t img-a" src="@/assets/curso/temas/41.png" />
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div class="titulo-sexto color-acento-botones">
            <h5>Tabla 5.</h5>
            <span>Técnicas de escalamiento</span>
          </div>
          <div class="tabla-a color-acento-botones text-center">
            <table>
              <caption>
                Fuente: OIT, 2024.
              </caption>
              <thead>
                <tr>
                  <th>Técnica</th>
                  <th>Fórmula</th>
                  <th>Rango resultante</th>
                  <th>Casos de uso recomendados</th>
                  <th>Consideraciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Min-Max.</td>
                  <td>(x - min)/(max - min).</td>
                  <td>[0,1].</td>
                  <td>Redes neuronales, algoritmos basados en distancias.</td>
                  <td>Sensible a <i>outliers</i>.</td>
                </tr>
                <tr>
                  <td>Z-<em>Score</em>.</td>
                  <td>(x - media)/desv.est.</td>
                  <td>[-∞,∞].</td>
                  <td>Regresión lineal, SVM.</td>
                  <td>Asume distribución normal.</td>
                </tr>
                <tr>
                  <td><em>Robust Scaler</em>.</td>
                  <td>(x - mediana)/IQR.</td>
                  <td>Variable.</td>
                  <td>Datos con <i>outliers</i> significativos.</td>
                  <td>Más robusto a valores extremos.</td>
                </tr>
                <tr>
                  <td><em>Log Transform.</em></td>
                  <td>log(x).</td>
                  <td>[0,∞].</td>
                  <td>Datos con distribución sesgada.</td>
                  <td>Solo para valores positivos .</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_4_2" class="titulo-segundo color-acento-contenido">
        <h2>4.2 Codificación de variables</h2>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-t img-a" src="@/assets/curso/temas/42.png" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <p>
            La codificación de variables categóricas representa un paso esencial
            para convertir datos cualitativos en formatos numéricos que los
            algoritmos puedan procesar. Esta transformación debe realizarse
            cuidadosamente para preservar la información semántica contenida en
            las categorías originales.
          </p>
          <div
            class="row justify-content-center align-items-center bg9 brad1 p-4 mb-4"
          >
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/43.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                La codificación <em>one-hot</em> transforma cada categoría en
                una columna binaria, evitando la imposición de un orden
                artificial entre categorías. Sin embargo, puede generar matrices
                dispersas cuando el número de categorías es elevado. La
                codificación ordinal, por su parte, asigna números enteros a
                cada categoría y resulta más apropiada cuando existe un orden
                natural entre las categorías.
              </p>
            </div>
          </div>
          <p>
            En casos de variables categóricas con alta cardinalidad (muchas
            categorías únicas), técnicas más avanzadas como
            <em>target encoding</em> o <em>feature hashing</em> pueden ofrecer
            alternativas más eficientes. Estas técnicas deben aplicarse con
            precaución para evitar el sobreajuste, especialmente en conjuntos de
            datos pequeños.
          </p>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_4_3" class="titulo-segundo color-acento-contenido">
        <h2>4.3 Selección de características</h2>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-lg-0 my-3">
          <p>
            La selección de características implica identificar el subconjunto
            más relevante de variables para el modelo, reduciendo la
            dimensionalidad del problema sin perder información significativa.
            Este proceso no solo mejora el rendimiento computacional sino que
            también puede aumentar la capacidad de generalización del modelo.
          </p>
          <p>
            Los métodos de selección de características se pueden clasificar en
            tres categorías principales:
          </p>
        </div>
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-t img-a" src="@/assets/curso/temas/44.png" />
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/40.png" alt="" />
        </div>
        <div class="col-lg-8 my-3">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta bg8">
            <div titulo="Métodos de filtro">
              <p>
                Evalúan las características de manera independiente del
                algoritmo de aprendizaje, utilizando métricas estadísticas como
                correlación o información mutua. Estos métodos son
                computacionalmente eficientes pero pueden pasar por alto
                interacciones complejas entre variables.
              </p>
            </div>
            <div titulo="Métodos &lt;i&gt;wrapper&lt;/i&gt;">
              <p>
                Utilizan el rendimiento del modelo como criterio de selección,
                evaluando diferentes subconjuntos de características. Aunque más
                precisos, resultan computacionalmente intensivos para datasets
                con muchas variables.
              </p>
            </div>
            <div titulo="Métodos embebidos">
              <p>
                Realizan la selección de características como parte del proceso
                de entrenamiento del modelo, como ocurre con la regularización
                Lasso o los árboles de decisión.
              </p>
            </div>
          </AccordionRED>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-7 my-lg-0 my-3">
          <p>
            Estas estrategias permiten asegurar una correcta división del
            <i>Dataset</i> y garantizar que los modelos entrenados tengan una
            buena capacidad para generalizar a datos no vistos, evitando
            problemas de sobreajuste o subajuste.
          </p>
          <div class="bg9 brad p-3 j1">
            <p class="mb-0">
              La validación cruzada juega un papel fundamental en la selección
              de características, ayudando a identificar aquellas que
              contribuyen consistentemente al rendimiento del modelo a través de
              diferentes subconjuntos de datos. Este proceso iterativo asegura
              que las características seleccionadas sean verdaderamente robustas
              y no dependen de particularidades de una partición específica de
              los datos.
            </p>
          </div>
        </div>
        <div class="col-lg-5 my-lg-0 my-3 j1">
          <img class="img-t img-a" src="@/assets/curso/temas/47.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema3',
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
