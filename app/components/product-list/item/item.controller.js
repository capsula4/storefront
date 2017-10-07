export default /*@ngInject*/ function($state) {
    this.go = () => {
        $state.go('view', {
            id: this.recipe.slug,
            recipe: this.recipe
        });
    };
}
