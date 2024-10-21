
const express = require('express')
const showRequests = require('./showRequests')

const app = express()
const port = process.env.PORT || 3000

app.use(showRequests)
app.use(express.static('public'))
app.use(express.json())

let myData = {
    name: 'Tony',
    favoriteColor: 'orange',
    pets: ['Marco', 'Finn']
}

app.get('/api/someData', function (req, res) {
    res.send(myData)
})

app.listen(port, () => {
    console.log('Local server listening on port', port)
})
