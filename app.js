const express = require('express');
const app = express();
const cors =require('cors');
const dotenv = require('dotenv')
const morgan = require('morgan')
const mongoose = require('mongoose');


const Products = require('./Routes/Productroute')
const Shops = require('./Routes/Shop');
const Area = require('./Routes/Area');
const Orders = require("./Routes/Orders");

dotenv.config()


const port = process.env.PORT;
app.use(express.json());

const corsOptions = {
  origin: [
      'http://localhost:4111'
  ],
  methods: ['GET', 'POST'],
  preflightContinue: true, 
};

app.use(cors());

app.use(morgan('dev'))


app.use(express.json({
  limit: '50mb'
}));
app.use(express.urlencoded({ extended: true }))


app.use('/api/product',Products)
app.use('/api/shop',Shops);
app.use('/api/area', Area);
app.use('/api/orders',Orders);


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database connected");
    }).catch((error)=>{
      console.log(`database connection error${error}`);
    })
 
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });