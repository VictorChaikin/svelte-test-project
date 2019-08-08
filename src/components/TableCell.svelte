<script>
  export let data;
  export let tablePart;
  export let tableData;

  import { sixthExample, fifthExample } from "../store.js";

  let pathCounter = 0;

  function changeColumns(objects, path, value, first) {
    for (let i = 0; i < objects.length; i++) {
      if (objects[i].path[pathCounter] === path[pathCounter]) {
        if (pathCounter === path.length - 1) {
          objects[i].showSubColumns = value;
          sixthExample.update(n => tableData);
          // console.log(tableData);
        } else {
          if (objects[i].subColumns) {
            pathCounter++;
            changeColumns(objects[i].subColumns, path, value);
            pathCounter--;
          }
        }
      }
    }
  }

  function changeRows(objects, path, value) {
    for (let i = 0; i < objects.length; i++) {
      if (objects[i].path[pathCounter] === path[pathCounter]) {
        if (pathCounter === path.length - 1) {
          objects[i].showSubRows = value;
          sixthExample.update(n => tableData);
        } else {
          if (objects[i].subRows) {
            pathCounter++;
            changeRows(objects[i].subRows, path, value);
            pathCounter--;
          }
        }
      }
    }
  }
</script>

<style>
  td,
  th {
    text-align: right;
    padding-right: 10px;
  }
</style>

{#if tablePart === 'body'}
  <td>
    {#if !data}
      <div />
    {:else if data.label}
      <input
        type="checkbox"
        id="scales"
        name="scales"
        bind:checked={data.showSubRows}
        on:change={() => {
          pathCounter = 0;
          changeRows(tableData.uniqueRows, data.path, data.showSubRows, 'first');
        }} />
      <label for="scales">{data.label}</label>
    {:else}{data}{/if}
  </td>
{:else}
  <th>
    {#if !data}
      <div />
    {:else if data.label}
      <input
        type="checkbox"
        id="scales"
        name="scales"
        bind:checked={data.showSubColumns}
        on:change={() => changeColumns(tableData.uniqueColumns, data.path, data.showSubColumns, 'first')} />
      <label for="scales">{data.label}</label>
    {:else}{data}{/if}
  </th>
{/if}
