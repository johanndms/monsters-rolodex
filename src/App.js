import React, { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
   const [monsters, setMonsters] = useState([]);
   const [filteredMonsters, setFilteredMonsters] = useState([]);
   const [searchField, setSearchField] = useState("");
   console.log("rendered");
   /**
    * Fecth API data when the app has launched
    */
   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((response) => response.json())
         .then((users) => setMonsters(users));
   }, []);

   useEffect(() => {
      const filteredMonsters = monsters.filter((monster) => {
         return monster.name.toLowerCase().includes(searchField);
      });
      setFilteredMonsters(filteredMonsters);
   }, [searchField, monsters]);

   const onSearchChange = (event) => {
      const searchFieldText = event.target.value.toLowerCase();
      setSearchField(searchFieldText);
   };

   return (
      <div className="App">
         <h1 className="app-title">JOHANN Monsters Rolodex</h1>
         <SearchBox
            onChangeHandler={onSearchChange}
            placeholder={"Search monsters"}
            className={"monsters-search-box"}
         />
         <CardList monsters={filteredMonsters} />
      </div>
   );
};

export default App;
