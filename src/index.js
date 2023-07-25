require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const userRoutes = require('./routes/userRouter.js')
// const middleware = require('./middleware/logMiddleware.js')

// gunakan dan letakan jika ingin memberikan fungsi middleware ke semua routing
// app.use(middleware.logMiddleware); 

// 'use' untuk meanggil semua method yang ada di file userRouter
app.use('/user', userRoutes);


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});