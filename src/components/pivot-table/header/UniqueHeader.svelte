<script>
  export let array;
  console.log(array);

  function createElementInParentById(parentId, elementTag, elementId, html) {
    console.log(parentId);
    // let parent = document.getElementById(parentId);
    // let newElement = document.createElement(elementTag);
    // newElement.setAttribute("id", elementId);
    // newElement.innerHTML = html;
    // parent.appendChild(newElement);
  }

  function iteration() {
    console.log("Iteration Begin");
    let array = [];
    let iterator = 0;

    for (let i = 0; i < 100000; i++) {
      for (let j = 0; j < 100000; j++) {
        iterator += i;
      }

      array.push(iterator);
      iterator = 0;
    }

    console.log(array);
  }
</script>

<style>
  .cell {
    padding: 5px;
  }

  .has-inner-table-elem {
    padding: 0px;
    border: 0 solid black;
  }

  td {
    padding: 5px;
  }
</style>

{#each array as column}
  <td class="has-inner-table-elem ">
    <table class="has-inner-table-elem ">
      {#if column.subColumns}
      
        <tr id={`${column.label}-subColumn`}>
          <td>{column.label}</td>
        </tr>


        <svelte:self array={column.subColumns} />

        <span>2</span>
      {:else}
        <th class="cell">{column.label}</th>
      {/if}

    </table>
  </td>
{/each}
