import { RecoilRoot, atom, selector } from 'recoil';

export const textState = atom({
  key: 'textState',
  default: '',
  effects_UNSTABLE: [
    ({onSet}) => {
      onSet(val => {
        console.log(val)
      })
    }
  ]
})

export const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  }
})