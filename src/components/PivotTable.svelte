<script>
  export let data;
  export let columns;
  export let rows;
  export let filters;
  export let values;

  import { createTable } from "../logic/pivotTableLogic.js";
  const [header, body, footer] = createTable(
    columns,
    rows,
    filters,
    values,
    data
  );
</script>

<table>
  {#each header as tableHeaderRow}
    <tr>
      {#each tableHeaderRow as headerItem}
        <th>{headerItem}</th>
      {/each}
    </tr>
  {/each}

  {#each body as tableBodyRow}
    <tr>
      {#each tableBodyRow as tableItem}
        <td>{tableItem}</td>
      {/each}
    </tr>
  {/each}

  <tr>
    {#each footer as footerItem}
      <th>{footerItem}</th>
    {/each}
  </tr>

</table>
