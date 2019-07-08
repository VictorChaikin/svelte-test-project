<script>
  import Icon from "fa-svelte";
  import Table from "../components/Table.svelte";
  import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons/faChevronCircleDown";
  import { Link } from "svelte-routing";

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

  .circle-down-icon {
    margin-left: 10px;
    font-size: 1.5em;
    color: blue;
  }

  .label {
    display: flex;
    cursor: pointer;
  }
</style>

<div class="App">
  <div class="header">
    <Link to="/pivot-table">Current Pivot Table</Link>
    <h1>Pivot Table</h1>

    <Link to="/">
      Pivot Table fields
      <div class="circle-down-icon">
        <Icon icon={faChevronCircleDown} />
      </div>
    </Link>

  </div>

  <Table />
</div>
