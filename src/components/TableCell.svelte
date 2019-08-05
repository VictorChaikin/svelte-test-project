<script>
  export let data;
  export let tablePart;
  export let tableData;

  import { fifthExample } from "../store.js";

  let pathCounter = 0;

  function changeColumns(objects, path, value) {
    for (let i = 0; i < objects.length; i++) {
      // if (!found) {
        console.log(objects[i].path[pathCounter]);
        console.log(path[pathCounter]);
        console.log(pathCounter);
        if (objects[i].path[pathCounter] === path[pathCounter]) {
          if (pathCounter === path.length - 1) {
            objects[i].showSubColumns = value;

            fifthExample.update(n => tableData);
            pathCounter = 0;
          } else {
            if (objects[i].subColumns) {
              pathCounter++;
              changeColumns(objects[i].subColumns, path, value);
              // pathCounter--;
            }
          }
        }
      // }
    }
  }

  function changeRows(objects, path, value) {
    for (let i = 0; i < objects.length; i++) {
      // console.log(objects[i].path[pathCounter]);
      // console.log(path[pathCounter]);
      if (objects[i].path[pathCounter] === path[pathCounter]) {
        if (pathCounter === path.length - 1) {
          objects[i].showSubRows = value;
          fifthExample.update(n => tableData);
          pathCounter = 0;
        } else {
          if (objects[i].subRows) {
            pathCounter++;
            changeRows(objects[i].subRows, path, value);
            // pathCounter--;
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
          changeRows(tableData.uniqueRows, data.path, data.showSubRows);
        }} />
      <label for="scales">{data.label}</label>
    {:else}{data}{/if}
    <!-- {data ? (data.label ? data.label : data) : ''} -->
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
        on:change={() => changeColumns(tableData.uniqueColumns, data.path, data.showSubColumns)} />
      <label for="scales">{data.label}</label>
    {:else}{data}{/if}
    <!-- <i class="far fa-plus-square" /> -->

  </th>
{/if}
