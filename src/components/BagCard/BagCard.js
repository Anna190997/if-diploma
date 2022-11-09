import './BagCard.css';
import Icon from '../Icon/Icon';
import BagAction from '../../redux/actions/BagAction';
import { useDispatch, useSelector } from 'react-redux';
import CountAction from '../../redux/actions/CountAction';
import { totalQuantity } from '../../redux/actions/TotalQuantity';
import { useEffect } from 'react';

const BagCard = ({
  bagImg,
  nameCardBag,
  currency,
  valuePrice,
  colorProduct,
  id,
  deleteProduct,
  onChange,
  valueSelect,
}) => {
  const dispatch = useDispatch();

  const selectValue = (e) => {
    onChange(e.target.value);
  };

  const removeProduct = () => {
    dispatch(BagAction.removeBagAction(deleteProduct));
    dispatch(CountAction.decrement());
  };
  useEffect(() => {
    dispatch(totalQuantity(id, valueSelect));
  }, [valueSelect]);

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
            <select className="select_color" onChange={selectValue}>
              <option className="color_item" value="1">
                1
              </option>
              <option className="color_item" value="2">
                2
              </option>
              <option className="color_item" value="3">
                3
              </option>
              <option className="color_item" value="4">
                4
              </option>
              <option className="color_item" value="5">
                5
              </option>
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
