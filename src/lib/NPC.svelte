<script>
  export let data;
  import { minimal } from "../stores/settings";
</script>

<article class="NPC">
  <h2>{data.name} the {data.levelString} {data.race}</h2>
  <div class="info">
    <table cellspacing="0">
      <tr>
        <td>M</td>
        <td>{data.M}</td>
      </tr><tr>
        <td>WS</td>
        <td>{data.WS}</td>
      </tr><tr>
        <td>BS</td>
        <td>{data.BS}</td>
      </tr><tr>
        <td>S</td>
        <td>{data.S}</td>
      </tr>
      <tr>
        <td>T</td>
        <td>{data.T}</td>
      </tr>
      <tr>
        <td>W</td>
        <td>{data.W}</td>
      </tr>
      <tr>
        <td>I</td>
        <td>{data.I}</td>
      </tr>
      <tr>
        <td>A</td>
        <td>{data.A}</td>
      </tr>
      {#if !$minimal}
        <tr>
          <td>T</td>
          <td>{data.T}</td>
        </tr>
        <tr>
          <td>Dex</td>
          <td>{data.Dex}</td>
        </tr>
        <tr>
          <td>Ld</td>
          <td>{data.Ld}</td>
        </tr>
        <tr>
          <td>Int</td>
          <td>{data.Int}</td>
        </tr>
        <tr>
          <td>Cl</td>
          <td>{data.Cl}</td>
        </tr>
        <tr>
          <td>WP</td>
          <td>{data.WP}</td>
        </tr>
        <tr>
          <td>Fel</td>
          <td>{data.Fel}</td>
        </tr>
      {/if}
    </table>
    <div class="equipment">
      <h3>Equipment</h3>
      <ul>
        {#each data.equipment as stuff}
          <li>{stuff}</li>
        {/each}
      </ul>
    </div>
  </div>
</article>

<!--
M: "1D3+2",
WS: "2D10+20",
BS: "2D10+20",
S: "1D3+1",
T: "1D3+1",
W: "1D3+4",
I: "2D10+20",
A: "1",
Dex: "2D10+20",
Ld: "2D10+20",
Int: "2D10+20",
Cl: "2D10+20",
WP: "2D10+20",
Fel: "2D10+20",
-->
