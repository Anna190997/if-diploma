import NavigateElem from '../NavigateElem/NavigateElem';
import './Navigate.css';
import TitleNav from '../TitleNav/TitleNav';
import Icon from '../Icon/Icon';
import AdaptiveMenu from '../AdaptiveMenu/AdaptiveMenu';
import { useState } from 'react';

const Navigate = () => {
  const [menu, setMenu] = useState(false);
  const showMenu = (e) => {
    e.target.value;
    setMenu(!menu);
  };

  return (
    <div className="container">
      <nav className="navigate_panel">
        <Icon id={!menu?("hamburger-menu-icon"):("close")} icon="icon_invisible" show={showMenu} />
        <NavigateElem navigate_context="NEW ARRIVALS" />
        <NavigateElem navigate_context="SHOP" />
        <NavigateElem navigate_context="COLLECTIONS" />
        <TitleNav />
        <Icon id="search-icon" icon="icon" />
        <NavigateElem navigate_context="SEARCH" />
        <NavigateElem navigate_context="SIGN IN" />
        <NavigateElem navigate_context="BAG" />
        <Icon id="shopping-cart-icon" icon="icon_invisible" />
        <Icon id="wishlist-icon" icon="icon" />
      </nav>
      {menu && <AdaptiveMenu />}
    </div>
  );
};

export default Navigate;
