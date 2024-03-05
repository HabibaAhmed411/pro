let min = document.querySelector('.min');
let plus = document.querySelector('.plus');
let input = document.querySelector('.range');
let btnChrt = document.querySelector('.btn-chart');
let price = document.getElementById('price');
let imges = document.getElementsByClassName('imgsmall');
let prevButton = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton');
let contantImages = document.getElementById('contantImages');
let impButons = document.getElementById('impButons');
let sliderImages = document.getElementById('sliderImages');
let miniImageslider = document.getElementById('miniImageslider');
let list = document.querySelector('.divhide .images');
let items = document.querySelectorAll('.divhide .images .item .mainImage ');
let n = 0;
let active =0;
let lengthItem = items.length - 1;

async function fetchdata(){
    const res = await fetch('http://192.168.1.14:8000/api/show/11');
    const data = await res.json();
    // const data = [resdata] 

    // for(let i=0 ; i < data.length ; i++){
        pro = 
           `
           <div class="textdiv">
   <p class="textcompany">شركة الأحذية الرياضية</p>
   <h1 id="textMain" class="textfirst">${data.title}</h1>
   <pre><p class="textdefine">هذه الأحذية الرياضية منخفضة المستوى   
   هي الرفيق المثالي للملابس الكاجوال
   يتميز بنعل خارجي مطاطي متين، وسيتحمل كل ما يمكن أن يقدمه الطقس
     </p></pre>
     <div class="dollar">
       <h3 class="five">٥٠%</h3>
       <h2 id="price">${data.price}</h2>
     </div>
     <h5>٢٥٠.٠٠$</h5>
     <button id="addcart" onclick="addTocart()" class="btn-chart" type="submit">أضافة الى السلة <i class="fa fa-shopping-cart"></i></button>
     <div class="rangeButton">
       <span class="plus">+</span>
       <input id="inputRange" class="range" type="text" value="0">
       <span class="min">-</span>
     </div>
   </div>
   <div class="images">
   <img class="mainImage" src="${data.image}">
   </div>
           `
    //    }
   
    console.log(1);
}
// product
fetchdata()

// range button //

plus.addEventListener('click' , () => {
    n++;
    n = (n < 10) ?  + n : n;
    input.value = n ;
})
min.addEventListener('click' , () => {
    if(n > 0){
        n--;
        n = (n < 10) ? + n:n;
        input.value = n;
    }
})

// add product

function openCart(){
    let divAvatar = document.getElementsByClassName('.divAvatar');
    let cart = document.getElementsByClassName('.iconChart');
    let miniCard = document.getElementById ('miniCartt');
    let mini = document.getElementsByClassName ('.miniCardhide')
    miniCard.classList.remove('miniCardhide');
}

// open photos

function openPhoto(){
    let body = document.getElementById('bodyy');
    let hide = document.getElementById('ithide');
    body.classList.add('hideBody');
    hide.classList.remove('divhide');
}

// add price cart

function addTocart(){
    for(let i=0 ; i < data.length ; i++){
        product = 
        `
        <div id="miniCartFiled" class="minifiled">
    <p class="titleCart">عربة التسوق</p>
    <hr>
    <div class="divButtonflex">
      <img class="imgButton" src="${data[i].image}">
      <h6 class="textFiled">${data[i].title}</h6>
      <img onclick="deletAll()" class="icondelet" src="${data[i].iconDelet}">
    </div>
    <span>${result} $ </span>
    <button type="submit" class="checkOut">Checkout</button>
  </div>
        `
    }
    miniCartFiled.innerHTML = product;
}
// delet cart

function deletAll(){
    let miniCartFiled = document.getElementById('miniCartFiled');
    let miniCartt = document.getElementById('miniCartt');
    miniCartFiled.classList.add('minifiledHide');
    miniCartt.classList.add('miniCard');
}









