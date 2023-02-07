<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estructura Organizacional
   
    .row.mt-2.justify-content-center
      .col-10.col-lg-10.mt-1
      p Dando  inicio al desarrollo de los conceptos más relevantes, se debe tener en cuenta el término de “Organigrama”, ya que es la representación gráfica de la estructura de una empresa, su objetivo es representar la cadena de mando dentro de la organización. Esta se representa a través de líneas, círculos o cuadros, que vinculan un puesto de trabajo con otro.
  
    .bg1
      .row.mt-4.justify-content-center
        .col-11
          .bloque-texto-g.color-acento-contenido.p-5.p-sm-5.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/Tema1/Imagen1.png')})`}"
            )
            .bloque-texto-g__texto.p-5
              p La estructura organizacional son las tareas y actividades que se ejecutan en una compañía, las cuales son reunidas en diferentes secciones o departamentos que tiene la empresa.
              span.mt-5.d-block
        
              p La importancia de este modelo es la de estructurar correctamente las tareas de cada área para, de esta forma, cumplir con los objetivos que la organización quiere alcanzar. El esquema se representa gráficamente a través de un organigrama. Revise las características de la estructura organizacional, que se destacan a continuación:
        

        .row.justify-content-center.mt-5
          .col-lg-30
            PasosA.color-acento-contenido.mb-5(tipo="l")
              .row
                .col-lg.mt-5
                  p.mt-5 Las diferentes áreas se pueden apreciar a partir del tamaño que tenga la empresa. De esta forma se visualizará por áreas o departamentos. 
                .col-auto
                    img(src='@/assets/curso/temas/Tema1/ImagenA.png', alt='').img125

              .row.justify-content-center
                .col-lg-5
                    img(src='@/assets/curso/temas/Tema1/ImagenB.png', alt='')
                .col-lg
                .col-lg-6
                  p.mt-5.text-aling Se puede clasificar en  centralizada o descentralizada, dependiendo del enfoque de la compañía, ya que cuando se habla de centralizada, toda la información relevante se concentra en personas que ejercen altos cargos dentro de la organización, mientras que la descentralizada se realiza por equipos de trabajo.

              .row.justify-content-center
                .col-lg.mt-5
                  p.mt-5 Compromiso y colaboración entre las  diferentes áreas de la empresa.
                .col-auto
                    img(src='@/assets/curso/temas/Tema1/ImagenC.png', alt='').img125

              .row
                .col-auto
                    img(src='@/assets/curso/temas/Tema1/ImagenD.png', alt='').img125
                .col-lg
                  p.mt-5 Identificación de las personas que hacen parte de la compañía.

              .row
                .col-lg
                  p.mt-5 Los objetivos planteados son alcanzables y viables, teniendo en cuenta la adopción de las herramientas tecnológicas que haya hecho la empresa.
                .col-auto
                    img(src='@/assets/curso/temas/Tema1/ImagenE.png', alt='').img125
              .row
                .col-auto
                    img(src='@/assets/curso/temas/Tema1/ImagenF.png', alt='').img125
                .col-lg-1
                .col-lg
                  p.mt-5.text-aling Dentro de las compañías se debe manejar no solamente el carácter de formalidad, sino también el de informalidad entre los compañeros que integran las instituciones, esto hace que el trabajo se haga más motivante.
              
      .row.justify-content-start.align-items-center.mb-2        
        .col-lg-5
          .bgp.p-1
            h3.mb-0 Importancia de la estructura organizacional

      .row.mt-4.px-5
        .col-6.col-lg-1.px-1
          .bg4
            figure
              img(src='@/assets/curso/temas/Tema1/Icono1.svg', alt='Texto que describa la imagen').imagen-deco

        .col-lg-11.px-5
          .cajon.color-acento-contenido.p-4
             p Es fundamental que toda empresa, sin importar su tamaño, cuente con una estructura organizacional que esté diseñada a partir de los objetivos que se desean alcanzar.
             p.mb-0 Además de permitir crecer y ser rentable, esta estructura ayudará a identificar los talentos que necesita la empresa, y así contar con el personal suficiente para alcanzar los objetivos establecidos y mejorar la eficiencia operativa. 


        p.mt-4.px-1 Existen diferentes formas de organizar el talento humano en una empresa; los esquemas más usados son: lineal, funcional, de <i>staff </i>y matricial. A continuación, se detalla cada uno de estos:
      
      .tarjeta.tarjeta-morada.p-3
        SlyderA(tipo="b").bg5
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-4.mb-2.mb-md-0
              h3.mb-5 La estructura organizacional lineal
              p El mando directo de este tipo de esquema se realiza con la autoridad directa de un líder o jefe, sobre las personas a cargo o subordinados. Dicho líder es el que toma las decisiones y se hace responsable del área. Se utiliza en compañías  pequeñas que generan pocos productos.
            .col-md-1
            .col-md-5.mt-3
              figure
                img(src='@/assets/curso/temas/Tema1/Slider1.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-4.mb-2.mb-md-0
              h3.mb-5 La estructura organizacional funcional
              p Este esquema se desenvuelve de acuerdo al conocimiento y especialización de cada empleado, es decir, se aplican las competencias, habilidades y destrezas que posee cada persona. De esta forma ejerce sus funciones de manera más adecuada, por lo que se hace eficiente y genera resultados positivos. Cada área o departamento tiene un responsable. 
            
            .col-md-6.mt-5
              figure
                img(src='@/assets/curso/temas/Tema1/Slider2.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-4.mb-2.mb-md-0
              h3.mb-5 La estructura organizacional de staff
              p En este tipo de esquema se tiene en cuenta el asesoramiento de consultores o asesores externos. Por lo tanto los integrantes de la empresa realizan las actividades con compañías externas. 
            .col-md-1
            .col-md-5.mt-5
              figure
                img(src='@/assets/curso/temas/Tema1/Slider3.svg', alt='Texto que describa la imagen')
          
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-4.mb-2.mb-md-0
              h3.mb-5 Estructura organizacional matricial
              p Este esquema actúa por grupos de trabajo funcionales, los cuales  son responsables de un proyecto asignado. Los grupos de trabajo tienen un líder que es el supervisor del proyecto. Este a su vez responde a los directivos de la compañía. 
            .col-md-1
            .col-md-5.mt-5
              figure
                img(src='@/assets/curso/temas/Tema1/Slider4.svg', alt='Texto que describa la imagen')
          

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
