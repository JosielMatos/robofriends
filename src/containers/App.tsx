import "./App.css";

import { useEffect, useState } from "react";
import { SearchBox } from "../components/SearchBox";
import { Scroll } from "./Scroll";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { CardsList } from "../components/CardsList";
import "tachyons";

interface Robot {
  name: string;
  email: string;
  id: number;
}

function App() {
  const [robots, setRobots] = useState<Robot[]>([]);
  const [searchField, setSearchField] = useState("");
  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  function onSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchField(event.target.value);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setRobots(users));
  }, []);

  return !robots.length ? (
    <h1 className='tc'>Loading...</h1>
  ) : (
    <main className='App'>
      <header>
        <h1 className='f1'>Mechafriends</h1>
        <SearchBox searchChange={onSearchChange} />
      </header>
      <Scroll>
        <ErrorBoundary>
          <CardsList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </main>
  );
}

export default App;
