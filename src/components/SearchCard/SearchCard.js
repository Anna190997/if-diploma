import Icon from '../Icon/Icon';
import './SearchCard.css'

const SearchCard = ({ urlImg, valuePrice }) => {
  return (
    <div className="product_offer col-3">
      <img src={urlImg} alt="none" className="product_photo" />
      <Icon id="wishlist-icon" icon="wishlist_add search_wishlist" />
      <div className="price">
        <div className="price_sale search_price">$ {valuePrice}</div>
      </div>
    </div>
  );
};

export default SearchCard;
