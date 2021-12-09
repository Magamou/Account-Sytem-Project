//Menu Items
var menuContext=document.querySelector('#menu_context');
var h1=menuContext.querySelectorAll('h1');
var a=menuContext.querySelectorAll('a');
var button=menuContext.querySelector('button');

//Header Items
var header=document.querySelector('header');

//////Main Items
var main=document.querySelector('main');
//menage title
var manageTitle=document.querySelector('#main_title_menage')
//menage_form
var manageForm=document.querySelector('#menage_form');

    //menage form inputs
var manageFormCode=manageForm.querySelectorAll('input')[0];
var manageFormLabel=manageForm.querySelectorAll('input')[1];
var manageFormSelect=manageForm.querySelector('select');
var manageFormButton=manageForm.querySelector('button');
    //menage form table
var tableArea=document.querySelector('#table_area');
var manageTable=tableArea.querySelector('table');
var manageThead=tableArea.querySelector('thead');
var manageTbody=tableArea.querySelector('tbody');
var manageTfoot=tableArea.querySelector('tfoot');

 /************ Export ***********/
 //export Menu
export const menu= ()=>{
    return {menuContext,h1, a, button}
}

//export Header
export const getHeader= () =>{
    return {header};
}

//export main

export const getMain= () =>{
    return {
        main,
        manageTitle,
        manageFormCode,
        manageFormLabel,
        manageFormSelect,
        manageFormButton,
        tableArea,
        manageTable,
        manageThead,
        manageTbody,
        manageTfoot
    };}