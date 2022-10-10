<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo2
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Cargos y perfiles

    .bg2
      .row.mt-4.px-5  
        .col-6.col-lg-1.px-1
          .bg4.px-1
           figure
             img(src='@/assets/curso/temas/Tema2/Icono1.svg', alt='Texto que describa la imagen').imagen-deco
              
        .col-5.col-lg-11.px-5
          .cajon.colortexto.p-4.color-primario
              p Ahora bien, todas las organizaciones necesitan establecer una estructura clara de los miembros que requiere y de las funciones que estos deben asumir en las diversas dependencias. Determinar los cargos y perfiles de una empresa facilita el mapeo organizacional y el panorama general de la función de cada puesto dentro de la organización. Además, se visualizan los objetivos a cumplir, los requisitos del perfil de quien desee ocupar el puesto y las relaciones entre los cargos. 
      
      .row.justify-content-center.align-items-center.my-4
        .col-lg-8.d-flex.justify-content-center
          .tarjeta.tarjeta-acento-contenido.col-md-8.px-5
            figure
              img(src='@/assets/curso/temas/Tema1/Imagen2.svg', alt='Texto que describa la imagen').px-5

      p.mt-4 Las organizaciones establecen diferentes cargos esenciales para los estamentos establecidos. Es por esto que cada cargo requiere de un perfil que permita desempeñar las funciones y responsabilidades exigidas. 
      p A continuación, lo invitamos a ver un video donde se profundiza sobre este tema.

      .row.mt-4
        .col-lg-8
        figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption   VIDEO
      
      .row.justify-content-start.align-items-center.mb-5.mt-4           
        .col-lg-5
          .bgp.p-1
           h3.mb-0 Las competencias

      .row.justify-content-center.align-items-center.mt-5      
          .col-lg-9
            .cajon.color-acento-contenido.p-4
              p Para elegir los cargos y perfiles, como se mencionó anteriormente es fundamental identificar las competencias. Estas son todas las habilidades, aptitudes y destrezas que adquiere la persona a través de su formación, tanto personal como profesional. Existen diferentes autores que han trabajado en la identificación de los principales tipos de competencias.

      p.mt-4 A continuación, se destacan los autores que definen el término de competencia.

      .tarjeta.tarjeta-morada.p-3
        SlyderA(tipo="b").bg5
          .row.justify-content-center.my-lg-4
            .col-md-4.mb-2.mb-md-0.mt-5
              p Las competencias son configuraciones en las que se produce una integración de los objetivos, los resultados esperados, las características de la actividad y los valores organizacionales, con los requisitos cognitivos, afectivos, físicos y sociales integrados que son necesarios para desempeñar con éxito determinadas funciones. (Zayas Agüero, P. M., 2011, p.61). 
            .col-md-1
            .col-md-5.mt-5
              figure
                img(src='@/assets/curso/temas/Tema1/Slider5.png', alt='Texto que describa la imagen')

          .row.justify-content-center.my-lg-4
            .col-md-4.mb-2.mb-md-0.mt-5
              p “Las competencias críticas (en inglés, core competencies) son aquellas que posibilitan desarrollar un desempeño exitoso en diferentes contextos.  Se pueden clasificar en competencias técnicas, metodológicas, sociales y participativas.”  (G. Bunk, 1994, s.p)
            .col-md-1
            .col-md-5.mt-5
              figure
                img(src='@/assets/curso/temas/Tema1/Slider6.png', alt='Texto que describa la imagen')

          .row.justify-content-center.my-lg-4
            .col-md-4.mb-2.mb-md-0.mt-5
              p La función de la organización y el análisis y descripción, las especificaciones, la matriz para elaborar el perfil de las competencias de los cargos u ocupaciones, las competencias laborales se clasifican en competencias técnicas o del puesto y competencias directivas. Los tipos de competencias directivas son: estratégicas, intra estratégicas y de eficacia personal. Las competencias directivas son las que se refieren a la capacidad estratégica de un directivo y su relación con el entorno externo de la empresa. Para este grupo es posible incluir: visión de negocio, resolución de problemas, gestión de recursos, orientación al cliente y la red de relaciones. (Zayas Agüero, P. M., 2011, p.58). 
            .col-md-1
            .col-md-5.mt-5
              figure
                img(src='@/assets/curso/temas/Tema1/Slider7.png', alt='Texto que describa la imagen')
          
              






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
