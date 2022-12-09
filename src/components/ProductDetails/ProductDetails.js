import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCardDetail from '../ProductCardDetail/ProductCardDetail';
import Footer from '../Footer/Footer';
import Updates from '../Updates/Updates';
import NavigatePage from '../NavigatePage/NavigatePage';

const ProductDetails = () => {
  const apiResult = useSelector((state) => state.apiResult.response);
  const { id } = useParams();

  const productDetailsFilter = apiResult.filter((item) => Object.values(item).includes(id));

  return (
    !!productDetailsFilter && (
      <>
        <NavigatePage />
        {productDetailsFilter.map((item) => (
          <ProductCardDetail
            detailImages={item.images[0]}
            detailImagesSecond={item.images[1]}
            key={item.id}
            size={item.availableSizes}
            productName={item.name}
            currency={item.price.currency}
            valuePrice={item.price.value}
            description={item.description}
            color={item.color.hex}
            productId={item.id}
          />
        ))}
        <Updates />
        <Footer />
      </>
    )
  );
};

export default ProductDetails;
