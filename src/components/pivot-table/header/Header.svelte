<script>
  export let uniqueColumns;
  export let rowsTitle;
  export let verticalTotalTitle;

  import Columns from "./Columns.svelte";
  // console.log("Header");
  // console.log(uniqueColumns);
  // console.log(rowsTitle);
  // console.log(verticalTotalTitle);
  // console.log("_____________________________");
</script>

<style>
  .row {
    width: auto;
    padding: 0;
  }

  .cell {
    padding: 5px;
  }
</style>

<tr>

  <td class="row">
    <table>
      {#each rowsTitle as rowTitle}
        <tr>
          <th class="cell">{rowTitle || ' '}</th>
        </tr>
      {/each}
    </table>
  </td>

  {#if uniqueColumns}
    <td class="row">
      <Columns {uniqueColumns} />
    </td>
  {/if}

  <td class="row">
    <table>
      {#each verticalTotalTitle as row}
        {#if row}
          <tr>
            {#each row as item}
              <th class="cell">{item || ' '}</th>
            {/each}
          </tr>
        {:else}
          <tr>
            <th class="cell" />
          </tr>
        {/if}
      {/each}
    </table>
  </td>

</tr>
