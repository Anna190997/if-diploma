import './TitleShop.css';

const TitleShop = ({ titleShop, shopTitleClass }) => {
  return <div className={shopTitleClass}>{titleShop}</div>;
};

export default TitleShop;
