<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>3</span></div>
        <h1>Segmentación de datos</h1>
      </div>
      <div class="row justify-content-center bg9 mb-5">
        <div class="col-lg-7 p-0 my-lg-0 my-3 j1">
          <div class="p-4">
            <p class="mb-0">
              La segmentación de datos es un paso clave en el proceso de
              preparación de <i>Datasets</i> para el aprendizaje automático.
              Dividir los datos en diferentes subconjuntos permite evaluar el
              rendimiento del modelo de manera efectiva y garantizar su
              capacidad para generalizar a datos no vistos. En este capítulo, se
              abordarán los conceptos de conjuntos de entrenamiento, prueba y
              validación, la importancia de la validación cruzada, y las
              estrategias de muestreo que aseguran una adecuada distribución de
              los datos.
            </p>
          </div>
        </div>
        <div class="col-lg-5 p-0 my-lg-0 my-3 j1">
          <img class="img-mov" src="@/assets/curso/temas/30.png" />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_3_1" class="titulo-segundo color-acento-contenido">
        <h2>3.1 Conjuntos de entrenamiento y prueba</h2>
      </div>
      <p>
        La correcta división del <i>Dataset</i> en conjuntos de entrenamiento y
        prueba es esencial para evaluar adecuadamente el rendimiento del modelo
        de <i>machine learning</i>. En general, el <i>Dataset</i> se divide en
        dos o más subconjuntos:
      </p>
      <div class="row bg7 align-items-center">
        <div class="px-lg-5 px-4">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-lg-4 my-lg-0 my-3">
              <div class="bg10 brad1 p-4 h-100">
                <img
                  class="img-t img-a mb-4"
                  src="@/assets/curso/temas/33.png"
                  alt=""
                />
                <div class="row justify-content-center mb-3">
                  <div class="col-auto bg11 px-3 py-1">
                    <h5 class="mb-0 text-center">Conjunto de Entrenamiento</h5>
                  </div>
                </div>
                <p class="mb-0">
                  Es la porción del <i>Dataset</i> que se utiliza para entrenar
                  el modelo. El objetivo es proporcionar al modelo suficientes
                  ejemplos para aprender patrones relevantes y generalizables.
                </p>
              </div>
            </div>
            <div class="col-lg-4 my-lg-0 my-3">
              <div class="bg5 brad1 p-4 h-100">
                <img
                  class="img-t img-a mb-4"
                  src="@/assets/curso/temas/34.png"
                  alt=""
                />
                <div class="row justify-content-center mb-3">
                  <div class="col-auto bg11 px-3 py-1">
                    <h5 class="mb-0 text-center">Conjunto de Prueba</h5>
                  </div>
                </div>
                <p class="mb-0">
                  Este conjunto se mantiene separado del proceso de
                  entrenamiento y se utiliza para evaluar la capacidad del
                  modelo para generalizar a nuevos datos. El conjunto de prueba
                  permite medir el rendimiento real del modelo y evitar el
                  sobreajuste.
                </p>
              </div>
            </div>
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-t img-a mb-4"
                src="@/assets/curso/temas/31.png"
                alt=""
              />
            </div>
          </div>
          <div class="row justify-content-center mb-5">
            <div class="col-lg-4 my-lg-0 my-3 j1">
              <img class="img-t img-a" src="@/assets/curso/temas/32.png" />
            </div>
            <div class="col-lg-8 my-lg-0 my-3">
              <p>
                Una buena práctica es destinar aproximadamente un 70-80% de los
                datos para el entrenamiento y el 20-30% restante para la prueba.
                Sin embargo, estas proporciones pueden ajustarse según el tamaño
                del <i>Dataset</i> y la naturaleza del problema.
              </p>
              <div
                class="row justify-content-center align-items-center bg12 brad1 p-4 mb-4"
              >
                <div class="col-lg-auto">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/19.png"
                    alt=""
                  />
                </div>
                <div class="col pt-lg-0 pt-md-4">
                  <p class="mb-0">
                    Es importante asegurarse de que tanto el conjunto de
                    entrenamiento como el conjunto de prueba sean
                    representativos de la población de datos, evitando así que
                    el modelo aprenda patrones específicos del conjunto de
                    entrenamiento que no se replican en el conjunto de prueba.
                  </p>
                </div>
              </div>
              <p>
                La división de datos en conjuntos de entrenamiento y prueba
                representa el primer paso en la evaluación sistemática de
                modelos de <i>machine learning</i>. Esta separación permite
                simular cómo se comportará el modelo ante datos que nunca ha
                visto, proporcionando una estimación más realista de su
                rendimiento en el mundo real. Para comprender mejor las
                implicaciones de diferentes estrategias de división de datos,
                consideremos las siguientes proporciones comúnmente utilizadas y
                sus casos de uso:
              </p>
            </div>
          </div>
          <div class="row justify-content-center mb-5">
            <div class="col-lg-10">
              <div class="titulo-sexto color-acento-botones">
                <h5>Tabla 3.</h5>
                <span>Proporciones empleadas en entrenamiento y pruebas</span>
              </div>
              <div class="tabla-a color-acento-botones text-center">
                <table>
                  <caption>
                    Fuente: OIT, 2024.
                  </caption>
                  <thead>
                    <tr>
                      <th>Estrategia de división</th>
                      <th>Proporción (Train/Test)</th>
                      <th>Casos de uso</th>
                      <th>Consideraciones especiales</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Clásica.</td>
                      <td>80/20.</td>
                      <td><i>Datasets</i> grandes (>10,000 muestras).</td>
                      <td>Balance entre representatividad y evaluación.</td>
                    </tr>
                    <tr>
                      <td>Conservadora.</td>
                      <td>90/10.</td>
                      <td><i>Datasets</i> muy grandes (>100,000 muestras).</td>
                      <td>Maximiza datos de entrenamiento.</td>
                    </tr>
                    <tr>
                      <td>Equilibrada.</td>
                      <td>70/30.</td>
                      <td><i>Datasets</i> medianos (1,000-10,000 muestras).</td>
                      <td>Mayor confianza en la evaluación.</td>
                    </tr>
                    <tr>
                      <td>Proporcional.</td>
                      <td>60/40.</td>
                      <td><i>Datasets</i> pequeños (&gt;1,000 muestras).</td>
                      <td>Evita sobreajuste en muestras limitadas.</td>
                    </tr>
                    <tr>
                      <td>Específica del dominio.</td>
                      <td>Variable.</td>
                      <td>
                        Casos con restricciones temporales o secuenciales.
                      </td>
                      <td>Respeta la estructura temporal de los datos.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="bg9 p-4 brad">
            <p class="mb-0">
              La elección de la proporción adecuada depende no solo del tamaño
              del <i>Dataset</i>, sino también de factores como la complejidad
              del problema, la variabilidad en los datos y los requisitos
              específicos del proyecto. En algunos casos, puede ser necesario
              ajustar estas proporciones para garantizar que ambos conjuntos
              contengan muestras representativas de todas las clases o
              categorías importantes.
            </p>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_3_2" class="titulo-segundo color-acento-contenido">
        <h2>3.2 Validación cruzada</h2>
      </div>
      <div class="bloque-texto-g color-secundario p-3 p-sm-4 p-md-5 mb-5">
        <div
          class="bloque-texto-g__img"
          :style="{
            'background-image': `url(${require('@/assets/curso/temas/37.png')})`,
          }"
        ></div>
        <div class="bloque-texto-g__texto p-4">
          <p class="mb-0">
            La validación cruzada es una técnica que se utiliza para evaluar el
            rendimiento de un modelo de aprendizaje automático de manera más
            robusta. Consiste en dividir el <i>Dataset</i> en múltiples
            subconjuntos o "<em>folds</em>" y entrenar el modelo varias veces,
            cada vez utilizando uno de los subconjuntos como conjunto de prueba
            y los demás como conjunto de entrenamiento.
          </p>
        </div>
      </div>
      <div class="row justify-content-center text-center mb-5">
        <div class="col-lg-5 my-lg-0 my-3">
          <div class="bg5 brad1 p-4 h-100">
            <img
              class="img-t img-a mb-4"
              src="@/assets/curso/temas/38.png"
              alt=""
            />
            <div class="row justify-content-center mb-3">
              <div class="col-auto bg11 px-3 py-1">
                <h5 class="mb-0 text-center fst-italic">
                  K-Fold Cross-Validation
                </h5>
              </div>
            </div>
            <p class="mb-0">
              Esta es una de las formas más comunes de validación cruzada. El
              <i>Dataset</i> se divide en "k" partes (<em>folds</em>) y se
              entrena el modelo "k" veces, cada vez utilizando un fold diferente
              como conjunto de prueba y los restantes como conjunto de
              entrenamiento. El rendimiento se promedia sobre todas las
              iteraciones, proporcionando una medida más precisa de la capacidad
              del modelo para generalizar.
            </p>
          </div>
        </div>
        <div class="col-lg-5 my-lg-0 my-3">
          <div class="bg5 brad1 p-4 h-100">
            <img
              class="img-t img-a mb-4"
              src="@/assets/curso/temas/39.png"
              alt=""
            />
            <div class="row justify-content-center mb-3">
              <div class="col-auto bg11 px-3 py-1">
                <h5 class="mb-0 text-center fst-italic">
                  Leave-One-Out Cross-Validation (LOOCV)
                </h5>
              </div>
            </div>
            <p class="mb-0">
              En este enfoque, cada observación del <i>Dataset</i> se utiliza
              una vez como conjunto de prueba, mientras que el resto se utiliza
              para el entrenamiento. Aunque es una técnica muy precisa, puede
              ser computacionalmente costosa para <i>Datasets</i> grandes.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="bg9 p-4 brad">
            <p class="mb-0">
              La validación cruzada permite reducir la varianza en la estimación
              del rendimiento del modelo y asegurar que se está utilizando toda
              la información disponible en el <i>Dataset</i> de manera
              eficiente. Esto es especialmente útil cuando se trabaja con
              <i>Datasets</i> de tamaño limitado.
            </p>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_3_3" class="titulo-segundo color-acento-contenido">
        <h2>3.3 Estrategias de muestreo</h2>
      </div>
      <p>
        Las estrategias de muestreo son fundamentales para garantizar que los
        conjuntos de entrenamiento, prueba y validación sean representativos de
        la población general. Algunas de las estrategias más comunes incluyen:
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/40.png" alt="" />
        </div>
        <div class="col-lg-8 my-3">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta bg8">
            <div titulo="Muestreo aleatorio simple ">
              <p>
                Cada observación tiene la misma probabilidad de ser
                seleccionada. Esta es la técnica más básica y es adecuada cuando
                el <i>Dataset</i> es lo suficientemente grande y no existen
                problemas de desequilibrio entre clases.
              </p>
            </div>
            <div titulo="Muestreo estratificado ">
              <p>
                Se asegura de que la distribución de clases o categorías en los
                subconjuntos sea similar a la del <i>Dataset</i> original. Esto
                es especialmente importante cuando se trabaja con
                <i>Datasets</i> desbalanceados, ya que garantiza que todas las
                clases estén representadas adecuadamente en cada subconjunto.
              </p>
            </div>
            <div titulo="Muestreo con reemplazo ">
              <p>
                En este tipo de muestreo, una observación seleccionada se
                devuelve al <i>Dataset</i> y puede ser seleccionada nuevamente.
                Aunque no es muy común en la segmentación de
                <i>Datasets</i> para <i>machine learning</i>, puede ser útil en
                ciertos enfoques como el <i>bootstrap</i>.
              </p>
            </div>
          </AccordionRED>
        </div>
      </div>
      <p>
        A continuación, se presenta una tabla que resume las principales
        estrategias de muestreo y sus características:
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div class="titulo-sexto color-acento-botones">
            <h5>Tabla 4.</h5>
            <span>Estrategias de muestreo</span>
          </div>
          <div class="tabla-a color-acento-botones text-center">
            <table>
              <caption>
                Fuente: OIT, 2024.
              </caption>
              <thead>
                <tr>
                  <th>Estrategia de Muestreo</th>
                  <th>Descripción</th>
                  <th>Ventajas</th>
                  <th>Desventajas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Muestreo aleatorio simple.</td>
                  <td>
                    Cada observación tiene la misma probabilidad de ser
                    seleccionada.
                  </td>
                  <td>Fácil de implementar y comprender.</td>
                  <td>
                    No garantiza representatividad en
                    <i>Datasets</i> desbalanceados.
                  </td>
                </tr>
                <tr>
                  <td>Muestreo estratificado.</td>
                  <td>
                    Asegura que la distribución de clases sea similar en cada
                    subconjunto.
                  </td>
                  <td>Útil para <i>datasets</i> desbalanceados.</td>
                  <td>Puede ser complejo de implementar.</td>
                </tr>
                <tr>
                  <td>Muestreo con reemplazo.</td>
                  <td>
                    Las observaciones seleccionadas se devuelven al
                    <i>dataset</i>.
                  </td>
                  <td>Útil para enfoques de <i>bootstrap</i>.</td>
                  <td>Puede introducir duplicados innecesarios.</td>
                </tr>
              </tbody>
            </table>
          </div>
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
          <div class="bg4 brad p-3 j1">
            <p class="mb-0">
              Al concluir este capítulo, se debe resaltar que una segmentación
              adecuada de los datos es fundamental para evaluar correctamente el
              rendimiento de los modelos de <i>machine learning</i>. Dividir los
              datos de manera estratégica permite obtener una visión precisa de
              cómo se comportará el modelo en situaciones reales y garantiza que
              se está maximizando el valor del <i>Dataset</i> disponible. La
              validación cruzada y el uso adecuado de estrategias de muestreo
              son prácticas recomendadas para asegurar que los resultados
              obtenidos sean confiables y representativos del comportamiento
              esperado del modelo en producción.
            </p>
          </div>
        </div>
        <div class="col-lg-5 my-lg-0 my-3 j1">
          <img class="img-t img-a" src="@/assets/curso/temas/35.png" />
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
