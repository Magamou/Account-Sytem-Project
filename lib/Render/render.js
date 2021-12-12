import { total } from "../Control/input";
export function addAccount(elt, obj){
    const text=
    `<tr>
        <td>${obj.code}</td>
        <td colspan="2">${obj.label}</td>
        <td>${obj.classe}</td>
    </tr>
    `
    const position="beforeend";
    elt.insertAdjacentHTML(position, text);
    alternate(elt);
}


export function loadAccount(elt, array){
    elt.textContent="";
    array.forEach(item => {
        addAccount(elt, item);
    });
}
export function alternate(elt){
    for(var i=0;i<elt.rows.length;i++){
        if(i%2===0){
            elt.rows[i].style.backgroundColor="silver";
        }
    }
}



export function addTrans(elt, obj){
    const text=
    `<tr>
        <td>${obj._transactionDate}</td>
        <td>${obj._codeDebit}</td>
        <td>${obj._codeCredit}</td>
        <td>${obj._transactionDesc}</td>
        <td>${obj._mtDebit}</td>
        <td>${obj._mtCredit}</td>
    </tr>
    `
    const position="beforeend";
    elt.insertAdjacentHTML(position, text);
    alternate(elt);
}

export function loadTrans(elt, array){
    elt.textContent="";
    array.forEach(item => {
        
        addTrans(elt, item);
    });
}