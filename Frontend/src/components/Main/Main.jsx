import React, { useState } from "react";
import NavbarMain from "./NavbarMain";
import UploadPic from "../../images/upload-pic.png";
import "../../App.css";
import "./Main.css";

export default function Main() {
  const [image, setImage] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0]; // only 1 image
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // wait for image to load first
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setImage(null);
  };

  return (
    <div>
      <NavbarMain />
      <div className="main-container">
        <div className="main-div">
          <div className="main-header">
            <h4>Count Maize Tassels</h4>
          </div>
          <div
            className="upload-div"
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {image ? (
              <img src={image} alt="Upload Image" />
            ) : (
              <label htmlFor="fileInput">
                <div className="image-div">
                  <input
                    type="file"
                    accept="image/*"
                    multiplay={false}
                    onChange={handleFile}
                    style={{ display: "none" }}
                    id="fileInput"
                  />
                  <img src={UploadPic} alt="Upload" />
                  <p>
                    Click to upload or drag and drop SVN, PNG (MAX, 800×400px)
                  </p>
                </div>
              </label>
            )}
          </div>
          {image && (
            <div className="reset-button">
              <button onClick={handleReset}>Reset Image</button>
            </div>
          )}
        </div>
        <div className="main-div">
          <div className="main-header">
            <h4>Results</h4>
          </div>
          <div className="result-div"></div>
        </div>
      </div>
    </div>
  );
}
