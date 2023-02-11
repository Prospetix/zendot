

let darkmode = document.getElementById('darkmode i');
let modename = document.querySelector('.modename');

let moon = document.getElementById('moon')
let header = document.querySelector('header');
let list = document.querySelectorAll('.list ul a');
let span = document.querySelectorAll('.list ul span');
let logoh1 = document.querySelector('.logo h1')
let subEx = document.querySelector('.sub-menu-ex ul')
let subCRE = document.querySelector('.sub-create-menu ul')
let lang = document.querySelector('.language-sub ul')
let langLi = document.querySelectorAll('.language-sub ul li')
let mode = document.querySelector('.mode')
let extrabut = document.querySelectorAll('.extra button')
let slide = document.querySelector('.slide');
let mainIntro = document.querySelector('.main-intro');
let trending = document.querySelector('.trending')
let footbar = document.querySelector('.footbar')
let bar = document.querySelector('.bar')
let proBar = document.querySelector('.pro-bar')
let cont = document.querySelector('.mainCont')
let cancel = document.querySelector('.cancel')
let marquee = document.querySelector('marquee')
// let subCreateSpan = document.querySelectorAll(".sub-create-menu span")
console.log(langLi);
let blackOrWhite = 'black';

cancel.addEventListener('click',()=>{
    cancel.classList.add('opacity')
    marquee.classList.add('opacity')
})


fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbnb%2Cpolygon%2Cripple%2Ctron%2Csolana%2Cdogecoin%2Cshiba%20inu%2Clitecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true')
    .then(res => res.json())
    .then(data => {


        
        let coins = Object.getOwnPropertyNames(data);

        for (let coin of coins){
            let coinss = data[`${coin}`];
            let price = coinss.usd;
            let marketcap = coinss.usd_market_cap;
            let change = coinss.usd_24h_change.toFixed(5);

            cont.innerHTML+=`
            
                <div class="cont">
                    <img src="./pictures/${coin}.png" alt="">
                    <h1 class="name">${coin}</h1>
                    <h2 class="price ${change < 0 ? 'red' : 'green'}">$${price}</h2>
                    <div class="mark">
                        <h4 class="marketcap">${marketcap} <p> marketcap</p></h4>
                        <h6 class="change">${change}<p> 24h change</p></h6>
                    </div>
                </div>
            `

            console.log(coinss);
        }

       

        
    })



window.addEventListener('scroll', ()=>{
    let totalHeight = Math.round(document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
    console.log(totalHeight);

    bar.style.background =`conic-gradient(green ${totalHeight}%,grey ${totalHeight}%)`;
    proBar.innerHTML=`${totalHeight}%`

    if (totalHeight === 100) {
        proBar.innerHTML=`<i class="fa-sharp fa-solid fa-arrow-up"></i>`
    }
})

bar.addEventListener('click', ()=>{
    document.documentElement.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

function getmode(params) {
    
    if (blackOrWhite === "black") {
        blackOrWhite= 'white'
    }else{
        blackOrWhite= 'black'
    }
    localStorage.setItem('color', JSON.stringify(blackOrWhite))
}

console.log(blackOrWhite);

let switched = () =>{

    
    getmode()
    footbar.classList.toggle('sunmode')
    mainIntro.classList.toggle('colorslide');
    trending.classList.toggle('colorslide')

    if (modename.innerHTML === 'dark mode' ) {
        modename.innerHTML='light mode' 
    }else{
        modename.innerHTML='dark mode'
    }
    
    slide.classList.toggle('colorslide');
    // slide.classList.toggle('sunmode');

    extrabut.forEach( but =>{
        but.classList.toggle('sundark')
    })


    if (moon.className === 'fa-solid fa-moon') {
        moon.className="fa-regular fa-sun";
        moon.style.color='black'

    }else{
        moon.className="fa-solid fa-moon"
        moon.style.color='white'
       
    }
    header.classList.toggle('sunmode');
    
    logoh1.classList.toggle('suntext')
    list.forEach( listA =>{
        listA.classList.toggle('suntext');
    })
    subEx.classList.toggle('sunmode')
    subCRE.classList.toggle('sunmode')

    span.forEach( spans =>{
        spans.classList.toggle('suntext')
    })
    lang.classList.toggle('sunmode');

    langLi.forEach( li =>{
        if (li.className === 'active') {
            li.style.color='white'
        }
        else{
            li.classList.toggle('suntext')
        }
        
    })
    document.body.classList.toggle('sunmode')
    mode.children[0].classList.toggle('switch');
}

mode.addEventListener('click', switched)
moon.addEventListener('click', switched)

if (JSON.parse(localStorage.getItem('color')) === 'white') {
    switched()
    
}

//<<<<<<<<<<<<<<<<<<<<<////////////////////////////////////////////////>>>>>>>>>>>>>>>


// mode.addEventListener('click',()=>{

    

//     footbar.classList.toggle('sunmode')
//     mainIntro.classList.toggle('colorslide');
//     trending.classList.toggle('colorslide')

//     if (modename.innerHTML === 'dark mode' ) {
//         modename.innerHTML='light mode' 
//     }else{
//         modename.innerHTML='dark mode'
//     }
    
//     slide.classList.toggle('colorslide');
//     // slide.classList.toggle('sunmode');

//     extrabut.forEach( but =>{
//         but.classList.toggle('sundark')
//     })


//     if (moon.className === 'fa-solid fa-moon') {
//         moon.className="fa-regular fa-sun";
//         moon.style.color='black'

//     }else{
//         moon.className="fa-solid fa-moon"
//         moon.style.color='white'
       
//     }
//     header.classList.toggle('sunmode');
    
//     logoh1.classList.toggle('suntext')
//     list.forEach( listA =>{
//         listA.classList.toggle('suntext');
//     })
//     subEx.classList.toggle('sunmode')
//     subCRE.classList.toggle('sunmode')

//     span.forEach( spans =>{
//         spans.classList.toggle('suntext')
//     })
//     lang.classList.toggle('sunmode');

//     langLi.forEach( li =>{
//         if (li.className === 'active') {
//             li.style.color='white'
//         }
//         else{
//             li.classList.toggle('suntext')
//         }
        
//     })
//     document.body.classList.toggle('sunmode')
//     mode.children[0].classList.toggle('switch');


// })

// moon.addEventListener('click',()=>{

//     footbar.classList.toggle('sunmode')
//     mainIntro.classList.toggle('colorslide');
//     trending.classList.toggle('colorslide')

//     if (modename.innerHTML === 'dark mode' ) {
//         modename.innerHTML='light mode' 
//     }else{
//         modename.innerHTML='dark mode'
//     }

//     slide.classList.toggle('colorslide');


//     extrabut.forEach( but =>{
//         but.classList.toggle('sundark')
//     })


//     if (moon.className === 'fa-solid fa-moon') {
//         moon.className="fa-regular fa-sun";
//         moon.style.color='black'

//     }else{
//         moon.className="fa-solid fa-moon"
//         moon.style.color='white'
       
//     }
//     header.classList.toggle('sunmode');
    
//     logoh1.classList.toggle('suntext')
//     list.forEach( listA =>{
//         listA.classList.toggle('suntext');
//     })
//     subEx.classList.toggle('sunmode')
//     subCRE.classList.toggle('sunmode')

//     span.forEach( spans =>{
//         spans.classList.toggle('suntext')
//     })
//     lang.classList.toggle('sunmode');

//     langLi.forEach( li =>{
//         if (li.className === 'active') {
//             li.style.color='white'
//         }
//         else{
//             li.classList.toggle('suntext')
//         }
        
//     })
//     document.body.classList.toggle('sunmode')
//     mode.children[0].classList.toggle('switch');
// })

// console.log(darkmode);