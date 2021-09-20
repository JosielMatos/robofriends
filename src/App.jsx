import './App.css';
import { useState } from 'react';
import { robots } from './robots'
import SearchBox from './components/SearchBox';
import CardsList from './components/CardsList';
import 'tachyons';

function App() {
  const [searchField, setSearchField] = useState("");
  const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))

  function onSearchChange(e) {
      setSearchField(e.target.value)
  }

  return (
    <main className="App">
      <header>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
      </header>
      <CardsList robots={filteredRobots} />
    </main>
  );
}

export default App;
