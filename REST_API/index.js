const express =require('express');
const app =express();
const port=3000;
const path =require('path');
const {v4:uuid}=require('uuid');

app.use(express.urlencoded({extended:true}))

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

const games=[
    {   id:uuid(),
        name:"Halo 3",
        rating :9
    },
    {   
        id:uuid(),
        name:"Bioshock Infinite",
        rating :8.5
    },
    {   
        id:uuid(),
        name:"God of War 3",
        rating :9
    },
    {   
        id:uuid(),
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
    games.push({name,rating,id:uuid()})
    res.redirect('/rating');
})

app.get('/rating/:id',(req,res)=>{
    const {id}=req.params;
    const game=games.find(g => g.id ===id)
    res.render('game/show',{game})
})
app.listen(port,()=>{
    console.log(`Server at ${port}`)
})

