import WishListCard from '../WishListCard/WishListCard';
import { useSelector } from 'react-redux';
import Updates from '../Updates/Updates';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import NavigatePage from '../NavigatePage/NavigatePage';

const WishList = () => {
  const wishListProducts = useSelector((state) => state.wishListReducer.favoritiesProducts);
  const apiResult = useSelector((state) => state.apiResult.response);
  const count = useSelector((state) => state.counterWish);
  const productDetailsFilter = apiResult.filter((item) => Object.values(item).includes(id));
  const { id } = useParams();
  localStorage.setItem('wishList', JSON.stringify(wishListProducts));
  const wishFilter = JSON.parse(localStorage.getItem('wishList'));

  return (
    <>
      <NavigatePage />
      {!!productDetailsFilter && (
        <>
          <div className="bag_number">
            <span className="bag_number_items">WISH-LIST</span>
            <div className="number">
              <div className="count_bag">{count}</div>
              <span className="bag_items">items</span>
            </div>
          </div>
          {wishFilter.map((item) => (
            <WishListCard
              key={item.id}
              bagImg={item.images[0]}
              nameCardBag={item.name}
              currency={item.price.currency}
              valuePrice={item.price.value}
              colorProduct={item.color.name}
              size={item.availableSizes}
              productId={item.id}
            />
          ))}
        </>
      )}
      <Updates />
      <Footer />
    </>
  );
};

export default WishList;
