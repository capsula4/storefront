import './header.scss';
import './nav.scss';
import controller from './header.controller';
/**
 * Component for displaying user info/navigation.
 */
const HeaderComponent = {
    controller,
    templateUrl: '/components/header/header.html'
};

export default HeaderComponent;
