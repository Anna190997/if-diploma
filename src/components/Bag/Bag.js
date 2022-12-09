import './Bag.css';
import BagCard from '../BagCard/BagCard';
import { useSelector } from 'react-redux';
import Updates from '../Updates/Updates';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { useParams } from 'react-router-dom';
import Images from '../Images/Images';
import { useDispatch } from 'react-redux';
import BagAction from '../../redux/actions/BagAction';
import countAction from '../../redux/actions/CountAction';
import NavigatePage from '../NavigatePage/NavigatePage';
import { sendProduct } from '../../servicies';
import CountAction from "../../redux/actions/CountAction";

const Bag = () => {
  const [productSend, setProductSend] = useState('');
  const [valueSelect, setValueSelect] = useState('1');
  const [disabled, setDisabled] = useState(false);
  const bagProducts = useSelector((state) => state.bagReducer.bagProducts);
  const dispatch = useDispatch();
  const apiResult = useSelector((state) => state.apiResult.response);
  const count = useSelector((state) => state.counter);
  const productDetailsFilter = apiResult.filter((item) => Object.values(item).includes(id));
  const { id } = useParams();

  const bagItem = bagProducts.map((item) => item.id);

  const selectChange = (valueSelect) => {
    setValueSelect(valueSelect);
  };

  const [total, setTotal] = useState(
    bagProducts.reduce(
      (previosValue, currentItem) => previosValue + currentItem.price.value * valueSelect,
      0,
    ),
  );

  useEffect(() => {
    setTotal(
      bagProducts.reduce(
        (previosValue, currentItem) => previosValue + currentItem.price.value * valueSelect,
        0,
      ),
    );
  }, [valueSelect]);

  const clearBag = (e) => {
    e.preventDefault();
    e.target.value;
    setDisabled(!disabled);
    sendProduct(bagItem, setProductSend);
    dispatch(BagAction.clearToBagAction());
    dispatch(countAction.nullCounter());
  };

  return (
    <>
      <NavigatePage />
      {!!productDetailsFilter && (
        <>
          <div className="bag_number">
            <span className="bag_number_items">BAG</span>
            <div className="number">
              <span className="count_bag">{count}</span>
              <span className="bag_items">items</span>
            </div>
          </div>
          {productSend ? (
            <div className="products_message">{productSend.message}</div>
          ) : (
            <>
              <hr className="line_bag_number" />
              {bagProducts.map((item) => (
                <BagCard
                  key={item.id}
                  bagImg={item.images[0]}
                  nameCardBag={item.name}
                  currency={item.price.currency}
                  valuePrice={item.price.value}
                  colorProduct={item.color.name}
                  size={item.availableSizes[0]}
                  deleteProduct={item.id}
                  onChange={selectChange}
                  id={item.id}
                  valueSelect={valueSelect}
                  bagProducts={bagProducts}
                  setTotal={setTotal}
                />
              ))}
              <div className="total_price_wrapper">
                <div className="total_price_item">
                  <span className="total_price">Total USD $</span>
                  <span className="total_price">{total}</span>
                </div>
                {!disabled ? (
                  <Button
                    button_text="PROCEED TO CHECKOUT"
                    button="checkout_bag"
                    onClick={clearBag}
                  />
                ) : (
                  <Button button_text="PROCEED TO CHECKOUT" button="checkout_bag" disabled={true} />
                )}
                <div className="pay_icon_wrapper">
                  <Images images="../../images/img/maestro-logo.jpg" images_class="images_pay" />
                  <Images images="../../images/img/visa-logo.jpg" images_class="images_pay" />
                </div>
              </div>
            </>
          )}
        </>
      )}
      <Updates />
      <Footer />
    </>
  );
};

export default Bag;
