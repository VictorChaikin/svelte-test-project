<script>

</script>

<style>
.filters {
    padding: 30px;
    text-align: left;
    width: 35%;
    height: 90%;
    border: 3px solid orange;
  }

  .heading {
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
  }
</style>

<div class="filters">

      <div class="heading">PivotTable Filters</div>
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
      </div>
      
    </div>