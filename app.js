//External import
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const loginRouter = require('./routes/loginRouter')
const usersRouter = require('./routes/usersRouter')
const homeRouter = require('./routes/homeRouter')
const commonApiRoute = require('./routes/commonApiRouter')
const cors = require('cors')

dotenv.config()

//Internal import
// const {
//   notFoundHandler,
//   errorHandler,
// } = require('./middlewares/common/errorHandler')

//DB connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB Successfully'))
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }))

//request parsers
app.use(express.json())

app.use(morgan('common'))

//parse copkie
// app.use(cookieparser(process.env.COOKIE_SECRET))

//routing setup
app.use('/api', commonApiRoute)
app.use('/api/login', loginRouter)
app.use('/api/home', homeRouter)
app.use('/api/users', usersRouter)

// //404 not found handler
// app.use(notFoundHandler)

// //common error handler
// app.use(errorHandler)
app.listen(process.env.PORT, () => {
  console.log(`Backend server is running on port ${process.env.PORT}`)
})
