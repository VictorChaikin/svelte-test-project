function findUniqueValues(field, data) {
    const uniqueValues = new Set();
    data.map(current => uniqueValues.add(current[field]), []);

    return [...uniqueValues].sort();
}

function createColumns(columns, data) {
    const uniqueColumns = findUniqueValues(columns[0], data);
    const header = new Array(uniqueColumns.length).fill(' ');
    header[0] = 'Column Labels';

    const headerColumns = [header, uniqueColumns];

    return headerColumns;
}

function createRows(rows, data) {
    console.log(`Create Rows ${rows} ${data}`);
}

function createTableValues(tableRows, tableColumns, data) {
    console.log(`Create Table Values ${tableRows},${tableColumns},${data}`);
}

function createColumnsSummary(columns, values, tableColumns, data) {
    const summaryTitle = `Sum of ${values[0]}`;
    const columnsSummary = [summaryTitle];

    tableColumns[1].map((columnTitle) => {
        const currentItemValue = data.reduce((sum, dataItem) => {
            if (dataItem[columns[0]] === columnTitle) {
                sum += dataItem[values[0]];
            }

            return sum;
        }, 0);

        columnsSummary.push(currentItemValue);
    });

    return columnsSummary;
}

function createRowsSummary(columns, data) {
    const summaryTitle = 'Grand Total';
    const rowsSummary = data.reduce((sum, current) => (sum += current[columns[0]]), 0);

    return ['', summaryTitle, rowsSummary.toFixed(2)];
}

function createHeader(rows, columns, totalOfRows) {
    const headerArray = [];
    const rowsLength = 1;
    const finalTitle = 1;
    const headerArrayLength = columns[0].length + rowsLength + finalTitle;
    let rowsCounter = 0;
    let columnsCounter = 0;
    let totalOfRowsCounter = 0;


    for (let i = 0; i < columns.length; i++) {
        headerArray.push([]);
        for (let j = 0; j < headerArrayLength; j++) {
            if (j < rowsLength) {
                headerArray[i].push(rows[rowsCounter]);
                rowsCounter++;
            } else if (j >= rowsLength && j <= columns[i].length) {
                headerArray[i].push(columns[i][columnsCounter]);
                columnsCounter++;
            } else {
                headerArray[i].push(totalOfRows[totalOfRowsCounter]);
                totalOfRowsCounter++;
            }
        }

        columnsCounter = 0;
    }

    return headerArray;
}

function createBody(rows, tableValues, totalOfRows) {
    console.log('Body');
    return [];
}

function createFooter(totalOfColumns, totalOfRows) {
    const footerArray = [];
    const finalSum = 1;
    const footerArrayLength = totalOfColumns.length + finalSum;


    for (let j = 0; j < footerArrayLength; j++) {
        if (j < totalOfColumns.length) {
            footerArray.push(totalOfColumns[j]);
        } else {
            footerArray.push(totalOfRows[2]);
        }
    }

    return footerArray;
}

function createFinalTable(columnValues, rowValues, tableValues, totalOfColumns, totalOfRows) {
    let header = [];
    let body = [];
    let footer = [];

    if (columnValues.length) {
        const defaultRows = new Array(columnValues.length).fill(' ');

        // console.log(defaultRows);
        // console.log(columnValues);
        // console.log(totalOfColumns);
        // console.log(totalOfRows);

        header = createHeader(defaultRows, columnValues, totalOfRows);
        footer = createFooter(totalOfColumns, totalOfRows);
    }

    return [header, body, footer];
}

export function createTable(columns, rows, filters, values, data) {
    let columnValues = [];
    const rowValues = [];
    const tableValues = [];
    let totalOfColumns = [];
    let totalOfRows = [];

    if (columns.length && !rows.length) {
        columnValues = createColumns(columns, data);
        totalOfColumns = createColumnsSummary(columns, values, columnValues, data);
        totalOfRows = createRowsSummary(values, data);
    }

    if (rows.length && !columns.length) {
        createRows();
        totalOfColumns = createColumnsSummary();
        createRowsSummary();
    }
    if (columns.length && rows.length) {
        createTableValues();
    }

    const finalArray = createFinalTable(columnValues, rowValues, tableValues, totalOfColumns, totalOfRows);

    return finalArray;
}

