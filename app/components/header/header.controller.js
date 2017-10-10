import cartController from '../cart/cart.modal.controller';

export default /*@ngInject*/ function(ModalService, $state, $timeout, bcCartService) {
    let modal;

    /**
     * Loads the homepage.
     */
    this.loadHomepage = () => {
        $state.go('list');
    };

    /**
     * Displays the cart component.
     */
    this.showCart = () => {
        if (modal) {
            modal.scope.close();
            return;
        }

        modal = ModalService.showModal({
            templateUrl: 'components/cart/cart.modal.html',
            controllerAs: '$ctrl',
            controller: cartController
        }).then(m => {
            m.close.then(() => { modal = null; });
        });
    };

    /**
     * Highlights the "My Cart" link
     */
    this.highlightCart = () => {
        this.highlight = true;

        $timeout(() => {
            this.highlight = false;
        }, 1000);
    };

    /**
     * Get total quantity of items in cart.
     *
     * @return {Number}
     */
    this.getTotal = () => {
        if (this.quantity !== bcCartService.getTotalQuantity()) {
            if (typeof this.quantity !== 'undefined') {
                this.highlightCart();
            }

            this.quantity = bcCartService.getTotalQuantity();
        }

        return this.quantity;
    };
}
