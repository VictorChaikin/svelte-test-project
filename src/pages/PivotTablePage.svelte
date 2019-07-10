<script>
  import { filters, columns, rows, values, data } from "../store.js";
  import { Link } from "svelte-routing";
  import PivotTable from "../components/PivotTable.svelte";
  
</script>

<style>
  .pivot-table-page {
    width: 100%;
    height: 100%;
    /* padding: 30px; */
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

  /* .filters {
    padding: 30px;
    text-align: left;
    width: 35%;
    height: 90%;
    border: 3px solid orange;
  } */

  /* .heading {
    font-size: 22px;
  }

  .para {
    padding: 10px 0;
  }

  .pivot-table-combiner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .pivot-table-filter-field{
    width:50%;
    height: 200px;
  } */
</style>

<div class="pivot-table-page">
  <header>
    <Link to="/">
      <h1>Table</h1>
    </Link>
  </header>

  <div class="table-container">
    <div class="table">
      <PivotTable {filters} {columns} {rows} {values} {data} />
    </div>
    <!-- <div class="filters"> -->
      <!-- <div class="heading">PivotTable Filters</div>
      <div class="para">Choose fields to add to report</div>
      <div class="checkboxes">

        <label for="horns">
          <input type="checkbox" id="horns" name="horns" />
          Horns
        </label>
        <label for="horns">
          <input type="checkbox" id="horns" name="horns" />
          Horns
        </label>
        <label for="horns">
          <input type="checkbox" id="horns" name="horns" />
          Horns
        </label>
      </div>
      <div class="para">Choose fields in areas below</div>

      <div class="pivot-table-combiner">
        <div class="pivot-table-filter-field">Filters</div>
        <div class="pivot-table-filter-field">Columns</div>
        <div class="pivot-table-filter-field">Rows</div>
        <div class="pivot-table-filter-field">Values</div>
      </div> -->
    <!-- </div> -->
  </div>
</div>
