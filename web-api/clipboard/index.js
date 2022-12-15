"use strict";
document.querySelector('#copy')?.addEventListener('click', function () {
    console.log('abcedfg');
    navigator.clipboard.read().then(res => {
        console.log(res);
    });
    // const clipboard = new Clipboard();
    // clipboard.read().then(res => {
    //   console.log(res)
    // })
});
document.querySelector('#input').addEventListener("select", (e) => {
    console.log('select', e);
});
document.addEventListener("selectstart", (e) => {
    console.log('selectstart', e);
});
document.querySelector('#input').addEventListener("selectionchange", (e) => {
    console.log('selectionchange', e);
});
