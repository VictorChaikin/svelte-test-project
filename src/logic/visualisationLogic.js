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
   
    for (let i = 0; i < uniqueColumns.length; i++){

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

export function createHeader(defaultRows, uniqueColumns, verticalTotalTitle) {
    const uniqueColumnsVisualisation = getUniqueColumnsVisualisation(uniqueColumns, 'first');
    const defaultColumns = new Array(uniqueColumnsVisualisation.length).fill(['']);
    defaultColumns[0] = 'Columns Labels';

    const columns = [defaultColumns, uniqueColumnsVisualisation];
    dimensionalArray = [];
    // console.log(dimensionalArray);
    // console.log('Crateing Header');
    // console.log(defaultRows);
    // console.log(uniqueColumns);
    // console.log(verticalTotalTitle);
    // console.log('_________________');

    return createTablePart(defaultRows, columns, verticalTotalTitle);
}

export function createBody(uniqueRows, uniqueColumns, tableValues, rowsTotal) {
    let body = [];

    if (uniqueRows) {
        console.log('Crateing Body');
        console.log(uniqueRows);
        console.log(uniqueColumns);
        console.log(tableValues);
        console.log(rowsTotal);
        console.log('__________________');

        body = [['Body']];
    }

    return body;
}

export function createFooter(horizontalTotalTitle, uniqueColumns, columnsTotal, grandTotal) {

    // console.log('Crateing Footer');
    // console.log(horizontalTotalTitle);
    // console.log(uniqueColumns);
    // console.log(columnsTotal);
    // console.log(grandTotal);
    // console.log('__________________');

    return createTablePart(horizontalTotalTitle, columnsTotal, grandTotal);
}
