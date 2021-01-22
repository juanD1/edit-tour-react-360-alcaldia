import SrcWidget from '../components/SrcWidget';

export const schema = {
  title: 'Editar Tour',
  type: 'object',
  properties: {
    firstSceneId: {
      title: 'Identificador de primera escena',
      type: 'string',
    },
    scenes: {
      title: 'Escenarios',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            title: 'Identificador de escena',
            type: 'string',
          },
          photopanos: {
            title: 'Imagen 360°',
            type: 'array',
            items: [
              {
                type: 'object',
                properties: {
                  src: {
                    type: 'string',
                    title: 'Cargar imagen',
                  },
                  rotateY: {
                    type: 'number',
                    title: 'Rotacion en Y',
                  },
                  TranslateX: {
                    type: 'number',
                    title: 'Trasladar en X',
                  },
                },
              },
            ],
          },
          navs: {
            title: 'Navegacion',
            type: 'array',
            items: {
              type: 'object',
              properties: {
                to: {
                  type: 'string',
                  title: 'redireccionar a',
                },
                text: {
                  type: 'string',
                  title: 'texto',
                },
                fontSize: {
                  type: 'number',
                  title: 'tamaño del texto',
                },
                rotateY: {
                  type: 'number',
                  title: 'Rotacion en Y',
                },
                rotateZ: {
                  type: 'number',
                  title: 'Rotacion en Z',
                },
                icon: {
                  type: 'string',
                  title: 'Icono',
                },
                iconTranslateX: {
                  type: 'number',
                  title: 'Transladar icono en X',
                },
                iconTranslateY: {
                  type: 'number',
                  title: 'Transladar icono en Y',
                },
                iconTranslateZ: {
                  type: 'number',
                  title: 'Transladar icono en Z',
                },
                iconWidth: {
                  type: 'number',
                  title: 'Ancho del icono',
                },
                iconHeight: {
                  type: 'number',
                  title: 'Alto del icono',
                },
                nextRotateY: {
                  type: 'number',
                  title: 'Siguiente rotacion en Y',
                },
              },
            },
          },
          infos: {
            title: 'Informacion',
            type: 'array',
            items: {
              type: 'object',
              properties: {
                card: {
                  title: 'Tarjeta informativa',
                  type: 'array',
                  items: {
                    type: 'object',
                    oneOf: [
                      {
                        title: 'Medios',
                        type: 'object',
                        properties: {
                          type: {
                            title: 'Tipo',
                            type: 'string',
                            enum: ['video', 'image'],
                            enumNames: ['Video', 'Imagen'],
                          },
                          src: {
                            // debe ser un boton.
                            // type: ['null', 'array'],
                            type: 'string',
                            title: 'Cargar medios',
                          },
                          ratio: {
                            type: 'number',
                            title: 'Proporcion',
                          },
                        },
                      },
                      {
                        title: 'Texto',
                        type: 'object',
                        properties: {
                          type: {
                            title: 'Tipo',
                            type: 'string',
                            enum: ['header', 'content', 'footer'],
                            enumNames: [
                              'Cabecera',
                              'Contenido',
                              'Pie de pagina',
                            ],
                          },
                          txt: {
                            title: 'Texto',
                            type: 'string',
                          },
                          textColor: {
                            title: 'Color del Texto',
                            type: 'string',
                          },
                          fontSize: {
                            title: 'Tamaño del Texto',
                            type: 'number',
                          },
                        },
                      },
                    ],
                  },
                },
                icon: {
                  // debe ser un boton.
                  type: 'string',
                  title: 'Icono',
                },
                iconWidth: {
                  type: 'number',
                  title: 'Ancho del icono',
                },
                iconHeight: {
                  type: 'number',
                  title: 'Alto del icono',
                },
                rotateX: {
                  type: 'number',
                  title: 'Rotacion en X',
                },
                rotateY: {
                  type: 'number',
                  title: 'Rotacion en Y',
                },
                rotateZ: {
                  type: 'number',
                  title: 'Rotacion en Z',
                },
              },
            },
          },
        },
      },
    },
  },
};

export const uiSchema = {
  scenes: {
    items: {
      photopanos: {
        items: {
          src: {
            'ui:widget': SrcWidget,
            'ui:field': 'srcWidget',
            'ui:options': {
              title: 'Cargar imagen 360°',
            },
          },
        },
      },
      navs: {
        items: {
          icon: {
            'ui:widget': SrcWidget,
            'ui:field': 'srcWidget',
            'ui:options': {
              title: 'Cargar Icono',
            },
          },
        },
      },
      infos: {
        items: {
          card: {
            items: {
              src: {
                'ui:widget': SrcWidget,
                'ui:field': 'srcWidget',
                'ui:options': {
                  title: 'Cargar Medio',
                },
              },
            },
          },
          icon: {
            'ui:widget': SrcWidget,
            'ui:field': 'srcWidget',
            'ui:options': {
              title: 'Cargar Icono',
            },
          },
        },
      },
    },
  },
  'ui:order': ['firstSceneId', '*'],
};

export const fields = { srcWidget: SrcWidget };
