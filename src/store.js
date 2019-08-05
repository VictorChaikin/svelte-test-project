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
    { value: 2544.73 },
    { value: 2464.65 },
    { value: 7780.57 },
    { value: 4543 },
    { value: 8278.07 },
    { value: 5524.75 },
    { value: 15329.3 },
    { value: 6929.45 },
    { value: 10954.7 },
    { value: 2612 },
    { value: 6594.03 },
    { value: 8327.75 }
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
      { value: 4543 },
      { value: 8278.07 },
      { value: 2464.65 },
      { value: 5524.75 },
      { value: 2544.73 },
      { value: 10954.7 },
      { value: 7780.57 },
      { value: 8327.75 },
      { value: 15329.3 },
      { value: 6929.45 },
      { value: 2612 },
      { value: 6594.03 }
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
      { value: 15329.3 },
      { value: 18735.27 },
      { value: 2464.65 },
      { value: 8278.07 },
      { value: 8069.48 },
      { value: 8327.75 },
      { value: 18066.48 },
      { value: 2612 }
    ],
    [
      { value: 230.9 },
      { value: 321.94 },
      { value: 74.95 },
      { value: 104.69 },
      { value: 161.14 },
      { value: 174.25 },
      { value: 296.09 },
      { value: 63.95 }
    ],
    [
      { value: 1532.93 },
      { value: 1873.527 },
      { value: 246.465 },
      { value: 827.807 },
      { value: 806.948 },
      { value: 832.775 },
      { value: 1806.648 },
      { value: 261.2 }
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
    [{ value: null }, { value: null }, { value: null }, { value: 1584 }, { value: 1628 }, { value: null }],
    [{ value: null }, { value: null }, { value: 490 }, { value: null }, { value: null }, { value: null }],
    [{ value: null }, { value: 460 }, { value: null }, { value: null }, { value: null }, { value: null }],
    [{ value: null }, { value: null }, { value: null }, { value: null }, { value: null }, { value: 1821.6 }],
    [{ value: 1619.2 }, { value: null }, { value: null }, { value: null }, { value: null }, { value: null }]
  ],

  rowsTotal: [
    [
      { value: 3212 },
      { value: 490 },
      { value: 460 },
      { value: 1821.6 },
      { value: 1619.2 }
    ]
  ],

  horizontalTotalTitle: [
    ['Grand Total']
  ],

  columnsTotal: [
    { value: 1619.2 },
    { value: 460 },
    { value: 490 },
    { value: 1584 },
    { value: 1628 },
    { value: 1821.6 }
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
          ]
        }
      ]
    },
    {
      label: '12/25/14',
      showSubColumns: true,
      subColumns: [
        {
          label: 'Baked Goods & Mixes',
          showSubColumns: true,
          subColumns: [
            {
              label: 'Scones'
            },
          ]
        }
      ]
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
          showSubRows: false,
          subRows: [
            {
              label: 'Chicago'
            }
          ]
        },
        {
          label: '789 25th Street',
          showSubRows: false,
          subRows: [
            {
              label: 'Chicago'
            }
          ]
        }
      ]
    },
  ],

  tableValues: [
    [
      {
        value: 810,
        subColumns: [
          {
            value: 810,
            subColumns: [
              {
                value: 810
              }
            ]
          }
        ],
        subRows: [
          {
            value: 810,
            subColumns: [
              {
                value: 810,
                subColumns: [
                  {
                    value: 810
                  }
                ]
              }
            ],
            subRows: [
              {
                value: 810,
                subColumns: [
                  {
                    value: 810,
                    subColumns: [
                      {
                        value: 810
                      }
                    ]
                  }
                ],
              }
            ]
          },
          {
            value: null,
            subColumns: [
              {
                value: null,
                subColumns: [
                  {
                    value: null
                  }
                ]
              }
            ],
            subRows: [
              {
                value: null,
                subColumns: [
                  {
                    value: null,
                    subColumns: [
                      {
                        value: null
                      }
                    ]
                  }
                ],
              }
            ]
          }
        ]
      },
      {
        value: 990,
        subColumns: [
          {
            value: 990,
            subColumns: [
              {
                value: 990
              }
            ]
          }
        ],
        subRows: [
          {
            value: null,
            subColumns: [
              {
                value: null,
                subColumns: [
                  {
                    value: null
                  }
                ]
              }
            ],
            subRows: [
              {
                value: null,
                subColumns: [
                  {
                    value: null,
                    subColumns: [
                      {
                        value: null
                      }
                    ]
                  }
                ],
              }
            ]
          },
          {
            value: 990,
            subColumns: [
              {
                value: 990,
                subColumns: [
                  {
                    value: 990
                  }
                ]
              }
            ],
            subRows: [
              {
                value: 990,
                subColumns: [
                  {
                    value: 990,
                    subColumns: [
                      {
                        value: 990
                      }
                    ]
                  }
                ],
              }
            ]
          }
        ]
      }
    ]
  ],

  rowsTotal: [
    [
      {
        value: 1800,
        subRows: [
          {
            value: 810,
            subRows: [
              {
                value: 810
              }
            ]
          },
          {
            value: 990,
            subRows: [
              {
                value: 990
              }
            ]
          }
        ]
      },
      {
        value: 1800,
        subRows: [
          {
            value: 810,
            subRows: [
              {
                value: 810
              }
            ]
          },
          {
            value: 990,
            subRows: [
              {
                value: 990
              }
            ]
          }
        ]
      }
      // [1800, 810, 810, 990, 990],
    ],
    // [
    //   [1800, 810, 810, 990, 990],
    //   [1800, 810, 810, 990, 990],
    // ],
    // [
    //   [1800, 810, 810, 990, 990],
    //   [1800, 810, 810, 990, 990],
    // ]
  ],

  horizontalTotalTitle: [
    ['Grand Total']
  ],

  columnsTotal: [
    {
      value: 810,
      subColumns: [
        {
          value: 810,
          subColumns: [
            {
              value: 810
            },
            {
              value: 810
            }
          ]
        }
      ]
    },
    {
      value: 990,
      subColumns: [
        {
          value: 990,
          subColumns: [
            {
              value: 990
            },
            {
              value: 990
            }
          ]
        }
      ]
    }
  ],

  grandTotal: [[1800]]
};

export const examples = [
  firstExample,
  secondExample,
  thirdExample,
  forthExample,
  fifthExample
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
