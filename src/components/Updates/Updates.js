import './Updates.css';
import TitleShop from '../TitleShop/TitleShop';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Updates = () => {
  return (
    <div className="container">
      <div className="updates">
        <TitleShop shopTitleClass="update_title" titleShop="SIGN UP FOR UPDATES" />
        <div className="update_text">
          Sign up for exclusive early sale access and tailored new arrivals.
        </div>
        <div className="update_form">
          <Input
            type_input="email"
            inputClass="updates_input"
            inputPlaceholder="Your email address"
          />
          <Button button="updates_button" button_text="JOIN" />
        </div>
      </div>
    </div>
  );
};

export default Updates;
