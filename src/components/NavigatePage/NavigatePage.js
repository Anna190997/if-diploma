import React from 'react';
import ModalWeb from '../ModalWeb/ModalWeb';
import Navigate from '../Navigate/Navigate';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavigatePage = () => {
  const [searchModalWeb, setSearchModal] = useState(false);
  const [value, setValue] = useState('');
  const [search, setSearch] = useState([]);
  const navigate = useNavigate();

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

  const navWish = () => {
    navigate('/catalog/wishList')
  }

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
            navWish={navWish}
          />
      )}
    </>
  );
};
export default NavigatePage;
