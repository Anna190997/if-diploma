import './ModalWeb.css';
import Input from '../Input/Input';
import Icon from '../Icon/Icon';
import SearchResult from "../SearchResult/SearchResult";

const ModalWeb = ({ searchModalClose, onChange, search, product, valueInput }) => {
  const handleWishChange = (event) => {
    onChange(event.target.value);
  };

  return (
      <>
    <div className="modal_web">
      <div className="container">
        <div className="modal_wrapper">
          <form className="form_search" onSubmit={(e) => {search(e)}}>
            <Icon id="close" icon="search_close" show={searchModalClose} />
            <Input
              type_input="text"
              inputPlaceholder="ENTER SEARCH TERMS"
              inputClass="updates_input search_input"
              onChange={handleWishChange}
              value={valueInput}
            />
          </form>
        </div>
      </div>
    </div>
        <SearchResult product={product}/>
      </>
  );
};

export default ModalWeb;
