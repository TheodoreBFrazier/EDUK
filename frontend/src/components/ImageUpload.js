import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../css/imageupload.css";
import { Button } from "@mui/material";

var buttonStyle = {
  height: "400px",
  width: "250px",
};

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
    formData.append("photo", file);
    const urlForTheRequest = uid
      ? `${API}/users/${uid}/upload`
      : mentor_id
      ? `${API}/mentors/${mentor_id}/upload`
      : `${API}/owners/${owner}/upload`;
    console.log(urlForTheRequest);
    axios
      .post(`${urlForTheRequest}`, formData)
      .then((res) => {
        // if (owner) {
        //   const owner = res.data;
        //   localStorage.setItem(`${owner.ownerName}`, `${owner.filePath}`);
        //   setOwner(res.data);
        // }
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
      <div className="upload-intro">
        <h1>Show yourself off!</h1>
        <p>Add a photo for your user profile.</p>
      </div>
      <form onSubmit={handleSubmit} className="image-upload">
        <div className="image-upload-first">
          <input
            className="input-button"
            type="file"
            id="image-input"
            onChange={handleChange}
          />
        </div>
        <div className="image-upload-second">
          <Button style={buttonStyle} variant="text" size="small">
            <input type="submit" value={"Upload"} />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ImageUpload;
