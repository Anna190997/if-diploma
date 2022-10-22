import './InputFilter.css';
import Icon from '../Icon/Icon';
import TextInput from '../TextInput/TextInput';

const InputFilter = ({ id, icon, inputValueText }) => {
  return (
    <button type="button" className="input_search col-1">
      <Icon id={id} icon={icon} />
      <TextInput inputText="input_text" inputValueText={inputValueText} />
    </button>
  );
};

export default InputFilter;
