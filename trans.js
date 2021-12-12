import {addTrans,loadTrans} from './lib/Render/render';
import {total, storeTotal, searchAccount} from './lib/Control/input';
let transactionDate=document.querySelector("#date");
let transactionDesc=document.querySelector("#desc");

let codeDebit=document.querySelector("#accountDebit");
let mtDebit=document.querySelector("#debit");
let codeCredit=document.querySelector("#accountCredit");
let mtCredit=document.querySelector("#credit");
let button=document.querySelector("#bt");

let list=document.querySelector("#table_area_transaction").querySelector("tbody");
let transList;
let data=localStorage.getItem("TRANS");

let tc=0;
let td=0;

if(data){
    transList=JSON.parse(data);
    loadTrans(list, transList);
    total();
}else{
    transList=[]; 
}


button.addEventListener("click", function(event){
    if(searchAccount(codeDebit.value) && searchAccount(codeCredit.value)){
//////////////////////////

tc=Number(mtCredit.value);
    td=Number(mtDebit.value);
    storeTotal(tc, td);
    total();
    addTrans(list, {
        _transactionDate:transactionDate.value,
        _codeDebit:codeDebit.value,
        _codeCredit:"",
        _transactionDesc:transactionDesc.value,
        _mtDebit:mtDebit.value,
        _mtCredit:0
    });
    addTrans(list, {
        _transactionDate:transactionDate.value,
        _codeDebit:"",
        _codeCredit:codeCredit.value,
        _transactionDesc:transactionDesc.value,
        _mtDebit:0,
        _mtCredit:mtCredit.value
    });
    transList.push({
        _transactionDate:transactionDate.value,
        _codeDebit:codeDebit.value,
        _codeCredit:"",
        _transactionDesc:transactionDesc.value,
        _mtDebit:mtDebit.value,
        _mtCredit:0
    });

    transList.push({
        _transactionDate:transactionDate.value,
        _codeDebit:"",
        _codeCredit:codeCredit.value,
        _transactionDesc:transactionDesc.value,
        _mtDebit:0,
        _mtCredit:mtCredit.value
    });

    localStorage.setItem("TRANS", JSON.stringify(transList));
    
   transactionDate.value="";
   transactionDesc.value="";
   codeCredit.value="";
   codeDebit.value="";
   mtCredit.value="";
   mtDebit.value="";
//////////////////////////


    }
   else{
       console.log("Error");
   } 
});