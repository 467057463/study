var p = document.getElementById('p1');
var range1 = document.createRange();
var range2 = document.createRange();
range1.selectNode(p);
range2.selectNodeContents(p);
function handleComposition(e) {
    console.log(e.type, e);
}
var input = document.querySelector('#input');
var inputWrapper = document.querySelector('#input-wrapper');
var ul = document.querySelector('#ul');
input?.addEventListener('compositionstart', handleComposition);
input?.addEventListener('compositionupdate', handleComposition);
input?.addEventListener('compositionend', handleComposition);
input?.addEventListener('keydown', function (e) {
    // console.log(e.type, e)
    ul?.querySelector('li').focus();
});
inputWrapper?.addEventListener('keydown', function (e) {
    console.log(e.type, e);
});
ul?.addEventListener('keydown', function (e) {
    console.log('ul', e.type, e);
});
const c = {
    label: 'sss',
    name: 'sss'
};
export {};
