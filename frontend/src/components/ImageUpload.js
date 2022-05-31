import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../css/imageupload.css";

const API = process.env.REACT_APP_API_URL;
function ImageUpload({ setOwner }) {
  const [file, setFile] = useState("");
  //set return object in state not useful for now
  //   const [uploadedFile, setUploadedFile] = useState({});
  const navigate = useNavigate();
  const { uid, mentor_id, owner } = useParams();
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    const urlForTheRequest = uid
      ? `${API}/users/${uid}/upload`
      : mentor_id
      ? `${API}/mentors/${mentor_id}/upload`
      : `${API}/owners/${owner}/upload`;
    axios
      .post(`${urlForTheRequest}`, formData)
      .then((res) => {
        //get file name and path from backend
        // const { fileName, filePath } = res.data;
        // setUploadedFile({ fileName, filePath });
        if (owner) setOwner(res.data);
        const navUrl = uid
          ? `/users/${uid}`
          : mentor_id
          ? "/mentors"
          : "/about";
        navigate(`${navUrl}`);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="image">
      <form onSubmit={handleSubmit} className="image-upload">
        <div className="image-upload-first">
          <input type="file" id="image-input" onChange={handleChange} />
        </div>
        <div className="image-upload-second">
          <input type="submit" value={"Upload"} />
        </div>
      </form>
    </div>
  );
}

export default ImageUpload;
