ServerEvents.recipes(event => {
    event.remove({id: 'tacz:gunpowder'})
    event.remove({id: "onlyhammersandexcavators:redstone_hammer"})
    event.remove({id: "onlyhammersandexcavators:lapis_hammer"})
    event.remove({id: "onlyhammersandexcavators:obsidian_hammer"})
    event.remove({id: "onlyhammersandexcavators:emerald_hammer"})

    event.remove({id: "onlyhammersandexcavators:redstone_excavator"})
    event.remove({id: "onlyhammersandexcavators:lapis_excavator"})
    event.remove({id: "onlyhammersandexcavators:obsidian_excavator"})
    event.remove({id: "onlyhammersandexcavators:emerald_excavator"})
    
    event.shapeless(
        Item.of('minecraft:bamboo_planks', 2),
        [
            'minecraft:bamboo_block'
        ]
    )
    event.shapeless(
        Item.of('minecraft:bamboo_planks', 2),
        [
            'minecraft:stripped_bamboo_block'
        ]
    )

})
