// function findUniqueValues(field, data, parameter) {
//     const uniqueValues = new Set();
//     let uniqueAndSortedData;
//     data.map(current => uniqueValues.add(current[field]), []);

//     // if (data[0][field] === 'number') {
//     //     (uniqueAndSortedData = [...uniqueValues].sort((a, b) => a - b))
//     // } else {
//     //     (uniqueAndSortedData = [...uniqueValues].sort());
//     // }

//     if (parameter === 'columns') {
//         uniqueAndSortedData.push('Total Value');
//     }

//     return uniqueAndSortedData;
// }

function createColumns(columns, data) {
    console.log(`Create Columns ${columns} ${data}`);
}

function createRows(rows, data) {
    console.log(`Create Rows ${rows} ${data}`);
}

function createTableValues(tableRows, tableColumns, data) {
    console.log(`Create Table Values ${tableRows},${tableColumns},${data}`);
}

function createColumnsSummary(tableColumns, data) {
    console.log(`Crate Columns Summary ${tableColumns},${data}`);
}

function createRowsSummary(tableValues, columnsSum) {
    console.log(`Crate Rows Summary ${tableValues} ${columnsSum} `);
}

function createFinalTable() {
    console.log('Create Final Table');
}

export function createTable(columns, rows, filters, values, data) {
    const columnValues = [];
    const rowValues = [];
    const tableValues = [];
    const totalOfColumns = [];
    const totalOfRows = [];

    if (columns.length) {
        createColumns(data);
        createColumnsSummary();
    }
    if (rows.length) {
        createRows();
        createRowsSummary();
    }
    if (columns.length && rows.length) {
        createTableValues();
    }

    createFinalTable(columnValues, rowValues, tableValues, totalOfColumns, totalOfRows);

    return [];
}

