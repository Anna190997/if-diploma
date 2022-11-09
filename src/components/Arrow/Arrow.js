import './Arrow.css';
import Icon from '../Icon/Icon';

const Arrow = ({ icon, id, show, sliderMin, sliderMax, arrayLength }) => {
  if (!(sliderMin === 0 || sliderMax >= arrayLength)) {
    return <Icon icon={icon} id={id} show={show} />;
  }
};

export default Arrow;
