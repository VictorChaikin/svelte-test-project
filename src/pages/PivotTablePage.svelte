<script>
  import { filters, columns, rows, values, data } from "../store.js";

  let uniqueRows = findUniqueValues(rows[0]);
  let uniqueColumns = findUniqueValues(columns[0], "columns");
  let tableHeader = [];
  let tableBody = [];
  let tableFooter = [];
  let columnValue = 0;

  let COLUMNS_LENGTH = 0;

  function findUniqueValues(field, parameter) {
    let uniqueValues = new Set();
    let uniqueAndSortedData;
    $data.map(current => uniqueValues.add(current[field]), []);

    $data.length && typeof $data[0][field] === "number"
      ? (uniqueAndSortedData = [...uniqueValues].sort((a, b) => a - b))
      : (uniqueAndSortedData = [...uniqueValues].sort());

    parameter === "columns" && uniqueAndSortedData.push("Total Value");

    return uniqueAndSortedData;
  }

  function createTableHeader() {
    if (uniqueColumns.length && uniqueRows.length) {
      COLUMNS_LENGTH = uniqueColumns.length + 1;
      const HEADER_ROWS_LENGTH = 2;

      for (let i = 0; i < HEADER_ROWS_LENGTH; i++) {
        tableHeader[i] = [];

        for (let j = 0; j < COLUMNS_LENGTH; j++) {
          if (i === 0) {
            j === 1
              ? (tableHeader[i][j] = "Columns Label")
              : tableHeader[i].push(" ");
          } else {
            i === 1 && j === 0
              ? (tableHeader[i][j] = "Rows Label")
              : tableHeader[i].push(uniqueColumns[j - 1]);
          }
        }
      }
    }
  }

  const countItemValue = (i, j, tableBody) => {
    if (uniqueColumns[j - 1] === "Total Value") {
      tableBody[i].push(columnValue === 0 ? " " : columnValue);
      tableFooter[j] += columnValue;
    } else {
      let currentItemValue = 0;
      $data.map(item => {
        if (
          item[columns[0]] === uniqueColumns[j - 1] &&
          item[rows[0]] === uniqueRows[i]
        ) {
          currentItemValue +=
            typeof values[0] === "number" ? item[values[0]] : 1;
        }
      });

      columnValue += currentItemValue;
      tableFooter[j] += currentItemValue;
      tableBody[i].push(currentItemValue === 0 ? " " : currentItemValue);
    }
  }

  function createTableBody() {
    if (uniqueColumns.length && uniqueRows.length) {
      const BODY_ROWS_LENGTH = uniqueRows.length;
      tableFooter = new Array(COLUMNS_LENGTH).fill(0);

      for (let i = 0; i < BODY_ROWS_LENGTH; i++) {
        tableBody[i] = [];
        
        for (let j = 0; j < COLUMNS_LENGTH; j++) {
          if (j === 0) {
            tableBody[i].push(uniqueRows[i]);
            tableFooter[j] = "Grand Total";
          } else {
            countItemValue(i, j, tableBody);
          }
        }
        columnValue = 0;
      }
    }
  }

  createTableHeader();
  createTableBody();
</script>

<style>
  .table-container {
    margin: 30px;
  }
</style>

<div class="table-container">
  <table>
    {#each tableHeader as tableHeaderRow}
      <tr>
        {#each tableHeaderRow as item}
          <th>{item}</th>
        {/each}
      </tr>
    {/each}

    {#each tableBody as tableBodyRow}
      <tr>
        {#each tableBodyRow as bodyItem}
          <td>{bodyItem}</td>
        {/each}
      </tr>
    {/each}

    <tr>
      {#each tableFooter as footerItem}
        <th>{footerItem}</th>
      {/each}
    </tr>
  </table>
</div>
