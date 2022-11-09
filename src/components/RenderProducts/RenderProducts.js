import './RenderProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import { useState } from 'react';
import Arrow from '../Arrow/Arrow';
import {apiMain} from "../../servicies";

const RenderProducts = () => {
  const [product, setProduct] = useState([]);
  const [arrowMin, setArrowMin] = useState(0);
  const [arrowMax, setArrowMax] = useState(4);
  const [arrowMinAdapt, setArrowMinAdapt] = useState(0);
  const [arrowMaxAdapt, setArrowMaxAdapt] = useState(2);
  apiMain(setProduct);

  const arrowMore = () => {
    setArrowMax(arrowMax + 1);
    setArrowMin(arrowMin + 1);
  };

  const arrowLess = () => {
    setArrowMax(arrowMax - 1);
    setArrowMin(arrowMin - 1);
  };
  const arrowMoreAdapt = () => {
    setArrowMaxAdapt(arrowMaxAdapt + 1);
    setArrowMinAdapt(arrowMinAdapt + 1);
  };

  const arrowLessAdapt = () => {
    setArrowMaxAdapt(arrowMaxAdapt - 1);
    setArrowMinAdapt(arrowMinAdapt - 1);
  };

  return (
    <>
      <div className="products_card invisible">
        <div className="container">
          <div className="products_sale">
            <div className="products_sale_items">
              <Arrow id="more" show={arrowLess} icon="less" sliderMin={arrowMin} />
              {product.slice(arrowMin, arrowMax).map((item) => (
                <ProductCard
                  urlImg={item.images[0]}
                  key={item.id}
                  currency="$"
                  valuePrice={item.price.value}
                  catalogSearch={item.id}
                  productId={item.id}
                />
              ))}
              <Arrow
                id="more"
                show={arrowMore}
                icon="more"
                sliderMax={arrowMax}
                arrayLength={product.length}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="products_card adaptive_view">
        <div className="container">
          <div className="products_sale">
            <div className="products_sale_items">
              <Arrow id="more" show={arrowLessAdapt} icon="less" sliderMin={arrowMinAdapt} />
              {product.slice(arrowMinAdapt, arrowMaxAdapt).map((item) => (
                <ProductCard
                  urlImg={item.images[0]}
                  key={item.id}
                  currency="$"
                  valuePrice={item.price.value}
                  catalogSearch={item.id}
                />
              ))}
              <Arrow
                id="more"
                show={arrowMoreAdapt}
                icon="more"
                sliderMax={arrowMaxAdapt}
                arrayLength={product.length}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RenderProducts;
