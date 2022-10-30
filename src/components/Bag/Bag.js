import './Bag.css';
import BagCard from '../BagCard/BagCard';
import { useSelector } from 'react-redux';

const Bag = () => {
  const bagProducts = useSelector((state) => state.addToBagReducer);

  return (
    <>
      {bagProducts.forEach((element) =>
          (element.map((item) => (
          <BagCard
            // bagImg={item.images[0]}
            nameCardBag={item.name}
            currency={item.price.currency}
            valuePrice={item.price.value}

          />
        ))),
      )}
    </>

  );
};

export default Bag;
