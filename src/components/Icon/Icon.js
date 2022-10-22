import './Icon.css';

const Icon = ({ icon, id, show }) => {
  return (
    <svg className={icon} onClick={show}>
      <use xlinkHref={`/images/svg/sprite.svg#${id}`} />
    </svg>
  );
};

export default Icon;
