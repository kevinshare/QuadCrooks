/*eslint-disable*/
import library from './FontAwesomeWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Upload = props => <FontAwesomeIcon id="svg" icon={props.type} />;

export default library(Upload);
