import {
  Bronze,
  CivilDisorder,
  Cloth,
  Epidemic,
  Gems,
  Gold,
  Grain,
  Hides, Iconoclasm,
  Iron,
  Ochre,
  Papyrus, Piracy,
  Salt,
  Spice
} from './card'
import { Player } from './player'
import { shuffleArray } from './utils'

const africa = new Player('Africa', [
  Gems, Ochre, Iron, Bronze, Grain, Salt, Iron, Hides, Piracy
])
const illyria = new Player('Illyria', [
  Salt, Gold, Cloth, Grain, Salt, Iron, Ochre
])
const thrace = new Player('Thrace', [
  Iron, Bronze, Bronze, Bronze, Spice, Spice, Grain, Salt, Papyrus, Hides
])
const asia = new Player('Asia', [
  Bronze, Bronze, Spice, Spice, Gems, Gems, Gems, Spice, Grain, Salt, Papyrus, Ochre, Gold
])
const babylon = new Player('Babylon', [
  Cloth, Cloth, Cloth, Cloth, Cloth, Cloth, Grain, Salt, Papyrus, Hides, Gold
])
const crete = new Player('Crete', [
  Papyrus, Papyrus, Grain, Salt, Iron, Hides, Epidemic
])

const players = [africa, illyria, thrace, asia, crete]

const millisToTrade = 60 * 1000
const start = Date.now()
let tradesConsidered = 0
let tradesCompleted = 0

while (Date.now() - start < millisToTrade) {
  const playersCopy = players.slice()
  shuffleArray(playersCopy)
  while (playersCopy.length > 1) {
    const p1 = playersCopy.pop()
    const p2 = playersCopy.pop()
    p1.createOffer()
    p2.createOffer()

    tradesConsidered++
    if (p1.likesOffer(p2.offer) && p2.likesOffer(p1.offer)) {
      console.log(
        `${p1.name} trades ${p1.offer.map((c) => c.name).join(', ')} to ${p2.name} for ${p2.offer.map((c) => c.name).join(', ')}`,
      )
      p1.tradeFor(p2.offer)
      p2.tradeFor(p1.offer)
      tradesCompleted++
    }
  }
}

console.log(
  `${tradesConsidered} trades considered, ${tradesCompleted} completed`,
)
players.forEach((player) => {
  console.log(
    player.name,
    player.hand
      .sort((c1, c2) => c1.value - c2.value)
      .map((c) => c.name)
      .join(', '),
    player.calamitiesReceived.map((c) => c.name),
  )
})
