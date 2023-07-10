<script>
  import NavBar from "./lib/NavBar.svelte";
  import { party } from "./stores/party";
  import NPC from "./lib/NPC.svelte";
</script>

<NavBar />
<main>
  <div id="party">
    {#each $party as char}
      <NPC data={char} />
    {/each}
    {#if $party.length === 0}
      <p>Go add some NPC's</p>
    {/if}
  </div>
</main>

<style>
</style>
