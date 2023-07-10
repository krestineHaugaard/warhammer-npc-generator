<script>
  import { races } from "../utils/races";
  import { capitalize } from "../utils/utils";
  import { party } from "../stores/party";
  import { level, minimal } from "../stores/settings";
  import { levels } from "../utils/names";
</script>

<nav>
  <label>
    Minimal:
    <input type="checkbox" bind:checked={$minimal} name="essential" />
  </label>
  {#each races as race}
    <button
      on:click={(e) => {
        party.addToParty(race.race, $level);
      }}>{capitalize(race.race)}</button
    >
  {/each}
  <select bind:value={$level}>
    {#each levels as lvl, index}
      <option value={index}>{lvl}</option>
    {/each}
  </select>
  <strong>{$level}</strong>
</nav>

<style>
  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
  }
</style>
