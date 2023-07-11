import { persisted } from "svelte-local-storage-store";

import { generateCharacter } from "../utils/generator";

function createParty() {
  const { subscribe, set, update } = persisted("party", []);

  return {
    subscribe,
    addToParty: (race, level) =>
      update((n) => n.concat(generateCharacter(race, level))),
    removeFromParty: (id) =>
      update((n) => {
        return n.filter((char) => char.id !== id);
      }),
    increaseHealth: (id) =>
      update((n) => {
        return n.map((char) => {
          if (char.id === id) {
            char.health += 1;
          }
          return char;
        });
      }),
    decreaseHealth: (id) =>
      update((n) => {
        return n.map((char) => {
          if (char.id === id) {
            char.health -= 1;
          }
          return char;
        });
      }),
    reset: () => set([]),
  };
}

export const party = createParty();
