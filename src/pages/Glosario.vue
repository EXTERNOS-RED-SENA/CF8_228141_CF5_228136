<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: '<i>Bias</i> (Sesgo)',
          significado:
            'Desviación sistemática en los datos que puede llevar a resultados injustos o poco representativos en los modelos de <i>machine learning.</i>',
        },
        {
          termino: '<i>Cross-validation</i>',
          significado:
            'Técnica de evaluación que divide los datos en múltiples subconjuntos para validar el rendimiento del modelo de manera más robusta.',
        },
        {
          termino: '<i>Dataset</i>',
          significado:
            'Conjunto estructurado de datos organizados para su uso en entrenamiento y evaluación de modelos de <i>machine learning.</i>',
        },
        {
          termino: '<i>Data splitting</i>',
          significado:
            'Proceso de dividir un conjunto de datos en subconjuntos para entrenamiento, validación y prueba de modelos.',
        },
        {
          termino: '<i>Feature engineering</i>',
          significado:
            'Proceso de selección, creación y transformación de variables para optimizar el rendimiento de modelos de <i>machine learning.</i>',
        },
        {
          termino: '<i>Feature scaling</i>',
          significado:
            'Proceso de normalizar o estandarizar variables numéricas para que estén en rangos comparables.',
        },
        {
          termino: '<i>Hold-out set</i>',
          significado:
            'Conjunto de datos reservado para la evaluación final del modelo, que no se utiliza durante el entrenamiento.',
        },
        {
          termino: '<i>Imbalanced data</i>',
          significado:
            'Situación donde las clases en un conjunto de datos no están representadas equitativamente.',
        },
        {
          termino: '<i>Missing values</i>',
          significado:
            'Datos faltantes en un conjunto de datos que requieren tratamiento especial antes del modelado.',
        },
        {
          termino: 'Normalización',
          significado:
            'Técnica para ajustar valores numéricos a una escala común, típicamente entre 0 y 1.',
        },
        {
          termino: '<i>One-hot encoding</i>',
          significado:
            'Técnica para convertir variables categóricas en formato binario para su uso en modelos de <i>machine learning.</i>',
        },
        {
          termino: '<i>Outliers</i>',
          significado:
            'Valores atípicos que se desvían significativamente del patrón general de los datos.',
        },
        {
          termino: '<i>Sampling strategy</i>',
          significado:
            'Método utilizado para seleccionar subconjuntos representativos de datos para entrenamiento y validación.',
        },
        {
          termino: '<i>Selection bias</i>',
          significado:
            'Sesgo que ocurre cuando la selección de datos no es aleatoria o representativa de la población objetivo.',
        },
        {
          termino: '<i>Standardization</i>',
          significado:
            'Proceso de transformar variables para que tengan media cero y desviación estándar unitaria.',
        },
        {
          termino: '<i>Test set</i>',
          significado:
            'Conjunto de datos utilizado para evaluar el rendimiento final del modelo entrenado.',
        },
        {
          termino: '<i>Training set</i>',
          significado:
            'Conjunto de datos utilizado para entrenar el modelo de <i>machine learning.</i>',
        },
        {
          termino: '<i>Validation set</i>',
          significado:
            'Conjunto de datos utilizado para ajustar hiperparámetros y evaluar el modelo durante el desarrollo.',
        },
        {
          termino: 'Variable <i>encoding</i>',
          significado:
            'Proceso de convertir variables categóricas en formato numérico para su uso en modelos.',
        },
        {
          termino: '<i>Z-score</i>',
          significado:
            'Medida estadística que indica cuántas desviaciones estándar se aleja un valor de la media.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
