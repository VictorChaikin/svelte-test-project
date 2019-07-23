<script>
  export let uniqueRows;
  export let tableValues;
  export let rowsTotal;
  import {
    createTablePart,
    transfortObjectToArray
  } from "../../logic/pivotTableLogic.js";
  // console.log("Body");
  // console.log(uniqueRows);
  // console.log(tableValues);
  // console.log(rowsTotal);
  // console.log("______________________________");
  const rows = transfortObjectToArray(uniqueRows, "rows", 'label');
  const bodyValues =  transfortObjectToArray(tableValues, 'tableValues');
  const rowsTotalValues = transfortObjectToArray(rowsTotal, 'rows', 'value');
  const body = createTablePart(rows, bodyValues, rowsTotalValues);
</script>

<style>
  td {
    text-align: left;
    max-width: 250px;
    word-break: break-all;
  }
</style>

{#each body as bodyRow}
  <tr>
    {#each bodyRow as bodyItem}
      <td>{bodyItem}</td>
    {/each}
  </tr>
{/each}
