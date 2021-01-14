import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

import Portrait from './characters/Portrait';


function App() {
  const [playerValue, setPlayerValue] = useState(0);
  const [artifactValue, setArtifactValue] = useState(16);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [filteredArtifacts, setFilteredArtifacts] = useState([]);

  return (
    <Grid
    container
    spacing={0}
    >
      <Grid item xs={12}>
        <Grid
        container
        spacing={1}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ maxWidth: '800px' }}
        >

          <Grid item xs={0}>
            <Portrait name="commando" image="" value="commando" selected/>
          </Grid>
          <Grid item xs={0}>
            <Portrait name="huntress" image="" value="huntress" />
          </Grid>
          <Grid item xs={0}>
            <Portrait name="mult"  image="" value="multi" selected/>
          </Grid>
          <Grid item xs={0}>
            <Portrait name="commando" image="" value="commando" selected/>
          </Grid>
          <Grid item xs={0}>
            <Portrait name="huntress" image="" value="huntress" />
          </Grid>
          <Grid item xs={0}>
            <Portrait name="mult"  image="" value="multi" selected/>
          </Grid>
          <Grid item xs={0}>
            <Portrait name="huntress" image="" value="huntress" />
          </Grid>
          <Grid item xs={0}>
            <Portrait name="mult"  image="" value="multi" selected/>
          </Grid>
          <Grid item xs={0}>
            <Portrait name="commando" image="" value="commando" selected/>
          </Grid>
          <Grid item xs={0}>
            <Portrait name="huntress" image="" value="huntress" />
          </Grid>
          <Grid item xs={0}>
            <Portrait name="mult"  image="" value="multi" selected/>
          </Grid>
          <Grid item xs={0}>
            <Portrait name="commando" image="" value="commando" selected/>
          </Grid>
          <Grid item xs={0}>
            <Portrait name="huntress" image="" value="huntress" />
          </Grid>
          <Grid item xs={0}>
            <Portrait name="mult"  image="" value="multi" selected/>
          </Grid>
          <Grid item xs={0}>
            <Portrait name="huntress" image="" value="huntress" />
          </Grid>
          <Grid item xs={0}>
            <Portrait name="mult"  image="" value="multi" selected/>
          </Grid>          
          
        </Grid>
      </Grid>
      <Button
          color="primary"
          variant="contained"
          style={{marginTop: '20px'}}
        >
          Generate a Run
      </Button>      
  </Grid>
  );
}

export default App;
