const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const port = 3000;

const teamId = process.env.TEAM_ID;
const kid = process.env.AMP_KID;
const key = process.env.AMP_KEY;

app.get('/api/token', (req, res) => {
    const developerToken = jwt.sign({}, key, {
        algorithm: 'ES256', // only supported algorithm by MusicKit
        expiresIn: '30d',
        issuer: teamId,
        header: {
            alg: 'ES256',
            kid,
        },
    });
    res.send({ developerToken });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
