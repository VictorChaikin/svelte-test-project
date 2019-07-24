<script>
  import { Link } from "svelte-routing";
  import PivotTable from "../components/pivot-table/Table.svelte";
  import { examples, configurator } from "../store";
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
    padding: 0 30px;
    width: 100%;
    height: calc(100% - 89px);
  }

  h1 {
    color: purple;
    padding: 20px;
    margin: 0;
  }
  .table {
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
    {#each examples as example}
      <div class="table">
        <PivotTable data={example} {configurator} />
      </div>
      <div>
        <h3>{example.title} Example</h3>
      </div>
    {/each}
  </div>

</div>
