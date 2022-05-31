import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
function ImageUpload() {
  const [file, setFile] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});
  const navigate = useNavigate();
  const { uid, mentor_id } = useParams();
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    const urlForTheRequest = !uid
      ? `${API}/mentors/${mentor_id}/upload`
      : `${API}/users/${uid}/upload`;
    axios
      .post(`${urlForTheRequest}`, formData)
      .then((res) => {
        //get file name and path from backend
        const { fileName, filePath } = res.data;
        setUploadedFile({ fileName, filePath });
        const navUrl = uid ? `/users/${uid}` : `/mentors`;
        navigate(`${navUrl}`);
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
