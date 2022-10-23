import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://modnikky-api.herokuapp.com/api/catalog/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <>
      {product && (
        <div className="detail_product">
          <img src={product.images} alt="img" />
          <div className="name">{product.name}</div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
