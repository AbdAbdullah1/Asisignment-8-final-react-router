
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Team from './components/Team/Team';

function App() {
  const [teams, setTeams] = useState({})

  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
    .then(res => res.json())
    .then(data => setTeams(data.teams))
  }, [])
  
  return (
    <div className="App">
      <h1>Teams {teams.length} </h1>
      {
        // teams.map(team => <Team team={team} ></Team>)
      }
    </div>
  );
}

export default App;
