export enum Rarity {
  STANDART = 'standart',
  RARE = 'rare',
  VERY_RARE = 'very-rare',
  LEGENDARY = 'legendary',
}

export const rarityToText = (rarity: Rarity) => {
  switch (rarity) {
    case Rarity.STANDART:
      return 'Обычная';
    case Rarity.RARE:
      return 'Редкая';
    case Rarity.VERY_RARE:
      return 'Крайне редкая';
    case Rarity.LEGENDARY:
      return 'Легегдарная';
  }
};
