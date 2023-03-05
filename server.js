const express = require('express')
const app = express()

const port = 3000

app.use(express.static('static'))
app.set('view engine', 'ejs')
app.set('views', 'view')

var userlist = [
{
  id: 'itsnienke',
  name: 'nienke',
  description: 'retired sage main'
},
{
  id: 'iridescent',
  name: 'ellie',
  description: 'instalock jett'
}
]

app.get('/lijst', function users(req, res) {
  res.render('list.ejs', {username: userlist[0].name})
})

app.get('/hallo', (req, res) => {
  res.send('<img src="/image/images.jpeg" width="150px">Hello World!')
})

app.listen(port, () => {
  console.log(`Example app vibing on port ${port}`)
})

app.get('/home/:user', (req, res) => {
    console.log(`input van ${req.params.user}`)
    res.send(`<img src="/image/images.jpeg"><h1>Hello `+ req.params.user + `</h1>`)
})