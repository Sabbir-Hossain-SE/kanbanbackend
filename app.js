//External import
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const cookieparser = require('cookie-parser')
const loginRouter = require('./router/loginRouter')
const usersRouter = require('./router/usersRouter')

dotenv.config()

//Internal import
const {
  notFoundHandler,
  errorHandler,
} = require('./middlewares/common/errorHandler')

//DB connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB Successfully'))
  .catch((err) => console.log(err))

//built in middleware

//request parsers
app.use(express.json())

app.use(helmet())
app.use(morgan('common'))

//parse copkie
app.use(cookieparser(process.env.COOKIE_SECRET))

//routing setup
// app.get('/', loginRouter)
app.get('/', usersRouter)

//404 not found handler
app.use(notFoundHandler)

//common error handler
app.use(errorHandler)
app.listen(process.env.PORT, () => {
  console.log(`Backend server is running on port ${process.env.PORT}`)
})
