import './InputFilter.css';
import Icon from '../Icon/Icon';
import TextInput from '../TextInput/TextInput';
import { useSelector, useDispatch } from 'react-redux';
import ApiAction from '../../redux/actions/ApiAction';

const InputFilter = ({ id, icon, inputValueText }) => {
  const dispatch = useDispatch();
  const apiResult = useSelector((state) => state.apiResult.response);

  const filterProduct = () => {
    const resultSearchFilter = apiResult.filter((item) =>
      Object.values(item).toString().toLowerCase().includes(inputValueText.toLowerCase()),
    );
    dispatch(ApiAction.filterProduct(resultSearchFilter));
    dispatch(ApiAction.filterTitle(inputValueText));
  };

  return (
    <button type="button" className="input_search col-1" onClick={filterProduct}>
      <Icon id={id} icon={icon} />
      <TextInput inputText="input_text" inputValueText={inputValueText} />
    </button>
  );
};

export default InputFilter;
