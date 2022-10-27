import Header from '../Header/Header';
import FilterBlock from '../FilterBlock/FilterBlock';
import SaleProducts from '../SaleProducts/SaleProducts';
import Shop from '../Shop/Shop';
import Updates from '../Updates/Updates';
import Footer from '../Footer/Footer';
import ModalWeb from '../ModalWeb/ModalWeb';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ApiAction from '../../redux/actions/ApiAction';

const MainPage = () => {
  const [searchModalWeb, setSearchModal] = useState(false);
  const [value, setValue] = useState('');
  const [search, setSearch] = useState([]);
  const dispatch = useDispatch();
  const apiResult = useSelector((state) => state.apiResult.response);

  const searchModal = (e) => {
    e.target.value;
    setSearchModal(!searchModalWeb);
  };
  const handleWishChange = (value) => {
    setValue(value);
  };

  const showResult = (e) => {
    e.preventDefault();
    dispatch(ApiAction.fetchProduct());
    console.log(apiResult)
    const resultSearch = apiResult.filter((item) =>
      Object.values(item).toString().toLowerCase().includes(value.toLowerCase()),
    );
    setSearch(resultSearch);
  };

  return (
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
        <Header searchModal={searchModal} />
      )}
      <FilterBlock />
      <SaleProducts />
      <Shop />
      <Updates />
      <Footer />
    </>
  );
};

export default MainPage;
