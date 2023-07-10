const twoHanded = [
  "Flail",
  "Halberd",
  "Horseman axe",
  "Morning star",
  "Quarter staff",
  "Spear (2H)",
  "2H Axe",
  "2H Flail",
  "2H Mace",
  "2H Sword",
  "2H Warhammer",
];

const oneHandedPrimary = [
  "Cutlass",
  "Dagger",
  "Hand axe",
  "Mace",
  "Millitary pick",
  "Rapier",
  "Spear",
  "Sword",
  "Warhammer",
  "Wooden Club",
];

const specialistWeapons = [
  "Foil",
  "Garotte",
  "Hand and a half sword",
  "Knuckle dusters",
  "Whip",
];

const oneHandedSecondary = [
  "Buckler",
  "Hook",
  "Sword breaker",
  ...oneHandedPrimary,
];

const ranged = ["Net", "Sling", "Bola", "Longbow"];

const armor = []; //TODO:

const weapons = {
  twoHanded,
  oneHandedPrimary,
  specialistWeapons,
  oneHandedSecondary,
  ranged,
  armor,
};
export default weapons;
