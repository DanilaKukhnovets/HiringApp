import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layouts /components/Header';
import Main from './layouts /components/Main';
// import Room from './layouts /room/Room';
// import SignIn from './layouts /register/SignIn';
import Register from './layouts /auth/register/Register'; 

function App() {
  if (true) {
    return (<Register />)}
    else

//   if (false) {return (<Room />)}
// else {}
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}


export default App;
