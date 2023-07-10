import { races } from "./races";
import {
  capitalize,
  parseRoll,
  getRandomFromArray,
  getRandomInt,
} from "./utils";

import {
  twoHanded,
  oneHandedPrimary,
  oneHandedSecondary,
  specialistWeapons,
} from "./equipment";
import { maxSilver, weaponChances } from "./settings";
import { names, levels } from "./names";
import { parse } from "svelte/compiler";

function getStat(base, stat) {
  switch (stat) {
    case "BS":
    case "WS":
    case "Cl":
    case "Dex":
    case "Fel":
    case "I":
    case "Int":
    case "Ld":
    case "WP":
      let min10 = base.stats[stat] - 11;
      return parseRoll("2D10+" + min10);
      break;
    case "A":
      if (base.stats[stat] === 1) {
        return base.stats[stat];
      }
      const attackChance = Math.random();
      if (attackChance < 0.5) {
        return base.stats[stat];
      } else if (attackChance < 0.75) {
        return base.stats[stat] + 1;
      } else {
        return base.stats[stat] - 1;
      }

      break;
    default:
      let min6 = base.stats[stat] - 2;
      return parseRoll("1D3+" + min6);
      break;
  }
}
export function generateCharacter(race, level) {
  const base = races.find((el) => el.race === race);

  const character = {
    name: getRandomName(),
    race: capitalize(race),
    levelString: capitalize(translateLevel(level)),
    equipment: getEquipment(),
    A: getStat(base, "A"),
    BS: getStat(base, "BS"),
    Cl: getStat(base, "Cl"),
    Dex: getStat(base, "Dex"),
    Fel: getStat(base, "Fel"),
    I: getStat(base, "I"),
    Int: getStat(base, "Int"),
    Ld: getStat(base, "Ld"),
    M: getStat(base, "M"),
    S: getStat(base, "S"),
    T: getStat(base, "T"),
    W: getStat(base, "W"),
    WP: getStat(base, "WP"),
    WS: getStat(base, "WS"),
  };
  //TODO: se evt side 214 i stedet
  for (let i = 0; i < level; i++) {
    switch (getRandomInt(0, 6)) {
      case 0:
        character.A += 1;
        break;
      case 1:
        character.BS += 10;
        break;
      case 2:
        character.M += 1;
        break;
      case 3:
        character.S += 1;
        break;
      case 4:
        character.T += 1;
        break;
      case 5:
        character.W += 2;
        break;
      case 6:
        character.WS += 10;
        break;
    }
  }
  return character;
}

function getEquipment() {
  let equipment = [];
  const rnd = Math.random();
  if (rnd < weaponChances.chanceForSpecialistWeapon) {
    equipment.push(getRandomFromArray(specialistWeapons));
  } else if (rnd < weaponChances.chanceForTwoHanded) {
    equipment.push(getRandomFromArray(twoHanded));
  } else {
    equipment.push(getRandomFromArray(oneHandedPrimary));
    if (rnd < weaponChances.chanceForTwoItems) {
      if (Math.random() < weaponChances.chanceForItemTwoBeingAShield) {
        equipment.push("Shield");
      } else {
        equipment.push(getRandomFromArray(oneHandedSecondary));
      }
    }
  }
  equipment.push(getRandomInt(0, maxSilver) + " silver");
  return equipment;
}
export const getRandomName = () =>
  names[Math.floor(Math.random() * names.length)];

export const translateLevel = (lvl) => {
  return levels[lvl];
};
