<script>
  export let data;
  export let tablePart;
  //   export let dataType;
</script>

<style>
  td {
    padding-left: 10px;
  }
</style>

{#if tablePart === 'body'}
  <td>{data}</td>
{:else}
  <th>{data}</th>
{/if}
