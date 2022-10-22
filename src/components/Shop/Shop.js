import './Shop.css';
import TitleShop from '../TitleShop/TitleShop';
import Images from '../Images/Images';

const Shop = () => {
  return (
    <div className="container">
      <div className="shop">
        <TitleShop shopTitleClass="title_shop" titleShop="SHOP INSTAGRAM" />
        <TitleShop shopTitleClass="title_shop" titleShop="SHOP" />
      </div>
      <div className="images_wrapper">
        <div className="images_wrapper_items">
          <Images
            images="../../images/img/instagram-image-placeholder-1.png"
            images_class="images_card_main"
          />
        </div>
        <div className="images_wrapper_card">
          <Images
            images="../../../images/img/instagram-image-placeholder-2.png"
            images_class="images_card"
          />
          <Images
            images="../../../images/img/instagram-image-placeholder-3.png"
            images_class="images_card"
          />
          <Images
            images="../../../images/img/instagram-image-placeholder-4.png"
            images_class="images_card"
          />
          <Images
            images="../../../images/img/instagram-image-placeholder-5.png"
            images_class="images_card"
          />
        </div>
      </div>
      <TitleShop shopTitleClass="title_shop" titleShop="#MODNIKKY" />
    </div>
  );
};

export default Shop;
