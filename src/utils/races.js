import creatures from "../assets/creatures.csv?raw";
export const races = getRaces();
function getRaces() {
  return creatures.split("\n").map((creature) => {
    const [race, M, WS, BS, S, T, W, I, A, Dex, Ld, Int, Cl, WP, Fel] =
      creature.split(",");
    return {
      race,
      stats: {
        M: parseInt(M),
        WS: parseInt(WS),
        BS: parseInt(BS),
        S: parseInt(S),
        T: parseInt(T),
        W: parseInt(W),
        I: parseInt(I),
        A: parseInt(A),
        Dex: parseInt(Dex),
        Ld: parseInt(Ld),
        Int: parseInt(Int),
        Cl: parseInt(Cl),
        WP: parseInt(WP),
        Fel: parseInt(Fel),
      },
    };
  });
}
