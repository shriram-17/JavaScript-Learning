//imports
const express= require("express")
const app = express()
const port = 3000


// static Files
 
app.use(express.static('public'))
app.use('/css',express.static(__dirname+"public/css"))
app.use('/js',express.static(__dirname+"public/css"))
app.use('/img',express.static(__dirname+"public/css"))

app.set('views','./views')
app.set('view engine','ejs')

app.get("",(req,res) =>{

    res.render("index",{ text:'This is EJS'})
})


app.get("/about",(req,res) =>{

    res.render("about",{ text:'About'})
})






app.listen(port,() => console.info(`Listening to the Server ${port} `))