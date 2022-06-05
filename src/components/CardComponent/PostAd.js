import React from "react";
import { useState, useEffect } from "react";
import { db, storage } from "../../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useForm } from "react-hook-form";
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

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <form className="postContainer" onSubmit={handleSubmit(addProducts)}>
      <h1>Post an Ad</h1>
      <label>Name</label>
      <input
        placeholder="enter the name"
        type="text"
        onChange={(event) => {
          setProdName(event.target.value);
        }}
        {...register("name", { required: true })}
      />
      <label style={{ color: "red" }}>
        {errors.name?.type === "required" && "Name is required"}
      </label>
      <br />
      <label>Price</label>
      <input
        placeholder="enter the price"
        type="number"
        onChange={(event) => {
          setProdPrice(event.target.value);
        }}
        {...register("price", {
          required: true,
          pattern: /^[0-9]+$/i,
        })}
      />
      <label style={{ color: "red" }}>
        {errors.email?.type === "required" && "Price is required"}
        {errors.email?.type === "pattern" && "Entered price is in wrong format"}
      </label>
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
      <button className="btnSubmit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default PostAd;
