const form =document.querySelector("#Search");


form.addEventListener('submit', async (e) => {
    try {
        e.preventDefault();
        const term =form.elements.query.value;
        const res= await axios.get(`https://api.tvmaze.com/search/shows?q=${term}`);
        DisplayImages(res.data);
        form.elements.query.value='';
    }
    catch(e)
    {
        console.log(e);
    }
})

const DisplayImages = (shows) =>{
    for(let index of shows)
    {   if(index.show.image)
        {
        const img=document.createElement('img');
        img.src=index.show.image.medium;
        document.body.append(img);
        }
    }
}