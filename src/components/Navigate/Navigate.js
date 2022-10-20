import NavigateElem from '../NavigateElem/NavigateElem';
import './Navigate.css';
import TitleNav from '../TitleNav/TitleNav';
import Icon from '../Icon/Icon';

const Navigate = () => {
  return (
    <div className="container">
      <nav className="navigate_panel">
        <Icon id="hamburger-menu-icon" icon="icon_invisible" />
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
    </div>
  );
};

export default Navigate;
