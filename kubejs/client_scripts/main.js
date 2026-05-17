// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded client example script)')

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