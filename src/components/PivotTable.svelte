<script>
  export let data;
  import {
    createHeader,
    createBody,
    createFooter
  } from "../logic/visualisationLogic.js";
  import Cell from "./TableCell.svelte";

  const header = createHeader(
    data.rowsTitle,
    data.uniqueColumns,
    data.verticalTotalTitle
  );

  const body = createBody(
    data.uniqueRows,
    data.uniqueColumns,
    data.tableValues,
    data.columnsTotal
  );

  const footer = createFooter(
    data.horizontalTotalTitle,
    data.uniqueColumns,
    data.columnsTotal,
    data.grandTotal
  );

  // console.log(header);
  // console.log(body);
  // console.log(footer);
</script>

<table>

  {#each header as headerRow}
    <tr>
      {#each headerRow as headerItem}
        <Cell data={headerItem} tablePart="header" />
      {/each}
    </tr>
  {/each}

  {#if data.uniqueRows}
    {#each body as bodyRow}
      <tr>
        {#each bodyRow as bodyItem}
          <Cell data={bodyItem} tablePart="body" />
        {/each}
      </tr>
    {/each}
  {/if}

  {#each footer as footerRow}
    <tr>
      {#each footerRow as footerItem}
        <Cell data={footerItem} tablePart="footer" />
      {/each}
    </tr>
  {/each}

</table>
