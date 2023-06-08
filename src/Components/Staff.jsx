import React, { useState } from 'react';
//import './Gallery.css';
import radImage from './galleryimages/rad.jpg';
import '../App.css'


export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };


  return (
    <div>
      <h1>Staff</h1>
      <div className="photo-grid">
        <div
          className="card card-tall card-wide"
          style={{
            backgroundImage:`url(${radImage})` ,
          }}
          onClick={() => handleImageClick(radImage)}

        >
          1
        </div>
        <div
          className="card card-tall"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1594067603478-4d35f080c9a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60&q=60')",
          }}
        >
          2
        </div>
        <div
          className="card"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60')",
          }}
        >
          3
        </div>
        <div
          className="card"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1530026454774-50cce722a1fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')",
          }}
        >
          4
        </div>
        <div
          className="card"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1583532452513-a02186582ccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          5
        </div>
        <div
          className="card"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469119992929-dce58295cb02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxob3NwaXRhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60')",
          }}
        >
          6
        </div>
        <div
          className="card card-wide"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1583562835057-a62d1beffbf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=949&q=80')",
          }}
        >
          7
        </div>
        <div
          className="card"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1583483425010-c566431a7710?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80')",
          }}
        >
          8
        </div>
        <div
          className="card"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1583500557349-fb5238f8d946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80')",
          }}
        >
          9
        </div>
        <div
          className="card"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1583468323330-9032ad490fed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80')",
          }}
        >
          10
        </div>
        <div
          className="card"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1583425423320-2386622cd2e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1980&q=80')",
          }}
        >
          11
        </div>
        <div
          className="card"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1583518257225-f9a8081f6a84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          12
        </div>
        {selectedImage && (
        <div className="overlay" onClick={closeImage}>
          <div className="image-container">
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}

      </div>
    </div>
  );
}