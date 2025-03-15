export const coffeeStatusLevels = {
    low: {
        color: "#047857",
        background: "#d1fae5",
        description: 'Caffeine levels are mild, resulting in a light boost in alertness with minimal side effects.',
        maxLevel: 100
    },
    moderate: {
        color: "#b45309",
        background: "#fef3c7",
        description: 'A moderate amount of caffeine leads to noticeable stimulation, increased focus, and potential restlessness.',
        maxLevel: 200
    },
    high: {
        color: "#e11d48",
        background: "#ffe4e6",
        description: 'Elevated caffeine levels can cause jitteriness, rapid heartbeat, and trouble concentrating, signaling an excessive intake.',
        maxLevel: 9999
    },
}


// COMPLETAR FUNCIONES PARA LAS STATS

export const coffeeConsumptionHistory = {}

export const coffeeOptions = []

const halfLifeHours = 5

export function calculateCurrentCaffeineLevel(historyData) {}

export function getCaffeineAmount(coffeeName) {}


export function getTopThreeCoffees(historyData) {
    const coffeeCount = {}

    // Cuenta ocurrencias de cada tipo de cafe
    // ESTA HABRIA QUE CAMBIARLA ARMANDO UN SET DE CADA CAFE ASI DESPUES ES MAS FACIL TENER LA CANTIDAD TOMADA SINO MUY LENTO
    for (const entry of Object.values(historyData)) {
        const coffeeName = entry.name
        if (coffeeCount[coffeeName]) {
            coffeeCount[coffeeName]++
        } else {
            coffeeCount[coffeeName] = 1
        }
    }

    // Converte el objeto coffeeCount a un array de la forma [coffeeName, count] y la sortea por count (cantidad)
    const sortedCoffees = Object.entries(coffeeCount).sort((a, b) => b[1] - a[1])

    // Calcula cantidad total de cafes consumidos
    const totalCoffees = Object.values(coffeeCount).reduce((sum, count) => sum + count, 0)

    // Consigue los 3 cafes mas consumidos
    const topThree = sortedCoffees.slice(0, 3).map(([coffeeName, count]) => {})

    return topThree
}

export function timeSinceConsumption(utcMilliseconds) {}

export function calculateCoffeeStats(coffeeConsumptionHistory) {}