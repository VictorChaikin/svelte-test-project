<script>
  export let data;
  import {
    createHeader,
    createBody,
    createFooter
  } from "../logic/visualisationLogic.js";
  import Cell from "./TableCell.svelte";
  console.log(data);

  const header = createHeader();
  const body = createBody();
  const footer = createFooter();
</script>

<table>

  {#each header as headerRow}
    <tr>
      {#each headerRow as headerItem}
        <Cell data={headerItem} tablePart="header" />
      {/each}
    </tr>
  {/each}

  {#each body as bodyRow}
    <tr>
      {#each bodyRow as bodyItem}
       <Cell data={bodyItem} tablePart="body" />
      {/each}
    </tr>
  {/each}

  {#each footer as footerRow}
    <tr>
      {#each footerRow as footerItem}
         <Cell data={footerItem} tablePart="footer" />
      {/each}
    </tr>
  {/each}

</table>
