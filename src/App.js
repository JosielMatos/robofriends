// import logo from './logo.svg';
// import './App.css';
import Card from './components/Card';
import { robots } from './robots'
import 'tachyons';

function App() {
  return (
    <div className="App">
      {robots.map(robot => <Card id={robot.id} name={robot.name} email={robot.email}/>)}      
    </div>
  );
}

export default App;

