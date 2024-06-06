export type Card = {
  name: string
  value: number
}
export type Calamity = Card & { isTradable: boolean }

export const Hides: Card = { name: 'Hides', value: 1 }
export const Ochre: Card = { name: 'Ochre', value: 1 }
export const Iron: Card = { name: 'Iron', value: 2 }
export const Papyrus: Card = { name: 'Papyrus', value: 2 }
export const Salt: Card = { name: 'Salt', value: 3 }
export const Grain: Card = { name: 'Grain', value: 4 }
export const Cloth: Card = { name: 'Cloth', value: 5 }
export const Bronze: Card = { name: 'Bronze', value: 6 }
export const Spice: Card = { name: 'Spice', value: 7 }
export const Gems: Card = { name: 'Gems', value: 8 }
export const Gold: Card = { name: 'Gold', value: 9 }

export const Volcanic: Calamity = {
  name: 'Volcanic Eruption or Earthquake',
  value: 0,
  isTradable: false,
}
export const Famine: Calamity = { name: 'Famine', value: 0, isTradable: false }
export const CivilWar: Calamity = {
  name: 'Civil War',
  value: 0,
  isTradable: false,
}
export const Flood: Calamity = { name: 'Flood', value: 0, isTradable: false }
export const Epidemic: Calamity = {
  name: 'Epidemic',
  value: 0,
  isTradable: true,
}
export const CivilDisorder: Calamity = {
  name: 'Civil Disorder',
  value: 0,
  isTradable: true,
}
export const Iconoclasm: Calamity = {
  name: 'Iconoclasm & Heresy',
  value: 0,
  isTradable: true,
}
export const Piracy: Calamity = { name: 'Piracy', value: 0, isTradable: true }
