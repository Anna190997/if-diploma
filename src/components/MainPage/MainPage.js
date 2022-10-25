import Header from '../Header/Header';
import FilterBlock from '../FilterBlock/FilterBlock';
import SaleProducts from '../SaleProducts/SaleProducts';
import Shop from '../Shop/Shop';
import Updates from '../Updates/Updates';
import Footer from '../Footer/Footer';
import ModalWeb from '../../ModalWeb/ModalWeb';
import { useState } from 'react';

const MainPage = () => {
  const [searchModalWeb, setSearchModal] = useState(false);
  const [value, setValue] = useState('');
  const [search, setSearch] = useState([]);

  const searchModal = (e) => {
    e.target.value;
    setSearchModal(!searchModalWeb);
  };
  const handleWishChange = (value) => {
    setValue(value);
  };

  const showResult = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://modnikky-api.herokuapp.com/api/catalog?search=${value}`,
      );
      const resultSearch = await response.json();
      setSearch(resultSearch);
    } catch (err) {
      alert('Произошла ошибка. Обновите, пожалуйста, страницу');
    }
  };

  return (
    <>
      {searchModalWeb ? (
        <ModalWeb searchModalClose={searchModal} onChange={handleWishChange} search={showResult} />
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
