<script>
  export let uniqueColumns;
  export let configurator;
  // console.log("Header");
  // console.log(uniqueColumns);
  // console.log(configurator);
  // console.log("_____________________________");
  import {
    createTablePart,
    transfortObjectToArray
  } from "../../logic/pivotTableLogic.js";
  const columns = transfortObjectToArray(uniqueColumns, 'columns');

  function getRows(size, values) {
    const array = new Array(size).fill(['']);

    if (values.length === 1) array[0] = [`Sum of ${values[0]}`];
    array[array.length - 1] = ["Row Labels"];

    return array;
  }

  function getRowsTotals(size, values) {
    const array = new Array(size).fill(['']);
    array[1] = ["Total"];

    return array;
  }

  const rowsTitle = getRows(columns.length, configurator.values);
  const verticalTotal = getRowsTotals(columns.length, configurator.values);
  const header = createTablePart(rowsTitle, columns, verticalTotal);
</script>

<style>
  th {
    max-width: 250px;
    text-align: left;
    word-break: break-all;
  }
</style>

{#each header as headerItem}
  <tr>
    {#each headerItem as cell}
      <th>{cell}</th>
    {/each}
  </tr>
{/each}
