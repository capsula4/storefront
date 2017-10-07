import './item.scss';
import controller from './item.controller';

/**
 * Component for displaying a single product.
 */
const ProductItemComponent = {
    bindings: {
        product: '='
    },
    controller,
    templateUrl: '/components/product-list/item/item.html'
};

export default ProductItemComponent;
