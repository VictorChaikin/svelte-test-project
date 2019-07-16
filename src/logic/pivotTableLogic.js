function findUniqueValues(field, data) {
    const uniqueValues = new Set();
    data.map(current => uniqueValues.add(current[field]), []);

    return [...uniqueValues].sort();
}

function getUniqueColumns(columns, data) {
    const uniqueColumns = findUniqueValues(columns[0], data);

    console.log('UNIQUE COLUMNS');
    console.log([uniqueColumns]);
    console.log('_ _ _ _ _ _ _ _ _');

    return [uniqueColumns];
}

function getUniqueRows(rows, data) {
    const uniqueRows = findUniqueValues(rows[0], data);
    const uniqueRowsInNeccessaryFormat = uniqueRows.map(item => [item]);

    console.log('UNIQUE ROWS');
    console.log(uniqueRowsInNeccessaryFormat);
    console.log('_ _ _ _ _ _ _ _ _');

    return uniqueRowsInNeccessaryFormat;
}

function getTableValues(tableRows, tableColumns, rows, columns, values, data) {
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
            tableValues[i].push(currentItemSum);
        }
    }

    console.log('TABLE VALUES');
    console.log(tableValues);
    console.log('_ _ _ _ _ _ _ _ _');

    return tableValues;
}

function getColumnsSummary(columns, values, tableColumns, data) {
    const columnsSummary = [];
    console.log(tableColumns);

    tableColumns.map((columnTitle) => {
        let currentItemValue = data.reduce((sum, dataItem) => {
            if (dataItem[columns[0]] === columnTitle) {
                sum += dataItem[values[0]];
            }

            return sum;
        }, 0);

        currentItemValue = (currentItemValue % 1 === 0) ? currentItemValue : currentItemValue.toFixed(2);
        columnsSummary.push(currentItemValue);
    });

    console.log('COLUMNS SUMMARY');
    console.log(columnsSummary);
    console.log('_ _ _ _ _ _ _ _ _');

    return [columnsSummary];
}

function getRowsSummary(rows, rowsValues, values, data) {
    const totalOfRows = [];

    for (let i = 0; i < values.length; i++) {
        const rowsSummary = rowsValues.map((value) => {
            let finalSum = data.reduce((sum, current) => {
                if (current[rows[0]] === value[0]) {
                    sum += current[values[i]];
                }

                return sum;
            }, 0);

            finalSum = (finalSum % 1 === 0) ? finalSum : finalSum.toFixed(2);
            return [finalSum];
        }, []);

        totalOfRows.push(...rowsSummary);
    }

    console.log('ROWS SUMMARY');
    console.log(totalOfRows);
    console.log('_ _ _ _ _ _ _ _ _');

    return totalOfRows;
}

function getTotalSum(values, data) {
    const totalSum = [];

    for (let i = 0; i < values.length; i++) {
        let totalOfRowsSum = data.reduce((sum, current) => (sum += current[values[i]]), 0);
        totalOfRowsSum = (totalOfRowsSum % 1 === 0) ? totalOfRowsSum : totalOfRowsSum.toFixed(2);
        totalSum.push(totalOfRowsSum);
    }

    console.log('TOTAL SUM');
    console.log([totalSum]);
    console.log('_ _ _ _ _ _ _ _ _');

    return [totalSum];
}

function createTablePart(firstSubPart, secondSubPart, thirdSubPart) {
    console.log('Crate table part');
    console.log(firstSubPart);
    console.log(secondSubPart);
    console.log(thirdSubPart);

    const finalPartArray = [];
    const useFirstPart = firstSubPart[0];
    const useSecondPart = secondSubPart[0];
    const useThirdPart = thirdSubPart[0];

    const firstPartLength = useFirstPart ? firstSubPart[0].length : 0;
    const secondPartLength = useSecondPart ? secondSubPart[0].length : 0;
    const thirdPartLength = useThirdPart ? thirdSubPart[0].length : 0;


    const currentPartLength = firstPartLength + secondPartLength + thirdPartLength;
    const currentPartHeight = Math.max(firstSubPart.length, secondSubPart.length, thirdSubPart.length);
    console.log('PART HEIGHT');
    console.log(currentPartHeight);

    let firstSubPartCounter = 0;
    let secondSubPartCounter = 0;
    let thirdSubPartCounter = 0;

    for (let i = 0; i < currentPartHeight; i++) {
        finalPartArray.push([]);
        for (let j = 0; j < currentPartLength; j++) {

            if (useFirstPart && j < firstPartLength) {
                finalPartArray[i].push(firstSubPart[i][firstSubPartCounter]);
                firstSubPartCounter++;
            }
            if (useSecondPart && j >= firstPartLength && j < firstPartLength + secondPartLength) {
                finalPartArray[i].push(secondSubPart[i][secondSubPartCounter]);
                secondSubPartCounter++;
            }
            if (useThirdPart && j >= firstPartLength + secondPartLength) {
                console.log(thirdSubPart[i]);
                finalPartArray[i].push(thirdSubPart[i][thirdSubPartCounter]);
                thirdSubPartCounter++;
            }
        }

        firstSubPartCounter = 0;
        secondSubPartCounter = 0;
        thirdSubPartCounter = 0;
    }

    return finalPartArray;
}

function createFinalTable(uniqueColumns, uniqueRows, tableValues, totalOfColumns, totalOfRows, totalSum) {
    let header = [];
    let body = [];
    let footer = [];

    if (uniqueColumns.length && !uniqueRows.length) {
        console.log('FIRST EXAMPLE');
        const tableResultHeader = [[''], ['Total value']];
        const defaultColumns = new Array(uniqueColumns[0].length).fill(' ');
        defaultColumns[0] = 'Columns Values';
        // const defaultRowsFooter = [['Grand Total']];
        const rowsHeader = [[''], ['']];
        // const tableResultHeader = [[''], ['Grand Total']];

        header = createTablePart(rowsHeader, [defaultColumns, ...uniqueColumns], tableResultHeader);
        footer = createTablePart([['Sum of revenue']], totalOfColumns, totalOfRows);
    }

    if (uniqueRows.length && !uniqueColumns.length) {
        console.log('SECOND EXAMPLE');
        const rowsHeader = [['Sum of revenue'], ['Rows Labels']];
        const tableResultHeader = [[''], ['Total value']];
        const defaultColumns = new Array(uniqueColumns[0].length).fill(' ');
        defaultColumns[0] = 'Columns Values';
        // const defaultRowsFooter = [['Grand Total']];
        // const rowsHeader = [['Rows Labels']];
        // const tableResultHeader = [['Sum of revenue']];

        header = createTablePart(rowsHeader, uniqueColumns, tableResultHeader);
        body = createTablePart(uniqueRows, tableValues, totalOfRows.slice(0, uniqueRows.length));
        footer = createTablePart([['Grand Total']], totalOfColumns, [totalOfRows[totalOfRows.length - 1]]);
    }

    if (uniqueRows.length && uniqueColumns.length) {
        console.log('THIRD EXAMPLE');
        const rowsHeader = [['Sum of revenue'], ['Rows Labels']];
        const tableResultHeader = [[''], ['Total value']];
        const defaultColumns = new Array(uniqueColumns[0].length).fill(' ');
        defaultColumns[0] = 'Columns Values';
        const defaultRowsFooter = [['Grand Total']];

        console.log([defaultColumns, ...uniqueColumns]);
        header = createTablePart(rowsHeader, [defaultColumns, ...uniqueColumns], tableResultHeader);
        body = createTablePart(uniqueRows, tableValues, totalOfRows);
        footer = createTablePart(defaultRowsFooter, totalOfColumns, totalSum);
    }

    return [header, body, footer];
}

export function createTable(columns, rows, filters, values, data) {
    let uniqueColumns = [];
    let uniqueRows = [];
    let tableValues = [];
    let totalOfColumns = [];
    let totalOfRows = [];
    let totalSum = [];

    if (columns.length && !rows.length) {
        uniqueColumns = getUniqueColumns(columns, data);
        totalOfColumns = getColumnsSummary(columns, values, uniqueColumns, data);
        totalOfRows = getRowsSummary(rows, uniqueRows, values, data);
    }

    if (rows.length && !columns.length && !values.length > 1) {
        uniqueRows = getUniqueRows(rows, data);
        totalOfRows = getRowsSummary(rows, uniqueRows, values, data);
    }

    if (rows.length && !columns.length && values.length > 1) {
        // console.log('Hello');
        uniqueRows = getUniqueRows(rows, data);
        totalOfRows = getRowsSummary(rows, uniqueRows, values, data);
    }

    if (columns.length && rows.length) {
        console.log('I am here');
        uniqueColumns = getUniqueColumns(columns, data);
        uniqueRows = getUniqueRows(rows, data);
        tableValues = getTableValues(uniqueRows, uniqueColumns[0], rows, columns, values, data);
        totalOfRows = getRowsSummary(rows, uniqueRows, values, data);
        totalOfColumns = getColumnsSummary(columns, values, uniqueColumns[0], data);
    }

    totalSum = getTotalSum(values, data);

    const finalArray = createFinalTable(uniqueColumns, uniqueRows, tableValues, totalOfColumns, totalOfRows, totalSum);

    return finalArray;
    // return [[], [], []];
}

