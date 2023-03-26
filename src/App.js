import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/serach-box.component";
import "./App.css";

function App() {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const serachFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(serachFieldString);
  }

  return (
    <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox className='monsters-serach-box' 
                   onChangeHandler={onSearchChange} 
                   placeholder='Serach monsters' />
        <CardList monsters={filteredMonsters} />
      </div>
  );
}

export default App;
