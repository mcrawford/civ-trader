import {
  Bronze,
  Card,
  Cloth,
  Gems,
  Gold,
  Grain,
  Hides,
  Iron,
  Ochre,
  Papyrus,
  Salt,
  Spice,
} from './card'
import { shuffleArray } from './utils'

export class Player {
  name: string
  hand: Card[]
  offer: Card[]
  calamitiesReceived: Card[] = []

  constructor(name: string, hand: Card[]) {
    this.name = name
    this.hand = hand
  }

  createOffer() {
    shuffleArray(this.hand)
    this.offer = this.hand.slice(0, 3)
  }

  likesOffer(incomingOffer: Card[]): boolean {
    const handWithoutOffer = this.hand.slice()
    this.offer.forEach((c) => {
      const i = handWithoutOffer.indexOf(c)
      if (i > -1) handWithoutOffer.splice(i, 1)
    })
    const handWithNewOffer = [...handWithoutOffer, ...incomingOffer]
    const valueNewHand = this.evaluateHand(handWithNewOffer)

    return valueNewHand > this.evaluateHand(this.hand)
  }

  tradeFor(incomingOffer: Card[]) {
    this.offer.forEach((c) => {
      const i = this.hand.indexOf(c)
      if (i > -1) this.hand.splice(i, 1)
    })
    this.calamitiesReceived.push(...incomingOffer.filter((c) => c.value === 0))
    this.hand = [...this.hand, ...incomingOffer.filter((c) => c.value > 0)]
  }

  evaluateHand(hand: Card[]): number {
    const numHides = hand.filter((c) => c === Hides).length
    const numOchre = hand.filter((c) => c === Ochre).length
    const numIron = hand.filter((c) => c === Iron).length
    const numPapyrus = hand.filter((c) => c === Papyrus).length
    const numSalt = hand.filter((c) => c === Salt).length
    const numGrain = hand.filter((c) => c === Grain).length
    const numCloth = hand.filter((c) => c === Cloth).length
    const numBronze = hand.filter((c) => c === Bronze).length
    const numSpice = hand.filter((c) => c === Spice).length
    const numGems = hand.filter((c) => c === Gems).length
    const numGold = hand.filter((c) => c === Gold).length

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
}
