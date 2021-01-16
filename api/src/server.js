require('dotenv').config();

// include json files
const express = require('express');
const bodyParser = require('body-parser');

const jsonArtifacts = require('./resources/artifacts.json');
const jsonCharacters = require('./resources/characters.json');

const app = express();

const jsonParser = bodyParser.json();

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/roll', jsonParser, (req, res) => {
  if (req.body.action !== 'roll') {
    res.send(
      {
        status: 'failed',
        code: 422,
      },
    ).status(422);
  } else {
    const {
      artifactLimit, characterLimit, artifacts, characters,
    } = req.body.filters;

    // run a map on the full artifact json and then filter to remove the results we don't need.
    const filteredArtifactsResult = jsonArtifacts.map((artifact) => {
      if (artifacts && !artifacts.includes(artifact.name)) {
        return (artifact);
      }
    }).filter((e) => e);

    const filteredCharactersResult = jsonCharacters.map((character) => {
      if (characters && !characters.includes(character.name.toLowerCase())) {
        return (character);
      }
    }).filter((e) => e);

    let artifactFinalResult;

    if (artifactLimit && artifactLimit <= 16 && artifactLimit > 0) {
      let artifactFinalLimit;
      const breakPoint = 16 - artifacts.length;

      if (artifactLimit > breakPoint) {
        artifactFinalLimit = breakPoint;
      } else {
        artifactFinalLimit = artifactLimit;
      }
      console.log(`length: ${breakPoint}`);
      console.log(`limit: ${artifactLimit}`);
      console.log(artifactFinalLimit);

      const artifactArray = [];

      while (artifactArray.length !== artifactFinalLimit) {
        const choice = Math.floor(Math.random() * Math.floor(filteredArtifactsResult.length));
        if (!artifactArray.includes(filteredArtifactsResult[choice])) {
          // console.log(`Number: ${choice}`);
          // console.log(`pushing ${filteredArtifactsResult[choice].name}`);
          artifactArray.push(filteredArtifactsResult[choice]);
        }
      }
      console.log(artifactArray);
      artifactFinalResult = artifactArray;
    } else {
      artifactFinalResult = filteredArtifactsResult;
    }

    let characterFinalResult;

    if (characterLimit && filteredCharactersResult.length !== 0 && characterLimit <= 4 && characterLimit > 0) {
      const characterArray = [];
      while (characterArray.length !== characterLimit) {
        const choice = Math.floor(Math.random() * Math.floor(filteredCharactersResult.length));

        if (!characterArray.includes(filteredCharactersResult[choice])) {
          console.log(`Number: ${choice}`);
          console.log(`pushing ${filteredCharactersResult[choice].name}`);
          characterArray.push(filteredCharactersResult[choice]);
        }
      }
      characterFinalResult = characterArray;
    } else {
      characterFinalResult = filteredCharactersResult;
    }

    res.send({
      status: 'success',
      results: {
        artifacts: artifactFinalResult,
        characters: characterFinalResult,
      },
    }).status(200);
  }
});

app.listen(port, () => {
  console.log(`There are ${jsonArtifacts.length} Artifacts and ${jsonCharacters.length} characters ready to pick from. Running on port ${port}`);
});
