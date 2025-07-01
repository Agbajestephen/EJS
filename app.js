//import
const express = require('express')
const expresslayouts = require('express-ejs-layouts')

const app = express()
const port = 3000

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/img'))

//set templating engine 
app.use(expresslayouts)
app.set('view engine', 'ejs')

//Nagivation
app.get('', (req, res) =>{
    res.render('index')
})

app.get('/abouts', (req, res) =>{
    res.render('about')
})

//listen on port 3306
app.listen(port, () => console.info(`App listening on port ${port}`))