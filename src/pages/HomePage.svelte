<script>
  import Icon from "fa-svelte";
  import Table from "../components/Table.svelte";
  import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons/faChevronCircleDown";
  import { Link } from "svelte-routing";
  import { data } from "../store.js";

  let showPivotTableFields = false;
  const openOrClowePivotFieldsLabel = () => {
    let previous = showPivotTableFields;
    showPivotTableFields = !previous;
  };
</script>

<style>
  .App {
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  h1 {
    color: purple;
  }
</style>

<div class="App">
  <div class="header">
    <Link to="/pivot-table">
      <h1>Current Pivot Table</h1>
    </Link>
    <!-- <Link to="/"><h1>Pivot Table</h1></Link> -->
  </div>

  <Table {data} />
</div>
