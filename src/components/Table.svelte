<script>
  import { data } from "../store.js";

  let tableHeaders = [];

  const capitalize = string => {
    if (typeof string !== "string") return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  async function fetchJSONData() {
    const res = await fetch("http://localhost:5000/data.json");
    const json = res.json();

    if (res.ok) {
      json.then(value => {
        for (let key in value[0]) {
          tableHeaders.push(capitalize(key));
        }
        data.update(() => value);
      });
      return json;
    } else {
      throw new Error("An error occured");
    }
  }

  fetchJSONData();
</script>

<style>
  .table {
    display: flex;
    justify-content: start;
    padding: 20px;
  }
</style>

<div class="table">
  {#if $data.length}
    <table>
      <tr>
        {#each tableHeaders as header}
          <th>{header} </th>
        {/each}
      </tr>

      {#each $data as user}
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
