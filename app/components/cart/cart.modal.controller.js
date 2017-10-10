export default /*@ngInject*/ function(close, $element, $timeout, $document) {
    this.close = close;

    $element.find('.bc-modal').on('click', (event) => {
        event.originalEvent.cartClicked = true;
    });

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
