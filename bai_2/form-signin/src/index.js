import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Caculator from './components/Caculator';
import StudentDisplay from './components/StudentDisplay';
import ToDoApp from './components/TodoList';
import Counter from './components/Counter';
import CountDown from './components/CountDown';
import SelectCar from './components/SelectCar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <Caculator />
  // <StudentDisplay />
  // <ToDoApp />
  // <Counter />
  // <CountDown />
  <SelectCar />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
