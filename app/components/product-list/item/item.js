import './item.scss';
import controller from './item.controller';
import templateUrl from './item.html';

/**
 * Component for displaying a single product.
 */
const ProductItemComponent = {
    bindings: {
        product: '='
    },
    controller,
    templateUrl
};

export default ProductItemComponent;
