import './Updates.css';
import TitleShop from '../TitleShop/TitleShop';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useState } from 'react';
import { sendEmail } from '../../servicies';

const Updates = () => {
  const [inputEmail, setEmail] = useState('');
  const [emailSend, setEmailSend] = useState('');

  const changeEmail = (inputEmail) => {
    setEmail(inputEmail);
  };

  const change = (e) => {
    changeEmail(e.target.value);
  };

  const newsUpdates = (e) => {
    e.preventDefault();
    sendEmail(inputEmail, setEmailSend);
  };

  return (
    <div className="container">
      <div className="updates">
        <TitleShop shopTitleClass="update_title" titleShop="SIGN UP FOR UPDATES" />
        {!emailSend ? (
          <>
            <p className="update_text">
              Sign up for exclusive early sale access and tailored new arrivals.
            </p>
            <form className="update_form">
              <Input
                type_input="email"
                inputClass="updates_input"
                inputPlaceholder="Your email address"
                onChange={change}
              />
              <Button button="updates_button" button_text="JOIN" onClick={newsUpdates} />
            </form>
          </>
        ) : (
          <span className="update_title update_message">{emailSend.message}</span>
        )}
      </div>
    </div>
  );
};

export default Updates;
