export default {
  global: {
    componenteFormativo:
      'Fundamentos de la estructura, cargos y perfiles de la organización',
    descripcionCurso:
      'El análisis de cargos dentro de una compañía pretende determinar los requisitos que la empresa requiere en la cualificación, las responsabilidades y las condiciones que el cargo exige para ser desempeñado de manera adecuada. Este análisis sirve para evaluar y clasificar los puestos de trabajo, con el propósito de realizar la estructura organizacional de la empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/7.png'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/8.png'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/9.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estructura Organizacional',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Cargos y perfiles',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Identificación del cargo',
        desarrolloContenidos: true,
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
  complementario: [
    {
      tema: 'Estructura organizacional',
      referencia:
        'Editorial Grudemi (2018) Estructura organizacional. Recuperado de Enciclopedia Econòmica 2017-2022  https://enciclopediaeconomica.com/estructura-organizacional/',
      tipo: 'Artículo',
      link: 'https://enciclopediaeconomica.com/',
    },
    {
      tema: 'Estructura organizacional',
      referencia:
        'Aprendiz de mercadotecnia. (17 de mayo de 2020). ¿Qué es una estructura organizacional? 4 estructuras organizacionales que debes conocer [Archivo de video]. Youtube.  https://www.youtube.com/watch?v=0oXlq0NXmyY&t=211s',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=0oXlq0NXmyY&t=211s',
    },
    {
      tema: 'Identificación del cargo',
      referencia:
        'Edulentos regiones. (07 de octubre de 2019). El perfil del puesto [Archivo de video]. Youtube.  https://www.youtube.com/watch?v=URHFdurlnxc',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=URHFdurlnxc',
    },
    {
      tema: 'Estructura organizacional',
      referencia:
        'Zayas Agüero, P. M; Grave de Peralta, R. M. (2011) La función de la organización y el análisis y descripción, las especificaciones, la matriz para elaborar el perfil de las competencias de los cargos u ocupaciones https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/51730?fs_q=LA__FUNCI%C3%93N__DE__LA__ORGANIZACI%C3%93N',
      tipo: 'Manual',
      descarga:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/51730?fs_q=LA__FUNCI%C3%93N__DE__LA__ORGANIZACI%C3%93N__&prev=fs',
    },
  ],
  glosario: [
    {
      termino: 'Cargos',
      significado:
        'función de la cual una persona tiene la responsabilidad, tareas  en una organización, una empresa o una compañía.',
    },
    {
      termino: 'Competencias',
      significado:
        'son todas las habilidades, aptitudes y destrezas que adquiere la persona a través de su formación, tanto personal como profesional.',
    },
    {
      termino: 'Empresa',
      significado:
        'entidad en la que intervienen el capital y el trabajo como factores de producción de actividades industriales o mercantiles o para la prestación de servicios.',
    },
    {
      termino: 'Estructura organizacional lineal',
      significado:
        'este tipo de estructura es utilizada, por lo general, en empresas pequeñas que generan pocos productos en un nicho de mercado.',
    },
    {
      termino: 'Estructura organizacional matricial',
      significado:
        'divide la autoridad en grupos de trabajo funcionales que, generalmente, responden a un proyecto determinado.',
    },
    {
      termino: 'Estructura de staff',
      significado:
        'combina las relaciones y decisiones de autoridad con la ayuda y el asesoramiento de agentes externos a la organización, tales como consultores o asesores. Así, dentro de este tipo de estructura se lleva a cabo la subcontratación de actividades, a través de la cual los integrantes deben desarrollar sus tareas con empresas ajenas.',
    },
    {
      termino: 'Metodología',
      significado:
        'Conjunto de métodos que se siguen en una investigación científica, un estudio o una exposición doctrinal.',
    },
    {
      termino: 'Nivel jerárquico',
      significado:
        'representa un orden de las personas o actividades que devela la dependencia y subordinación entre sí.',
    },
    {
      termino: 'Organigrama',
      significado:
        'representación gráfica de la estructura de una empresa. Su objetivo es representar la cadena de mando dentro de la organización. Esta se representa a través de líneas, círculos o cuatros, que vinculan a un puesto de trabajo con otro.',
    },
    {
      termino: 'Tipos de niveles jerárquicos',
      significado:
        'los tipos de niveles jerárquicos dentro de la empresa son: nivel directivo o superior, nivel táctico o medio, nivel operativo o inferior.',
    },
  ],
  referencias: [
    {
      referencia:
        'Boyatzis, R.E. (1982): The Competent Manager. New York: Ed. John Wiley & Sons',
      link: '',
    },
    {
      referencia:
        'Bunk, G. (1994): La transmisión de las competencias en la formación y perfeccionamiento profesionales en la RFA. Ed. Revista CEDEFOP No. 1.',
      link: '',
    },
    {
      referencia:
        'Chiavenato, I. (1986): Introducción a la teoría general de la administración. México: Ed. Mc Graw Hill',
      link: '',
    },
    {
      referencia:
        'Editorial Grudemi (2018) Estructura organizacional. Recuperado de Enciclopedia Econòmica 2017-2022 ',
      link: 'https://enciclopediaeconomica.com/estructura-organizacional/ ',
    },
    {
      referencia:
        'Zayas Agüero, P. M; Grave de Peralta, R. M. (2011): La función de la organización y el análisis y descripción, las especificaciones, la matriz para elaborar el perfil de las competencias de los cargos u ocupaciones. Recuperado de',
      link: 'https://www.academia.net.co/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
