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
let globalTableValues = [];
let tableHeaderLayer = 0;
let rowsTotalCounter = 0;

function getUniqueColumnsVisualisation(uniqueColumns, show) {
    // console.log(uniqueColumns);
    for (let i = 0; i < uniqueColumns.length; i++) {
        
        // if (show !== 'donotShow') {
            if (globalUniqueColumns[tableHeaderLayer]) {
                globalUniqueColumns[tableHeaderLayer].push(uniqueColumns[i].label);
            } else {
                globalUniqueColumns.push([uniqueColumns[i].label]);
            }
        // }
        // else {
        //     if (globalUniqueColumns[tableHeaderLayer]) {
        //         globalUniqueColumns[tableHeaderLayer].push(null);
        //     } else {
        //         globalUniqueColumns.push([null]);
        //     }
        // }
        

        if (uniqueColumns[i].showSubColumns) {
            tableHeaderLayer++;
            getUniqueColumnsVisualisation(uniqueColumns[i].subColumns);
            tableHeaderLayer--;
        }
        // else {
        //     tableHeaderLayer++;
        //     getUniqueColumnsVisualisation(uniqueColumns[i].subColumns, 'donotShow');
        //     tableHeaderLayer--;
        // }

        // if (show !== 'donotShow') {
            if (uniqueColumns[i].showSubColumns) {
                const diff = globalUniqueColumns[tableHeaderLayer + 1].length - globalUniqueColumns[tableHeaderLayer].length;
                for (let j = 0; j < diff; j++) {
                    globalUniqueColumns[tableHeaderLayer].push(null);
                }

                globalUniqueColumns[tableHeaderLayer].push(`${uniqueColumns[i].label} Total`);

                for (let k = tableHeaderLayer + 1; k < globalUniqueColumns.length; k++) {
                    globalUniqueColumns[k].push(null);
                }
                console.log(uniqueColumns[i].label);
                console.log(tableHeaderLayer);
            }
        // }
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

function visualiseTableValuesItem(tableValues, uniqueColumns, uniqueRows, first) {
    
}

function getTableValuesVisualisation(tableValues, uniqueColumns, uniqueRows) {
    console.log(tableValues);
    console.log(uniqueColumns);
    console.log(uniqueRows);
    for (let i = 0; i < uniqueRows.length; i++){
        globalTableValues.push([]);
        for (let j = 0; j < uniqueColumns.length; j++){
            if (tableValues[i][j].subColumns || tableValues[i][j].subRows) {
                visualiseTableValuesItem(tableValues[i][j], uniqueColumns[j], uniqueRows[i]);
            } else {
                globalTableValues[i].push(tableValues[i][j].value);
            }
        }
    }
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
    for (let i = 0; i < uniqueColumns.length; i++) {
        if (uniqueColumns[i].showSubColumns) {
            getColumnsTotalVisualisation(columnsTotal[i].subColumns, uniqueColumns[i].subColumns);
        }
        
        globalColumnsTotals.push(columnsTotal[i].value);
    }
}

export function createHeader(defaultRows, uniqueColumns, verticalTotalTitle) {
    const columns = [];

    if (uniqueColumns) {
        getUniqueColumnsVisualisation(uniqueColumns, 'show');
        const uniqueColumnsVisualisation = globalUniqueColumns;
        globalUniqueColumns = [];
        // console.log(uniqueColumnsVisualisation);

        const defaultColumns = new Array(uniqueColumnsVisualisation[0].length).fill(null);
        defaultColumns[0] = 'Columns Labels';

        // console.log(tableHeaderLayer);
        columns.push(defaultColumns);
        columns.push(...uniqueColumnsVisualisation);
    }

    return createTablePart(defaultRows, columns, verticalTotalTitle);
}

export function createBody(uniqueRows, uniqueColumns, tableValues, rowsTotal) {
    let tableValuesVisualisation = [];

    getUniqueRowsVisualisation(uniqueRows, 'first');
    const uniqueRowsVisualisation = globalUniqueRows;
    globalUniqueRows = [];

    getRowsTotalVisualisation(rowsTotal, uniqueRows, 'first');
    const rowsTotalVisualisation = globalRowsTotals;
    globalRowsTotals = [];
    // console.log(rowsTotalVisualisation);


    if (tableValues) {
        getTableValuesVisualisation(tableValues, uniqueColumns, uniqueRows);
        tableValuesVisualisation = globalTableValues;
        globalTableValues = [];
    }

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
