import './cart.scss';
import controller from './cart.controller';

/**
 * Component for displaying the cart component.
 */
const CartComponent = {
    bindings: {
        summary: '='
    },
    controller,
    templateUrl: '/components/cart/cart.html'
};

export default CartComponent;
