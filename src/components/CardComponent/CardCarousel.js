import React, { useState, useEffect } from "react";
import "./CardCarousel.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const CardCarousel = () => {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "homepageGallary");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProducts();
  }, []);

  return (
    <div className='cardContainer'>
      {products.map((product) => {
        return (
          <div className='cards'>
            <Card sx={{ maxWidth: 160 }}>
              <CardActionArea>
                <CardMedia component='img' height='' image={product.Image} />
                <CardContent>
                  <Typography gutterBottom variant='h7' component='div'>
                    <b> {product.name}</b>
                    <b> ${product.Price}</b>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default CardCarousel;
