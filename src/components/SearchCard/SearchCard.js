import Icon from '../Icon/Icon';
import './SearchCard.css';
import { Link } from 'react-router-dom';

const SearchCard = ({ urlImg, valuePrice, catalogSearch }) => {
  return (
    <div className="product_offer col-3">
      <Link to={`/catalog/${catalogSearch}`}>
        <img src={urlImg} alt="none" className="product_photo" />
      </Link>
      <Icon id="wishlist-icon" icon="wishlist_add search_wishlist" />
      <div className="price">
        <div className="price_sale search_price">$ {valuePrice}</div>
      </div>
    </div>
  );
};

export default SearchCard;
