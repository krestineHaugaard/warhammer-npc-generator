import { races } from "./races";
import {
  capitalize,
  parseRoll,
  getRandomFromArray,
  getRandomInt,
} from "./utils";

import weapons from "../assets/equipment";
import { maxSilver, weaponChances } from "../assets/settings";
import { names } from "../assets/names";
import { levels, upgrades } from "../assets/levels";

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
    default:
      let min6 = base.stats[stat] - 1;
      return parseRoll("1D3+" + min6);
  }
}
export function generateCharacter(race, level) {
  const base = races.find((el) => el.race === race);

  const character = {
    name: getRandomName(),
    race: capitalize(race),
    levelString: capitalize(translateLevel(level)),
    equipment: getEquipment(level),
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
  const extras = upgrades[level];
  character.WS += extras?.WS || 0;
  character.BS += extras?.BS || 0;
  character.S += extras?.S || 0;
  character.T += extras?.T || 0;
  character.W += extras?.W || 0;
  character.I += extras?.I || 0;
  character.A += extras?.A || 0;
  character.Dex += extras?.Dex || 0;
  character.Ld += extras?.Ld || 0;
  character.Int += extras?.Int || 0;
  character.Cl += extras?.Cl || 0;
  character.WP += extras?.WP || 0;
  return character;
}

function getEquipment(lvl) {
  let equipment = [];
  if (Math.random() < weaponChances.chanceForRanged) {
    equipment.push(getRandomFromArray(weapons.ranged));
  }
  const rnd = Math.random();
  if (rnd < weaponChances.chanceForSpecialistWeapon) {
    equipment.push(getRandomFromArray(weapons.specialistWeapons));
  } else if (rnd < weaponChances.chanceForTwoHanded) {
    equipment.push(getRandomFromArray(weapons.twoHanded));
  } else {
    equipment.push(getRandomFromArray(weapons.oneHandedPrimary));
    if (rnd < weaponChances.chanceForTwoItems) {
      if (Math.random() < weaponChances.chanceForItemTwoBeingAShield) {
        equipment.push("Shield");
      } else {
        equipment.push(getRandomFromArray(weapons.oneHandedSecondary));
      }
    }
  }
  equipment.push(getRandomInt(0, maxSilver * (lvl + 1)) + " silver");
  return equipment;
}
export const getRandomName = () =>
  names[Math.floor(Math.random() * names.length)];

export const translateLevel = (lvl) => {
  return levels[lvl];
};
