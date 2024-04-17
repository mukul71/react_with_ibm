import logo from './logo.svg';
import './App.css';

function App(props){
  const currTime = new Date();

  return(
    <div>
    <h1>Hello Mukul, this is your second app.</h1>
    <h2>The time now is {currTime.toLocaleTimeString()}.</h2>
    </div>
  );
}
export default App;