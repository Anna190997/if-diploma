import './Icon.css';

const Icon = ({ icon, id }) => {
  return (
    <svg className={icon}>
      <use xlinkHref={`/images/svg/sprite.svg#${id}`} />
    </svg>
  );
};

export default Icon;
