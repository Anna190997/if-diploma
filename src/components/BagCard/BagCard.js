import './BagCard.css';
import Icon from '../Icon/Icon';
import BagAction from "../../redux/actions/BagAction";
import { useDispatch } from 'react-redux';
import CountAction from "../../redux/actions/CountAction";

const BagCard = ({
  bagImg,
  nameCardBag,
  currency,
  valuePrice,
  colorProduct,
  id,
  deleteProduct,
}) => {
  const dispatch = useDispatch();

  const removeProduct = () => {
    dispatch(BagAction.removeBagAction(deleteProduct));
    dispatch(CountAction.decrement());
  }

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
          <div className="color_detail_bag_card">
            <span className="color_name">QUANTITY:</span>
            <select className="select_color">
              <option className="color_item">1</option>
              <option className="color_item">2</option>
              <option className="color_item">3</option>
              <option className="color_item">4</option>
              <option className="color_item">5</option>
            </select>
          </div>
          <div className="remove_bag_wrap">
            <Icon id="remove-icon" icon="remove_bag_icon" show={removeProduct} />
            <span className="remove_bag" id={id} onClick={removeProduct}>
              REMOVE
            </span>
          </div>
        </div>
      </div>
      <hr className="line_bag" />
    </div>
  );
};

export default BagCard;
