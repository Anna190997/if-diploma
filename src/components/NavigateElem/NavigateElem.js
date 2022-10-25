import './NavigateElem.css';

const NavigateElem = ({ navigate_context, navPage }) => {
  return (
    <a href="#" className="navigate_elem" onClick={navPage}>
      {navigate_context}
    </a>
  );
};

export default NavigateElem;
