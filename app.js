const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const port = '3000'



let items = ['"I will read one progamming blog article per day"','"I will solve one coding problem everyday"', '"I will read a book every night for 25 minutes before i sleep"', '"I will eat more"'];


const app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))


app.get('/', function(req, res){
let today = new Date();
let option = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
}
let day = today.toLocaleDateString('en-US', option);

    res.render('list', { kindOfDay: day, newTodo: items, removItem:items})
})

app.post('/', function(req, res) {
    let item = req.body.newItem
    items.push(item);

    res.redirect('/')

})

app.post('/delete', function(req, res) {
    let removItem = req.body.removItem
    items.pop(removItem);
    res.redirect('/')


})

app.listen(port, function(){
    console.log('listening on port ' + port)
})
