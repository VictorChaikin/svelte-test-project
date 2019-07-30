<script>
  export let uniqueColumns;
  import UniqueHeader from "./UniqueHeader.svelte";

  let defaultColumns = new Array(uniqueColumns.length).fill("");
  defaultColumns[0] = "Column Labels";
</script>

<style>
  /* th {
    min-width: 150px;
    text-align: left;
  } */

  .cell {
    padding: 5px;
  }

  .has-inner-table-elem {
    border: 0 solid black;
  }
</style>

<table>
  <tr>
    {#each defaultColumns as defaultColumn}
      <th class="cell">{defaultColumn}</th>
    {/each}
  </tr>

  <tr class="has-inner-table-elem ">
    <UniqueHeader array={uniqueColumns} />
  </tr>
</table>
