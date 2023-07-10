<script>
  import { races } from "../utils/races";
  import { capitalize } from "../utils/utils";
  import { party } from "../stores/party";
  import { level, minimal } from "../stores/settings";
  import { levels } from "../assets/levels";
  let open = false;
</script>

<nav class={open ? "open" : ""}>
  <label>
    Minimal:
    <input type="checkbox" bind:checked={$minimal} name="essential" />
  </label>
  <button on:click={party.reset}>Clear</button>
  <select bind:value={$level}>
    {#each levels as lvl, index}
      <option value={index}>{lvl}</option>
    {/each}
  </select>
  {#each races as race}
    <button
      on:click={(e) => {
        party.addToParty(race.race, $level);
      }}>{capitalize(race.race)}</button
    >
  {/each}
</nav>
<button class="burger" on:click={(e) => (open = !open)}>🍔</button>

<style>
  .burger {
    position: absolute;
    right: 1rem;
    top: 1rem;
    z-index: 100;
  }
  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
    position: fixed;
    background-color: #242424;
    transform: translateY(-1000px);
    transition: all 0.5s;
    border-bottom: 1px solid rgba(255, 255, 255, 0.87);
  }
  .open {
    transform: translateY(0px);
  }
</style>
