import {
  Bronze,
  Epidemic,
  Gold,
  Hides,
  Iron,
  Ochre,
  Papyrus,
  Piracy,
  Salt,
} from './card'
import { Player } from './player'
import { shuffleArray } from './utils'

const asia = new Player('Asia', [
  Bronze,
  Salt,
  Ochre,
  Ochre,
  Hides,
  Iron,
  Epidemic,
])
const egypt = new Player('Egypt', [Bronze, Salt, Ochre, Papyrus, Iron, Piracy])
const assyria = new Player('Assyria', [
  Gold,
  Bronze,
  Bronze,
  Salt,
  Ochre,
  Papyrus,
])
const players = [asia, egypt, assyria]
const millisToTrade = 5000

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
