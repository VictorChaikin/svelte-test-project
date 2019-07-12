function findUniqueValues(field, data) {
    const uniqueValues = new Set();
    data.map(current => uniqueValues.add(current[field]), []);

    return [...uniqueValues].sort();
}

function createColumns(columns, data) {
    const uniqueColumns = findUniqueValues(columns[0], data);
    const header = new Array(uniqueColumns.length).fill(' ');
    header[0] = 'Column Labels';

    return [header, uniqueColumns];
}

function createRows(rows, data) {
    const uniqueRows = findUniqueValues(rows[0], data);
    const uniqueRowsInNeccessaryFormat = [];
    uniqueRows.map(item => {
        uniqueRowsInNeccessaryFormat.push([item]);
    });

    return uniqueRowsInNeccessaryFormat;
}

function createTableValues(tableRows, tableColumns, rows, columns, values, data) {
    const tableValues = [];

    for (let i = 0; i < tableRows.length; i++) {
        tableValues.push([]);
        for (let j = 0; j < tableColumns.length; j++) {
            let currentItemSum = data.reduce((sum, current) => {
                // console.log(tableRows[i][0]);
                // console.log(current[rows[0]]);
                // console.log(tableColumns[j]);
                // console.log(current[columns[0]]);
                if (tableRows[i][0] === current[rows[0]] && tableColumns[j] === current[columns[0]]) {
                    sum += current[values[0]];
                }

                return sum;
            }, 0);

            currentItemSum = currentItemSum === 0 ? '' : currentItemSum;
            tableValues[i].push([currentItemSum]);
        }
    }
    // console.log(tableRows);
    // console.log(tableColumns);
    // console.log(tableValues);

    return tableValues;
}

function createColumnsSummary(columns, values, tableColumns, data) {
    const columnsSummary = [];

    tableColumns[1].map((columnTitle) => {
        let currentItemValue = data.reduce((sum, dataItem) => {
            if (dataItem[columns[0]] === columnTitle) {
                sum += dataItem[values[0]];
            }

            return sum;
        }, 0);

        currentItemValue = (currentItemValue % 1 === 0) ? currentItemValue : currentItemValue.toFixed(2);
        columnsSummary.push(currentItemValue);
    });

    return [columnsSummary];
}

function createRowsSummary(rows, rowsValues, values, data) {
    const rowsSummary = rowsValues.map((value) => {
        let finalSum = data.reduce((sum, current) => {
            if (current[rows[0]] === value[0]) {
                sum += current[values[0]];
            }

            return sum;
        }, 0);

        finalSum = (finalSum % 1 === 0) ? finalSum : finalSum.toFixed(2);
        return [finalSum];
    }, []);
    let totalOfRowsSum = data.reduce((sum, current) => (sum += current[values[0]]), 0);
    totalOfRowsSum = (totalOfRowsSum % 1 === 0) ? totalOfRowsSum : totalOfRowsSum.toFixed(2);

    return [...rowsSummary, [totalOfRowsSum]];
}

function createTablePart(firstSubPart, secondSubPart, thirdSubPart) {
    // console.log('Crate table part');
    // console.log(firstSubPart);
    // console.log(secondSubPart);
    // console.log(thirdSubPart);

    const finalPartArray = [];
    const useFirstPart = firstSubPart[0];
    const useSecondPart = secondSubPart[0];
    const useThirdPart = thirdSubPart[0];

    const firstPartLength = useFirstPart ? firstSubPart[0].length : 0;
    const secondPartLength = useSecondPart ? secondSubPart[0].length : 0;
    const thirdPartLength = useThirdPart ? thirdSubPart[0].length : 0;


    const currentPartLength = firstPartLength + secondPartLength + thirdPartLength;
    const currentPartHeight = Math.max(firstSubPart.length, secondSubPart.length, thirdSubPart.length);

    // console.log(`currentPartLength = ${currentPartLength}`);
    // console.log(`currentPartHeight ${currentPartHeight}`);

    let firstSubPartCounter = 0;
    let secondSubPartCounter = 0;
    let thirdSubPartCounter = 0;


    for (let i = 0; i < currentPartHeight; i++) {
        // console.log(`i = ${i}`);
        finalPartArray.push([]);
        for (let j = 0; j < currentPartLength; j++) {
            // console.log(`j = ${j}`);

            if (useFirstPart && j < firstPartLength) {
                // console.log('First Part');
                finalPartArray[i].push(firstSubPart[i][firstSubPartCounter]);
                firstSubPartCounter++;
            }
            if (useSecondPart && j >= firstPartLength && j < firstPartLength + secondPartLength) {
                // console.log('Second part');
                finalPartArray[i].push(secondSubPart[i][secondSubPartCounter]);
                secondSubPartCounter++;
            }
            if (useThirdPart && j >= firstPartLength + secondPartLength) {
                // console.log('Third part');
                finalPartArray[i].push(thirdSubPart[i][thirdSubPartCounter]);
                thirdSubPartCounter++;
            }
        }

        firstSubPartCounter = 0;
        secondSubPartCounter = 0;
        thirdSubPartCounter = 0;
        // console.log('_______________');
    }

    // console.log(finalPartArray);
    return finalPartArray;
}

function createFinalTable(columnValues, rowValues, tableValues, totalOfColumns, totalOfRows) {
    let header = [];
    let body = [];
    let footer = [];

    if (columnValues.length && !rowValues.length) {
        // console.log('We are here');
        // console.log(columnValues);
        // console.log(rowValues);
        // console.log(tableValues);
        // console.log(totalOfColumns);
        // console.log(totalOfRows);
        const rowsHeader = [[''], ['']];
        const tableResultHeader = [[''], ['Grand Total']];

        header = createTablePart(rowsHeader, columnValues, tableResultHeader);
        footer = createTablePart([['Sum of revenue']], totalOfColumns, totalOfRows);
    }

    if (rowValues.length && !columnValues.length) {
        const rowsHeader = [['Rows Labels']];
        const tableResultHeader = [['Sum of revenue']];

        header = createTablePart(rowsHeader, columnValues, tableResultHeader);
        body = createTablePart(rowValues, tableValues, totalOfRows.slice(0, rowValues.length));
        footer = createTablePart([['Grand Total']], totalOfColumns, [totalOfRows[totalOfRows.length - 1]]);
    }

    if (rowValues.length && columnValues.length) {
        const rowsHeader = [['Sum of revenue'], ['Rows Labels']];
        const tableResultHeader = [[''], ['Total value']];

        header = createTablePart(rowsHeader, columnValues, tableResultHeader);
        body = createTablePart(rowValues, tableValues, totalOfRows.slice(0, rowValues.length));
        footer = createTablePart([['Grand Total']], totalOfColumns, [totalOfRows[totalOfRows.length - 1]]);
    }

    return [header, body, footer];
}

export function createTable(columns, rows, filters, values, data) {
    let columnValues = [];
    let rowValues = [];
    let tableValues = [];
    let totalOfColumns = [];
    let totalOfRows = [];
    // const finalArray = [];

    if (columns.length && !rows.length) {
        columnValues = createColumns(columns, data);
        totalOfColumns = createColumnsSummary(columns, values, columnValues, data);
        totalOfRows = createRowsSummary(rows, rowValues, values, data);
    }

    if (rows.length && !columns.length) {
        rowValues = createRows(rows, data);
        totalOfRows = createRowsSummary(rows, rowValues, values, data);
    }

    if (columns.length && rows.length) {
        console.log('I am here');
        columnValues = createColumns(columns, data);
        rowValues = createRows(rows, data);
        tableValues = createTableValues(rowValues, columnValues[1], rows, columns, values, data);
        totalOfRows = createRowsSummary(rows, rowValues, values, data);
        totalOfColumns = createColumnsSummary(columns, values, columnValues, data);
    }

    const finalArray = createFinalTable(columnValues, rowValues, tableValues, totalOfColumns, totalOfRows);

    return finalArray;
}

