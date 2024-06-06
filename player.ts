import { Card } from './card'
import { evaluateCards, shuffleArray } from './utils'
import { Offer } from './offer'

export class Player {
  name: string
  hand: Card[]
  offer: Offer
  calamitiesReceived: Card[] = []

  constructor(name: string, hand: Card[]) {
    this.name = name
    this.hand = hand
  }

  createOffer() {
    shuffleArray(this.hand)
    this.offer = new Offer(this.hand.slice(0, 3))
  }

  likesOffer(incomingOffer: Offer): boolean {
    const handWithoutOffer = this.hand.slice()
    this.offer.cards.forEach((c) => {
      const i = handWithoutOffer.indexOf(c)
      if (i > -1) handWithoutOffer.splice(i, 1)
    })
    const handWithNewOffer = [...handWithoutOffer, incomingOffer.named]
    const valueNewHand = this.evaluateHand(handWithNewOffer) + incomingOffer.total - incomingOffer.named.value

    return valueNewHand > this.evaluateHand(this.hand)
  }

  tradeFor(incomingOffer: Offer) {
    this.offer.cards.forEach((c) => {
      const i = this.hand.indexOf(c)
      if (i > -1) this.hand.splice(i, 1)
    })
    this.calamitiesReceived.push(...incomingOffer.cards.filter((c) => c.value <= 0))
    this.hand = [...this.hand, ...incomingOffer.cards.filter((c) => c.value > 0)]
  }

  evaluateHand(hand: Card[]): number {
    const cardsValue = evaluateCards(hand)
    const numCalamities = hand.filter(c => c.value === 0).length

    return (
      cardsValue +
      numCalamities * -10
    )
  }
}
