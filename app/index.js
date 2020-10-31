const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const port = process.env.PORT || 3000



//Define Paths for express configs
const publicDirectoryPath = path.join(__dirname, '../public')

const viewPath = path.join(__dirname, '../templates/views')


//express configs
app.set('view engine', 'hbs')
app.set('views', viewPath)          



//tell express about static path
app.use(express.static(publicDirectoryPath))    

app.get('', (req,res) => {
    res.render('index', {
        name: "Piyush Sharma",
        title: "Weather App"
    })
})

app.listen(port, ()=> {
    console.log("Server started on port "+ port )
})
