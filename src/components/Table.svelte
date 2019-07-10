<script>
  export let data;
  let tableHeaders = [];

  const capitalize = string => {
    if (typeof string !== "string") return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  function setTableHeaders() {
    for (let key in data[0]) {
      tableHeaders.push(capitalize(key));
    }
  }

  setTableHeaders();
</script>

<style>
  .table {
    display: flex;
    justify-content: start;
    padding: 20px;
  }
</style>

<div class="table">
  {#if data.length}
    <table>
      <tr>
        {#each tableHeaders as header}
          <th>{header} </th>
        {/each}
      </tr>

      {#each data as user}
        <tr>
          {#each Object.keys(user) as field}
            <td>{user[field]} </td>
          {/each}
        </tr>
      {/each}

    </table>
  {:else}
    <p>...waiting</p>
  {/if}
</div>
