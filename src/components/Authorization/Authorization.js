import './Authorization.css';
import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import authActions from '../../redux/actions/AuthActions';
import { useSelector, useDispatch } from 'react-redux';

const Authorization = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.userStatus);

  const firstNameChange = (firstName) => {
    setFirstName(firstName);
  };

  const lastNameChange = (lastName) => {
    setLastName(lastName);
  };

  const emailChange = (email) => {
    setEmail(email);
  };

  const passwordChange = (password) => {
    setPassword(password);
  };

  const change_firstName = (e) => {
    firstNameChange(e.target.value);
  };

  const change_lastName = (e) => {
    lastNameChange(e.target.value);
  };

  const change_email = (e) => {
    emailChange(e.target.value);
  };

  const change_password = (e) => {
    passwordChange(e.target.value);
  };

  const sign = (e) => {
    e.preventDefault();
    dispatch(authActions.signIn(firstName, lastName, email, password));
  };

  const authdone = () => {
    navigate('/');
  };

  return (
    <>
      <div className="container_auth">
        <div className="auth_wrapper">
          <div className="form_auth">
            <form className="auth_form" onSubmit={sign}>
              <div className="auth_form_wrapper">
                <div className="form_title">CREATE ACCOUNT</div>
                <Icon id="close-icon" icon="auth_close" show={authdone} />
              </div>
              <div className="input_auth">
                <Input
                  type_input="text"
                  inputClass="updates_input border"
                  inputPlaceholder="First Name"
                  onChange={change_firstName}
                />
                <hr className="line_auth" />
                <Input
                  type_input="text"
                  inputClass="updates_input border"
                  inputPlaceholder="Last Name"
                  onChange={change_lastName}
                />
                <hr className="line_auth" />
                <Input
                  type_input="email"
                  inputClass="updates_input border"
                  inputPlaceholder="Email"
                  onChange={change_email}
                />
                <hr className="line_auth" />
                <Input
                  type_input="password"
                  inputClass="updates_input border"
                  inputPlaceholder="Password"
                  onChange={change_password}
                />
                <hr className="line_auth" />
              </div>
              <div className="policy_auth">
                <input type="checkbox" className="check_auth" required={true} />
                <div className="policy_text">
                  Let's get personal! We'll send you only the good stuff: Exclusive early access to
                  Sale, new arrivals and promotions. No nasties.
                </div>
              </div>
              <div className="text_form">
                By signing up you agree to
                <a href="#" className="links_auth">
                  Terms of Service
                </a>
                and
                <a href="#" className="links_auth">
                  Privacy Policy
                </a>
              </div>
              <Button button="button_auth" button_text="SIGN UP" />
              <a href="#" className="links_auth_but">
                I HAVE AN ACCOUNT
              </a>
            </form>
          </div>
        </div>
      </div>
      {!!userStatus.user && <Navigate to="/" />}
    </>
  );
};

export default Authorization;
