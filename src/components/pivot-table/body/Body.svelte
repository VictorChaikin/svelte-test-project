<script>
  export let uniqueRows;
  export let tableValues;
  export let rowsTotal;

  // console.log("Body");
  // console.log(uniqueRows);
  // console.log(tableValues);
  // console.log(rowsTotal);
  // console.log("______________________________");
</script>

<style>
  .cell {
    padding: 5px;
  }

  .inner-table {
    border: 0 solid black;
  }
</style>

<tr>

  <td>
    <table>
      {#each uniqueRows as row}
        <tr>
          <td class="cell">{row.label}</td>
        </tr>
      {/each}

    </table>
  </td>

  {#if tableValues}
    <td>
      <table>
        {#each tableValues as tableRow}
          <tr>
            {#each tableRow as tableItem}
              <td class="cell">{tableItem ? tableItem.label : ''}</td>
            {/each}
          </tr>
        {/each}
      </table>
    </td>
  {/if}

  <td>
    <table class="inner-table">
      {#each rowsTotal as row}
        <td class="inner-table">
          <table class="inner-table">
            {#each row as rowItem}
              <tr>
                <td class="cell">{rowItem.value}</td>
              </tr>
            {/each}
          </table>
        </td>
      {/each}
    </table>
  </td>

</tr>
