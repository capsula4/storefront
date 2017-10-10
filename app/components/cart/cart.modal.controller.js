export default /*@ngInject*/ function(close, $element, $timeout, $document) {
    this.close = close;

    $element.find('.bc-modal').on('click', (event) => {
        event.originalEvent.cartClicked = true;
    });

    // We need a timeout otherwise as soon as we click on "My Cart"
    // button it generates a document click and would hide it straight away.
    $timeout(() => {
        $document.on('click', (event) => {
            if (event.originalEvent.cartClicked) {
                return;
            }

            $document.off('click');
            $element.off('click');

            close();
        });
    }, 100);
}
