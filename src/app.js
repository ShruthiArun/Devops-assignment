const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

//Defining paths for Express configuration

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.use(express.static(publicDirectoryPath)) // use() method is used to load middleware functions 

//Using handlebars and renaming views folder using set() 

app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//using get method below

app.get('', (req, res) => {

    res.render('index', {

        title: 'DevOps App Demo',
        name: 'Shruthi Arun'
    })
})

app.get('/about', (req, res) => {

    res.render('about', {

        title: 'About DevOps',
        desc: 'Welcome to the trial app',
        name: 'Shruthi Arun'
    })
})

app.get('/help', (req, res) => {

    res.render('help', {

        title: 'Welcome to the help page',
        intro: 'For doubts and clarifications, visit this page !',
        name: 'Shruthi Arun'
    })
})
app.get('*', (req, res) => {

    res.render('404', {

        title: '404 Error Page Not Found !',
        name: 'Shruthi Arun'
    })
})

app.listen(port, () => {

    console.log('Server set up successfully in port ' + port + ' !')
})