require('dotenv').config();

// include json files
const express = require('express');
const bodyParser = require('body-parser');

const artifacts = require('./resources/artifacts.json');
const characters = require('./resources/characters.json');

const app = express();

const jsonParser = bodyParser.json();

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/roll', jsonParser, (req, res) => {
  console.log(req.body.action);
  console.log(req.body.filters.artifacts);
  if (req.body.action !== 'roll') {
    res.send(
      {
        status: 'failed',
        code: 422,
      },
    ).status(422);
  } else {
    // run a map on the full artifact json and then filter to remove the results we don't need.
    const filteredArtifactsResult = artifacts.map((artifact) => {
      if (req.body.filters.artifacts && !req.body.filters.artifacts.includes(artifact.name)) {
        return (artifact);
      }
    }).filter((e) => e);

    const filteredCharactersResult = characters.map((character) => {
      if (req.body.filters.characters && !req.body.filters.characters.includes(character.name.toLowerCase())) {
        return (character);
      }
    }).filter((e) => e);

    let artifactFinalResult;

    if (req.body.filters.artifactLimit && req.body.filters.artifactLimit <= 16 && req.body.filters.artifactLimit > 0) {
      const { artifactLimit } = req.body.filters;
      const artifactArray = [];
      while (artifactArray.length !== artifactLimit) {
        const choice = Math.floor(Math.random() * Math.floor(filteredArtifactsResult.length));
        if (!artifactArray.includes(filteredArtifactsResult[choice])) {
          console.log(`Number: ${choice}`);
          console.log(`pushing ${filteredArtifactsResult[choice].name}`);
          artifactArray.push(filteredArtifactsResult[choice]);
        }
      }
      artifactFinalResult = artifactArray;
    } else {
      artifactFinalResult = filteredArtifactsResult;
    }

    let characterFinalResult;

    if (req.body.filters.characterLimit && filteredCharactersResult.length !== 0 && req.body.filters.characterLimit <= 4 && req.body.filters.characterLimit > 0) {
      const { characterLimit } = req.body.filters;
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
  console.log(`There are ${artifacts.length} Artifacts and ${characters.length} characters ready to pick from. Running on port ${port}`);
});
