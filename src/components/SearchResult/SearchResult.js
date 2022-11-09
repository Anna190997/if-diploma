import './SearchResult.css';
import TitleBlock from '../TitleBlock/TitleBlock';
import SearchCard from '../SearchCard/SearchCard';
import { useState } from 'react';
import Button from '../Button/Button';

const SearchResult = ({ product }) => {
  const [arrowMin] = useState(0);
  const [arrowMax, setArrowMax] = useState(8);

  const arrowMore = () => {
    setArrowMax(arrowMax + 8);
  };
  return (
    <>
      {!!product.length ? (
        <>
          <TitleBlock titleBlock="Search results" />
          <div className="products_card">
            <div className="container">
              <div className="products_sale ">
                <div className=" search_result">
                  {product.slice(arrowMin, arrowMax).map((item) => (
                    <SearchCard
                      urlImg={item.images[0]}
                      key={item.id}
                      currency="$"
                      valuePrice={item.price.value}
                      catalogSearch={item.id}
                      productId={item.id}
                    />
                  ))}
                </div>
              </div>
              {!(arrowMax >= product.length || product.length < 8) && (
                <Button button="search_button_show" onClick={arrowMore} button_text="Show more" />
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <TitleBlock titleBlock="Search results" />
          <div className="search_fail">No beauty products found</div>
        </>
      )}
    </>
  );
};

export default SearchResult;
