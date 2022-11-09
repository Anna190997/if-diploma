import './Button.css';

const Button = ({ button, button_text, onClick, disabled }) => {
  return <button className={button} disabled={disabled} onClick={onClick}>{button_text}</button>;
};

export default Button;
