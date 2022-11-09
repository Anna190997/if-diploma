import './TitleNav.css';

const TitleNav = ({ title_nav, showMain }) => {
  return (
    <h2 className={title_nav} onClick={showMain}>
      MODNIKKY
    </h2>
  );
};

export default TitleNav;
