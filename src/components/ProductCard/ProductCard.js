import './ProductCard.css';
import Button from '../Button/Button';
import { useState } from 'react';
import Icon from '../Icon/Icon';
import Sale from '../Sale/Sale';

const ProductCard = ({ urlImg, currency, valuePrice }) => {
  const [mouse, setMouse] = useState(false);

  const mouseEver = (event) => {
    event.target;
    setMouse(!mouse);
  };

  const saleRender = Math.floor(Math.random() * 100);
  const saleCount = Math.ceil(valuePrice - (valuePrice * saleRender) / 100);

  return (
    <div className="product_offer">
      <img src={urlImg} alt="none" className="product_photo" onMouseOver={mouseEver} />
      {!!mouse && <Button button="button_to_bag" button_text="ADD TO BAG" />}
      <Icon id="wishlist-icon" icon="wishlist_add" />
      <Sale saleRender={saleRender} />
      <div className="price">
        <div className="currency">{currency}</div>
        <div className="value_price">{valuePrice}</div>
        <div className="price_sale">$ {saleCount}</div>
      </div>
    </div>
  );
};

export default ProductCard;