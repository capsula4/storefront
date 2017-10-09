import './cart.scss';
import controller from './cart.controller';

/**
 * Component for displaying a single product.
 */
const ProductCartComponent = {
    bindings: {
        product: '=',
        control: '=',
        button: '='
    },
    controller,
    templateUrl: '/components/product/cart.html'
};

export default ProductCartComponent;
