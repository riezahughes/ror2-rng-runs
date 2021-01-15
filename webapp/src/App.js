import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

import CharacterPortrait from './characters/Portrait';
import ArtifactPortrait from './artifacts/Portrait';

import CommandoPortrait from './characters/portraits/commando.png'
import HuntressPortrait from './characters/portraits/huntress.png'
import MultiPortrait from './characters/portraits/multi.png'
import EngineerPortrait from './characters/portraits/engineer.png'
import ArtificerPortrait from './characters/portraits/artificer.png'
import MercenaryPortrait from './characters/portraits/mercenary.png'
import RexPortrait from './characters/portraits/rex.png'
import LoaderPortrait from './characters/portraits/loader.png'
import AcridPortrait from './characters/portraits/acrid.png'
import CaptainPortrait from './characters/portraits/captain.png'

import ChaosPortrait from './artifacts/portraits/chaos.png'
import CommandPortrait from './artifacts/portraits/command.png'
import DeathPortrait from './artifacts/portraits/death.png'
import DissonancePortrait from './artifacts/portraits/dissonance.png'
import EnigmaPortrait from './artifacts/portraits/enigma.png'
import EvolutionPortrait from './artifacts/portraits/evolution.png'
import FrailtyPortrait from './artifacts/portraits/frailty.png'
import GlassPortrait from './artifacts/portraits/glass.png'
import HonorPortrait from './artifacts/portraits/honor.png'
import KinPortrait from './artifacts/portraits/kin.png'
import MetamorphosisPortrait from './artifacts/portraits/metamorphosis.png'
import SacrificePortrait from './artifacts/portraits/sacrifice.png'
import SoulPortrait from './artifacts/portraits/soul.png'
import SpitePortrait from './artifacts/portraits/spite.png'
import SwarmsPortrait from './artifacts/portraits/swarms.png'
import VengeancePortrait from './artifacts/portraits/vengeance.png'


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
  const [filteredArtifacts, setFilteredArtifacts] = useState(
    {
      chaos: false,
      command: false,
      death: false,
      dissonance: false,
      enigma: false,
      evolution: false,
      frailty: false,
      glass: false,
      honor: false,
      kin: false,
      metamorphosis: false,
      sacrifice: false,
      soul: false,
      spite: false,
      swarms: false,
      vengeance: false,
    }
  );

  const changeCharacterFilter = (character) => {

    const filterCopy = {...filteredCharacters};

    filterCopy[character] = !filterCopy[character]

    setFilteredCharacters(filterCopy);
  }

  const changeArtifactFilter = (artifact) => {
    const filterCopy = {...filteredArtifacts};

    filterCopy[artifact] = !filterCopy[artifact]

    setFilteredArtifacts(filterCopy);
  };

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
            <CharacterPortrait name="commando" image={CommandoPortrait} value="commando" key={filteredCharacters.commando} filtered={filteredCharacters.commando} setFilter={changeCharacterFilter}/>
          </Grid>
          <Grid item xs={0}>
            <CharacterPortrait name="huntress" image={HuntressPortrait} value="huntress" key={filteredCharacters.huntress} filtered={filteredCharacters.huntress} setFilter={changeCharacterFilter}/>
          </Grid>
          <Grid item xs={0}>
            <CharacterPortrait name="mult"  image={MultiPortrait} value="mult" key={filteredCharacters.mult} filtered={filteredCharacters.mult} setFilter={changeCharacterFilter}/>
          </Grid>
          <Grid item xs={0}>
            <CharacterPortrait name="engineer" image={EngineerPortrait} value="engineer" key={filteredCharacters.engineer} filtered={filteredCharacters.engineer} setFilter={changeCharacterFilter}/>
          </Grid>
          <Grid item xs={0}>
            <CharacterPortrait name="artificer" image={ArtificerPortrait} value="artificer" key={filteredCharacters.artificer} filtered={filteredCharacters.artificer} setFilter={changeCharacterFilter}/>
          </Grid>
          <Grid item xs={0}>
            <CharacterPortrait name="mercenary" image={MercenaryPortrait} value="mercenary" key={filteredCharacters.mercenary} filtered={filteredCharacters.mercenary} setFilter={changeCharacterFilter}/>
          </Grid>
          <Grid item xs={0}>
            <CharacterPortrait name="rex" image={RexPortrait} value="rex" key={filteredCharacters.rex} filtered={filteredCharacters.rex} setFilter={changeCharacterFilter}/>
          </Grid>
          <Grid item xs={0}>
            <CharacterPortrait name="loader"  image={LoaderPortrait} value="loader" key={filteredCharacters.loader} filtered={filteredCharacters.loader} setFilter={changeCharacterFilter}/>
          </Grid>
          <Grid item xs={0}>
            <CharacterPortrait name="acrid" image={AcridPortrait} value="acrid" key={filteredCharacters.acrid} filtered={filteredCharacters.acrid} setFilter={changeCharacterFilter}/>
          </Grid>
          <Grid item xs={0}>
            <CharacterPortrait name="captain" image={CaptainPortrait} value="captain" key={filteredCharacters.captain} filtered={filteredCharacters.captain} setFilter={changeCharacterFilter}/>
          </Grid>      
      </Grid>
      <div className="artifactContainer">
        <Grid
          container
          spacing={1}
          alignItems="center"
          justify="center"
          style={{ maxWidth: '800px'}}
          >
            <Grid item xs={0}>
              <ArtifactPortrait image={ChaosPortrait} value="chaos" filtered={filteredArtifacts.chaos} setFilter={changeArtifactFilter}/>
            </Grid>
            <Grid item xs={0}>
              <ArtifactPortrait image={CommandPortrait} value="command" filtered={filteredArtifacts.command} setFilter={changeArtifactFilter}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={DeathPortrait} value="death" filtered={filteredArtifacts.death} setFilter={changeArtifactFilter}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={DissonancePortrait} value="dissonance" filtered={filteredArtifacts.dissonance} setFilter={changeArtifactFilter}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={EnigmaPortrait} value="enigma" filtered={filteredArtifacts.enigma} setFilter={changeArtifactFilter}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={EvolutionPortrait} value="evolution" filtered={filteredArtifacts.evolution} setFilter={changeArtifactFilter}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={FrailtyPortrait} value="frailty" filtered={filteredArtifacts.frailty} setFilter={changeArtifactFilter}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={GlassPortrait} value="glass" filtered={filteredArtifacts.glass} setFilter={changeArtifactFilter}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={HonorPortrait} value="honor" filtered={filteredArtifacts.honor} setFilter={changeArtifactFilter}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={KinPortrait} value="kin" filtered={filteredArtifacts.kin} setFilter={changeArtifactFilter}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={MetamorphosisPortrait} value="metamorphosis" filtered={filteredArtifacts.metamorphosis} setFilter={changeArtifactFilter}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={SacrificePortrait} value="sacrifice" filtered={filteredArtifacts.sacrifice} setFilter={changeArtifactFilter}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={SoulPortrait} value="soul" filtered={filteredArtifacts.soul} setFilter={changeArtifactFilter}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={SpitePortrait} value="spite" filtered={filteredArtifacts.spite} setFilter={changeArtifactFilter}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={SwarmsPortrait} value="swarms" filtered={filteredArtifacts.swarms} setFilter={changeArtifactFilter}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={VengeancePortrait} value="vengeance" filtered={filteredArtifacts.vengeance} setFilter={changeArtifactFilter}/>
            </Grid>
        </Grid>
      </div>
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
