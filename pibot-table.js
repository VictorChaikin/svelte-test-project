// Pivot Table

// Pivot Table Component 
// Props : configurator, jsonData, columns

// Prop types : 
// configurator = {
//   values : [] - only fields from jsonData object in string format,
//   filters: [] - only fields from jsonData object in string format,
//   rows: [] - only fields from jsonData object in string format,
//   columns: [] - only fields from jsonData object in string format
// },

// jsonData = [
//   {}, {}, {} - objects must have the same fields and types. Only string, number and dateTime types only.
//   ] - array can be different size and must contain objects with the same amount of fields and their types

// columns : [
//   Predefined object, Predefined object
// ] - array of predefined objects which represents what kind of field is stored and how to display it

// Predefined object {
//   textAlign: right, - string only
//   icon : $, - symbol only
//   iconSide: left - string only
// }

// Predefined Objects : {
//   number : {textAlign: right, icon: null, iconSide: null},
//   currency : {textAlign: right, icon: $, iconSide: left},
//   date: {textAlign: left, icon: null, iconSide: null},
//   time: {textAlign: left, icon: null, iconSide: null},
//   Percentage: {textAlign: left, icon: %, iconSide: right},
//   text: {textAlign: left, icon: null, iconSide: null}
// }

// Date-out : HeaderComponent, BodyComponent, FooterComponent

// function getTableData(configurator, jsonData, columns){
//   configurator - prop from Pivot Table Component
//   jsonData - prop from Pivot Table Component
//   columns - prop from Pivot Table Component 

//   IN 2D Array [
//     [
//       '' - COLUMN,
//       '' - COLUMN,
//       '' - COLUMN
//     ] - ROW
//   ]

//   [''] - store only one column
//   ['', ''] - store 1 and more columns
//   '' - store only one value

//   return {
    // rowsTitle: [
    //   [''], ['']
    // ],

    // columnsTitle: [
    //   {}, {}
    // ],

    // uniqueColumnsValue: [
    //   ['', '', ''], ['', '', '']
    // ],

    // verticalTotalTitle: [
    //   [''], ['']
    // ],

    // uniqueRowsValues: [
    //   {}, {}, {}
    // ],

    // tableValues: [
    //   ['', '', '']['', '', '']
    // ],

    // rowsTotalValues: [
    //   [''], ['']
    // ],

    // horizontalTotalTitle: '',
    // columnTotalValues: ['', '', ''],
    // grandTotal: ''
//   };
// }

// EXAMPLES 

// ________________________________________________________________________________________________________
// FIRST EXAMPLE
// COLUMNS AND VALUES

// const configurator = {
//   values : ['revenue'],
//   filters: [],
//   rows: [] ,
//   columns: ['state']
// };

// const jsonData = [
// // Data from local json
// ];

// const columns = {
//     state: { textAlign: 'left', icon: null, iconSide: null, type: 'string' },
//     revenue: { textAlign: 'right', icon: '$', iconSide: 'left', type: 'number' }
// };

// let pivotTable = getTableData(configurator, jsonData, columns);

// pivotTable - {

//   rowsTitle: [
//     [''], ['']
//   ],

//   columnsTitle: [
//     ['Columns Label', '', '', '', '', '', '', '', '', '', '', '']
//   ],

//   uniqueColumnsValue: [
//     [{label : 'CA'}, {label:'CO'}, {label:'FL'}, {label:'ID'}, {label:'IL'}, {label:'NV'}, {label:'NY'}, {label:'OR'}, {label:'TN'}, {label:'UT'}, {label:'WA'}, {label:'WI'}]
//   ],

//   verticalTotalTitle: [
//     [''], ['Grand Total']}
//   ],

//   uniqueRowsValues: [],

//   tableValues: [  ],

//   rowsTotalValues: [],

//   horizontalTotalTitle: 'Sum of revenue',
//   columnTotalValues: [2544.73, 2464.65, 7780.57, 4543.00, 8278.07, 5524.75, 15329.30, 6929.45, 10954.70, 2612.00, 6594.03, 8327.75 ],
//   grandTotal: 818
  
// };

// ________________________________________________________________________________________________________
// SECOND EXAMPLE
// ROWS AND VALUES

// const configurator = {
//   values : ['revenue'],
//   filters: [],
//   rows: ['city'] ,
//   columns: []
// };

// const jsonData = [
// // Data from local json
// ];

// const columns = {
//     city: { textAlign: 'left', icon: null, iconSide: null, type: 'string' },
//     revenue: { textAlign: 'right', icon: '$', iconSide: 'left', type: 'number' }
// };

// let pivotTable = getTableData(configurator, jsonData, columns);

// pivotTable - {

//   rowsTitle: [
//     ['Row Labels']
//   ],

//   columnsTitle: [],

//   uniqueColumnsValue: [],

//   verticalTotalTitle: [
//     ['Sum of revenue']
//   ],

//   uniqueRowsValues: [
//     [ { label: 'Boise' } ],
//     [ { label: 'Chicago' } ],
//     [ { label: 'Denver' }, ]
//     [ { label: 'Las Vegas' } ],
//     [ { label: 'Los Angelas' } ],
//     [ { label: 'Memphis' } ],
//     [ { label: 'Miami' } ],
//     [ { label: 'Milwaukee' } ],
//     [ { label: 'New York' } ],
//     [ { label: 'Portland' } ],
//     [ { label: 'Salt Lake City' } ],
//     [ { label: 'Seattle' } ]
//   ],

//   tableValues: [  ],

// rowsTotalValues: [
//   ['4543'],
//   ['8278.07'],
//   ['2464.65'],
//   ['5524.75'],
//   ['2544.73'],
//   ['10954.7'],
//   ['7780.57'],
//   ['8327.75'],
//   ['15329.3'],
//   ['6929.45'],
//   ['2612'],
//   ['6594.03']
// ],

//   horizontalTotalTitle: 'Grand Total',
//   columnTotalValues: [],
//   grandTotal: '81883'
  
// };

// ________________________________________________________________________________________________________
// THIRD EXAMPLE
// COLUMNS AND A FEW VALUES

// const configurator = {
//   values : ['revenue', 'unit_price', 'shipping_fee'],
//   filters: [],
//   rows: ['salesperson'] ,
//   columns: []
// };

// const jsonData = [
// // Data from local json
// ];

// const columns = {
//     revenue: { textAlign: 'right', icon: '$', iconSide: 'left', type: 'number' },
//     salesperson: { textAlign: 'left', icon: null, iconSide: null, type: 'string' },
//     unit_price: { textAlign: 'right', icon: '$', iconSide: 'left', type: 'number' },
//     shipping_fee: { textAlign: 'right', icon: '$', iconSide: 'left', type: 'number' }
// };

// let pivotTable = getTableData(configurator, jsonData, columns);

// pivotTable - {

//   rowsTitle: [
//     ['']
//   ],

//   columnsTitle: [],

//   uniqueColumnsValue: [],

//   verticalTotalTitle: [
//     ['Sum of revenue',	'Count of unit_price',	'Max of shipping_fee']
//   ],

//   uniqueRowsValues: [
//     [ { label: 'Andrew Cencini' } ],
//     [ { label: 'Anne Larsen' } ],
//     [ { label: 'Jan Kotas' } ],
//     [ { label: 'Laura Giussani' } ],
//     [ { label: 'Mariya Sergienko' } ],
//     [ { label: 'Michael Neipper' } ],
//     [ { label: 'Nancy Freehafer' } ],
//     [ { label: 'Robert Zare' } ]
//   ],

//   tableValues: [  ],

//   rowsTotalValues: [
//     [15329.30, 8, 502.20 ],
//     [18735.27, 12, 502.20 ],
//     [2464.65,	4, 159.90 ],
//     [8278.07,	8, 210.00 ],
//     [8069.48,	10,	280.60 ],
//     [8327.75,	7, 360.40 ],
//     [18066.48, 13, 377.20 ],
//     [2612.00,	3, 165.75 ]
//   ],

//   horizontalTotalTitle: 'Grand Total',
//   columnTotalValues: [],
//   grandTotal: [
//     ['81883.00', '65', '502.20']
//   ]
  
// };

// ________________________________________________________________________________________________________
// FORTH EXAMPLE
// const configurator = {
//   values : ['revenue'],
//   filters: ['category'],
//   rows: ['city'] ,
//   columns: ['customer_name']
// };

// const jsonData = [
// // Data from local json
// ];

// const columns = {
//     revenue: { textAlign: 'right', icon: '$', iconSide: 'left', type: 'number' },
//     category: { textAlign: 'left', icon: null, iconSide: null, type: 'string' },
//     city: { textAlign: 'left', icon: null, iconSide: null, type: 'string' },
//     columns: { textAlign: 'left', icon: null, iconSide: null, type: 'string' }
// };

// let pivotTable = getTableData(configurator, jsonData, columns);

// pivotTable - {

//   rowsTitle: [
//     ['Sum of revenue'], ['Row Labels']
//   ],

//   columnsTitle: [
//     ['Columns Label', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
//   ],

//   uniqueColumnsValue: [
//     [{ label: 'Company AA' },	{ label: 'Company BB' }, { label: 'Company C' }, { label: 'Company CC' },	{ label: 'Company D' },	{ label: 'Company F' },	{ label: 'Company G' },	{ label: 'Company H' },	{ label: 'Company I' },	{ label: 'Company J' },	{ label: 'Company K' },	{ label: 'Company L' },	{ label: 'Company Y' },	{ label: 'Company Z' }]
//   ],

//   verticalTotalTitle: ['
//     [''], ['Grand Total']
//   ],

//   uniqueRowsValues: [
//     [ { label: 'Boise' } ],
//     [ { label: 'Chicago' } ],
//     [ { label: 'Denver' } ],
//     [ { label: 'Las Vegas' } ],
//     [ { label: 'Los Angelas' } ],
//     [ { label: 'Memphis' } ],
//     [ { label: 'Miami' } ],
//     [ { label: 'Milwaukee' } ],
//     [ { label: 'New York' } ],
//     [ { label: 'Portland' } ],
//     [ { label: 'Salt Lake City' } ],
//     [ { label: 'Seattle' } ]
//   ],

//   tableValues: [ 
//     ['', '', '', '', '', '', '', 4543,'', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '',5660.07, '', '', 2618, ''],
//     ['', '', '', '', 2464.65, '', '', '', '', '', '', '', '', '', ''],
//     ['', 852, '', '', '', '', '', '', '', '', '', '',4672.75, '', ''],
//     ['', '', '', 2544.73, '', '', '', '', '', '', '', '', '', '', ''],
//     ['', '', 10954.7, '', '', '', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '', '',3618.02, '', '',4162.55],
//     ['', '', '', '', '', '', 8327.75,'', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', 15329.3,'', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', 6929.45,'', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', 2612,'', '', '', '', ''],
//     [6594.03, '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
//    ],

//   rowsTotalValues: [
//     ['4543'],
//     ['8278.07'],
//     ['2464.65'],
//     ['5524.75'],
//     ['2544.73'],
//     ['10954.7'],
//     ['7780.57'],
//     ['8327.75'],
//     ['15329.3'],
//     ['6929.45'],
//     ['2612'],
//     ['6594.03']
//   ],

//   horizontalTotalTitle: 'Grand Total',
//   columnTotalValues: [6594.03, 852,	10954.7, 2544.73,	2464.65, 15329.3,	8327.75, 4543, 6929.45, 2612, 5660.07, 3618.02, 4672.75, 2618, 4162.55],
//   grandTotal: '81883'
  
// };

// ________________________________________________________________________________________________________
// FIFTH EXAMPLE
// ALL FIELDS WITH 2 VALUES

// const configurator = {
//   values : ['revenue', 'unit_price'],
//   filters: ['unit_price'],
//   rows: ['salesperson, address'] ,
//   columns: ['order_date', 'category']
// };

// const jsonData = [
// // Data from local json
// ];

// const columns = {
//   revenue: { textAlign: 'right', icon: '$', iconSide: 'left', type: 'number' },
//   unit_price: { textAlign: 'right', icon: '$', iconSide: 'left', type: 'number' },
//   salesperson: { textAlign: 'left', icon: null, iconSide: null, type: 'string' },
//   address: { textAlign: 'left', icon: null, iconSide: null, type: 'string' },
//   order_date: { textAlign: 'left', icon: null, iconSide: null, type: 'string' },
//   category: { textAlign: 'left', icon: null, iconSide: null, type: 'string' }
// };

// let pivotTable = getTableData(configurator, jsonData, columns);

// pivotTable - {

//   rowsTitle: [
//     [''], [''], [''], ['Row Labels']
//   ],

//   columnsTitle: [
//     ['Columns Label', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
//   ],

//   uniqueColumnsValue: [
//     [
//       {
//         label: '12/03/14',
//         12/03/14subColumns: [
//           {
//             label: 'Condiments',
//             multipleValues: ['Sum of revenue', 'Count of product_name']
//           }
//         ],
//         12/03/14Total: [
//           ['12/03/14 Sum of revenue', '12/03/14 Count of product_name'],
//           ['', ''],
//           ['', '']
//         ]
//       },
//       {
//         label: '12/04/14',
//         12/04/14subColumns: [
//           {
//             label: 'Grains',
//             multipleValues: ['Sum of revenue', 'Count of product_name']
//           }
//         ],
//         12/04/14Total: [
//           ['12/04/14 Sum of revenue', '12/04/14 Count of product_name'],
//           ['', ''],
//           ['', '']
//         ]
//       },
//       {
//         label: '12/08/14',
//         12/08/14subColumns: [
//           {
//             label: 'Grains',
//             multipleValues: ['Sum of revenue', 'Count of product_name']
//           }
//         ],
//         12/08/14Total: [
//           ['12/08/14 Sum of revenue', '12/08/14 Count of product_name'],
//           ['', ''],
//           ['', '']
//         ]
//       },
//       {
//         label: '12/10/14',
//         12/10/14subColumns: [
//           {
//             label: 'Dried Fruit & Nuts',
//             multipleValues: ['Sum of revenue', 'Count of product_name']
//           }
//         ],
//         12/10/14Total: [
//           ['12/10/14 Sum of revenue', '12/10/14 Count of product_name'],
//           ['', ''],
//           ['', '']
//         ]
//       },
//       {
//         label: '12/25/14',
//         12/25/14subColumns: [
//           {
//             label: 'Baked Goods & Mixes',
//             multipleValues: ['Sum of revenue', 'Count of product_name']
//           }
//         ],
//         12/25/14Total: [
//           ['12/25/14 Sum of revenue', '12/25/14 Count of product_name'],
//           ['', ''],
//           ['', '']
//         ]
//       }
//     ]
//   ],

//   verticalTotalTitle: [
//     ['', ''],
//     ['', ''],
//     ['Total sum of revenue', 'Total sum of product_name'],
//     ['', '']
//   ],

//   uniqueRowsValues: [
//     [{
//       label: 'Andrew Cencini',
//       subRows: [
//         {
//           label: '123 4th Street'
//         }
//       ]
//     }],
//     [{
//       label: 'Laura Giussani',
//       subRows: [
//         {
//           label: '123 10th Street'
//         },
//         {
//           label: '789 25th Street'
//         }
//       ]
//     }],
//     [{
//       label: 'Mariya Sergienko',
//       subRows: [
//         {
//           label: '123 3rd Street'
//         }
//       ]
//     }],
//     [{
//       label: 'Nancy Freehafer',
//       subRows: [
//         {
//           label: '123 8th Street'
//         }
//       ]
//     }]
//   ],

//   tableValues: [ 
//     ['', '', '', '', 637,	1, 637,	1, '', '','', '','', '','', '','', '','', ''],20
//     ['', '', '', '', 637,	1, 637,	1, '', '','', '','', '','', '','', '','', ''],
//     ['', '','', '','', '','', '','', '','', '', 810, 1,	810, 1,	990, 1,	990, 1],
//     ['', '','', '','', '','', '','', '','', '', 810,	1,	810,	1, '', '', '', ''],
//     ['', '','', '','', '','', '','', '','', '', '', '', '', '', 990,	1,	990,	1],
//     [490,	1, 490,	1, '', '','', '','', '','', '','', '','', '', '', '', '', ''],
//     ['','', '','', '','', '','', 637,	1, 637,	1,'','', '','', '','', '','' ],
//     ['','', '','', '','', '','', 637,	1, 637,	1,'','', '','', '','', '','' ],
//    ],

//   rowsTotalValues: [
//     [637, 1],
//     [637, 1],
//     [1800, 2],
//     [810, 1],
//     [990, 1],
//     [490, 1],
//     [490, 1],
//     [637, 1],
//     [637, 1],
//   ],

//   horizontalTotalTitle: 'Grand Total',
//   columnTotalValues: [490, 1,	490, 1,	637, 1, 637, 1,	637, 1,	637, 1,	810, 1,	810, 1, 990, 1,	990, 1],
//   grandTotal: [ [3564,	5] ]
  
// };
