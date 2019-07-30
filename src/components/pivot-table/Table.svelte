<script>
  import Header from "./header/Header.svelte";
  import Body from "./body/Body.svelte";
  import Footer from "./footer/Footer.svelte";

  export let data;
  // console.log(data);
</script>

<style>
  table {
    border-collapse: collapse;
    /* border: 1px solid black; */
  }
</style>

<table>

  <Header
    rowsTitle={data.rowsTitle}
    uniqueColumns={data.uniqueColumnsValues}
    verticalTotalTitle={data.verticalTotalTitle} />

  <!-- {#if data.uniqueRowsValues}
    <Body
      uniqueRows={data.uniqueRowsValues}
      tableValues={data.tableValues}
      rowsTotal={data.rowsTotalValues} />
  {/if}

  <Footer
    horizontalTotalTitle={data.horizontalTotalTitle}
    columnsTotal={data.columnsTotalValues}
    grandTotal={data.grandTotal} /> -->

</table>
