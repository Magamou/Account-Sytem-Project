import { alternate, drowManageTable } from "../Render/render";
export function eventButtonManage(){
    let button=document.querySelector("#bm")
    button.addEventListener('click', function(){
        drowManageTable(document.querySelector('tbody'), "code", "label", "class");
        alternate(document.querySelector('tbody'));
    });
}

export function eventButtonEdit(){
    let button=document.querySelector("#be")
    button.addEventListener('click', function(){
        let main=document.querySelector('main');
        main.style.backgroundColor='green';
    });
}
export function eventButtonTransaction(){
    let button=document.querySelector("#bt");
    button.addEventListener('click', function(){
        let main=document.querySelector('main');
        main.style.backgroundColor='green';
    });
}
