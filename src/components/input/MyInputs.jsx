import { useState } from 'react'
import MyButton from '../button/MyButton'


const MyInputs = () => {
  const [state, setState] = useState({ name: '', lastname: '' })
  return (
    <>
      <input value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} type="text" placeholder="Введите Имя" />
      <input value={state.lastname} onChange={(e) => setState({ ...state, lastname: e.target.value })} type="text" placeholder="Введите Lastname" />

      <div><MyButton values={state}/></div>
    </>
  )
};

export default MyInputs;