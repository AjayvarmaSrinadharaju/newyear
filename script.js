let h2 = document.querySelector('h2');


let container = document.querySelector('.container');

h2.onclick = function() {
    container.classList.toggle('newyear'); 
    this.classList.toggle('active'); 
}
let h1 = document.querySelector('h1')
h1.onclick= function(){
    container.classList.toggle('newyear')
    this.classList.toggle('active')
}
