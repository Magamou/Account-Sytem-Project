// let row =document.querySelector('tr');
// row.addEventListener('dbclick', function(e){
//     row.style.backgroundColor="yellow";
//     row.style.minWidth
// })
let menu=document.querySelector('#menu_context');

let button=menu.querySelector('button');
let tite=menu.querySelectorAll('h1');
let main=document.querySelector('main');
button.addEventListener('click', function(e){
    for(h of tite){
        h.style.display="none";
    }
  menu.style.width="5%"; 
  main.style.width="95%";
})
 