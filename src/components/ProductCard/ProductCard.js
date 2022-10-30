import './ProductCard.css';
import Button from '../Button/Button';
import { useState } from 'react';
import Icon from '../Icon/Icon';
import Sale from '../Sale/Sale';
import { Link } from 'react-router-dom';

const ProductCard = ({ urlImg, valuePrice, catalogSearch }) => {
  const [mouse, setMouse] = useState(false);

  const mouseEver = (event) => {
    event.target;
    setMouse(!mouse);
  };

  const saleRender = Math.floor(Math.random() * 100);
  const saleCount = Math.ceil((valuePrice / (100 - saleRender)) * 100);

  return (
    <div className="product_offer">
      <Link to={`/catalog/${catalogSearch}`}>
        <img src={urlImg} alt="none" className="product_photo" onMouseOver={mouseEver} />
      </Link>
      {!!mouse && <Button button="button_to_bag" button_text="ADD TO BAG" />}
      <Icon id="wishlist-icon" icon="wishlist_add" />
      <Sale saleRender={saleRender} />
      <div className="price">
        <div className="value_price">$ {saleCount}</div>
        <div className="price_sale">$ {valuePrice}</div>
      </div>
    </div>
  );
};

export default ProductCard;
