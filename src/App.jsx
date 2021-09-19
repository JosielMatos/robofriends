// import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { robots } from './robots'
import SearchBox from './components/SearchBox';
import 'tachyons';

function App() {
  return (
    <main className="App">
      <header>
        <h1>RoboFriends</h1>
        <SearchBox />
      </header>
      {robots.map(robot => <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>)}
    </main>
  );
}

export default App;

