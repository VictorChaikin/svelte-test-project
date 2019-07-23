<script>
  // import { filters, columns, rows, values, data } from "../store.js";
  import { Link } from "svelte-routing";
  import PivotTable from "../components/pivot-table/Table.svelte";
  import PivotTableFilters from "../components/pivot-table/Filters.svelte";
</script>

<style>
  .pivot-table-page {
    width: 100%;
    height: 100%;
  }

  h1 {
    text-align: center;
  }

  .table-container {
    display: flex;
    width: 100%;
    height: calc(100% - 89px);
  }

  h1 {
    color: purple;
    padding: 20px;
    margin: 0;
  }
  .table {
    padding: 10px 30px;
    width: 95%;
    height: 97%;
    overflow: auto;
  }
</style>

<div class="pivot-table-page">

  <header>
    <Link to="/">
      <h1>Table</h1>
    </Link>
  </header>

  <div class="table-container">
    <div class="table">
      <PivotTable />
    </div>

    <!-- <PivotTableFilters /> -->
  </div>

</div>
