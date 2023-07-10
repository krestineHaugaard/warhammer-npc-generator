<script>
  export let inverse = false;
  export let size = "medium";
</script>

<button on:click data-size={size} data-inverse={inverse}><slot /></button>

<style>
  button {
    --bg: #1a1a1a;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    font-weight: 500;
    font-family: inherit;
    background-color: var(--bg);
    cursor: pointer;
    transition: border-color 0.25s;
    color: var(--primary);
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
  [data-inverse="true"] {
    color: var(--bg);
    background-color: var(--primary);
  }
  [data-size="small"] {
    padding: 0.1rem 0.2rem;
    font-size: 0.8rem;
    border-radius: 4px;
  }
</style>
