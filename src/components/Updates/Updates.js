import './Updates.css';
import TitleShop from '../TitleShop/TitleShop';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useState } from 'react';

const Updates = () => {
  const [inputEmail, setEmail] = useState('');

  const changeEmail = (inputEmail) => {
    setEmail(inputEmail);
  };

  const change = (e) => {
    changeEmail(e.target.value);
  };

  const news = (e) => {
    e.preventDefault();
    fetch(`https://modnikky-api.herokuapp.com/api/cart`, {
      method: 'POST',
      body: JSON.stringify({ email: inputEmail }),
      headers: {
        'Content-type': 'application/json',
      },
    })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  return (
    <div className="container">
      <div className="updates">
        <TitleShop shopTitleClass="update_title" titleShop="SIGN UP FOR UPDATES" />
        <div className="update_text">
          Sign up for exclusive early sale access and tailored new arrivals.
        </div>
        <form
          className="update_form"

        >
          <Input
            type_input="email"
            inputClass="updates_input"
            inputPlaceholder="Your email address"
            onChange={change}
          />
          <Button button="updates_button" button_text="JOIN" onClick={news} />
        </form>
      </div>
    </div>
  );
};

export default Updates;
