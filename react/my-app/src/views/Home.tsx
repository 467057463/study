import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { textState, charCountState } from '../store'

export default function Home(){
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState)

  const onChange = (event) => {
    setText(event.target.value)
  }

  useEffect(() => {
    console.log('test')
  })

  return(
    <div className='home'>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
      <br/>
      length: {count}
    </div>
  )
}