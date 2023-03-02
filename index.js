const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')
const app = express()
const port = 3001
const uuid = require('./helpers/uuid')
const notes = require('./db/db.json')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)












app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
