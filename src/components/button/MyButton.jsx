import {useDispatch} from 'react-redux'

const MyButton = ({values}) => {
const dispatch = useDispatch()

  function dispatchData(){
    dispatch({type: 'SEND_NAME', payload: values})
  }
  return (
    <button onClick={() => dispatchData()}>Создать пост</button>

  )
};

export default MyButton;