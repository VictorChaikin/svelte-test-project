<script>
  import { pivotTable, configurator } from "../../store.js";
  import Header from "./Header.svelte";
  import Body from "./Body.svelte";
  import Footer from "./Footer.svelte";
</script>

<table>

  <Header uniqueColumns={pivotTable.uniqueColumnsValues} {configurator} />

  <Body
    uniqueRows={pivotTable.uniqueRowsValues}
    tableValues={pivotTable.tableValues}
    rowsTotal={pivotTable.rowsTotalValues} />

  <Footer
    columnsTotal={pivotTable.columnsTotalValues}
    grandTotal={pivotTable.grandTotal} />
</table>
