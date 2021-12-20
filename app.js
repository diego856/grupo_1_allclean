const express = require('express')
const app = express()
const port = 3030
const indexRoutes = require('./routes/indexRoutes')
const loginRoutes = require('./routes/loginRoutes')
const productDetailRoutes = require('./routes/productDetailRoutes')
const productCartRoutes = require('./routes/productCartRoutes')
const registerRoutes = require('./routes/registerRoutes')
const productsRoutes = require('./routes/productsRoutes')

const fs=require("fs")


app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs')

app.use('/', indexRoutes)
app.use('/login', loginRoutes)
app.use('/productDetail', productDetailRoutes)
app.use('/productCart', productCartRoutes)
app.use('/register', registerRoutes)
app.use('/products', productsRoutes)

app.get("/productCreate", function (req,res){
    res.render("products/productCreate")
})
app.get("/productEdit", function (req,res){
    res.render("products/productEdit")
})
app.get("/products/:id",function(req,res){
    const id=req.params.id
    let data=fs.readFileSync("database/products_json.json",{encoding:"utf-8"})
    const products=JSON.parse(data)
    const product= products.find(product=>product.id==id)
    res.send(product)
})

app.listen(process.env.PORT || port, () => {
    console.log(`listening at http://localhost:${port}`)
})
