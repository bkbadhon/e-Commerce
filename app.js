const navBAr = document.querySelector('.Bar');
const navItems = document.querySelector('.nav-items');
const closeNav = document.querySelector('.close');
const mainimg = document.getElementById('Main-img');
const smallimg = document.querySelectorAll('.small-img');
const addCartBtn = document.querySelectorAll('.add-cart');
const trash = document.querySelector('.trash');
const addcart = document.querySelector('.add-to-cart');
const productName = document.querySelectorAll('.cart-p-name');
const productPrice = document.querySelectorAll('.cart-price');
const quantity = document.querySelectorAll('.cart-quantity');



navBAr.addEventListener('click', ()=>{
    navItems.style.display='block';
    navBAr.style.display ='none';
    closeNav.style.display ='block';

});

closeNav.addEventListener('click', ()=>{
    navItems.style.display='none';
    navBAr.style.display='block';
    closeNav.style.display='none';
})



smallimg[0].onclick = function(){
    mainimg.src = smallimg[0].src;
}

smallimg[1].onclick = function(){
    mainimg.src = smallimg[1].src;
}

smallimg[2].onclick = function(){
    mainimg.src = smallimg[2].src;
}

smallimg[3].onclick = function(){
    mainimg.src = smallimg[3].src;
}



// ADD PRODUCT TO CART 


addCartBtn.addEventListener('click', function(ele) {
   ele.preventDefault();

    const newRow=document.createElement('tr');

    const trashbtn =document.createElement('td');
    trashbtn.innerHTML = trash.values;
    newRow.appendChild(trashbtn);

    const newName=document.createElement('td');
    newName.innerHTML=productName.values;
    newRow.appendChild(newName);

    addcart.appendChild(newRow);
});