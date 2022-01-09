const express = require('express')
const methodOverride =  require('method-override')
const app = express()
const port = 3030
const indexRoutes = require('./routes/indexRoutes')
const userRoutes = require('./routes/userRoutes')
const productsRoutes = require('./routes/productsRoutes')

// sacar despues
app.use(express.json()) 
// 

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'))

app.set('view engine', 'ejs')

app.use('/', indexRoutes)
app.use('/users', userRoutes)
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

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// const {body}=require("express-validator")
// const fs=require("fs")
// const path=require("path") 
// const multer=require("multer")

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './images/avatars')
//     },
//     filename: function (req, file, cb) {
//       let fileName = `Avatar-${Date.now()}${path.extname(file.originalname)}`;
//       cb(null, fileName);
//     }
//   })
//   const upload = multer({ storage:storage})

 
app.post("/productCreate",function(req,res){
 let datos=req.body
 console.log(datos)
res.send(datos)

})

app.listen(process.env.PORT || port, () => {
    console.log(`listening at http://localhost:${port}`)
})
