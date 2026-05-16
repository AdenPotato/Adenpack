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

    event.remove({id: 'extended_industrialization:tool/nano_suit_helmet_quantum_upgrade'})
    event.remove({id: 'extended_industrialization:tool/nano_suit_leggings_quantum_upgrade'})
    event.remove({id: 'extended_industrialization:tool/nano_suit_boots_quantum_upgrade'})
    event.remove({id: 'extended_industrialization:tool/nano_suit_chestplate_quantum_upgrade'})
    event.remove({id: 'extended_industrialization:tool/nano_saber_quantum_upgrade'})

    event.remove({id: 'modern_industrialization:upgrade/packer/quantum/sword'})
    event.remove({id: 'modern_industrialization:upgrade/packer/quantum/leggings'})
    event.remove({id: 'modern_industrialization:upgrade/packer/quantum/chestplate'})
    event.remove({id: 'modern_industrialization:upgrade/packer/quantum/leggings'})
    event.remove({id: 'modern_industrialization:upgrade/packer/quantum/boots'})

    event.remove({id: 'functionalstorage:obsidian_upgrade'})
    event.remove({id: 'functionalstorage:water_generator_upgrade'})
    event.remove({id: 'functionalstorage:dripping_upgrade'})
    

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
