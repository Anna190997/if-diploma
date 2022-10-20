import './Button.css';

const Button = ({ button, button_text }) => {
  return <button className={button}>{button_text}</button>;
};

export default Button;
