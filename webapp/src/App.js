import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

import CharacterPortrait from './characters/Portrait';
import ArtifactPortrait from './artifacts/Portrait';
import Tooltip from './tooltip/Tooltip';

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

  const [limits, setLimits] = useState({
    artifactLimit: 16,
    characterLimit: 2
  })

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

  const [tooltip, setTooltip] = useState({
    title: null,
    comment: null
  })

  const [tooltipPosition, setTooltipPosition] = useState({
    mouseX: 0,
    mouseY: 0,
  })

  const updateTooltipPosition = (e) => {
    setTooltipPosition({
      mouseX: e.clientX,
      mouseY: e.clientY
    })
  }

  const showTooltip = (title, description) => {
    setTooltip({
      title: title,
      description: description,
      display: true
    })
  }

  const hideTooltip = () => {
    setTooltip({
      title: null,
      description: null,
      display: false
    })   
  }

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

    <div
      onMouseMove={updateTooltipPosition}
    >
        <Tooltip
          title={tooltip.title}
          description={tooltip.description}
          display={tooltip.display}
          mouseX={tooltipPosition.mouseX}
          mouseY={tooltipPosition.mouseY}
        />
        <h3>Characters in Pool:</h3>
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
      <h3>Artifacts in Pool:</h3>
      <div className="artifactContainer">
        <Grid
          container
          spacing={1}
          alignItems="center"
          justify="center"
          style={{ maxWidth: '800px'}}
          >
            <Grid item xs={0}>
              <ArtifactPortrait image={ChaosPortrait} value="chaos" filtered={filteredArtifacts.chaos} setFilter={changeArtifactFilter} title="Artifact of Chaos" description="Friendly fire is enabled for both survivors and monsters alike." mouseIn={showTooltip} mouseOut={hideTooltip}/>
            </Grid>
            <Grid item xs={0}>
              <ArtifactPortrait image={CommandPortrait} value="command" filtered={filteredArtifacts.command} setFilter={changeArtifactFilter} title="Artifact of Command" description="Choose your items." mouseIn={showTooltip} mouseOut={hideTooltip}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={DeathPortrait} value="death" filtered={filteredArtifacts.death} setFilter={changeArtifactFilter} title="Artifact of Death" description="When one player dies, everyone died. Enable only if you want to truly put your teamwork and individual skill to the ultimate test," mouseIn={showTooltip} mouseOut={hideTooltip}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={DissonancePortrait} value="dissonance" filtered={filteredArtifacts.dissonance} setFilter={changeArtifactFilter} title="Artifact of Dissonance" description="Monsters can appear outside of their usual environments." mouseIn={showTooltip} mouseOut={hideTooltip}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={EnigmaPortrait} value="enigma" filtered={filteredArtifacts.enigma} setFilter={changeArtifactFilter} title="Artifact of Enigma" description="Spawn with a random equipment that changes every time it's activated." mouseIn={showTooltip} mouseOut={hideTooltip}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={EvolutionPortrait} value="evolution" filtered={filteredArtifacts.evolution} setFilter={changeArtifactFilter} title="Artifact of Evolution" description="Monsters gain items between stages." mouseIn={showTooltip} mouseOut={hideTooltip}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={FrailtyPortrait} value="frailty" filtered={filteredArtifacts.frailty} setFilter={changeArtifactFilter} title="Artifact of Frailty" description="Fall damage is doubled and lethal." mouseIn={showTooltip} mouseOut={hideTooltip}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={GlassPortrait} value="glass" filtered={filteredArtifacts.glass} setFilter={changeArtifactFilter} title="Artifact of Glass" description="Allies deal 500% damage, but have 10% health." mouseIn={showTooltip} mouseOut={hideTooltip}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={HonorPortrait} value="honor" filtered={filteredArtifacts.honor} setFilter={changeArtifactFilter} title="Artifact of Honor" description="Enemies can only spawn as elites." mouseIn={showTooltip} mouseOut={hideTooltip}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={KinPortrait} value="kin" filtered={filteredArtifacts.kin} setFilter={changeArtifactFilter} title="Artifact of Kin" description="Monsters will be of only one type per stage." mouseIn={showTooltip} mouseOut={hideTooltip}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={MetamorphosisPortrait} value="metamorphosis" filtered={filteredArtifacts.metamorphosis} setFilter={changeArtifactFilter} title="Artifact of Metamorphosis" description="Players always spawn as a random survivor." mouseIn={showTooltip} mouseOut={hideTooltip}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={SacrificePortrait} value="sacrifice" filtered={filteredArtifacts.sacrifice} setFilter={changeArtifactFilter} title="Artifact of Sacrifice" description="Monsters drop items on death, but Chests no longer spawn." mouseIn={showTooltip} mouseOut={hideTooltip}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={SoulPortrait} value="soul" filtered={filteredArtifacts.soul} setFilter={changeArtifactFilter} title="Artifact of Soul" description="Wisps emerge from defeated monsters" mouseIn={showTooltip} mouseOut={hideTooltip}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={SpitePortrait} value="spite" filtered={filteredArtifacts.spite} setFilter={changeArtifactFilter} title="Artifact of Spite" description="Enemies drop multiple exploding bombs on death." mouseIn={showTooltip} mouseOut={hideTooltip}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={SwarmsPortrait} value="swarms" filtered={filteredArtifacts.swarms} setFilter={changeArtifactFilter} title="Artifact of Swarms" description="Monster spawns are doubled, but monster maximum health is halved." mouseIn={showTooltip} mouseOut={hideTooltip}/>
            </Grid>              
            <Grid item xs={0}>
              <ArtifactPortrait image={VengeancePortrait} value="vengeance" filtered={filteredArtifacts.vengeance} setFilter={changeArtifactFilter} title="Artifact of Vengeance" description="Your relentless doppelganger will invade every 10 minutes." mouseIn={showTooltip} mouseOut={hideTooltip}/>
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
