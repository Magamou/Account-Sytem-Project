export const changeWindow=() => {
    let menu=document.querySelector('#menu_context');
    let tit=Array.from(menu.querySelectorAll('h1'));
    tit.map(h => {h.style.display='none';})
    menu.style.width='10%';
    document.querySelector('main').style.width='90%';
    
}