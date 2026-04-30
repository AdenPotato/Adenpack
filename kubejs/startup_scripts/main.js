// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

/*
    event.remove({id: 'tacz:gunpowder'})
    event.remove({id: "onlyhammersandexcavators:redstone_hammer"})
    event.remove({id: "onlyhammersandexcavators:lapis_hammer"})
    event.remove({id: "onlyhammersandexcavators:obsidian_hammer"})
    event.remove({id: "onlyhammersandexcavators:emerald_hammer"})

    event.remove({id: "onlyhammersandexcavators:redstone_excavator"})
    event.remove({id: "onlyhammersandexcavators:lapis_excavator"})
    event.remove({id: "onlyhammersandexcavators:obsidian_excavator"})
    event.remove({id: "onlyhammersandexcavators:emerald_excavator"})
*/

ItemEvents.modification(event => {
    //hammer
    event.modify("onlyhammersandexcavators:redstone_hammer", item => {
        item.tier = tier => {
            tier.speed = 0
        }
    })
    event.modify("onlyhammersandexcavators:lapis_hammer", item => {
        item.tier = tier => {
            tier.speed = 0
        }
    })
    event.modify("onlyhammersandexcavators:obsidian_hammer", item => {
        item.tier = tier => {
            tier.speed = 0
        }
    })
    event.modify("onlyhammersandexcavators:emerald_hammer", item => {
        item.tier = tier => {
            tier.speed = 0
        }
    })

    //excavator
    event.modify("onlyhammersandexcavators:redstone_excavator", item => {
        item.tier = tier => {
            tier.speed = 0
        }
    })
    event.modify("onlyhammersandexcavators:lapis_excavator", item => {
        item.tier = tier => {
            tier.speed = 0
        }
    })
    event.modify("onlyhammersandexcavators:lapis_excavator", item => {
        item.tier = tier => {
            tier.speed = 0
        }
    })
    event.modify("onlyhammersandexcavators:emerald_excavator", item => {
        item.tier = tier => {
            tier.speed = 0
        }
    })
})