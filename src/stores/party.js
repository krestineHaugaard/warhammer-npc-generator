import { writable } from "svelte/store";
import { generateCharacter } from "../utils/generator";

function createParty() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    addToParty: (race, level) =>
      update((n) => n.concat(generateCharacter(race, level))),
    removeFromParty: () => update((n) => n),
    reset: () => set([]),
  };
}

export const party = createParty();
