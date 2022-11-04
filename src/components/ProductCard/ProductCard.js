import './ProductCard.css';
import Icon from '../Icon/Icon';
import Sale from '../Sale/Sale';
import { Link } from 'react-router-dom';
import WishListActions from '../../redux/actions/WishListActions';
import { useDispatch, useSelector } from 'react-redux';
import CountWish from '../../redux/actions/CountWish';

const ProductCard = ({ urlImg, valuePrice, catalogSearch, productId }) => {
  const saleRender = Math.floor(Math.random() * 100);
  const saleCount = Math.ceil((valuePrice / (100 - saleRender)) * 100);
  const dispatch = useDispatch();
  const apiResult = useSelector((state) => state.apiResult.response);

  const addToWishList = () => {
    const resultAdd = apiResult.filter((item) => Object.values(item).includes(productId));
    dispatch(WishListActions.wishListAddAction(resultAdd));
    dispatch(CountWish.incrementWish());
  };

  return (
    <div className="product_offer">
      <Link to={`/catalog/${catalogSearch}`}>
        <img src={urlImg} alt="none" className="product_photo" />
      </Link>
      <Icon id="wishlist-icon" icon="wishlist_add" show={addToWishList} />
      <Sale saleRender={saleRender} />
      <div className="price">
        <div className="value_price">$ {saleCount}</div>
        <div className="price_sale">$ {valuePrice}</div>
      </div>
    </div>
  );
};

export default ProductCard;
