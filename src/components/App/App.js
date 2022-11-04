import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import ProductDetails from '../ProductDetails/ProductDetails';
import Authorization from '../Authorization/Authorization';
import Bag from '../Bag/Bag';
import WishList from '../WishList/WishList';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<Authorization />} />
          <Route path="/catalog/:id" element={<ProductDetails />} />
          <Route path="/catalog/bag" element={<Bag />} />
          <Route path="/catalog/wishList" element={<WishList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
