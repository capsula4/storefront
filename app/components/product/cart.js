import './cart.scss';
import controller from './cart.controller';
import templateUrl from './cart.html';

/**
 * Component for displaying a cart component for a single product.
 *
 * If `control` is true, then the component will include quantity control buttons +, -
 * If `button` is true, then a `Add to Cart` button will be added.
 *
 * If `button` is false and `control` is true, clicking on the quantity buttons
 * will automatically change the product quantity without confirmation (used in the cart page).
 */
const ProductCartComponent = {
    bindings: {
        product: '=',
        button: '=?'
    },
    controller,
    templateUrl
};

export default ProductCartComponent;
