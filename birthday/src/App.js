import React, {useState} from "react";
import List from "./List.js";
import data from "./data.js";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople ([]);
};

  const checkbirthday = () => {
    setPeople (data)
};

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people}/>
        
        {
        people.length == 0 ? (
        <button onClick={checkbirthday}>check birthday</button>
        ) : (
          <button onClick={clearAll}>clear all</button>
        )}

      </section>
    </main>
    
  );
};

export default App;
