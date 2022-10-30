import { useState } from 'react';
import TitleBlock from '../TitleBlock/TitleBlock';
import SearchCard from '../SearchCard/SearchCard';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';

const FilterResult = () => {
  const [arrowMin] = useState(0);
  const [arrowMax, setArrowMax] = useState(8);

  const filterTitle = useSelector((state) => state.filterTitle.response);
  const filterResult = useSelector((state) => state.filterReducer.response);

  const arrowMore = () => {
    setArrowMax(arrowMax + 8);
  };
  return (
    !!filterResult && (
      <>
        <TitleBlock titleBlock={filterTitle} />
        <div className="products_card">
          <div className="container">
            <div className="products_sale ">
              <div className=" search_result">
                {filterResult.slice(arrowMin, arrowMax).map((item) => (
                  <SearchCard
                    urlImg={item.images[0]}
                    key={item.id}
                    currency="$"
                    valuePrice={item.price.value}
                    catalogSearch={item.id}
                  />
                ))}
              </div>
            </div>
            {!(arrowMax >= filterResult.length || filterResult.length < 8) && (
              <Button button="search_button_show" onClick={arrowMore} button_text="Show more" />
            )}
          </div>
        </div>
      </>
    )
  );
};

export default FilterResult;
