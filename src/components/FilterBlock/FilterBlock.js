import TitleBlock from '../TitleBlock/TitleBlock';
import InputFilter from '../InputFilter/InputFilter';
import './FilterBlock.css';

const FilterBlock = () => {
  return (
    <div className="container">
      <TitleBlock titleBlock="Shop by the " titleBlockLast=" Category" />
      <div className="filter_wrapper">
        <InputFilter id="dress" icon="filter_icon" inputValueText="Dress" />
        <InputFilter id="tees" icon="filter_icon" inputValueText="Tees" />
        <InputFilter id="swimwear" icon="filter_icon" inputValueText="Swimwear" />
        <InputFilter id="denim" icon="filter_icon" inputValueText="Denim" />
        <InputFilter id="tops" icon="filter_icon" inputValueText="Tops" />
        <InputFilter id="beauty" icon="filter_icon" inputValueText="Beauty" />
      </div>
    </div>
  );
};

export default FilterBlock;
