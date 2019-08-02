function createTablePart(firstSubPart, secondSubPart, thirdSubPart) {
    // console.log('Create table part');
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
    // console.log('PART HEIGHT');
    // console.log(currentPartHeight);

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
                // console.log(thirdSubPart[i]);
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

let globalUniqueColumns = [];
let globalUniqueRows = [];
let globalRowsTotals = [];
let globalRowsItem = [];
let globalColumnsTotals = [];
let tableHeaderLayer = 0;
let columnsTotalItemCounter = 0;
let rowsTotalCounter = 0;

function getUniqueColumnsVisualisation(uniqueColumns, first) {
    for (let i = 0; i < uniqueColumns.length; i++) {

        if (uniqueColumns[i].subColumns) {
            tableHeaderLayer++;
            getUniqueColumnsVisualisation(uniqueColumns[i].subColumns);
            tableHeaderLayer--;
        }

        // console.log(tableHeaderLayer);

        if (globalUniqueColumns[tableHeaderLayer]) {

            // console.log(uniqueColumns[i].label);
            globalUniqueColumns[tableHeaderLayer].push(uniqueColumns[i].label);
        } else {
            // console.log(uniqueColumns[i].label);

            globalUniqueColumns[tableHeaderLayer] = [uniqueColumns[i].label];
        }

        if (uniqueColumns[i].subColumns) {
            // console.log('Has subcolumns');
            // console.log(tableHeaderVisualisationArray);
            // console.log(tableHeaderLayer);
            // console.log(uniqueColumns[i].label);
            // console.log(tableHeaderVisualisationArray[tableHeaderLayer]);
            // console.log(tableHeaderVisualisationArray[tableHeaderLayer + 1]);
            const diff = globalUniqueColumns[tableHeaderLayer + 1].length - globalUniqueColumns[tableHeaderLayer].length;

            for (let j = 0; j < diff; j++) {
                globalUniqueColumns[tableHeaderLayer].push(null);
            }

            globalUniqueColumns[tableHeaderLayer].push(`${uniqueColumns[i].label} Total`);

            for (let k = tableHeaderLayer + 1; k < globalUniqueColumns.length; k++) {
                globalUniqueColumns[k].push(null);
            }
        }
    }
}

function getUniqueRowsVisualisation(uniqueRows, first) {
    for (let i = 0; i < uniqueRows.length; i++) {
        if (uniqueRows[i].showSubRows) {
            globalRowsItem.push([uniqueRows[i].label]);

            getUniqueRowsVisualisation(uniqueRows[i].subRows);
        }

        if (!uniqueRows[i].showSubRows) {
            globalRowsItem.push([uniqueRows[i].label]);
        }

        if (first) {
            globalUniqueRows.push(...globalRowsItem);
            globalRowsItem = [];
        }
    }
}

function getTableValuesVisualisation(tableValues, uniqueColumns) {
    console.log(tableValues);
    console.log(uniqueColumns);
    return [];
}

function visualiseRowsTotalItem(totalRow, uniqueRow, first) {
    for (let i = 0; i < uniqueRow.length; i++) {
        if (globalRowsTotals[rowsTotalCounter]) {
            globalRowsTotals[rowsTotalCounter].push(totalRow[i].value);
        }
        else {
            globalRowsTotals.push([totalRow[i].value]);
        }
        
        rowsTotalCounter++;
        if (uniqueRow[i].showSubRows) {

            visualiseRowsTotalItem(totalRow[i].subRows, uniqueRow[i].subRows);
        }
       
    }
}

function getRowsTotalVisualisation(rowsTotal, uniqueRows, first) {
    for (let i = 0; i < rowsTotal.length; i++) {
        visualiseRowsTotalItem(rowsTotal[i], uniqueRows, first);
        rowsTotalCounter = 0;
    }
}

function getColumnsTotalVisualisation(columnsTotal, uniqueColumns, first) {
    // console.log(uniqueColumns);
    // console.log(columnsTotal);
    for (let i = 0; i < uniqueColumns.length; i++) {
        if (uniqueColumns[i].showSubColumns) {
            if (first) {
                getColumnsTotalVisualisation(columnsTotal[i], uniqueColumns[i].subColumns);
            } else {
                getColumnsTotalVisualisation(columnsTotal, uniqueColumns[i].subColumns);
            }

            columnsTotalItemCounter++;
        }

        if (first) {
            globalColumnsTotals.push(columnsTotal[i][columnsTotalItemCounter]);
        } else {
            globalColumnsTotals.push(columnsTotal[columnsTotalItemCounter]);
        }

        if (first) {
            // console.log(globalColumnsTotals);
            columnsTotalItemCounter = 0;
        }
    }
}

export function createHeader(defaultRows, uniqueColumns, verticalTotalTitle) {
    const columns = [];

    if (uniqueColumns) {
        getUniqueColumnsVisualisation(uniqueColumns, 'first');
        const uniqueColumnsVisualisation = globalUniqueColumns;
        globalUniqueColumns = [];

        const defaultColumns = new Array(uniqueColumnsVisualisation[0].length).fill(null);
        defaultColumns[0] = 'Columns Labels';

        columns.push(defaultColumns);
        columns.push(...uniqueColumnsVisualisation);
    }

    return createTablePart(defaultRows, columns, verticalTotalTitle);
}

export function createBody(uniqueRows, uniqueColumns, tableValues, rowsTotal) {
    // console.log('Creating Body');
    // console.log(uniqueRows);
    // console.log(uniqueColumns);
    // console.log(tableValues);
    // console.log(rowsTotal);
    // console.log('__________________');

    let tableValuesVisualisation = [];

    getUniqueRowsVisualisation(uniqueRows, 'first');
    const uniqueRowsVisualisation = globalUniqueRows;
    globalUniqueRows = [];
    // console.log(uniqueRowsVisualisation);

    getRowsTotalVisualisation(rowsTotal, uniqueRows, 'first');
    const rowsTotalVisualisation = globalRowsTotals;
    globalRowsTotals = [];
    // const rowsTotalVisualisation = [];
    console.log(rowsTotalVisualisation);


    // if (tableValues) {
    //     // console.log(tableValues);
    //     // tableValuesVisualisation = compressMultipleArraysToOne(tableValues);
    //     // getTableValuesVisualisation(tableValues, uniqueColumns);

    //     tableValuesVisualisation = tableValues;

    //     // console.log(tableValuesVisualisation);
    // }

    return createTablePart(uniqueRowsVisualisation, tableValuesVisualisation, rowsTotalVisualisation);
    // return [['Body']];
}

export function createFooter(horizontalTotalTitle, uniqueColumns, columnsTotal, grandTotal) {
    let columnsTotalVisualisation = [];

    if (columnsTotal) {
        getColumnsTotalVisualisation(columnsTotal, uniqueColumns, 'first');
        columnsTotalVisualisation = [globalColumnsTotals];
        globalColumnsTotals = [];
    }

    return createTablePart(horizontalTotalTitle, columnsTotalVisualisation, grandTotal);
}
