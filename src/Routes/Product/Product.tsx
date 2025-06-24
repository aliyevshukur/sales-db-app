import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import { getSingleProduct, itemType } from '../../db';
import MaterialCarousel from './MaterialCarousel/MaterialCarousel';
import './Product.scss';
import SlideButton from './SlideButton/SlideButton';



function Product() {
    const { productId } = useParams();
    const [productData, setProductData] = useState<itemType>();


    useEffect(() => {
        if (productId) {
            getSingleProduct("shopItemsStore", productId)
                .then((data) => {
                    setProductData(data);
                })
                .catch((error) => {
                    console.error(error);
                })
        }
    }, [productId])


    return <div className='product-wrapper'>
        <div className="product">
            <div className="product-rightPanel">
                <div className="product-rightPanel-name">{productData?.name}</div>
                <div className="product-rightPanel-card1">
                    <span className="product-rightPanel-card1-label">Pick material</span>
                    <MaterialCarousel />
                </div>
                <div className="product-rightPanel-card2">

                </div>
                <div className="product-rightPanel-purchase">
                    <Button title="Add to card" />
                    <Button title="Chekout" bgColor='#922220' />
                </div>
            </div>
            <div className="product-middlePanel">
                <div className="product-middlePanel-rightLine"></div>
                <img src={productData?.img} alt="product image" className="product-middlePanel-img" />
                <div className="product-middlePanel-lefttLine"></div>

            </div>
            <div className="product-leftPanel">
                <div className="product-leftPanel-card1"></div>
                <div className="product-leftPanel-card2"></div>
                <div className="product-leftPanel-card3"></div>
            </div>
        </div>
    </div>
}

export default Product;