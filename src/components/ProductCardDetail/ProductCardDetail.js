import './ProductCardDetail.css';
import '../Icon/Icon.css';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountAction from '../../redux/actions/CountAction';
import addToBagAction from '../../redux/actions/AddToBagAction';

const ProductCardDetail = ({
  detailImages,
  detailImagesSecond,
  productName,
  currency,
  valuePrice,
  size,
  description,
  color,
  productId,
}) => {
  const [productDescription, setProductDescription] = useState({
    description: false,
    shipping: false,
    composition: false,
  });
  const dispatch = useDispatch();
  const apiResult = useSelector((state) => state.apiResult.response);

  const changeMenuProduct = (field) => {
    setProductDescription((prevState) => ({ ...prevState, [field]: true }));
  };
  const changeProduct = (field) => {
    setProductDescription((prevState) => ({ ...prevState, [field]: false }));
  };


  const addToBag = () => {
    dispatch(CountAction.increment());
    const resultAdd = apiResult.filter((item) => Object.values(item).includes(productId));
    dispatch(addToBagAction(resultAdd));
  };


  return (
    <div className="product_card_detail">
      <div className="product_card_detail_wrapper">
        <div className="product_card_detail_image">
          <img src={detailImages} className="detailImages" alt="detailImages" />
          <img src={detailImagesSecond} className="detailImages invisible" alt="detailImages" />
        </div>
        <div className="description_product">
          <span className="product_name">{productName}</span>
          <div className="price_product">
            <span className="price_product_detail">{currency}</span>
            <span className="price_product_detail">{valuePrice}</span>
          </div>
          <span className="pre_order">PRE-ORDER</span>
          <div className="color_product">
            <span className="color_details">COLOR</span>
            <input type="button" className="button_color" style={{ backgroundColor: color }} />
          </div>
          <div className="size_details">
            <span className="size">SIZE</span>
            <div className="size_offer">
              <span className="size_offer_item">{size}</span>
            </div>
          </div>
          <div className="button_product">
            <Button button="add_to_bag" button_text="ADD TO BAG" onClick={addToBag} />
            <div className="wishlist_add_product">
              <Icon id="wishlist-icon" icon="wish_list_product" />
            </div>
          </div>
          <div className="description">
            <div className="details_information">
              {!productDescription.description ? (
                <Icon
                  id="expand-icon"
                  icon="icon_list"
                  show={() => changeMenuProduct('description')}
                />
              ) : (
                <Icon
                  id="hide-icon"
                  icon="icon_list_minus"
                  show={() => changeProduct('description')}
                />
              )}
              <div className="product_title">PRODUCT DESCRIPTION</div>
            </div>
            {productDescription.description && (
              <>
                <ul className="more_product">{description}</ul>
              </>
            )}
          </div>
          <div className="description">
            <div className="details_information">
              {!productDescription.shipping ? (
                <Icon
                  id="expand-icon"
                  icon="icon_list"
                  show={() => changeMenuProduct('shipping')}
                />
              ) : (
                <Icon
                  id="hide-icon"
                  icon="icon_list_minus"
                  show={() => changeProduct('shipping')}
                />
              )}
              <div className="product_title">SHIPPING & RETURNS</div>
            </div>
          </div>
          <div className="description">
            <div className="details_information">
              {!productDescription.composition ? (
                <Icon
                  id="expand-icon"
                  icon="icon_list"
                  show={() => changeMenuProduct('composition')}
                />
              ) : (
                <Icon
                  id="hide-icon"
                  icon="icon_list_minus"
                  show={() => changeProduct('composition')}
                />
              )}
              <div className="product_title">FABRIC COMPOSITION</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetail;
