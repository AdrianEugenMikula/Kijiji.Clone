import React from "react";
import { useState, useEffect } from "react";
import { db, storage } from "../../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { v4 } from "uuid";
import "./PostAd.css";
import { useNavigate } from "react-router-dom";
import NavMenu from "../NavMenu";

const PostAd = () => {
  const [addProdName, setProdName] = useState([]);
  const [addProdPrice, setProdPrice] = useState(0);
  const [uploadPic, setUploadPic] = useState(null);
  const [imgURL, setImgURL] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [error, setError] = useState("");
  const productsCollectionRef = collection(db, "products");
  let navigate = useNavigate();

  const addProducts = async () => {
    try {
      await addDoc(productsCollectionRef, {
        name: addProdName,
        Price: addProdPrice,
        Image: imgURL,
        Type: selectedValue,
      });
      alert("Ad Posted Sucessfully");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  const addProdPic = () => {
    if (uploadPic == null) return;
    const imageRef = ref(storage, `images/${uploadPic.name + v4()}`);
    uploadBytes(imageRef, uploadPic).then(() => {
      alert("Image uploaded");
      getDownloadURL(imageRef).then((downloadUrl) => {
        console.log(downloadUrl);
        setImgURL(downloadUrl);
        console.log(setImgURL(downloadUrl));
      });
    });
  };

  useEffect(() => {}, []);

  return (
    <>
    <NavMenu/>
      <div className="postContainer">
        {error && (
          <h2 style={{ color: "red", textAlign: "center" }}>{error}</h2>
        )}
        <h1>Post an Ad</h1>
        <label>Name</label>
        <input
          placeholder="enter the name"
          type="text"
          onChange={(event) => {
            setProdName(event.target.value);
          }}
        />
        <br />
        <label>Price</label>
        <input
          placeholder="enter the price"
          type="number"
          onChange={(event) => {
            setProdPrice(event.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="file"
          accept="image/*"
          onChange={(event) => {
            setUploadPic(event.target.files[0]);
          }}
        />
        <button onClick={addProdPic}>Upload Image</button>
        <br />
        <br />
        <select
          id="selectedValue"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="Vehicles">Vehicles</option>
          <option value="RealEstate">Real Estate</option>
          <option value="Jobs">Jobs</option>
          <option value="Services">Services</option>
          <option value="VacationRentals">Vacation Rentals</option>
          <option value="Pets">Pets</option>
        </select>
        <p>Ad Type: {selectedValue}</p>
        <button onClick={addProducts}>Submit</button>
      </div>
    </>
  );
};

export default PostAd;
