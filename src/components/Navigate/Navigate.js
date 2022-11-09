import NavigateElem from '../NavigateElem/NavigateElem';
import './Navigate.css';
import TitleNav from '../TitleNav/TitleNav';
import Icon from '../Icon/Icon';
import AdaptiveMenu from '../AdaptiveMenu/AdaptiveMenu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authActions from '../../redux/actions/AuthActions';
import { useSelector, useDispatch } from 'react-redux';

const Navigate = ({
  searchModal,
  navigate_elem,
  title_nav,
  icon,
  icon_invisible,
  adaptive_menu_link,
  showMain,
  countBag,
  navBag,
  navWish,
}) => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.userStatus);
  const count = useSelector((state) => state.counter);

  const auth = () => {
    navigate('/auth');
  };

  const bagPage = () => {
    navigate('/catalog/bag');
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
        <Icon id={!menu ? 'hamburger-menu-icon' : 'close'} icon={icon_invisible} show={showMenu} />
        <NavigateElem navigate_context="NEW ARRIVALS" navigate_elem={navigate_elem} />
        <NavigateElem navigate_context="SHOP" navigate_elem={navigate_elem} />
        <NavigateElem navigate_context="COLLECTIONS" navigate_elem={navigate_elem} />
        <TitleNav title_nav={title_nav} showMain={showMain} />
        <Icon id="search-icon" icon={icon} show={searchModal} />
        <NavigateElem
          navigate_context="SEARCH"
          navPage={searchModal}
          navigate_elem={navigate_elem}
        />
        {!userStatus.user ? (
          <NavigateElem navigate_context="SIGN IN" navPage={auth} navigate_elem={navigate_elem} />
        ) : (
          <NavigateElem
            navigate_context="SIGN OUT"
            navPage={authOut}
            navigate_elem={navigate_elem}
          />
        )}
        <NavigateElem navigate_context="BAG" navigate_elem={navigate_elem} navPage={navBag} />
        <div className={countBag}>({count})</div>
        <Icon
          id="shopping-cart-icon"
          icon={icon_invisible}
          navigate_elem={navigate_elem}
          show={bagPage}
        />
        <Icon id="wishlist-icon" icon={icon} navigate_elem={navigate_elem} show={navWish} />
      </nav>
      {menu && <AdaptiveMenu adaptive_menu_link={adaptive_menu_link} />}
    </div>
  );
};

export default Navigate;
