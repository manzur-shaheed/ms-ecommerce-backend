// sample seed data for Product
const { Product } = require('../models/Product');

const sample_products = [
    {
        product_name: 'MX960',
        price: 360000.00,
        stock: 10,
        category_id: 1
    },
    {
        product_name: 'MX480',
        price: 240000.00,
        stock: 20,
        category_id: 1
    },
    {
        product_name: 'EX4200',
        price: 12000.00,
        stock: 25,
        category_id: 2
    },
    {
        product_name: 'EX3200',
        price: 6000.00,
        stock: 18,
        category_id: 2
    },
    {
        product_name: 'PA3200',
        price: 50000.00,
        stock: 5,
        category_id: 3
    },
    {
        product_name: 'PA2200',
        price: 20000.00,
        stock: 7,
        category_id: 3
    },
    {
        product_name: 'F5 BIG-IP',
        price: 12000.00,
        stock: 12,
        category_id: 4
    },
    {
        product_name: 'SFP-10G-LR',
        price: 340.00,
        stock: 120,
        category_id: 5
    },
    {
        product_name: 'SFP-10G-SR',
        price: 240.00,
        stock: 100,
        category_id: 5
    },
    {
        product_name: 'GLC-T',
        price: 40.00,
        stock: 60,
        category_id: 5
    },
];

// function to populate
const productSeeds = () => Tag.bulkCreate(sample_products);

// export
module.exports = productSeeds;