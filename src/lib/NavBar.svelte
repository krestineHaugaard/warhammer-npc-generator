<script>
  import { races } from "../utils/races";
  import { capitalize } from "../utils/utils";
  import { party } from "../stores/party";
  import { level, minimal } from "../stores/settings";
  import { levels } from "../assets/levels";
  import Button from "./Button.svelte";
  let open = false;
</script>

<nav class={open ? "open" : ""}>
  <label>
    Minimal:
    <input type="checkbox" bind:checked={$minimal} name="essential" />
  </label>
  <Button size="small" inverse on:click={party.reset}>Clear</Button>
  <select bind:value={$level}>
    {#each levels as lvl, index}
      <option value={index}>{lvl}</option>
    {/each}
  </select>
  <hr />
  {#each races as race}
    <Button
      on:click={(e) => {
        party.addToParty(race.race, $level);
      }}>{capitalize(race.race)}</Button
    >
  {/each}
</nav>
<div class="burger">
  <Button on:click={(e) => (open = !open)}>🍔</Button>
</div>

<style>
  .burger {
    position: absolute;
    right: 1rem;
    top: 1rem;
    z-index: 100;
    width: 50px;
  }
  hr {
    width: 100%;
  }
  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: calc(100vw);
    background-color: var(--bg);
    transform: translateY(-1000px);
    transition: all 0.5s;
    border-bottom: 1px solid var(--primary);
  }
  .open {
    transform: translateY(0px);
  }
</style>
