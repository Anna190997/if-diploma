import Icon from '../Icon/Icon';
import WishListActions from "../../redux/actions/WishListActions";
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import CountAction from '../../redux/actions/CountAction';
import BagAction from '../../redux/actions/BagAction';
import CountWish from '../../redux/actions/CountWish';
import { useState } from 'react';

const WishListCard = ({
  bagImg,
  nameCardBag,
  currency,
  valuePrice,
  colorProduct,
  productId,
  id,
}) => {
  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();

  const removeProductWishList = () => {
    dispatch(WishListActions.removeWishListAction(productId));
    dispatch(CountWish.decrementWish());
  };
  const apiResult = useSelector((state) => state.apiResult.response);
  const addToBag = (e) => {
    e.target.value;
    setDisabled(!disabled);
    dispatch(CountAction.increment());
    const resultAdd = apiResult.filter((item) => Object.values(item).includes(productId));
    dispatch(BagAction.addToBagAction(resultAdd));
  };

  return (
    <div className="bag_card">
      <div className="bag_card_wrapper">
        <div className="bag_img">
          <img src={bagImg} className="bag_img_card" alt="bag_img" />
        </div>
        <div className="bag_description">
          <div className="name_card_bag">
            <span>{nameCardBag}</span>
          </div>
          <div className="price_product">
            <span className="price_product_detail">{currency}</span>
            <span className="price_product_detail">$ {valuePrice}</span>
          </div>
          <div className="color_detail_bag_card">
            <span className="color_name">COLOR:</span>
            <select className="select_color">
              <option className="color_item"> {colorProduct}</option>
            </select>
          </div>
          <div className="color_detail_bag_card">
            <span className="color_name">SIZE:</span>
            <select className="select_color">
              <option className="color_item">S</option>
              <option className="color_item">M</option>
              <option className="color_item">L</option>
            </select>
          </div>
          <div className="button_product">
            {!disabled ? (
              <Button button="add_to_bag" button_text="ADD TO BAG" onClick={addToBag} />
            ) : (
              <Button button="add_to_bag" button_text="ADDED TO BAG" disabled={true} />
            )}
          </div>
          <div className="remove_bag_wrap">
            <Icon id="remove-icon" icon="remove_bag_icon" show={removeProductWishList} />
            <span className="remove_bag" id={id} onClick={removeProductWishList}>
              REMOVE
            </span>
          </div>
        </div>
      </div>
      <hr className="line_bag" />
    </div>
  );
};

export default WishListCard;
