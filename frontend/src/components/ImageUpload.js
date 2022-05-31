import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
function ImageUpload() {
  const [file, setFile] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});
  const { uid } = useParams();
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new formData();
    formData.append("file", file);
    axios
      .put(`${API}/users/${uid}`, formData)
      .then((res) => {
        //get file name and path from backend
        const { fileName, filePath } = res.data;
        setUploadedFile({ fileName, filePath });
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" id="image-file" onChange={handleChange} />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default ImageUpload;
