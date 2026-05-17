RecipeViewerEvents.removeRecipes(event => {
	event.remove('ars_nouveau:reactive_4')
    event.remove('ars_nouveau:reactive_3')
    event.remove('ars_nouveau:reactive_2')
    event.remove('ars_nouveau:reactive_1')
    event.remove('jei:/integrateddynamics/special/facade')
})

RecipeViewerEvents.removeEntries('item', event => {
	event.remove('integrateddynamics:facade')
})