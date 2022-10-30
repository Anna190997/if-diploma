import Navigate from '../Navigate/Navigate';
import Title from '../Title/Title';
import TextHeader from '../TextHeader/TextHeader';
import Button from '../Button/Button';
import HeaderAdaptive from '../HeaderAdaptive/HeaderAdaptive';
import Background from '../../../public/images/img/background.png';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = ({ searchModal }) => {
    const navigate = useNavigate();

    const navBag = () => {
        navigate('/catalog/bag');
    };
  return (
    <>
      <header style={{ backgroundImage: 'url(' + Background + ')' }}>
        <Navigate
          searchModal={searchModal}
          navigate_elem="navigate_elem"
          title_nav="title_nav"
          icon="icon"
          icon_invisible="icon_invisible"
          adaptive_menu_link="adaptive_menu_link"
          countBag = "countBag"
          navBag={navBag}
        />
        <Title title="title" />
        <TextHeader text_header="text_header" />
        <Button button="button_header" button_text="SHOP NEW ARRIVALS" />
      </header>
      <HeaderAdaptive />
    </>
  );
};

export default Header;
