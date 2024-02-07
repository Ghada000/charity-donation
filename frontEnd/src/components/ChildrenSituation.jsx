
import React, { useState } from 'react';
import axios from 'axios';

function ChildrenSituation() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const uploadImage = async () => {
    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "donation");

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dgxva1ayc/upload',
        formData
      );
      setUrl(response.data.secure_url); 
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
      />
      <br />
      <button onClick={uploadImage}>Upload!</button>

      {url && <img src={url} alt="Uploaded" />} {/* Render the image if URL is not empty */}
    </div>
  );
}

export default ChildrenSituation;
