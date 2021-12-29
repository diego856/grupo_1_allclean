const { validationResult } = require("express-validator")

const jsonTable = require('../database/jsonTable');
const products = jsonTable('products');

const productsControllers = {
    products: (req, res) => {

        const productList = products.all()

        res.render('products/products',  { productList });
    },

    productDetail:(req, res) => {
        res.render('products/productDetail')
    },

    productCart:(req, res) => {
        res.render('products/productCart')
    },

    productCreate:(req, res) => {
        res.render('products/productCreate')
    },
}

module.exports= productsControllers