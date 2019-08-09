<script>
  export let data;
  import {
    createHeader,
    createBody,
    createFooter
  } from "../logic/visualisationLogic.js";
  import Cell from "./TableCell.svelte";

  // console.log(data.configurator);

  let header = createHeader(
    data.rowsTitle,
    data.uniqueColumns,
    data.verticalTotalTitle,
    data.configurator
  );

  let body;

  if (data.uniqueRows) {
    body = createBody(
      data.uniqueRows,
      data.uniqueColumns,
      data.tableValues,
      data.rowsTotal
    );
  } else {
    body = [];
  }

  let footer = createFooter(
    data.horizontalTotalTitle,
    data.uniqueColumns,
    data.columnsTotal,
    data.grandTotal,
    data.configurator
  );

  $: {
    header = createHeader(
      data.rowsTitle,
      data.uniqueColumns,
      data.verticalTotalTitle,
      data.configurator
    );

    if (data.uniqueRows) {
      body = createBody(
        data.uniqueRows,
        data.uniqueColumns,
        data.tableValues,
        data.rowsTotal
      );
    }

    footer = createFooter(
      data.horizontalTotalTitle,
      data.uniqueColumns,
      data.columnsTotal,
      data.grandTotal,
      data.configurator
    );
  }
</script>

<table>

  {#each header as headerRow}
    <tr>
      {#each headerRow as headerItem}
        <Cell tableData={data} data={headerItem} tablePart="header" />
      {/each}
    </tr>
  {/each}

  {#if data.uniqueRows}
    {#each body as bodyRow}
      <tr>
        {#each bodyRow as bodyItem}
          <Cell tableData={data} data={bodyItem} tablePart="body" />
        {/each}
      </tr>
    {/each}
  {/if}

  {#each footer as footerRow}
    <tr>
      {#each footerRow as footerItem}
        <Cell tableData={data} data={footerItem} tablePart="footer" />
      {/each}
    </tr>
  {/each}

</table>
