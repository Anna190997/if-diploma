import './TitleShop.css';

const TitleShop = ({ titleShop, shopTitleClass }) => {
  return <p className={shopTitleClass}>{titleShop}</p>;
};

export default TitleShop;
