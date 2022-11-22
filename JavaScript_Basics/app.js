// const fakeRequest = (url) =>{
//     return new Promise((resolve,reject) => {
//         const rand =Math.random();
//         setTimeout(() => {
//             if(rand<0.7)
//             {
//             resolve('Your Data');
//             }
//             reject('Request Error');
//         },1000)
    
//     })
// }

// fakeRequest('/dog/1')
// .then((data) => {
//     console.log("Done with Request!!!");
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err)
// })

const delayedColorChanged=(color,delay) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            document.body.style.backgroundColor=color;
            resolve();
        },delay)
    })
}

delayedColorChanged('red',1000)
    .then(() => delayedColorChanged('orange',1000))
    .then(()=> delayedColorChanged('green',1000))
    .then(() => delayedColorChanged('blue',1000))
    .then(()=> delayedColorChanged('yellow',1000))