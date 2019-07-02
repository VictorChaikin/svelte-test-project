<script>
  let usersData = fetchJSONData();
  let tableHeaders = [
    "Balance",
    "Age",
    "EyeColor",
    "Name",
    "Gender",
    "Company",
    "Email",
    "Phone",
    "Address",
    "Favourite Fruit"
  ];

  async function fetchJSONData() {
    const res = await fetch("http://localhost:5000/data.json");
    const json = res.json();

    console.log(json);
    if (res.ok) {
      return json;
    } else {
      throw new Error("An error occured");
    }
  }
</script>

<style>
  .table {
    display: flex;
    justify-content: start;
    padding: 0 10%;
  }
</style>

<div class="table">
  {#await usersData}
    <p>...waiting</p>
  {:then data}
    <table>
      <tr>
        {#each tableHeaders as header}
          <th>{header} </th>
        {/each}
      </tr>

      {#each data as user}
        <tr>
          <td>{user.balance} </td>
          <td>{user.age} </td>
          <td>{user.eyeColor} </td>
          <td>{user.name} </td>
          <td>{user.gender} </td>
          <td>{user.company} </td>
          <td>{user.email} </td>
          <td>{user.phone} </td>
          <td>{user.address} </td>
          <td>{user.favoriteFruit}</td>
        </tr>
      {/each}

    </table>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>
