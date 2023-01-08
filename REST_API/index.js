const express =require('express');
const app =express();
const port=3000;
const path =require('path');
const {v4:uuid}=require('uuid');
const methodOveride=require('method-override')

app.use(express.urlencoded({extended:true}))
app.use(methodOveride('_method'))
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

let games=[
    {   id:1,
        name:"Halo 3",
        rating :9
    },
    {   
        id:2,
        name:"Bioshock Infinite",
        rating :8.5
    },
    {   
        id:3,
        name:"God of War 3",
        rating :9
    },
    {   
        id:4,
        name:"Legend of Zelda Skyward Sword",
        rating :8.9
    }
]

app.get('/',(req,res)=>{
    res.render('game/index',{games})
})

app.get('/rating',(req,res)=>{
    res.render('game/index',{games})
})
app.get('/rating/new',(req,res)=>{
    res.render('game/new')
})

app.post('/rating',(req,res)=>{
    const {name,rating}=req.body;
    games.push({name,rating,id:games.length+1})
    res.redirect('/rating');
})

app.get('/rating/:id',(req,res)=>{
    const {id}=req.params;
    const game=games.find(g => g.id ===parseInt(id))
    res.render('game/show',{game})
})

app.get('/rating/:id/edit',(req,res)=>{
    const {id}=req.params;
    const game=games.find(g => g.id ===parseInt(id))
    res.render('game/edit',{game})
})

app.patch(('/rating/:id'),(req,res)=>{
    const {id}=req.params;
    const New_rating=req.body.rating
    const game=games.find(g => g.id ===parseInt(id))
    game.rating=New_rating;
    res.redirect('/rating')
})

app.delete('/rating/:id',(req,res) => {
    const { id } = req.params;
    games=games.filter(c => c.id !== id)
    res.redirect('/rating')
})

app.listen(port,()=>{
    console.log(`Server at ${port}`)
})

