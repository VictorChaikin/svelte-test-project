<script>
  export let data;
  export let columns;
  export let rows;
  export let filters;
  export let values;
  
  import { createTable } from "../logic/pivotTableLogic.js";
  const table = createTable(columns, rows, filters, values, data);
</script>

<table>

  {#each table as tableBodyRow}
    <tr>
      {#each tableBodyRow as tableItem}
        <td>{tableItem}</td>
      {/each}
    </tr>
  {/each}

</table>
