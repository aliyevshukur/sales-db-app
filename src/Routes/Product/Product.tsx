import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { text } from "stream/consumers";
import "../../_animations.scss";
import Button from "../../Components/Button/Button";
import { getSingleProduct, handleOnPurchase, itemType } from "../../db";
import { CartContext } from "../App";
import Features from "./Components/Features/Features";
import FrequencyCard from "./Components/FrequencyCard/FrequencyCard";
import MaterialCard from "./Components/MaterialCard/MaterialCard";
import "./Product.scss";

function Product() {
  const { productId } = useParams();
  const [productData, setProductData] = useState<itemType>([] as any);
  const [cartItems, setCartItems] = useContext<itemType[]>(CartContext);

  useEffect(() => {
    if (productId) {
      getSingleProduct("shopItemsStore", productId)
        .then((data) => {
          setProductData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [productId]);

  return (
    <div className='product-wrapper'>
      <div className='product'>
        <div className='product-leftPanel'>
          <div className='product-leftPanel-name'>{productData?.name}</div>
          <MaterialCard />
          <FrequencyCard />
          <Button
            title='Add to card'
            className='product-leftPanel-purchase'
            onClick={() => handleOnPurchase(productData, setCartItems)}
          />
        </div>
        <div className='product-middlePanel'>
          <div className='product-middlePanel-rightLine'></div>
          <img
            src={productData?.img}
            alt='product image'
            className='product-middlePanel-img'
          />
          <div className='product-middlePanel-leftLine'></div>
        </div>
        <div className='product-rightPanel'>
          <div className='product-rightPanel-dolby'></div>
          <Features />
          <div className='product-rightPanel-alexa'></div>
        </div>
      </div>
    </div>
  );
}

export default Product;
