function createTablePart(firstSubPart, secondSubPart, thirdSubPart) {
    // console.log(firstSubPart);
    // console.log(secondSubPart);
    // console.log(thirdSubPart);
    // console.log('___________________________');
    const finalPartArray = [];

    const firstPartLength = firstSubPart[0] ? firstSubPart[0].length : 0;
    const secondPartLength = secondSubPart[0] ? secondSubPart[0].length : 0;
    const thirdPartLength = thirdSubPart[0] ? thirdSubPart[0].length : 0;

    const currentPartLength = firstPartLength + secondPartLength + thirdPartLength;
    const currentPartHeight = firstSubPart.length;

    for (let i = 0; i < currentPartHeight; i++) {
        finalPartArray.push([]);
        for (let j = 0; j < currentPartLength; j++) {
            if (j < firstPartLength) {
                finalPartArray[i].push(firstSubPart[i][j]);
            }
            if (j >= firstPartLength && j < firstPartLength + secondPartLength) {
                finalPartArray[i].push(secondSubPart[i][j - firstPartLength]);
            }
            if (j >= firstPartLength + secondPartLength) {
                finalPartArray[i].push(thirdSubPart[i][j - (firstPartLength + secondPartLength)]);
            }
        }
    }

    return finalPartArray;
}

let rowsTotalCounter = 0;
let tableValuesCounter = 0;

function insertHeaderItems(uniqueColumn, uniqueColumnsArray, tableHeaderLayer, configurator, show) {
    // console.log('Insert Item');
    // console.log(uniqueColumn);
    const uniqueColumnsArrayLayer = uniqueColumnsArray[tableHeaderLayer];
    const uniqueColumnsArrayItem = uniqueColumn.subColumns ? {
        label: uniqueColumn.label,
        showSubColumns: uniqueColumn.showSubColumns,
        path: uniqueColumn.path
    } : uniqueColumn.label;

    const valueToPush = show ? uniqueColumnsArrayItem : null;

    if (uniqueColumnsArrayLayer) {
        uniqueColumnsArrayLayer.push(valueToPush);
    } else {
        uniqueColumnsArray.push([valueToPush]);
    }

    if (!uniqueColumn.subColumns) {
        if (configurator.values.length > 1) {
            if (uniqueColumnsArray[tableHeaderLayer + 1]) {
                uniqueColumnsArray[tableHeaderLayer + 1].push(`Sum of ${configurator.values[0]}`);
            }
            else {
                uniqueColumnsArray.push([`Sum of ${configurator.values[0]}`]);
            }

            for (let i = 1; i < configurator.values.length; i++) {
                uniqueColumnsArray[tableHeaderLayer].push(null);
                uniqueColumnsArray[tableHeaderLayer + 1].push(`Sum of ${configurator.values[i]}`);
            }
        }
    }
}

function insertHeaderItemsTotals(uniqueColumn, uniqueColumnsArray, tableHeaderLayer, configurator, show) {
    const uniqueColumnsArrayItem = uniqueColumnsArray[tableHeaderLayer];

    const diff = uniqueColumnsArray[tableHeaderLayer + 1].length - uniqueColumnsArrayItem.length;

    for (let j = 0; j < diff; j++) {
        uniqueColumnsArrayItem.push(null);
    }

    if (show) {
        if (configurator.values.length > 1) {
            for (let i = 0; i < configurator.values.length; i++) {
                uniqueColumnsArrayItem.push(`${uniqueColumn.label} Sum of ${configurator.values[i]}`);

                for (let k = tableHeaderLayer + 1; k < uniqueColumnsArray.length; k++) {
                    uniqueColumnsArray[k].push(null);
                }
            }
        } else {
            uniqueColumnsArrayItem.push(`${uniqueColumn.label} Total`);

            for (let k = tableHeaderLayer + 1; k < uniqueColumnsArray.length; k++) {
                uniqueColumnsArray[k].push(null);
            }
        }
    }
}

function getUniqueColumnsArray(uniqueColumns, uniqueColumnsArray, tableHeaderLayer, configurator, show) {
    for (let i = 0; i < uniqueColumns.length; i++) {
        const uniqueColumn = uniqueColumns[i];

        insertHeaderItems(uniqueColumn, uniqueColumnsArray, tableHeaderLayer, configurator, show);

        if (uniqueColumn.subColumns) {
            const showSubColumn = show ? uniqueColumn.showSubColumns : false;

            const counter = tableHeaderLayer + 1;
            getUniqueColumnsArray(uniqueColumn.subColumns, uniqueColumnsArray, counter, configurator, showSubColumn);
            insertHeaderItemsTotals(uniqueColumn, uniqueColumnsArray, tableHeaderLayer, configurator, showSubColumn);
        }
    }

    return uniqueColumnsArray;
}

function getUniqueRowsArray(uniqueRows, uniqueRowsArray) {
    for (let i = 0; i < uniqueRows.length; i++) {
        const uniqueRow = uniqueRows[i];

        if (uniqueRow.subRows) {
            uniqueRowsArray.push([{
                label: uniqueRow.label,
                showSubRows: uniqueRow.showSubRows,
                path: uniqueRow.path
            }]);
        } else {
            uniqueRowsArray.push([uniqueRow.label]);
        }

        if (uniqueRow.showSubRows) {
            getUniqueRowsArray(uniqueRow.subRows, uniqueRowsArray);
        }
    }

    return uniqueRowsArray;
}

function insertTableValue(tableValue, uniqueColumn, uniqueRow, tableValuesArray) {
    if (uniqueColumn.showSubColumns) {
        for (let i = 0; i < uniqueColumn.subColumns.length; i++) {
            insertTableValue(tableValue.subColumns[i], uniqueColumn.subColumns[i], {}, tableValuesArray);

            if (tableValuesArray[tableValuesCounter]) {
                tableValuesArray[tableValuesCounter].push(tableValue.value);
            } else {
                tableValuesArray.push([tableValue.value]);
            }
        }
    }

    if (!uniqueColumn.showSubColumns) {
        if (tableValuesArray[tableValuesCounter]) {
            tableValuesArray[tableValuesCounter].push(tableValue.value);
        } else {
            tableValuesArray.push([tableValue.value]);
        }
    }

    if (uniqueRow.showSubRows) {
        for (let i = 0; i < uniqueRow.subRows.length; i++) {
            // const counter = tableValuesCounter + 1;
            tableValuesCounter++;
            insertTableValue(tableValue.subRows[i], uniqueColumn, uniqueRow.subRows[i], tableValuesArray);
        }
    }
}

function getTableValuesArray(tableValues, uniqueColumns, uniqueRows) {
    const tableValuesArray = [];
    // let tableValuesCounter = 0;

    for (let i = 0; i < uniqueRows.length; i++) {
        tableValuesArray.push([]);
        for (let j = 0; j < uniqueColumns.length; j++) {
            const currentTableValue = tableValues[i][j];

            if (currentTableValue.subColumns || currentTableValue.subRows) {
                insertTableValue(currentTableValue, uniqueColumns[j], uniqueRows[i], tableValuesArray);
                tableValuesCounter = 0;
            } else {
                tableValuesArray[i].push(currentTableValue.value);
            }
        }
    }

    return tableValuesArray;
}

function insertRowsTotalItem(totalRow, uniqueRow, rowsTotalArray) {
    for (let i = 0; i < uniqueRow.length; i++) {
        // console.log(rowsTotalCounter);
        const totalRowItem = totalRow[i];
        const uniqueRowItem = uniqueRow[i];
        const rowsTotalArrayItem = rowsTotalArray[rowsTotalCounter];
        // const itemToPush = rowsTotalArrayItem ? totalRowItem.value : [totalRowItem.value];

        // rowsTotalArray.push(itemToPush);

        if (rowsTotalArrayItem) {
            rowsTotalArrayItem.push(totalRowItem.value);
        } else {
            rowsTotalArray.push([totalRowItem.value]);
        }

        rowsTotalCounter++;
        if (uniqueRowItem.showSubRows) {
            // const counter = rowsTotalCounter + 1;

            insertRowsTotalItem(totalRowItem.subRows, uniqueRowItem.subRows, rowsTotalArray);
        }
    }
}

function getRowsTotalArray(rowsTotal, uniqueRows) {
    const rowsTotalArray = [];

    for (let i = 0; i < rowsTotal.length; i++) {
        insertRowsTotalItem(rowsTotal[i], uniqueRows, rowsTotalArray);
        rowsTotalCounter = 0;
    }

    return rowsTotalArray;
}

function getColumnsTotalArray(columnsTotal, uniqueColumns, columnsTotalArray, configurator) {
    for (let i = 0; i < uniqueColumns.length; i++) {
        const uniqueColumn = uniqueColumns[i];
        const columnTotal = columnsTotal[i];

        if (uniqueColumn.showSubColumns) {
            getColumnsTotalArray(columnTotal.subColumns, uniqueColumn.subColumns, columnsTotalArray, configurator);
        }

        if (configurator.values.length > 1) {
            for (let j = 0; j < configurator.values.length; j++){
                columnsTotalArray.push(columnTotal.value[j]);
            }
        } else {
            columnsTotalArray.push(columnTotal.value);
        }

    }

    return [columnsTotalArray];
}

export function createHeader(defaultRows, uniqueColumns, verticalTotalTitle, configurator) {
    const col = uniqueColumns ? getUniqueColumnsArray(uniqueColumns, [], 0, configurator, true) : [];
    // console.log('Create Header');
    return createTablePart(defaultRows, col, verticalTotalTitle);
}

export function createBody(uniqueRows, uniqueColumns, tableValues, rowsTotal) {
    const unRowsArr = getUniqueRowsArray(uniqueRows, []);
    const tabValArr = tableValues ? getTableValuesArray(tableValues, uniqueColumns, uniqueRows) : [];
    const rowsTotArr = getRowsTotalArray(rowsTotal, uniqueRows);

    // console.log('Create Body');
    return createTablePart(unRowsArr, tabValArr, rowsTotArr);
}

export function createFooter(horizontalTotalTitle, uniqueColumns, columnsTotal, grandTotal, configurator) {
    const colTotArr = columnsTotal ? getColumnsTotalArray(columnsTotal, uniqueColumns, [], configurator) : [];

    // console.log('Create Footer');
    return createTablePart(horizontalTotalTitle, colTotArr, grandTotal);
}
