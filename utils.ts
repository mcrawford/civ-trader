import { Bronze, Card, Cloth, Gems, Gold, Grain, Hides, Iron, Ochre, Papyrus, Salt, Spice } from './card'

export function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

export const sortCards = (c1: Card, c2: Card) => {
  if (c1.value === c2.value) {
    return c1.name.localeCompare(c2.name)
  }
  return c1.value - c2.value
}

export function evaluateCards(cards: Card[]): number {
  const numHides = cards.filter((c) => c === Hides).length
  const numOchre = cards.filter((c) => c === Ochre).length
  const numIron = cards.filter((c) => c === Iron).length
  const numPapyrus = cards.filter((c) => c === Papyrus).length
  const numSalt = cards.filter((c) => c === Salt).length
  const numGrain = cards.filter((c) => c === Grain).length
  const numCloth = cards.filter((c) => c === Cloth).length
  const numBronze = cards.filter((c) => c === Bronze).length
  const numSpice = cards.filter((c) => c === Spice).length
  const numGems = cards.filter((c) => c === Gems).length
  const numGold = cards.filter((c) => c === Gold).length

  return (
    numHides * numHides * Hides.value +
    numOchre * numOchre * Ochre.value +
    numIron * numIron * Iron.value +
    numPapyrus * numPapyrus * Papyrus.value +
    numSalt * numSalt * Salt.value +
    numGrain * numGrain * Grain.value +
    numCloth * numCloth * Cloth.value +
    numBronze * numBronze * Bronze.value +
    numSpice * numSpice * Spice.value +
    numGems * numGems * Gems.value +
    numGold * numGold * Gold.value
  )
}
