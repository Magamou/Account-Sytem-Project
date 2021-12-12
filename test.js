import {addAccount, loadAccount, alternate} from './lib/Render/render';
let Code=document.querySelector("#mCode");
let Label=document.querySelector("#mLabel");
let Classe=document.querySelector("#mClasse");
let bm=document.querySelector("#bm");
let list=document.querySelector("#table_area").querySelector("tbody");
let accountList;
let data=localStorage.getItem("ROWS");

if(data){
    accountList=JSON.parse(data);
    loadAccount(list, accountList)
    alternate(list);
}else{
    accountList=[]; 
}

bm.addEventListener("click", function(event){
    const _code=Code.value;
    const _label=Label.value;
    const _classe=Classe.value;
   if(_code && _label &&_classe){
       addAccount(list, {code:_code, label:_label, classe:_classe});
       accountList.push({
           code:_code,
           label:_label,
           classe:_classe
       });
       localStorage.setItem("ROWS", JSON.stringify(accountList));
   }
   else{
       console.log("error");
   }
   Code.value="";
   Label.value="";
   Classe.value="";
});
