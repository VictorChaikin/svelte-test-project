<script>
  export let uniqueColumns;
  export let configurator;

  import Columns from "./Columns.svelte";
  // console.log("Header");
  // console.log(uniqueColumns);
  // console.log(configurator);
  // console.log("_____________________________");

  // const columns = transfortObjectToArray(uniqueColumns, "columns");

  // function getRows(size, values) {
  //   const array = new Array(size).fill([{}]);

  //   if (values.length === 1) array[0] = [{ label: `Sum of ${values[0]}` }];
  //   array[array.length - 1] = [{ label: "Row Labels" }];

  //   return array;
  // }

  // function getRowsTotals(size, values) {
  //   const array = new Array(size).fill([{}]);
  //   array[1] = [{ label: "Total" }];

  //   return array;
  // }

  // function getColumnsArray(array) {
  //   const result = [];

  //   for (let i = 0; i < array.length; i++) {
  //     for (let j = 0; j < array[i].length; j++) {
  //       if (result[j]) {
  //         result[j].push(...array[i][j]);
  //       } else {
  //         result.push([...array[i][j]]);
  //       }
  //     }
  //   }

  //   const defaultColumns = new Array(result[0].length).fill({});
  //   defaultColumns[0] = { label: "Column Labels" };
  //   result.unshift(defaultColumns);

  //   return result;
  // }

  // const columnsArray = getColumnsArray(columns);
  // const rowsTitle = getRows(columnsArray.length, configurator.values);
  // const verticalTotal = getRowsTotals(columnsArray.length, configurator.values);
  // const header = createTablePart(rowsTitle, columnsArray, verticalTotal);
</script>

<style>
  th {
    max-width: 250px;
    text-align: left;
    word-break: break-all;
  }

  .row {
    display: flex;
  }
</style>

<tr class="row">
  <table>
    <tr>
      <th>Default Rows</th>
    </tr>
  </table>
  <Columns />
  <table>
    <tr>
      <th>Rows Total</th>
    </tr>
  </table>
</tr>
