// import { writable } from 'svelte/store';
import jsonData from '../src/data/data.json';
// import { pathToFileURL } from 'url';

export const configurator = {
  filters: [],
  columns: ['state'],
  rows: [],
  values: ['revenue']
};

export const data = jsonData;

const predefinedObject = {
  number: { textAlign: 'right', icon: null, iconSide: null, type: 'number' },
  currency: { textAlign: 'right', icon: '$', iconSide: 'left', type: 'number' },
  date: { textAlign: 'left', icon: null, iconSide: null, type: 'string' },
  time: { textAlign: 'left', icon: null, iconSide: null, type: 'string' },
  percentage: { textAlign: 'left', icon: '%', iconSide: 'right', type: 'number' },
  text: { textAlign: 'left', icon: null, iconSide: null, type: 'string' },

};


const jsonDataObject = {
  order_id: predefinedObject.number,
  order_date: predefinedObject.date,
  customer_id: predefinedObject.number,
  customer_name: predefinedObject.text,
  address: predefinedObject.text,
  city: predefinedObject.text,
  state: predefinedObject.text,
  zip_code: predefinedObject.number,
  country: predefinedObject.number,
  salesperson: predefinedObject.text,
  region: predefinedObject.text,
  shipped_date: predefinedObject.date,
  shipper_name: predefinedObject.text,
  ship_name: predefinedObject.text,
  ship_address: predefinedObject.text,
  ship_city: predefinedObject.text,
  ship_state: predefinedObject.text,
  ship_zipCode: predefinedObject.number,
  ship_country: predefinedObject.text,
  payment_type: predefinedObject.text,
  product_name: predefinedObject.text,
  category: predefinedObject.text,
  unit_price: predefinedObject.currency,
  quantity: predefinedObject.number,
  revenue: predefinedObject.currency,
  shipping_fee: predefinedObject.currency
};

export const columns = [
  jsonDataObject.state,
  jsonData.revenue
];

const uniqueColumnsValues = [
  {
    label: '12/10/14',
    subColumns: [
      {
        label: 'Drie Fruit & Nuts',
        subColumns: [
          {
            label: 'Almonds'
          }
        ],
        showSubColumns: true,
        total: ['Drie Fruit & Nuts Total']
      }
    ],
    showSubColumns: true,
    total: ['12/10/14 Total']
  }
];

const uniqueRowsValues = [
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
      }
      // {
      //   label: '789 25th Street',
      //   showSubRows: true,
      //   subRows: [
      //     {
      //       label: 'Chicago'
      //     }
      //   ]
      // }
    ]
  }
];

const tableValues = [
  {
    value: 810,
    showSubColumns: true,
    subColumns: [{
      value: 810,
      showSubColumns: true,
      subColumns: [{
        value: 810
      }]
    }],
    showSubRows: true,
    subRows: [
      {
        value: 810,
        showSubColumns: true,
        subColumns: [{
          value: 810,
          showSubColumns: true,
          subColumns: [{
            value: 810
          }]
        }],
        showSubRows: true,
        subRows: [{
          value: 810,
          showSubColumns: true,
          subColumns: [{
            value: 810,
            showSubColumns: true,
            subColumns: [{
              value: 810
            }]
          }],
        }]
      }
      // {
      //   value: null,
      //   showSubColumns: true,
      //   subColumns: [{
      //     value: null,
      //     showSubColumns: true,
      //     subColumns: [{
      //       value: null
      //     }]
      //   }],
      //   showSubRows: true,
      //   subRows: [{
      //     value: null,
      //     showSubColumns: true,
      //     subColumns: [{
      //       value: null,
      //       showSubColumns: true,
      //       subColumns: [{
      //         value: null
      //       }]
      //     }],
      //   }]
      // }
    ]
  }
];

const rowsTotalValues = [
  {
    value: 810,
    showSubRows: true,
    subRows: [
      {
        value: 810,
        showSubRows: true,
        subRows: [{
          value: 810
        }]
      }
      // {
      //   value: 990,
      //   showSubRows: true,
      //   subRows: [{
      //     value: 990
      //   }]
      // }
    ]
  }
];

const columnsTotalValues = [
  {
    value: 810,
    showSubColumns: true,
    subColumns: [
      {
        value: 810,
        showSubColumns: true,
        subColumns: [{
          value: 810
        }]
      }
    ]
  }
];

const grandTotal = [
  810
];

export const pivotTable = {
  uniqueColumnsValues,
  uniqueRowsValues,
  tableValues,
  rowsTotalValues,
  columnsTotalValues,
  grandTotal
};
