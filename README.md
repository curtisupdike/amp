# AMP

An Apple Music Player for the web.

## Running Locally

You will need an [Apple Developer account](https://developer.apple.com/account/) to generate a private key in order to configure MusicKit. See [Apple's documentation](https://help.apple.com/developer-account/#/devcdfbb56a3) for instructions on creating a private key.

Set environment variables in `/server/.env`:

```text
TEAM_ID="Your Apple Developer Team ID"
AMP_KID="The Key ID for your private key"
AMP_KEY="Your private key"
```

Install dependencies:

```shell
npm install
```

Start development:

```shell
npm start
```
