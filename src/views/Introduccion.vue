<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    
    .row.mt-4.px-5
      .col-6.col-lg-1.px-1
        .bg4.px-1
          figure
            img(src='@/assets/curso/temas/Introduccion/Icono1.svg', alt='Texto que describa la imagen').imagen-decorativa-1
        
      .col-5.col-lg-11.px-5
        p Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán los conceptos básicos de estructura organizacional en las empresas, cargos y perfiles, identificación del cargo y metodología para la identificación del mismo. 
        p De esta manera se busca comprender cómo funcionan los puestos de trabajo dentro de la empresa de acuerdo con su estructura organizacional.

      p.mt-4.px-1  En el siguiente video conocerá, de forma general, la temática que se estudiará en el presente recurso educativo.


    .row.mt-4
      .col-lg-6
       figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption   VIDEO
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
