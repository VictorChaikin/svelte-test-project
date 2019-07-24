<script>
  import Header from "./Header.svelte";
  import Body from "./Body.svelte";
  import Footer from "./Footer.svelte";

  export let data;
  export let configurator;
  console.log(data);
  console.log("_______________");
</script>

<table>

  <Header uniqueColumns={data.uniqueColumnsValues} {configurator} />

  <Body
    uniqueRows={data.uniqueRowsValues}
    tableValues={data.tableValues}
    rowsTotal={data.rowsTotalValues} />

  <Footer
    columnsTotal={data.columnsTotalValues}
    grandTotal={data.grandTotal}
    {configurator} />
    
</table>
