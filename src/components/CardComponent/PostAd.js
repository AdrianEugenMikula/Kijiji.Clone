import React from "react";
import { useState, useEffect } from "react";
import { db, storage } from "../../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import "./PostAd.css";

const PostAd = () => {
  const [addProdName, setProdName] = useState([]);
  const [addProdPrice, setProdPrice] = useState(0);
  const [uploadPic, setUploadPic] = useState(null);
  const [imgURL, setImgURL] = useState("");
  const productsCollectionRef = collection(db, "products");

  const addProducts = async () => {
    await addDoc(productsCollectionRef, {
      name: addProdName,
      Price: addProdPrice,
      Image: imgURL,
    });
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
    <div className="postContainer">
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
      <button onClick={addProducts}>Submit</button>
    </div>
  );
};

export default PostAd;
