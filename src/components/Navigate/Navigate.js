import NavigateElem from '../NavigateElem/NavigateElem';
import './Navigate.css';
import TitleNav from '../TitleNav/TitleNav';
import Icon from '../Icon/Icon';
import AdaptiveMenu from '../AdaptiveMenu/AdaptiveMenu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authActions from '../../redux/actions/AuthActions';
import { useSelector, useDispatch } from 'react-redux';

const Navigate = ({ searchModal }) => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.userStatus);

  const auth = () => {
    navigate('/auth');
  };

  const authOut = () => {
    dispatch(authActions.signOut());
  };

  const showMenu = (e) => {
    e.target.value;
    setMenu(!menu);
  };

  return (
    <div className="container">
      <nav className="navigate_panel">
        <Icon id={!menu ? 'hamburger-menu-icon' : 'close'} icon="icon_invisible" show={showMenu} />
        <NavigateElem navigate_context="NEW ARRIVALS" />
        <NavigateElem navigate_context="SHOP" />
        <NavigateElem navigate_context="COLLECTIONS" />
        <TitleNav />
        <Icon id="search-icon" icon="icon" show={searchModal} />
        <NavigateElem navigate_context="SEARCH" navPage={searchModal} />
        {!userStatus.user ? (
          <NavigateElem navigate_context="SIGN IN" navPage={auth} />
        ) : (
          <NavigateElem navigate_context="SIGN OUT" navPage={authOut} />
        )}
        <NavigateElem navigate_context="BAG" />
        <Icon id="shopping-cart-icon" icon="icon_invisible" />
        <Icon id="wishlist-icon" icon="icon" />
      </nav>
      {menu && <AdaptiveMenu />}
    </div>
  );
};

export default Navigate;
