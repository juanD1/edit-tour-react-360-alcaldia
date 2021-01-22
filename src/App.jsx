import React, { useState, useEffect } from "react";
import Form from "@rjsf/material-ui";
import Swal from "sweetalert2";
import Spinner from "./components/Spinner";
import mainTour from "./static_assets/mainTour.json";
import { serializeParams, successAlert } from "./utils";
// import { schema, uiSchema, fields } from "./constants/schema";
import { schema, uiSchema, fields } from "./constants/newSchema";

const btnStyles = {
  margin: 15,
};

const App = () => {
  const [loading, setLoading] = useState(false);

  // const [loading, setLoading] = useState(true);
  const [jsonTour, setJsonTour] = useState(null);
  const [jsonTourId, setJsonTourId] = useState(null);

  // useEffect(() => {
  //   if (!jsonTour) {
  //     getTour();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const getTour = async () => {
    const response = await fetch(
      "http://50.116.32.42/api/scenes/1"
    ).then((response) => response.json());

    const { scenes } = response;
    const { id, json } = scenes;
    const mainTourJson = JSON.parse(json);

    setJsonTour(mainTourJson);
    setJsonTourId(id);
    setLoading(false);
  };

  const onChange = ({ formData }) => {
    setJsonTour(formData);
  };

  const updateRecords = async (id, status, json) => {
    const params = {
      id,
      status,
      json: JSON.stringify(json),
    };
    const urlencodedParam = serializeParams(params);

    const response = await fetch("http://50.116.32.42/api/scenes", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlencodedParam,
    });

    return response;
  };

  const handlePreview = async () => {
    await updateRecords(2, 2, jsonTour);
    const messageData = {
      title: "¡Preview Guardado con Exito!",
      text:
        'Da click en "Previsualizar" para ver tus cambios en el tour, ¡luego guarda!',
    };
    successAlert(messageData);
  };

  const handleSave = async () => {
    await updateRecords(1, 1, jsonTour);
    const messageData = {
      title: "¡Guardado con Exito!",
      text: "Has Guardado cambios en la ruta satisfactoriamente",
    };
    successAlert(messageData);
  };

  const handleRouteByDefault = () => {
    Swal.fire({
      title: "¿Esta seguro de volver a la ruta por defecto?",
      text: "Esta acción no se podra deshacer",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        setJsonTour(mainTour);
        Swal.fire({
          title: "Volviste a la ruta por defecto!",
          text: "Recuerda guardar",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <div className="container">
          <Form
            schema={schema}
            uiSchema={uiSchema}
            fields={fields}
            formData={jsonTour}
            onChange={onChange}
          >
            <button
              className="btn btn-info"
              style={btnStyles}
              onClick={() => handlePreview()}
            >
              Guardar Previsualizar
            </button>
            <button
              className="btn btn-success"
              style={btnStyles}
              onClick={() => handleSave()}
            >
              Guardar
            </button>
            <button
              className="btn btn-warning"
              style={{ color: "white", ...btnStyles }}
              onClick={() => handleRouteByDefault()}
            >
              Ruta Por Defecto
            </button>
          </Form>
        </div>
      )}
    </>
  );
};

export default App;
