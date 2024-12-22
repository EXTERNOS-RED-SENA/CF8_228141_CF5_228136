export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Construcción de <i>datasets</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Requerimientos y diseño',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Técnicas de recolección',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Control de calidad',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tratamiento de sesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de sesgos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de detección',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Métodos de corrección',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Segmentación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conjuntos de entrenamiento y prueba',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Validación cruzada',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Estrategias de muestreo',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Preparación para modelos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Escalamiento y normalización',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Codificación de variables',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Selección de características',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228136_CF05_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name:
      'Preparación y modelado de datos para algoritmos de <i>machine learning</i>',
    Description:
      'Este componente aborda las técnicas y metodologías para la preparación y modelado de datos en contextos de <i>machine learning</i>. Explora desde la construcción inicial de <i>datasets</i> hasta la preparación final para el entrenamiento de modelos, incluyendo el tratamiento de sesgos y estrategias de segmentación. Proporciona herramientas fundamentales para garantizar la calidad y efectividad de los datos en proyectos de IA.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
}
