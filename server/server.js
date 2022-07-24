const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const port = 3000;

const authKey = process.env.AUTH_KEY;
const teamId = process.env.TEAM_ID;
const keyId = process.env.KEY_ID;

app.get('/api/token', (req, res) => {
    const developerToken = jwt.sign({}, authKey, {
        algorithm: 'ES256', // only supported algorithm by MusicKit
        expiresIn: '30d',
        issuer: teamId,
        header: {
            alg: 'ES256',
            kid: keyId,
        },
    });
    res.send({ developerToken });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
