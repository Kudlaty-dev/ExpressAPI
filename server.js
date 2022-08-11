const express = require ('express')
const app = express()
const dotenv = require ('dotenv')
const router = require('./routes/bootcamps')
app.use(express.json())

//Load env vars
dotenv.config({path: './config/config.env'})

//Mount routers
app.use('/api/v1/bootcamps', router)


app.get('/test', (req, res) => {
    res.status(200).json({success: true, msg: 'Udalo sie'})
})



const PORT = process.env.PORT || 5000

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
 


