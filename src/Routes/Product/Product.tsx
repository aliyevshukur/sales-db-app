import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../_animations.scss';
import Button from '../../Components/Button/Button';
import { getSingleProduct, itemType } from '../../db';
import { splitAtFirstUppercase } from '../../lib/Utils/splitAtFirstUppercase';
import MaterialCarousel from './MaterialCarousel/MaterialCarousel';
import './Product.scss';



function Product() {
    const { productId } = useParams();
    const [productData, setProductData] = useState<itemType>();
    const materials = ["carbon", "brushedMetal", "matteBlack", "silicone", "glossyPlastic", "metalMesh"]
    const [materialName, setMaterialName] = useState<string>(materials[0]);



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

    function updateMaterialName(currentIndex: number) {
        const rawName = materials[currentIndex];
        const name = splitAtFirstUppercase(rawName)
        setMaterialName(name);
    }

    return <div className='product-wrapper'>
        <div className="product">
            <div className="product-leftPanel">
                <div className="product-leftPanel-name">{productData?.name}</div>
                <div className="product-leftPanel-card1">
                    <div className="product-leftPanel-card1-label">Pick material</div>
                    <MaterialCarousel updateMaterialName={updateMaterialName} materials={materials} />
                    <div className="product-leftPanel-card1-name">{materialName}</div>
                </div>
                <div className="product-leftPanel-card2">
                    <div className="product-leftPanel-card2-title">
                        Frequency response
                    </div>
                    <div className="product-leftPanel-card2-subtitle">
                        Wide range
                    </div>
                    <div className="product-leftPanel-card2-frequency">
                        <span>20HZ</span>
                        <div className="product-leftPanel-card2-frequency-visual frequency-animation">
                            <span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
                        </div>
                        <span>20kHZ</span>
                    </div>
                </div>
                <div className="product-leftPanel-purchase">
                    <Button title="Add to card" />
                    <Button title="Chekout" bgColor='#922220' />
                </div>
            </div>
            <div className="product-middlePanel">
                <div className="product-middlePanel-rightLine"></div>
                <img src={productData?.img} alt="product image" className="product-middlePanel-img" />
                <div className="product-middlePanel-leftLine"></div>

            </div>
            <div className="product-rightPanel">
                <div className="product-rightPanel-card1">
                    <div className="pulse-top-left">
                        <span /><span /><span />
                    </div>
                    <div className="pulse-top-right">
                        <span /><span /><span />
                    </div>
                    <div className="pulse-bottom-left">
                        <span /><span /><span />
                    </div>
                    <div className="pulse-bottom-right">
                        <span /><span /><span />
                    </div>
                </div>
                <div className="product-rightPanel-card2"></div>
                <div className="product-rightPanel-card3"></div>
            </div>
        </div>
    </div>
}

export default Product;