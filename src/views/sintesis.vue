<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center
      .col-lg-8.sm-8
        .titulo-sexto.color-orange
           b Gestión integral de procesos del talento humano
           p Síntesis: Fundamentos de la estructura, cargos y perfiles de la organización
      .col-lg-2
          figure
            img(src="@/assets/curso/temas/g4.svg" width='89,61' height='86,7')

      p.mt-5.col-lg-10 En el siguiente mapa conceptual podemos encontrar los elementos claves que conforman este componente formativo y las metodologías aplicadas a los cargos.  Aquí se sintetizan los abordajes estudiados con el objetivo de ser una herramienta de análisis y conclusión de este material educativo. 

    .row.justify-content-center
      .col-lg-10.mb-5.mt-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")

      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


    
      
    

</template>

<script>
export default {
  name: 'Sintesis',
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
