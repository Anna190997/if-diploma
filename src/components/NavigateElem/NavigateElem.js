import './NavigateElem.css';

const NavigateElem = ({ navigate_context }) => {
  return (
    <a href="#" className="navigate_elem">
      {navigate_context}
    </a>
  );
};

export default NavigateElem;
