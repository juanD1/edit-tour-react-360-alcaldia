import React, { useState } from "react";
import Swal from "sweetalert2";

const SrcWidget = (props) => {
  const { title } = props.uiSchema["ui:options"];
  const [file, setFile] = useState(null);

  const handleOnChange = (e) => {
    const filesToUpload = e.target.files[0];
    uploadFile(filesToUpload);
  };

  const uploadFile = async (fileToUpload) => {
    console.log("HOLAAA uploadFile");

    const data = new FormData();
    data.append("file", fileToUpload);

    const response = await fetch(
      "http://sistemasunipilotogirardot.co/api/scenes/images",
      {
        method: "POST",
        body: data,
      }
    ).then((response) => response.json());

    const { path, message } = response;
    setFile(path);
    props.onChange(path);

    Swal.fire({
      title: message,
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <div>
      <p style={{ color: "#0000008a" }}>{title}</p>
      <input type="file" onChange={(e) => handleOnChange(e)} />
      <p style={{ marginTop: 15, color: "#0000008a" }}>
        Archivo actual: {props.formData}
      </p>
    </div>
  );
};

export default SrcWidget;
