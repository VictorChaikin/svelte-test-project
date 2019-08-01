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

let temporaryArray = [];
let dimensionalArray = [];

function getUniqueColumnsVisualisation(uniqueColumns, first) {

    for (let i = 0; i < uniqueColumns.length; i++) {

        if (uniqueColumns[i].subColumns) {
            getUniqueColumnsVisualisation(uniqueColumns[i].subColumns);
        }

        temporaryArray.push(uniqueColumns[i].label);

        if (first) {
            dimensionalArray.push(temporaryArray);
            temporaryArray = [];
        }
    }

    return dimensionalArray;
}

function getUniqueRowsVisualisation(uniqueRows, first) {
    // console.log(uniqueRows);
    for (let i = 0; i < uniqueRows.length; i++) {
        if (uniqueRows[i].subRows) {
            getUniqueRowsVisualisation(uniqueRows[i].subRows);
        }

        dimensionalArray.push([uniqueRows[i].label]);
    }
}

function getUniqueTableValuesVisualisation() {
}


function getRowsTotalVisualisation(rowsTotal, first) {
    for (let i = 0; i < rowsTotal.length; i++) {
        if (rowsTotal[i].subRows) {
            getUniqueRowsVisualisation(rowsTotal[i].subRows);
        }

        dimensionalArray.push(rowsTotal[i]);

        if (first) {
            // console.log('Rows Total Column');
            // console.log(dimensionalArray);
        }
    }
}

function getColumnsTotalVisualisation(columnsTotal, uniqueColumns, first) {
    // console.log('YEEEP columns total visualisation');
    for (let i = 0; i < uniqueColumns.length; i++) {
        dimensionalArray.push(columnsTotal[i][0]);
    }

    // console.log(dimensionalArray);
}

function compressMultipleArraysToOne(arrays) {
    const array = [];

    // console.log(arrays);
    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j++){
            if (array[j]) {
                array[j].push(...arrays[i][j]);
            } else {
                array.push(arrays[i][j]);
            }
        }
        // console.log(arrays[i]);
    }

    // console.log(array);
    return [array];
}

export function createHeader(defaultRows, uniqueColumns, verticalTotalTitle) {
    const columns = [];

    if (uniqueColumns) {
        const uniqueColumnsVisualisation = getUniqueColumnsVisualisation(uniqueColumns, 'first');
        const defaultColumns = new Array(uniqueColumnsVisualisation.length).fill(null);
        defaultColumns[0] = 'Columns Labels';

        columns.push(defaultColumns);
        columns.push(uniqueColumnsVisualisation);
        dimensionalArray = [];
    }

    // console.log(dimensionalArray);
    // console.log('Crateing Header');
    // console.log(defaultRows);
    // console.log(uniqueColumns);
    // console.log(verticalTotalTitle);
    // console.log('_________________');

    return createTablePart(defaultRows, columns, verticalTotalTitle);
}

export function createBody(uniqueRows, uniqueColumns, tableValues, rowsTotal) {
    // console.log('Creating Body');
    // console.log(uniqueRows);
    // console.log(uniqueColumns);
    // console.log(tableValues);
    // console.log(rowsTotal);
    // console.log('__________________');

    dimensionalArray = [];
    temporaryArray = [];
    let tableValuesVisualisation = [];

    getUniqueRowsVisualisation(uniqueRows, 'first');
    const uniqueRowsVisualisation = dimensionalArray;
    dimensionalArray = [];
    // console.log(uniqueRowsVisualisation);

    getRowsTotalVisualisation(rowsTotal, 'first');
    let rowsTotalVisualisation = dimensionalArray;
    dimensionalArray = [];

    if (rowsTotalVisualisation.length > 1) {
        // console.log(rowsTotalVisualisation);
        rowsTotalVisualisation = compressMultipleArraysToOne(rowsTotalVisualisation);
        // console.log(rowsTotalVisualisation[0]);
    }
    console.log(rowsTotalVisualisation);


    if (tableValues) {
        tableValuesVisualisation = getUniqueTableValuesVisualisation();
    }


    return createTablePart(uniqueRowsVisualisation, tableValuesVisualisation, rowsTotalVisualisation[0]);
}

export function createFooter(horizontalTotalTitle, uniqueColumns, columnsTotal, grandTotal) {
    let columnsTotalVisualisation = [];

    // console.log('Creating Footer');
    // console.log(horizontalTotalTitle);
    // console.log(uniqueColumns);
    // console.log(columnsTotal);
    // console.log(grandTotal);
    // console.log('__________________');

    if (columnsTotal) {
        getColumnsTotalVisualisation(columnsTotal, uniqueColumns, 'first');
        // console.log(columnsTotal);
        columnsTotalVisualisation = [dimensionalArray];
        // console.log(columnsTotalVisualisation);
        dimensionalArray = [];
    }

    return createTablePart(horizontalTotalTitle, columnsTotalVisualisation, grandTotal);
}
