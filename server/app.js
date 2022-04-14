//entry point

// package imports
const express = require('express')

// global variables initialised
const PORT = 8080
const app = express()

app.get('*', (req, res) => {
    res.status(404).send('Invalid API endpoint')
})

app.use('/code', require('./routes/code'))

// listening on PORT
app.listen(PORT, () => {
    console.log('Executor running on PORT 8080')
})