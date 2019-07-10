<script>
  import { Router, Route } from "svelte-routing";
  import HomePage from "../src/pages/HomePage.svelte";
  import PivotTablePage from "../src/pages/PivotTablePage.svelte";

  export let url = "";
  
</script>

<Router {url}>
  <Route path="/" component="{HomePage}" />
  <Route path="/pivot-table" component="{PivotTablePage}" />
  <Route path="*" component="{HomePage}" />
</Router>
