import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../hook/useStore';

export default observer(function Home(){
  const user = useStore("user");
  return(
    <div className='home' onClick={()=> user.increase()}>
      homes{user.count}
    </div>
  )
})