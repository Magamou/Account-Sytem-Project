export function total(){
    let s1=localStorage.getItem("totalDebit");
    let s2=localStorage.getItem("totalCredit");
    if(s1 && s2){
        document.querySelector("#totalDebit").textContent=`Total Debit: ${s1}`;
        document.querySelector("#totalCredit").textContent=`Total Credit: ${s2}`;
    }
}

export function storeTotal(v1, v2){
    v1+=Number(localStorage.getItem("totalCredit"));
    v2+=Number(localStorage.getItem("totalDebit"));
    localStorage.setItem("totalCredit", v1);
    localStorage.setItem("totalDebit", v2);
}

export function searchAccount(account){
    let ac=JSON.parse(localStorage.getItem("ROWS"));
    let corresponding=0;
    if(ac){
        ac.map(x => {
        if(x.code===account){
            corresponding=1;
        }
    });
   }
    
    return corresponding;
}