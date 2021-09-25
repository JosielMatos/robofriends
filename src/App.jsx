import "./App.css";
import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import CardsList from "./components/CardsList";
import "tachyons";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");
  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  function onSearchChange(event) {
    setSearchField(event.target.value);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setRobots(users));
  });

  return !robots.length ? (
    <h1 className='tc'>Loading...</h1>
  ) : (
    <main className='App'>
      <header>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
      </header>
      <CardsList robots={filteredRobots} />
    </main>
  );
}

export default App;
