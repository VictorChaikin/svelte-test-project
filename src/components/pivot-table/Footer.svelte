<script>
  export let columnsTotal;
  export let grandTotal;
  // console.log("Footer");
  // console.log(columnsTotal);
  // console.log(grandTotal);
  // console.log("____________________");

import {
    createTablePart,
    transfortObjectToArray
  } from "../../logic/pivotTableLogic.js";

  const footerTitle =[['Grand Total']];
  const columnsTotalValues = transfortObjectToArray(columnsTotal, 'columnsTotal');
  const grandTotalValue = grandTotal.map(item => [item], []);
  const footer = createTablePart(footerTitle, [columnsTotalValues], grandTotalValue);
</script>

<style>
  th {
    max-width: 250px;
    text-align: left;
    word-break: break-all;
  }
</style>

{#each footer as footerRow}
  <tr>
    {#each footerRow as footerItem}
      <th>{footerItem}</th>
    {/each}
  </tr>
{/each}
