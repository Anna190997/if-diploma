import './AdaptiveMenu.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../redux/actions/AuthActions';

const AdaptiveMenu = ({adaptive_menu_link}) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.userStatus);

  const auth = () => {
    navigate('/auth');
  };

  const authOut = () => {
    dispatch(authActions.signOut());
  };

  return (
    <ul className="adaptive_menu">
      <li className="adaptive_menu_item">
        <a href="#" className={adaptive_menu_link}>
          NEW ARRIVALS
        </a>
      </li>
      <li className="adaptive_menu_item">
        <a href="#" className={adaptive_menu_link}>
          SHOP
        </a>
      </li>
      <li className="adaptive_menu_item">
        <a href="#" className={adaptive_menu_link}>
          COLLECTIONS
        </a>
      </li>
      {!userStatus.user ? (
        <li className="adaptive_menu_item">
          <a href="#" className={adaptive_menu_link} onClick={auth}>
            SIGN IN
          </a>
        </li>
      ) : (
        <li className="adaptive_menu_item">
          <a href="#" className={adaptive_menu_link} onClick={authOut}>
            SIGN OUT
          </a>
        </li>
      )}
    </ul>
  );
};

export default AdaptiveMenu;
