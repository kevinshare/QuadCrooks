/*eslint-disable*/
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far);
export default (SVG) => {
  const FontAwesomeWrapper = props => (<SVG type={props.type}/>);
  return FontAwesomeWrapper;
};

