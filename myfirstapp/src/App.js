//import logo from './logo.svg';
import './App.css';
function App(props){
  const currentDate = new Date();

  return(
    <div>>
    <h1>Hello World!</h1>
    <h2>The time now is {currentDate.toLocaleDateString()}.</h2>
    </div>
  );
}
export default App;