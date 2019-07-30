<script>
  export let horizontalTotalTitle;
  export let columnsTotal;
  export let grandTotal;
  // console.log("Footer");
  // console.log(horizontalTotalTitle);
  // console.log(columnsTotal);
  // console.log(grandTotal);
  // console.log("____________________");
</script>

<style>
  .cell {
    padding: 5px;
  }
</style>

<tr class="row">
  <td>
    <table>
      <tr>
        {#each horizontalTotalTitle as title}
          <th class="cell">{title}</th>
        {/each}
      </tr>
    </table>
  </td>

  {#if columnsTotal}
    <td>
      <table>
        <tr>
          {#each columnsTotal as columnTotal}
            <th class="cell">{columnTotal.value}</th>
          {/each}
        </tr>
      </table>
    </td>
  {/if}

  <td>
    <table>
      <tr>
        {#each grandTotal as total}
          <th class="cell">{total}</th>
        {/each}
      </tr>
    </table>
  </td>

</tr>
