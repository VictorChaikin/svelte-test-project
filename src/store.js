// import { writable } from 'svelte/store';
import jsonData from '../src/data/data.json';
import { pathToFileURL } from 'url';

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
   
