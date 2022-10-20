import Navigate from '../Navigate/Navigate';
import Title from '../Title/Title';
import TextHeader from '../TextHeader/TextHeader';
import Button from '../Button/Button';
import HeaderAdaptive from '../HeaderAdaptive/HeaderAdaptive';
import Background from '../../../public/images/img/background.png';
import './Header.css';

const Header = () => {
  return (
    <>
      <header style={{ backgroundImage: 'url(' + Background + ')' }}>
        <Navigate />
        <Title title="title" />
        <TextHeader text_header="text_header" />
        <Button button="button_header" button_text="SHOP NEW ARRIVALS" />
      </header>
      <HeaderAdaptive />
    </>
  );
};

export default Header;
