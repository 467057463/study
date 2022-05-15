var p = document.getElementById('p1');
var range1 = document.createRange();
var range2 = document.createRange();

range1.selectNode(p!);
range2.selectNodeContents(p!)

function handleComposition(e: CompositionEvent){
  console.log(e.type, e)
}

var input = document.querySelector<HTMLInputElement>('#input');
var inputWrapper = document.querySelector<HTMLDivElement>('#input-wrapper')
var ul = document.querySelector<HTMLUListElement>('#ul');
input?.addEventListener('compositionstart', handleComposition)
input?.addEventListener('compositionupdate', handleComposition)
input?.addEventListener('compositionend', handleComposition)


input?.addEventListener('keydown', function(e){
  // console.log(e.type, e)
  ul?.querySelector('li')!.focus()
})

inputWrapper?.addEventListener('keydown', function(e){
  console.log(e.type, e)
})

ul?.addEventListener('keydown', function(e){
  console.log('ul', e.type, e)
})

// export interface CascaderOption extends Record<string, unknown> {
//   label?: string
//   value?: string
//   children?: number[]
//   disabled?: boolean
//   leaf?: boolean
// }

export interface CascaderOption extends Record<string, unknown>

const c: CascaderOption = {
  label: 'sss',
  name: 'sss'
}

type R = Record<string, unknown>