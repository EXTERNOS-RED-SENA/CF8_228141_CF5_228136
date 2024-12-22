<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>2</span></div>
        <h1>Tratamiento de sesgos</h1>
      </div>
      <div class="bloque-texto-g color-secundario p-3 p-sm-4 p-md-5">
        <div
          class="bloque-texto-g__img"
          :style="{
            'background-image': `url(${require('@/assets/curso/temas/22.png')})`,
          }"
        ></div>
        <div class="bloque-texto-g__texto p-4">
          <p class="mb-0">
            El tratamiento de sesgos en los datasets es una etapa determinante
            para garantizar que los modelos de <i>machine learning</i> sean
            equitativos y útiles en la práctica. Los sesgos en los datos pueden
            llevar a modelos que discriminan contra ciertos grupos o generan
            resultados inexactos, lo cual tiene un impacto negativo en la
            calidad del aprendizaje automático y en su aplicabilidad. En este
            capítulo, se abordarán los diferentes tipos de sesgos que pueden
            surgir, las técnicas para detectarlos y los métodos disponibles para
            corregirlos. Estos elementos son esenciales para garantizar que los
            modelos se comporten de manera ética y precisa.
          </p>
        </div>
      </div>
      <div class="row bg7 align-items-center">
        <div class="px-lg-5 px-4">
          <Separador> </Separador>
          <div id="t_2_1" class="titulo-segundo color-acento-contenido">
            <h2>2.1 Tipos de sesgos</h2>
          </div>
          <p>
            El sesgo en los datasets se refiere a una tendencia sistemática que
            afecta la calidad de los datos y, por ende, la capacidad de los
            modelos para generalizar. A continuación, se presentan algunos de
            los tipos más comunes de sesgos:
          </p>
          <div class="row justify-content-center mb-4">
            <div class="col-lg-8 my-3">
              <AccordionRED tipo="a" clase-tarjeta="tarjeta bg8">
                <div titulo="Sesgo de selección">
                  <p>
                    Ocurre cuando el conjunto de datos utilizado no representa
                    adecuadamente a la población de interés. Esto puede deberse
                    a un muestreo deficiente o a la falta de diversidad en los
                    datos recolectados.
                  </p>
                </div>
                <div titulo="Sesgo de medición">
                  <p>
                    Este tipo de sesgo se da cuando existen errores en la forma
                    en que se mide o se recolectan los datos. Puede ser causado
                    por herramientas de medición defectuosas o inconsistencias
                    en la recolección.
                  </p>
                </div>
                <div titulo="Sesgo de confirmación">
                  <p>
                    Surge cuando los datos recolectados favorecen una hipótesis
                    preexistente. Esto suele ocurrir cuando se tiene una
                    predisposición hacia ciertos resultados durante la etapa de
                    recolección.
                  </p>
                </div>
                <div titulo="Sesgo implícito">
                  <p>
                    A menudo surge debido a creencias y suposiciones
                    inconscientes que afectan el proceso de recolección y
                    etiquetado de los datos.
                  </p>
                </div>
                <div titulo="Sesgo histórico">
                  <p>
                    Refleja prejuicios o desigualdades presentes en los datos
                    históricos. Por ejemplo, si entrenamos un modelo de
                    selección de personal con datos históricos de una industria
                    tradicionalmente dominada por un género, el modelo podría
                    perpetuar estos patrones discriminatorios.
                  </p>
                </div>
                <div titulo="Sesgo de exclusión">
                  <p>
                    Se presenta al omitir variables relevantes en el análisis,
                    lo que puede llevar a conclusiones erróneas.
                  </p>
                </div>
                <div titulo="Sesgo algorítmico">
                  <p>
                    Se refiere a los sesgos introducidos por el propio algoritmo
                    de <i>machine learning</i>, que puede amplificar los sesgos
                    presentes en los datos de entrenamiento.
                  </p>
                </div>
              </AccordionRED>
            </div>
            <div class="col-lg-4 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/23.png"
                alt=""
              />
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="bg9 p-4 brad">
                <p class="mb-0">
                  Comprender y detectar estos tipos de sesgos es decisivo para
                  evitar que los modelos de <i>machine learning</i> produzcan
                  resultados inexactos. La presencia de sesgos puede impactar
                  negativamente la utilidad del modelo y disminuir su capacidad
                  para generalizar a nuevos datos.
                </p>
              </div>
            </div>
          </div>
          <Separador> </Separador>
          <div id="t_2_2" class="titulo-segundo color-acento-contenido">
            <h2>2.2 Técnicas de detección</h2>
          </div>
          <p>
            La detección de sesgos en los datos es necesaria para garantizar que
            los modelos desarrollados sean útiles. Algunas de las técnicas para
            detectar sesgos en los datasets incluyen:
          </p>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/24.png" alt="" />
        </div>
        <div class="col-lg-8 my-3">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta bg8">
            <div titulo="Análisis descriptivo ">
              <p>
                Consiste en explorar las estadísticas básicas de las variables
                del dataset, como la media, la desviación estándar y las
                distribuciones, para detectar cualquier irregularidad o patrón
                inusual.
              </p>
            </div>
            <div titulo="Visualización de datos ">
              <p>
                Herramientas de visualización, como gráficos de barras,
                diagramas de dispersión y mapas de calor, pueden ser útiles para
                identificar patrones de sesgo en los datos. Por ejemplo, si una
                clase está desproporcionadamente representada, esto podría
                indicar un sesgo de selección.
              </p>
            </div>
            <div titulo="Pruebas de hipótesis ">
              <p>
                Realizar pruebas estadísticas puede ayudar a identificar si
                ciertas diferencias en los datos son significativas y podrían
                deberse a un sesgo subyacente.
              </p>
            </div>
            <div titulo="Evaluación de representatividad">
              <p>
                Comparar la distribución del dataset con la población general
                puede ayudar a identificar si ciertos grupos están sub o
                sobre-representados.
              </p>
            </div>
            <div titulo="Análisis de correlación ">
              <p>
                Examinar la correlación entre las variables para identificar
                relaciones que puedan indicar la presencia de sesgos.
              </p>
            </div>
            <div titulo="Validación cruzada ">
              <p>
                Utilizar validación cruzada y analizar el rendimiento del modelo
                para detectar si existe un sobreajuste en ciertos grupos.
              </p>
            </div>
          </AccordionRED>
        </div>
      </div>
      <p>
        Estas técnicas permiten identificar áreas donde los sesgos podrían estar
        presentes y proporcionan una base para el análisis y la corrección de
        estos. Para ilustrar cómo se puede detectar visualmente el sesgo de
        selección, consideremos el siguiente gráfico que compara las
        distribuciones entre el dataset y la población general:
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div class="titulo-sexto color-acento-botones">
            <h5>Figura 2.</h5>
            <span
              >Ejemplo de visualización para detección de sesgo de
              selección</span
            >
          </div>
          <div class="bgfig p-5 brad mb-2">
            <img
              class="img-a img-t"
              src="@/assets/curso/temas/25.svg"
              alt="La Figura 2 se denomina «Ejemplo de visualización para detección de sesgo de selección» y presenta un gráfico de barras que compara la distribución de diferentes grupos en el dataset frente a la población general."
            />
          </div>
          <figcaption>Fuente: OIT, 2024.</figcaption>
        </div>
      </div>
      <div class="bloque-texto-g color-secundario p-3 p-sm-4 p-md-5">
        <div
          class="bloque-texto-g__img"
          :style="{
            'background-image': `url(${require('@/assets/curso/temas/26.png')})`,
          }"
        ></div>
        <div class="bloque-texto-g__texto p-4">
          <p class="mb-0">
            Como se puede observar en el gráfico, existen discrepancias notables
            entre la distribución de grupos en el dataset (barras azules) y la
            población general (barras rojas). El Grupo C muestra la mayor
            disparidad, estando significativamente subrepresentado en el dataset
            en comparación con su presencia en la población general. Por otro
            lado, el Grupo A está sobrerrepresentado. Estas diferencias son
            indicativas de un sesgo de selección que necesita ser abordado
            mediante técnicas de remuestreo o ponderación para asegurar que el
            dataset sea verdaderamente representativo.
          </p>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_2_3" class="titulo-segundo color-acento-contenido">
        <h2>2.3 Métodos de corrección</h2>
      </div>
      <p>
        Una vez identificados los sesgos, se deben implementar métodos de
        corrección para garantizar que el modelo sea justo y representativo.
        Algunos de los métodos más comunes incluyen:
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-3">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta bg8">
            <div titulo="Recolección adicional de datos ">
              <p>
                En caso de que se detecte un sesgo de selección, se pueden
                recolectar más datos para garantizar que todas las clases o
                grupos estén debidamente representados.
              </p>
            </div>
            <div titulo="Reponderación">
              <p>
                Este método implica asignar diferentes pesos a las observaciones
                para corregir los desequilibrios en la representación de clases.
                Por ejemplo, los datos de una clase poco representada podrían
                tener un mayor peso durante el entrenamiento del modelo.
              </p>
            </div>
            <div titulo="Sobremuestreo y submuestreo ">
              <p>
                El sobremuestreo consiste en replicar instancias de clases
                minoritarias, mientras que el submuestreo implica reducir la
                cantidad de datos de clases mayoritarias. Ambos métodos ayudan a
                equilibrar el dataset y minimizar el sesgo.
              </p>
            </div>
            <div titulo="Normalización de características ">
              <p>
                En el caso del sesgo de medición, se pueden aplicar técnicas de
                normalización y estandarización para garantizar que las
                características estén en escalas comparables, reduciendo así el
                impacto de mediciones incorrectas.
              </p>
            </div>
            <div titulo="Algoritmos robustecidos frente a sesgos ">
              <p>
                Modificar los algoritmos de aprendizaje para que sean más
                robustos frente a sesgos, incorporando términos de
                regularización que penalicen decisiones sesgadas o modificando
                las funciones de pérdida.
              </p>
            </div>
            <div titulo="Post-procesamiento de predicciones ">
              <p>
                Ajustar las predicciones del modelo para reducir disparidades
                identificadas, como calibrar probabilidades o ajustar umbrales
                de decisión para diferentes grupos.
              </p>
            </div>
            <div titulo="Ponderación de casos ">
              <p>
                Ajustar la importancia relativa de diferentes grupos dentro del
                conjunto de datos, lo cual permite que el modelo no sobrevalore
                clases mayoritarias.
              </p>
            </div>
          </AccordionRED>
        </div>
        <div class="col-lg-4 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/27.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-t img-a" src="@/assets/curso/temas/28.png" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <div class="bg4 brad p-3 j1 mb-4">
            <p class="mb-0">
              La corrección de sesgos debe realizarse con cautela, ya que
              métodos demasiado agresivos pueden introducir nuevos sesgos o
              distorsionar relaciones importantes en los datos. El objetivo no
              es eliminar completamente las diferencias en los datos, sino
              asegurar que estas diferencias reflejen variaciones reales y no
              prejuicios sistemáticos.
            </p>
          </div>
          <p>
            A continuación, se presenta una tabla que resume los métodos de
            corrección de sesgos según el tipo de sesgo identificado:
          </p>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div class="titulo-sexto color-acento-botones">
            <h5>Tabla 2.</h5>
            <span>Tabla 2. Sesgos y métodos de corrección</span>
          </div>
          <div class="tabla-a color-acento-botones text-center">
            <table>
              <caption>
                Fuente: OIT, 2024.
              </caption>
              <thead>
                <tr>
                  <th>Tipo de sesgo</th>
                  <th>Método de corrección</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sesgo de selección.</td>
                  <td>Recolección adicional de datos.</td>
                  <td>
                    Recolectar más datos para representar a todos los grupos.
                  </td>
                </tr>
                <tr>
                  <td>Sesgo de medición.</td>
                  <td>Normalización de características.</td>
                  <td>Ajustar las mediciones para reducir errores.</td>
                </tr>
                <tr>
                  <td>Sesgo de confirmación.</td>
                  <td>Reponderación.</td>
                  <td>Ajustar los pesos de las observaciones.</td>
                </tr>
                <tr>
                  <td>Sesgo implícito.</td>
                  <td>Sobremuestreo y submuestreo.</td>
                  <td>Balancear las clases para minimizar desigualdades.</td>
                </tr>
                <tr>
                  <td>Sesgo histórico.</td>
                  <td>Algoritmos robustecidos frente a sesgos.</td>
                  <td>
                    Modificar los algoritmos para reducir el impacto de los
                    sesgos históricos.
                  </td>
                </tr>
                <tr>
                  <td>Sesgo de exclusión.</td>
                  <td>Recopilación de variables relevantes.</td>
                  <td>
                    Incluir variables que permitan explicar mejor los datos.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-7 my-lg-0 my-3">
          <p>
            El tratamiento adecuado de los sesgos es esencial para garantizar
            que los modelos de <i>machine learning</i> sean equitativos y
            confiables. Sin un tratamiento adecuado, los modelos pueden
            perpetuar injusticias y proporcionar resultados que no sean útiles
            en la práctica.
          </p>
          <div class="bg9 brad p-3 j1">
            <p class="mb-0">
              Al concluir este capítulo, se debe enfatizar que el tratamiento de
              sesgos no solo mejora la precisión del modelo, sino que también es
              una responsabilidad ética. Las personas formadas en
              <i>machine learning</i> deben tener en cuenta estos aspectos para
              construir modelos que sean justos y que proporcionen valor real en
              contextos del mundo real.
            </p>
          </div>
        </div>
        <div class="col-lg-5 my-lg-0 my-3 j1">
          <img class="img-t img-a" src="@/assets/curso/temas/29.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema2',
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
