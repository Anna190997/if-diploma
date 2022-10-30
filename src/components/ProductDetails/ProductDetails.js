import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCardDetail from '../ProductCardDetail/ProductCardDetail';
import Footer from '../Footer/Footer';
import Navigate from '../Navigate/Navigate';
import Updates from '../Updates/Updates';
import ModalWeb from '../ModalWeb/ModalWeb';
import { useState } from 'react';

const ProductDetails = () => {
  const [searchModalWeb, setSearchModal] = useState(false);
  const [value, setValue] = useState('');
  const [search, setSearch] = useState([]);
  const apiResult = useSelector((state) => state.apiResult.response);
  const { id } = useParams();
  const navigate = useNavigate();

  const productDetailsFilter = apiResult.filter((item) => Object.values(item).includes(id));

  const searchModal = (e) => {
    e.target.value;
    setSearchModal(!searchModalWeb);
  };
  const handleWishChange = (value) => {
    setValue(value);
  };

  const navBag = () => {
    navigate('/catalog/bag');
  };

  const showResult = (e) => {
    e.preventDefault();
    const resultSearch = apiResult.filter((item) =>
      Object.values(item).toString().toLowerCase().includes(value.toLowerCase()),
    );
    setSearch(resultSearch);
  };

  const showMain = () => {
    navigate('/');
  };

  return (
    !!productDetailsFilter && (
      <>
        {searchModalWeb ? (
          <ModalWeb
            searchModalClose={searchModal}
            onChange={handleWishChange}
            search={showResult}
            product={search}
            valueInput={value}
          />
        ) : (
          <>
            <Navigate
              navigate_elem="navigate_elem_product"
              title_nav="title_nav_product"
              icon="icon_product"
              icon_invisible="icon_invisible_product"
              adaptive_menu_link="adaptive_menu_link_product"
              searchModal={searchModal}
              showMain={showMain}
              countBag="count_bag_black"
              navBag={navBag}
            />
            {productDetailsFilter.map((item) => (
              <ProductCardDetail
                detailImages={item.images[0]}
                detailImagesSecond={item.images[1]}
                key={item.id}
                productName={item.name}
                currency={item.price.currency}
                valuePrice={item.price.value}
                size={item.availableSizes}
                description={item.description}
                color={item.color.hex}
                productId={item.id}
              />
            ))}
            <Updates />
            <Footer />
          </>
        )}
      </>
    )
  );
};

export default ProductDetails;
