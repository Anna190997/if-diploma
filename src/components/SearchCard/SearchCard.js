import Icon from '../Icon/Icon';
import './SearchCard.css';
import { Link } from 'react-router-dom';
import WishListActions from '../../redux/actions/WishListActions';
import CountWish from '../../redux/actions/CountWish';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const SearchCard = ({ urlImg, valuePrice, catalogSearch, productId }) => {
  const [activeWish, setActiveWish] = useState(false);
  const dispatch = useDispatch();
  const apiResult = useSelector((state) => state.apiResult.response);
  const addToWishList = () => {
    setActiveWish(!activeWish);
    const resultAdd = apiResult.filter((item) => Object.values(item).includes(productId));
    dispatch(WishListActions.wishListAddAction(resultAdd));
    dispatch(CountWish.incrementWish());
  };
  return (
    <div className="product_offer col-3">
      <Link to={`/catalog/${catalogSearch}`}>
        <img src={urlImg} alt="none" className="product_photo" />
      </Link>
      {!activeWish ? (
        <Icon id="wishlist-icon" icon="wishlist_add search_wishlist" show={addToWishList} />
      ) : (
        <Icon id="wishlistactive" icon="wishlist_add" />
      )}
      <div className="price">
        <div className="price_sale search_price">$ {valuePrice}</div>
      </div>
    </div>
  );
};

export default SearchCard;
