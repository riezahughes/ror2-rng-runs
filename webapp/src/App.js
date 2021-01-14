import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

import Portrait from './characters/Portrait';
import CommandoPortrait from './characters/portraits/commando.png'


const App = () => {
  const [playerValue, setPlayerValue] = useState(0);
  const [artifactValue, setArtifactValue] = useState(16);
  const [filteredCharacters, setFilteredCharacters] = useState(
    {
      commando: false,
      huntress: false,
      mult: true,
      engineer: false,
      artificer: false,
      mercenary: false,
      rex: false,
      loader: false,
      acrid: false,
      captain: false
    }
  );
  const [filteredArtifacts, setFilteredArtifacts] = useState([]);

  const setFilter = (character) => {

    const filterCopy = {...filteredCharacters};
    console.log(`was: ${filteredCharacters[character]}`)
    filterCopy[character] = !filterCopy[character]
    console.log(`Now: ${filterCopy[character]}`);
    setFilteredCharacters(filterCopy);
  }

  return (
    <div>
        <Grid
        container
        spacing={1}
        alignItems="center"
        justify="center"
        style={{ maxWidth: '800px'}}
        >
          <Grid item xs={0}>
            <Portrait name="commando" image={CommandoPortrait} value="commando" key={filteredCharacters.commando} filtered={filteredCharacters.commando} setFilter={setFilter}/>
          </Grid>
          <Grid item xs={0}>
            <Portrait name="huntress" image="" value="huntress" key={filteredCharacters.huntress} filtered={filteredCharacters.huntress} setFilter={setFilter}/>
          </Grid>
          <Grid item xs={0}>
            <Portrait name="mult"  image="" value="mult" key={filteredCharacters.mult} filtered={filteredCharacters.mult} setFilter={setFilter}/>
          </Grid>
          <Grid item xs={0}>
            <Portrait name="engineer" image="" value="engineer" key={filteredCharacters.engineer} filtered={filteredCharacters.engineer} setFilter={setFilter}/>
          </Grid>
          <Grid item xs={0}>
            <Portrait name="artificer" image="" value="artificer" key={filteredCharacters.artificer} filtered={filteredCharacters.artificer} setFilter={setFilter}/>
          </Grid>
          <Grid item xs={0}>
            <Portrait name="mercenary" image="" value="mercenary" key={filteredCharacters.mercenary} filtered={filteredCharacters.mercenary} setFilter={setFilter}/>
          </Grid>
          <Grid item xs={0}>
            <Portrait name="rex" image="" value="rex" key={filteredCharacters.rex} filtered={filteredCharacters.rex} setFilter={setFilter}/>
          </Grid>
          <Grid item xs={0}>
            <Portrait name="loader"  image="" value="loader" key={filteredCharacters.loader} filtered={filteredCharacters.loader} setFilter={setFilter}/>
          </Grid>
          <Grid item xs={0}>
            <Portrait name="acrid" image="" value="acrid" key={filteredCharacters.acrid} filtered={filteredCharacters.acrid} setFilter={setFilter}/>
          </Grid>
          <Grid item xs={0}>
            <Portrait name="captain" image="" value="captain" key={filteredCharacters.captain} filtered={filteredCharacters.captain} setFilter={setFilter}/>
          </Grid>      
      </Grid>
      <Button
      color="primary"
      variant="contained"
      style={{marginTop: '20px'}}
      >
        Generate a Run
      </Button>      
    </div>
  );
}

export default App;
