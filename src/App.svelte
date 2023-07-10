<script>
  import { races } from "./utils/races";
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
  </div>
</main>

<style>
</style>
