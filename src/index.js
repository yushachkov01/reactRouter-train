import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/rootReducer'
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// 1. Наш план: Нажимаем на кнопку, отправляем dispatch в редакс
// Что кладем в dispatch? +
//Информацию из инпутов
//Для этого инпуты должны быть контролируемыми 
// + должен быть useState(), который возьмет и сохранит информацию из инпутов


// Redux: 1) install 2) initState + reducer 3) connect redux with createStore

// 


// const SendInfo = () => {
//   useEffect(() => {
//     dispatch(...)
//   }, [])
//   return null;

// };
// export default index;