(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33f1ae3a"],{"0057":function(e,a,s){e.exports=s.p+"img/23.0e345146.png"},"03cc":function(e,a,s){e.exports=s.p+"img/22.d883cb13.png"},1185:function(e,a,s){e.exports=s.p+"img/26.0b229672.png"},"385b":function(e,a,s){e.exports=s.p+"img/27.caa73e09.png"},"3f47":function(e,a,s){e.exports=s.p+"img/28.f33706a9.png"},9461:function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e._self._c;return a("div",{staticClass:"curso-main-container pb-3"},[a("BannerInterno"),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[e._m(0),a("div",{staticClass:"bloque-texto-g color-secundario p-3 p-sm-4 p-md-5"},[a("div",{staticClass:"bloque-texto-g__img",style:{"background-image":`url(${s("03cc")})`}}),e._m(1)]),a("div",{staticClass:"row bg7 align-items-center"},[a("div",{staticClass:"px-lg-5 px-4"},[a("Separador"),e._m(2),a("p",[e._v(" El sesgo en los datasets se refiere a una tendencia sistemática que afecta la calidad de los datos y, por ende, la capacidad de los modelos para generalizar. A continuación, se presentan algunos de los tipos más comunes de sesgos: ")]),a("div",{staticClass:"row justify-content-center mb-4"},[a("div",{staticClass:"col-lg-8 my-3"},[a("AccordionRED",{attrs:{tipo:"a","clase-tarjeta":"tarjeta bg8"}},[a("div",{attrs:{titulo:"Sesgo de selección"}},[a("p",[e._v(" Ocurre cuando el conjunto de datos utilizado no representa adecuadamente a la población de interés. Esto puede deberse a un muestreo deficiente o a la falta de diversidad en los datos recolectados. ")])]),a("div",{attrs:{titulo:"Sesgo de medición"}},[a("p",[e._v(" Este tipo de sesgo se da cuando existen errores en la forma en que se mide o se recolectan los datos. Puede ser causado por herramientas de medición defectuosas o inconsistencias en la recolección. ")])]),a("div",{attrs:{titulo:"Sesgo de confirmación"}},[a("p",[e._v(" Surge cuando los datos recolectados favorecen una hipótesis preexistente. Esto suele ocurrir cuando se tiene una predisposición hacia ciertos resultados durante la etapa de recolección. ")])]),a("div",{attrs:{titulo:"Sesgo implícito"}},[a("p",[e._v(" A menudo surge debido a creencias y suposiciones inconscientes que afectan el proceso de recolección y etiquetado de los datos. ")])]),a("div",{attrs:{titulo:"Sesgo histórico"}},[a("p",[e._v(" Refleja prejuicios o desigualdades presentes en los datos históricos. Por ejemplo, si entrenamos un modelo de selección de personal con datos históricos de una industria tradicionalmente dominada por un género, el modelo podría perpetuar estos patrones discriminatorios. ")])]),a("div",{attrs:{titulo:"Sesgo de exclusión"}},[a("p",[e._v(" Se presenta al omitir variables relevantes en el análisis, lo que puede llevar a conclusiones erróneas. ")])]),a("div",{attrs:{titulo:"Sesgo algorítmico"}},[a("p",[e._v(" Se refiere a los sesgos introducidos por el propio algoritmo de "),a("i",[e._v("machine learning")]),e._v(", que puede amplificar los sesgos presentes en los datos de entrenamiento. ")])])])],1),e._m(3)]),e._m(4),a("Separador"),e._m(5),a("p",[e._v(" La detección de sesgos en los datos es necesaria para garantizar que los modelos desarrollados sean útiles. Algunas de las técnicas para detectar sesgos en los datasets incluyen: ")])],1)]),a("div",{staticClass:"row justify-content-center mb-4"},[e._m(6),a("div",{staticClass:"col-lg-8 my-3"},[a("AccordionRED",{attrs:{tipo:"a","clase-tarjeta":"tarjeta bg8"}},[a("div",{attrs:{titulo:"Análisis descriptivo "}},[a("p",[e._v(" Consiste en explorar las estadísticas básicas de las variables del dataset, como la media, la desviación estándar y las distribuciones, para detectar cualquier irregularidad o patrón inusual. ")])]),a("div",{attrs:{titulo:"Visualización de datos "}},[a("p",[e._v(" Herramientas de visualización, como gráficos de barras, diagramas de dispersión y mapas de calor, pueden ser útiles para identificar patrones de sesgo en los datos. Por ejemplo, si una clase está desproporcionadamente representada, esto podría indicar un sesgo de selección. ")])]),a("div",{attrs:{titulo:"Pruebas de hipótesis "}},[a("p",[e._v(" Realizar pruebas estadísticas puede ayudar a identificar si ciertas diferencias en los datos son significativas y podrían deberse a un sesgo subyacente. ")])]),a("div",{attrs:{titulo:"Evaluación de representatividad"}},[a("p",[e._v(" Comparar la distribución del dataset con la población general puede ayudar a identificar si ciertos grupos están sub o sobre-representados. ")])]),a("div",{attrs:{titulo:"Análisis de correlación "}},[a("p",[e._v(" Examinar la correlación entre las variables para identificar relaciones que puedan indicar la presencia de sesgos. ")])]),a("div",{attrs:{titulo:"Validación cruzada "}},[a("p",[e._v(" Utilizar validación cruzada y analizar el rendimiento del modelo para detectar si existe un sobreajuste en ciertos grupos. ")])])])],1)]),a("p",[e._v(" Estas técnicas permiten identificar áreas donde los sesgos podrían estar presentes y proporcionan una base para el análisis y la corrección de estos. Para ilustrar cómo se puede detectar visualmente el sesgo de selección, consideremos el siguiente gráfico que compara las distribuciones entre el dataset y la población general: ")]),e._m(7),a("div",{staticClass:"bloque-texto-g color-secundario p-3 p-sm-4 p-md-5"},[a("div",{staticClass:"bloque-texto-g__img",style:{"background-image":`url(${s("1185")})`}}),e._m(8)]),a("Separador"),e._m(9),a("p",[e._v(" Una vez identificados los sesgos, se deben implementar métodos de corrección para garantizar que el modelo sea justo y representativo. Algunos de los métodos más comunes incluyen: ")]),a("div",{staticClass:"row justify-content-center mb-4"},[a("div",{staticClass:"col-lg-8 my-3"},[a("AccordionRED",{attrs:{tipo:"a","clase-tarjeta":"tarjeta bg8"}},[a("div",{attrs:{titulo:"Recolección adicional de datos "}},[a("p",[e._v(" En caso de que se detecte un sesgo de selección, se pueden recolectar más datos para garantizar que todas las clases o grupos estén debidamente representados. ")])]),a("div",{attrs:{titulo:"Reponderación"}},[a("p",[e._v(" Este método implica asignar diferentes pesos a las observaciones para corregir los desequilibrios en la representación de clases. Por ejemplo, los datos de una clase poco representada podrían tener un mayor peso durante el entrenamiento del modelo. ")])]),a("div",{attrs:{titulo:"Sobremuestreo y submuestreo "}},[a("p",[e._v(" El sobremuestreo consiste en replicar instancias de clases minoritarias, mientras que el submuestreo implica reducir la cantidad de datos de clases mayoritarias. Ambos métodos ayudan a equilibrar el dataset y minimizar el sesgo. ")])]),a("div",{attrs:{titulo:"Normalización de características "}},[a("p",[e._v(" En el caso del sesgo de medición, se pueden aplicar técnicas de normalización y estandarización para garantizar que las características estén en escalas comparables, reduciendo así el impacto de mediciones incorrectas. ")])]),a("div",{attrs:{titulo:"Algoritmos robustecidos frente a sesgos "}},[a("p",[e._v(" Modificar los algoritmos de aprendizaje para que sean más robustos frente a sesgos, incorporando términos de regularización que penalicen decisiones sesgadas o modificando las funciones de pérdida. ")])]),a("div",{attrs:{titulo:"Post-procesamiento de predicciones "}},[a("p",[e._v(" Ajustar las predicciones del modelo para reducir disparidades identificadas, como calibrar probabilidades o ajustar umbrales de decisión para diferentes grupos. ")])]),a("div",{attrs:{titulo:"Ponderación de casos "}},[a("p",[e._v(" Ajustar la importancia relativa de diferentes grupos dentro del conjunto de datos, lo cual permite que el modelo no sobrevalore clases mayoritarias. ")])])])],1),e._m(10)]),e._m(11),e._m(12),e._m(13)],1)],1)},i=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"titulo-principal color-acento-contenido"},[a("div",{staticClass:"titulo-principal__numero"},[a("span",[e._v("2")])]),a("h1",[e._v("Tratamiento de sesgos")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"bloque-texto-g__texto p-4"},[a("p",{staticClass:"mb-0"},[e._v(" El tratamiento de sesgos en los datasets es una etapa determinante para garantizar que los modelos de "),a("i",[e._v("machine learning")]),e._v(" sean equitativos y útiles en la práctica. Los sesgos en los datos pueden llevar a modelos que discriminan contra ciertos grupos o generan resultados inexactos, lo cual tiene un impacto negativo en la calidad del aprendizaje automático y en su aplicabilidad. En este capítulo, se abordarán los diferentes tipos de sesgos que pueden surgir, las técnicas para detectarlos y los métodos disponibles para corregirlos. Estos elementos son esenciales para garantizar que los modelos se comporten de manera ética y precisa. ")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_1"}},[a("h2",[e._v("2.1 Tipos de sesgos")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"col-lg-4 my-3"},[a("img",{staticClass:"img-a img-t",attrs:{src:s("0057"),alt:""}})])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-10"},[a("div",{staticClass:"bg9 p-4 brad"},[a("p",{staticClass:"mb-0"},[e._v(" Comprender y detectar estos tipos de sesgos es decisivo para evitar que los modelos de "),a("i",[e._v("machine learning")]),e._v(" produzcan resultados inexactos. La presencia de sesgos puede impactar negativamente la utilidad del modelo y disminuir su capacidad para generalizar a nuevos datos. ")])])])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_2"}},[a("h2",[e._v("2.2 Técnicas de detección")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"col-lg-4 my-3"},[a("img",{staticClass:"img-a img-t",attrs:{src:s("a43b"),alt:""}})])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-lg-10"},[a("div",{staticClass:"titulo-sexto color-acento-botones"},[a("h5",[e._v("Figura 2.")]),a("span",[e._v("Ejemplo de visualización para detección de sesgo de selección")])]),a("div",{staticClass:"bgfig p-5 brad mb-2"},[a("img",{staticClass:"img-a img-t",attrs:{src:s("e620"),alt:"La Figura 2 se denomina «Ejemplo de visualización para detección de sesgo de selección» y presenta un gráfico de barras que compara la distribución de diferentes grupos en el dataset frente a la población general."}})]),a("figcaption",[e._v("Fuente: OIT, 2024.")])])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"bloque-texto-g__texto p-4"},[a("p",{staticClass:"mb-0"},[e._v(" Como se puede observar en el gráfico, existen discrepancias notables entre la distribución de grupos en el dataset (barras azules) y la población general (barras rojas). El Grupo C muestra la mayor disparidad, estando significativamente subrepresentado en el dataset en comparación con su presencia en la población general. Por otro lado, el Grupo A está sobrerrepresentado. Estas diferencias son indicativas de un sesgo de selección que necesita ser abordado mediante técnicas de remuestreo o ponderación para asegurar que el dataset sea verdaderamente representativo. ")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_3"}},[a("h2",[e._v("2.3 Métodos de corrección")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"col-lg-4 my-3"},[a("img",{staticClass:"img-a img-t",attrs:{src:s("385b"),alt:""}})])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-lg-4 my-lg-0 my-3 j1"},[a("img",{staticClass:"img-t img-a",attrs:{src:s("3f47")}})]),a("div",{staticClass:"col-lg-8 my-lg-0 my-3"},[a("div",{staticClass:"bg4 brad p-3 j1 mb-4"},[a("p",{staticClass:"mb-0"},[e._v(" La corrección de sesgos debe realizarse con cautela, ya que métodos demasiado agresivos pueden introducir nuevos sesgos o distorsionar relaciones importantes en los datos. El objetivo no es eliminar completamente las diferencias en los datos, sino asegurar que estas diferencias reflejen variaciones reales y no prejuicios sistemáticos. ")])]),a("p",[e._v(" A continuación, se presenta una tabla que resume los métodos de corrección de sesgos según el tipo de sesgo identificado: ")])])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-lg-10"},[a("div",{staticClass:"titulo-sexto color-acento-botones"},[a("h5",[e._v("Tabla 2.")]),a("span",[e._v("Tabla 2. Sesgos y métodos de corrección")])]),a("div",{staticClass:"tabla-a color-acento-botones text-center"},[a("table",[a("caption",[e._v(" Fuente: OIT, 2024. ")]),a("thead",[a("tr",[a("th",[e._v("Tipo de sesgo")]),a("th",[e._v("Método de corrección")]),a("th",[e._v("Descripción")])])]),a("tbody",[a("tr",[a("td",[e._v("Sesgo de selección.")]),a("td",[e._v("Recolección adicional de datos.")]),a("td",[e._v(" Recolectar más datos para representar a todos los grupos. ")])]),a("tr",[a("td",[e._v("Sesgo de medición.")]),a("td",[e._v("Normalización de características.")]),a("td",[e._v("Ajustar las mediciones para reducir errores.")])]),a("tr",[a("td",[e._v("Sesgo de confirmación.")]),a("td",[e._v("Reponderación.")]),a("td",[e._v("Ajustar los pesos de las observaciones.")])]),a("tr",[a("td",[e._v("Sesgo implícito.")]),a("td",[e._v("Sobremuestreo y submuestreo.")]),a("td",[e._v("Balancear las clases para minimizar desigualdades.")])]),a("tr",[a("td",[e._v("Sesgo histórico.")]),a("td",[e._v("Algoritmos robustecidos frente a sesgos.")]),a("td",[e._v(" Modificar los algoritmos para reducir el impacto de los sesgos históricos. ")])]),a("tr",[a("td",[e._v("Sesgo de exclusión.")]),a("td",[e._v("Recopilación de variables relevantes.")]),a("td",[e._v(" Incluir variables que permitan explicar mejor los datos. ")])])])])])])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-lg-7 my-lg-0 my-3"},[a("p",[e._v(" El tratamiento adecuado de los sesgos es esencial para garantizar que los modelos de "),a("i",[e._v("machine learning")]),e._v(" sean equitativos y confiables. Sin un tratamiento adecuado, los modelos pueden perpetuar injusticias y proporcionar resultados que no sean útiles en la práctica. ")]),a("div",{staticClass:"bg9 brad p-3 j1"},[a("p",{staticClass:"mb-0"},[e._v(" Al concluir este capítulo, se debe enfatizar que el tratamiento de sesgos no solo mejora la precisión del modelo, sino que también es una responsabilidad ética. Las personas formadas en "),a("i",[e._v("machine learning")]),e._v(" deben tener en cuenta estos aspectos para construir modelos que sean justos y que proporcionen valor real en contextos del mundo real. ")])])]),a("div",{staticClass:"col-lg-5 my-lg-0 my-3 j1"},[a("img",{staticClass:"img-t img-a",attrs:{src:s("aac1")}})])])}],o={name:"Tema2",data:()=>({}),mounted(){this.$nextTick(()=>{this.$aosRefresh()})},updated(){this.$aosRefresh()}},r=o,n=s("2877"),c=Object(n["a"])(r,t,i,!1,null,null,null);a["default"]=c.exports},a43b:function(e,a,s){e.exports=s.p+"img/24.595f252b.png"},aac1:function(e,a,s){e.exports=s.p+"img/29.7aa10825.png"},e620:function(e,a,s){e.exports=s.p+"img/25.3d40bd66.svg"}}]);
//# sourceMappingURL=chunk-33f1ae3a.5a063a8e.js.map