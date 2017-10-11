import './cart.scss';
import controller from './cart.controller';

/**
 * Component for displaying the cart component.
 *
 * If summary is true, it will display a reduced version of the cart
 * component, used for the `popup` version.
 */
const CartComponent = {
    bindings: {
        summary: '=?'
    },
    controller,
    templateUrl: '/components/cart/cart.html'
};

export default CartComponent;
