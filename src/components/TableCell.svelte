<script>
  export let data;
  export let tablePart;
  //   export let dataType;
</script>

<style>
</style>

{#if tablePart === 'body'}
  <td>{data || ''}</td>
{:else}
  <th>{data || ''}</th>
{/if}
