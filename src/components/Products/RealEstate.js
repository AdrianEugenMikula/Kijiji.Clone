import React, { useState, useEffect } from "react";
import NavMenu from "../NavMenu";
import "../CardComponent/RecommendationsCarousel.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { query, where } from "firebase/firestore";

export const RealEstate = () => {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  const q = query(productsCollectionRef, where("Type", "==", "RealEstate"));
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(q);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProducts();
  }, []);

  return (
    <>
      <NavMenu />
      <div className="cardContainer">
        {products.map((product) => {
          return (
            <div className="cards">
              <Card sx={{ width: 265 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height=""
                    image={product.Image}
                    sx={{ height: 185 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                      <b> {product.name}</b>
                      <br />
                      <b style={{ color: "limegreen" }}> ${product.Price}</b>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};
