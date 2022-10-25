import './Button.css';

const Button = ({ button, button_text, onClick }) => {
  return <button className={button} onClick={onClick}>{button_text}</button>;
};

export default Button;
