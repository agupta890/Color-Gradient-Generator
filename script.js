let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let hexPara = document.querySelector('.color-code')
let rgb1 ='#e680d3'
let rgb2="#dc3b18"


const hexValue = (()=>{
    const hexDecimal= "0123456789abcdef"
    let colors = "#"
    for(let i=0; i<6; i++){
    colors = colors + hexDecimal[Math.floor(Math.random() * 16)]
    
    }
    return colors
})



const handleBtn1=(()=>{
    rgb1 = hexValue()
    console.log(rgb1)
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, rgba(255,0,0,1))`; 

    btn1.textContent = rgb1
    hexPara.innerHTML = `background-image: linear-gradient(to right,${rgb1}, ${rgb2})`; 
})
const handleBtn2=(()=>{
    rgb2 = hexValue()
    console.log(rgb2)
    document.body.style.backgroundImage = `linear-gradient(to right, rgba(255,0,0,0), ${rgb2})`; 
    btn2.textContent = rgb2
    hexPara.innerHTML = `background-image: linear-gradient(to right,${rgb1}, ${rgb2})`;
})



btn1.addEventListener('click',()=>{
    handleBtn1()
})

btn2.addEventListener('click',()=>{
    handleBtn2()
})