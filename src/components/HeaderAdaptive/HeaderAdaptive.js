import Title from '../Title/Title';
import TextHeader from '../TextHeader/TextHeader';
import Button from '../Button/Button';
import './HeaderAdaptive.css';

const HeaderAdaptive = () => {
  return (
    <div className="header_adaptive container">
      <Title title="title_adaptive" />
      <TextHeader text_header="text_header_adaptive" />
      <Button button="button_header_adaptive" button_text="SHOP NEW ARRIVALS" />
    </div>
  );
};

export default HeaderAdaptive;
