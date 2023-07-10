<script>
  export let data;
  import { minimal } from "../stores/settings";
  let health = data.W;
</script>

<article class="NPC">
  <h2>{data.name} the {data.levelString} {data.race}</h2>

  <table cellspacing="0">
    <thead>
      <tr>
        <th>M</th>
        <th>WS</th>
        <th>BS</th>
        <th>S</th>
        <th>T</th>
        <th>W</th>
        <th>I</th>
        <th>A</th>
        {#if !$minimal}
          <th>Dex</th>
          <th>Ld</th>
          <th>Int</th>
          <th>Cl</th>
          <th>WP</th>
          <th>Fel</th>
        {/if}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{data.M}</td>
        <td>{data.WS}</td>
        <td>{data.BS}</td>
        <td>{data.S}</td>
        <td>{data.T}</td>
        <td>{data.W}</td>
        <td>{data.I}</td>
        <td>{data.A}</td>
        {#if !$minimal}
          <td>{data.Dex}</td>
          <td>{data.Ld}</td>
          <td>{data.Int}</td>
          <td>{data.Cl}</td>
          <td>{data.WP}</td>
          <td>{data.Fel}</td>
        {/if}
      </tr>
    </tbody>
  </table>
  <div class="equipment">
    <h3>Equipment</h3>
    <ul>
      {#each data.equipment as stuff}
        <li>{stuff}</li>
      {/each}
    </ul>
  </div>
  <div class="health">
    <button on:click={() => (health = health - 1)}>-</button>
    <div>{health}</div>
    <button on:click={() => (health = health + 1)}>+</button>
  </div>
</article>

<style>
  .NPC {
    padding: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.87);
    border-radius: 0.5rem;
  }
  .health {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
  }
  .health div {
    width: 20px;
    text-align: center;
  }
  h2 {
    font-size: 1.1rem;
  }
  h3 {
    font-size: 1rem;
  }
  h2,
  h3 {
    text-align: center;
  }
  table td {
    text-align: start;
    margin: 0;
  }

  table tbody td {
    text-align: end;
    padding-inline-start: 0.5rem;
  }

  td,
  th {
    padding: 0.5rem;
    border-right: 1px solid rgba(255, 255, 255, 0.87);
  }
  /* table td:nth-child(odd),
  table th:nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.87);
    color: #242424;
  } */

  table {
    border: 1px solid rgba(255, 255, 255, 0.87);
    margin: auto;
  }
  thead tr {
    background-color: rgba(255, 255, 255, 0.87);
    color: #242424;
  }
  .NPC .info h3 {
    margin: 0;
    padding: 0;
  }
</style>
