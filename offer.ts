import { Card } from './card'
import { evaluateCards, shuffleArray } from './utils'

export class Offer {
  cards: Card[]
  named: Card
  total: number

  constructor(cards: Card[]) {
    this.cards = cards
    this.cards.sort((c1: Card, c2: Card) => c2.value - c1.value)
    this.named = this.chooseNamedCard()
    this.total = evaluateCards(cards)
  }

  chooseNamedCard(): Card {
    const popularCards = this.cards.filter(c => ['Salt', 'Grain', 'Cloth', 'Bronze'].includes(c.name))
    if (popularCards.length > 0) {
      shuffleArray(popularCards)
      return popularCards[0]
    }
    return this.cards[0]
  }
}
