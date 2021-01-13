require('dotenv').config()

// include json files
const artifacts = require('./resources/artifacts.json');
const characters = require('./resources/characters.json');

const express = require('express')
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/roll', (req, res) => {
    // request items will be broken down for each individual artifact, then rng will pick from the character and/or artifact list and return a result.
    /*

    example request: 

    {
        artifacts: [
            "chaos",
            "command"
        ]

        characters: [
            "captain",
            "huntress"
        ]
    }

    */

    
    res.send('posted!')
});

app.listen(port, () => {
  console.log(`There are ${artifacts.length} Artifacts and ${characters.length} characters ready to pick from. Running on port ${port}`)
})
