import jsonData from '../src/data/data.json';

const firstExample = {
  title: 'Columns and Values',

  rowsTitle: [[null], [null]],

  uniqueColumns: [
    { label: 'CA' },
    { label: 'CO' },
    { label: 'FL' },
    { label: 'ID' },
    { label: 'IL' },
    { label: 'NV' },
    { label: 'NY' },
    { label: 'OR' },
    { label: 'TN' },
    { label: 'UT' },
    { label: 'WA' },
    { label: 'WI' }
  ],

  verticalTotalTitle: [[null], ['Grand Total']],

  horizontalTotalTitle: [
    ['Sum of revenue']
  ],

  columnsTotal: [
    [2544.73], [2464.65], [7780.57], [4543], [8278.07], [5524.75], [15329.3], [6929.45], [10954.7], [2612], [6594.03], [8327.75]
  ],

  grandTotal: [[81883]]
};

const secondExample = {
  title: 'Rows and Values',

  rowsTitle: [
    ['Row Labels']
  ],

  verticalTotalTitle: [
    ['Sum of revenue']
  ],

  uniqueRows: [
    { label: 'Boise' },
    { label: 'Chicago' },
    { label: 'Denver' },
    { label: 'Las Vegas' },
    { label: 'Los Angelas' },
    { label: 'Memphis' },
    { label: 'Miami' },
    { label: 'Milwaukee' },
    { label: 'New York' },
    { label: 'Portland' },
    { label: 'Salt Lake City' },
    { label: 'Seattle' }
  ],

  rowsTotal: [
    [
      [4543],
      [8278.07],
      [2464.65],
      [5524.75],
      [2544.73],
      [10954.7],
      [7780.57],
      [8327.75],
      [15329.3],
      [6929.45],
      [2612],
      [6594.03]
    ]
  ],

  horizontalTotalTitle: [
    ['Grand Total']
  ],

  grandTotal: [[81883]]
};

const thirdExample = {
  title: 'Rows and a few Values',

  rowsTitle: [
    [null]
  ],

  verticalTotalTitle: [
    ['Sum of revenue', 'Sum of unit_price', 'Sum of shipping_fee']
  ],

  uniqueRows: [
    { label: 'Andrew Cencini' },
    { label: 'Anne Larsen' },
    { label: 'Jan Kotas' },
    { label: 'Laura Giussani' },
    { label: 'Mariya Sergienko' },
    { label: 'Michael Neipper' },
    { label: 'Nancy Freehafer' },
    { label: 'Robert Zare' }
  ],

  rowsTotal: [
    [
      [15329.3],
      [18735.27],
      [2464.65],
      [8278.07],
      [8069.48],
      [8327.75],
      [18066.48],
      [2612]
    ],
    [
      [230.9],
      [321.94],
      [74.95],
      [104.69],
      [161.14],
      [174.25],
      [296.09],
      [63.95]
    ],
    [
      [1532.93],
      [1873.527],
      [246.465],
      [827.807],
      [806.948],
      [832.775],
      [1806.648],
      [261.2]
    ],
  ],

  horizontalTotalTitle: [
    ['Grand Total']
  ],

  grandTotal: [[81883, 1427.91, 8188.3]]
};

const forthExample = {
  title: 'All fields with 1 value',

  rowsTitle: [
    ['Sum of revenue'],
    ['Row Labels']
  ],

  uniqueColumns: [
    { label: 'Company A' },
    { label: 'Company BB' },
    { label: 'Company C' },
    { label: 'Company J' },
    { label: 'Company Y' },
    { label: 'Company Z' }
  ],

  verticalTotalTitle: [
    [null],
    ['Grand Total']
  ],

  uniqueRows: [
    { label: 'Chicago' },
    { label: 'Los Angelas' },
    { label: 'Memphis' },
    { label: 'Miami' },
    { label: 'Seattle' }
  ],

  tableValues: [
    [[null], [null], [null], [1584], [1628], [null]],
    [[null], [null], [490], [null], [null], [null]],
    [[null], [460], [null], [null], [null], [null]],
    [[null], [null], [null], [null], [null], [1821.6]],
    [[1619.2], [null], [null], [null], [null], [null]]
  ],

  rowsTotal: [
    [
      [3212],
      [490],
      [460],
      [1821.6],
      [1619.2]
    ]
  ],

  horizontalTotalTitle: [
    ['Grand Total']
  ],

  columnsTotal: [
    [1619.2],
    [460],
    [490],
    [1584],
    [1628],
    [1821.6]
  ],

  grandTotal: [
    [7602.8]
  ]
};

const fifthExample = {
  title: 'All fields with 2 values',

  rowsTitle: [
    ['Sum of revenue'],
    [null],
    [null],
    ['Row Labels']
  ],

  uniqueColumns: [
    {
      label: '12/10/14',
      showSubColumns: true,
      subColumns: [
        {
          label: 'Drie Fruit & Nuts',
          showSubColumns: true,
          subColumns: [
            {
              label: 'Almonds'
            }
          ],
        }
      ],
    },
    {
      label: '12/25/14',
      showSubColumns: true,
      subColumns: [
        {
          label: 'Baked Goods & Mixes',
          subColumns: [
            {
              label: 'Scones'
            }
          ],
        }
      ],
    }
  ],

  verticalTotalTitle: [
    [null], ['Grand Total'], [null], [null]
  ],

  uniqueRows: [
    {
      label: 'Laura Giussani',
      showSubRows: true,
      subRows: [
        {
          label: '123 10th Street',
          showSubRows: true,
          subRows: [
            {
              label: 'Chicago'
            }
          ]
        },
        {
          label: '789 25th Street',
          showSubRows: true,
          subRows: [
            {
              label: 'Chicago'
            }
          ]
        }
      ]
    }
  ],

  tableValues: [
    [
      [
        [810, 810, 810],
        [810, 810, 810],
        [810, 810, 810],
        [null, null, null],
        [null, null, null]
      ],
      [
        [990, 990, 990],
        [null, null, null],
        [null, null, null],
        [990, 990, 990],
        [990, 990, 990]
      ]
    ]
  ],

  rowsTotal: [
    [
      [
        1800,
        810,
        810,
        990,
        990
      ]
    ]
  ],

  horizontalTotalTitle: [
    ['Grand Total']
  ],

  columnsTotal: [
    [
      810,
      810,
      810
    ],
    [
      990,
      990,
      990
    ]
  ],

  grandTotal: [[1800]]
};

export const examples = [
  firstExample,
  secondExample,
  thirdExample,
  // forthExample,
  // fifthExample
];

// export const configurator = {
//   filters: [],
//   columns: ['state'],
//   rows: [],
//   values: ['revenue']
// };

export const data = jsonData;

// const predefinedObject = {
//   number: { textAlign: 'right', icon: null, iconSide: null, type: 'number' },
//   currency: { textAlign: 'right', icon: '$', iconSide: 'left', type: 'number' },
//   date: { textAlign: 'left', icon: null, iconSide: null, type: 'string' },
//   time: { textAlign: 'left', icon: null, iconSide: null, type: 'string' },
//   percentage: { textAlign: 'left', icon: '%', iconSide: 'right', type: 'number' },
//   text: { textAlign: 'left', icon: null, iconSide: null, type: 'string' },

// };


// const jsonDataObject = {
//   order_id: predefinedObject.number,
//   order_date: predefinedObject.date,
//   customer_id: predefinedObject.number,
//   customer_name: predefinedObject.text,
//   address: predefinedObject.text,
//   city: predefinedObject.text,
//   state: predefinedObject.text,
//   zip_code: predefinedObject.number,
//   country: predefinedObject.number,
//   salesperson: predefinedObject.text,
//   region: predefinedObject.text,
//   shipped_date: predefinedObject.date,
//   shipper_name: predefinedObject.text,
//   ship_name: predefinedObject.text,
//   ship_address: predefinedObject.text,
//   ship_city: predefinedObject.text,
//   ship_state: predefinedObject.text,
//   ship_zipCode: predefinedObject.number,
//   ship_country: predefinedObject.text,
//   payment_type: predefinedObject.text,
//   product_name: predefinedObject.text,
//   category: predefinedObject.text,
//   unit_price: predefinedObject.currency,
//   quantity: predefinedObject.number,
//   revenue: predefinedObject.currency,
//   shipping_fee: predefinedObject.currency
// };

// export const columns = [
//   jsonDataObject.state,
//   jsonData.revenue
// ];
