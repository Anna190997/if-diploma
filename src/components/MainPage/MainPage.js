import Header from '../Header/Header';
import FilterBlock from '../FilterBlock/FilterBlock';
import SaleProducts from '../SaleProducts/SaleProducts';
import Shop from '../Shop/Shop';
import Updates from '../Updates/Updates';
import Footer from '../Footer/Footer';
import ModalWeb from '../ModalWeb/ModalWeb';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import FilterResult from '../FilterResult/FilterResult';

const MainPage = () => {
  const [searchModalWeb, setSearchModal] = useState(false);
  const [value, setValue] = useState('');
  const [search, setSearch] = useState([]);
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
      <FilterResult />
      <SaleProducts />
      <Shop />
      <Updates />
      <Footer />
    </>
  );
};

export default MainPage;
