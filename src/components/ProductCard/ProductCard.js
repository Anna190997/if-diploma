import './ProductCard.css';
import Icon from '../Icon/Icon';
import Sale from '../Sale/Sale';
import { Link } from 'react-router-dom';
import WishListActions from '../../redux/actions/WishListActions';
import { useDispatch, useSelector } from 'react-redux';
import CountWish from '../../redux/actions/CountWish';
import { useState } from 'react';

const ProductCard = ({ urlImg, valuePrice, catalogSearch, productId }) => {
  const saleRender = Math.floor(Math.random() * 100);
  const saleCount = Math.ceil((valuePrice / (100 - saleRender)) * 100);
  const dispatch = useDispatch();
  const [activeWish, setActiveWish] = useState(false);
  const apiResult = useSelector((state) => state.apiResult.response);

  const addToWishList = () => {
    setActiveWish(!activeWish);
    const resultAdd = apiResult.filter((item) => Object.values(item).includes(productId));
    dispatch(WishListActions.wishListAddAction(resultAdd));
    dispatch(CountWish.incrementWish());
  };

  return (
    <div className="product_offer">
      <Link to={`/catalog/${catalogSearch}`}>
        <img src={urlImg} alt="none" className="product_photo" />
      </Link>
      {!activeWish ? (
        <Icon id="wishlist-icon" icon="wishlist_add" show={addToWishList} />
      ) : (
        <Icon id="wishlistactive" icon="wishlist_add" />
      )}
      <Sale saleRender={saleRender} />
      <div className="price">
        <p className="value_price">$ {saleCount}</p>
        <p className="price_sale">$ {valuePrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;
