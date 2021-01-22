import SrcWidget from "../components/SrcWidget";

export const schema = {
  title: "Editar Tour",
  type: "object",
  properties: {
    firstScene: {
      title: "Primera escena",
      type: "object",
      properties: {
        name: {
          title: "Identificador de escena",
          type: "string",
        },
        img: {
          title: "Subir Imagen",
          type: "string",
        },
      },
    },
    scenes: {
      title: "Escenarios",
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            title: "Identificador de escena",
            type: "string",
          },
          img: {
            title: "Subir Imagen",
            type: "string",
          },
          tooltips: {
            title: "Información",
            type: "array",
            items: {
              type: "object",
              properties: {
                width: {
                  title: "Ancho",
                  type: "number",
                },
                height: {
                  title: "Alto",
                  type: "number",
                },
                yaw: {
                  title: "Posicion horizontal (acepta numeros negativos)",
                  type: "number",
                },
                pitch: {
                  title: "Posicion vertical (acepta numeros negativos)",
                  type: "number",
                },
                text: {
                  title: "Titulo",
                  type: "string",
                },
                description: {
                  title: "descripción (opcional)",
                  type: ["null", "string"],
                },
                medios: {
                  title: "Medios (Imagen o Video)",
                  type: "object",
                  anyOf: [
                    {
                      title: "Imagen",
                      properties: {
                        img: {
                          title: "Imagen",
                          type: "string",
                        },
                      },
                    },
                    {
                      title: "Video",
                      properties: {
                        vid: {
                          title: "Video",
                          type: "string",
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
          transitions: {
            title: "Transiciones (redirecciones a otras escenas)",
            type: "array",
            items: {
              type: "object",
              properties: {
                goesTo: {
                  title:
                    "Ir a (agrega el nombre de la escena a la que quieres redireccionar)",
                  type: "string",
                },
                width: {
                  title: "Ancho",
                  type: "number",
                },
                height: {
                  title: "Alto",
                  type: "number",
                },
                yaw: {
                  title: "Posicion horizontal (acepta numeros negativos)",
                  type: "number",
                },
                pitch: {
                  title: "Posicion vertical (acepta numeros negativos)",
                  type: "number",
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
  firstScene: {
    img: {
      "ui:widget": SrcWidget,
      "ui:field": "srcWidget",
      "ui:options": {
        title: "Imagen primera escena (igual al primer item de ESCENARIOS)",
      },
    },
  },
  scenes: {
    items: {
      img: {
        "ui:widget": SrcWidget,
        "ui:field": "srcWidget",
        "ui:options": {
          title: "Cargar imagen 360°",
        },
      },
      tooltips: {
        items: {
          medios: {
            img: {
              "ui:widget": SrcWidget,
              "ui:field": "srcWidget",
              "ui:options": {
                title: "Cargar imagen",
              },
            },
            vid: {
              "ui:widget": SrcWidget,
              "ui:field": "srcWidget",
              "ui:options": {
                title: "Cargar Video",
              },
            },
          },
        },
      },
    },
  },
  "ui:order": ["firstSceneId", "*"],
};

export const fields = { srcWidget: SrcWidget };
